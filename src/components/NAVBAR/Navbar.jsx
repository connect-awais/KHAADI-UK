import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css"; // Adjust the path as necessary
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import SALE1 from "../../assets/SALE-IMG/SALE-1.jpg"; // Adjust the path as necessary
import SALE2 from "../../assets/SALE-IMG/SALE-2.jpg"; // Adjust the path as necessary
import SALE3 from "../../assets/SALE-IMG/SALE-3.jpg"; // Adjust the path as necessary
import NEWIN from "../../assets/NEW-IN IMG/NEW-IN.jpg"; // Adjust the path as necessar
import FABRICS from "../../assets/FABRICS IMG/FABRICS.jpg"
import READYTOWEAR from "../../assets/READY TO WEAR IMG/READY TO WEAR.jpg"; // Adjust the path as necessary
import HOME from "../../assets/HOME IMG/HOME.jpg"
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = () => {
  const dropdownRef = useRef(null);
  const iconRef = useRef(null);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const loginRef = useRef(null);
  const forgotRef = useRef(null);
  const signupRef = useRef(null);
  const overlayRef = useRef(null);
  const peopleIconRef = useRef(null);

  // Toggle overlay visibility based on dropdowns
  useEffect(() => {
    const anyOpen = showLogin || showForgot || showSignup;
    setOverlayVisible(anyOpen);
  }, [showLogin, showForgot, showSignup]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !loginRef.current?.contains(e.target) &&
        !forgotRef.current?.contains(e.target) &&
        !signupRef.current?.contains(e.target) &&
        !peopleIconRef.current?.contains(e.target)
      ) {
        setShowLogin(false);
        setShowForgot(false);
        setShowSignup(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  //   for firebase
  // 🔐 Sign Up
  const handleSignup = async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupemail").value;
    const confirmEmail = document.getElementById("confirmemail").value;
    const password = document.getElementById("signuppassword").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    if (email !== confirmEmail) {
      toast.error("Emails do not match");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Send email verification
      await sendEmailVerification(user);
      toast.success("Account created! Please check your email to verify before login.");

      // ✅ Optionally log out right away to block login before verification
      // await auth.signOut();
    } catch (error) {
      toast.error("Signup failed: " + error.message);
    }
  };

  // 🔐 Log In
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Check if email is verified
      if (!user.emailVerified) {
        toast.error("Email not verified. Please check your inbox.");
        return;
      }

      // ✅ Login success
      toast.success("Login successful");

      // ❌ DO NOT add email to URL (this was your issue!)
      // ❌ No: window.location.href = `/?email=${user.email}`;
      // ✅ Just keep user info in state or context if needed

    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  // 🔐 Forgot Password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailConfirm3").value;

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent to " + email);
    } catch (error) {
      // Explicitly check Firebase error code

      console.log("Firebase error:", error);

      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email address");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address format");
      } else {
        toast.error("Something went wrong: " + error.message);
      }
    }
  };


  return (
    <div>
      <div className="mini-navbar">
        <p className="mini-text">
          Refresh your wardrobe with the season's latest drops&nbsp;
          <div className="mini-link">
            <Link to="/Product"><u>right here.</u></Link>
          </div>
        </p>
        <span
  className="track-link"
  onClick={() => window.open(window.location.origin + "/Track", "_blank")}
  style={{ cursor: "pointer" }}
>
  TRACK
</span>

      </div>

      <div className="navbar">
        <div className="navbar-components">
          <div className="logo">
            <Link to="/"><img src={logo} /></Link>
          </div>
          <div className="navbar-items">
            <li className="nav-item">
              <Link to="/Product">SALE</Link>
              <div className="hover-box-sale">
                <div className="img-row">
                  <div className="img-wrapper-sale">
                    <img src={SALE1} />
                    <h4>FABRICS</h4>
                  </div>
                  <div className="img-wrapper-sale">
                    <img src={SALE2} />
                    <h4>READY TO WEAR</h4>
                  </div>
                  <div className="img-wrapper-sale">
                    <img src={SALE3} />
                    <h4>HOME</h4>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/Product">NEW IN</Link>
              <div className="hover-box-new">
                <div className="img-row">
                  <div className="img-wrapper-new">
                    <img src={NEWIN} />
                    <h4>READY TO WEAR</h4>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="https://www.instagram.com/khaadi/?hl=en">
                <b>#INSTA KHAADI</b>
              </a>
            </li>

            <li className="nav-item">
              <Link to="/Product">FABRICS</Link>
              <div className="hover-box-fabric">
                <div className="img-row">
                  <div className="img-wrapper-fabric">
                    <img src={FABRICS} />
                  </div>
                  <div className="txt-wrapper-fabric">
                    <div className="first-txt-fabric">
                      <a href="#">
                        <h3>Essentials</h3>
                      </a>
                      <br />
                      <a href="#">
                        <p>2 Piece</p>
                      </a>
                      <br />
                      <a href="#">
                        <p>3 Piece</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/Product">READY TO WEAR</Link>
              <div className="hover-box-ready">
                <div className="img-row">
                  <div className="img-wrapper-ready">
                    <img src={READYTOWEAR} />
                  </div>
                  <div className="txt-wrapper-ready">
                    <div className="first-txt-ready">
                      <a href="#"><h3>Essentials</h3></a>
                      <br />
                      <a href="#"><p>Co-ord Set</p></a>
                      <br />
                      <a href="#"><p>Tailored 3 Piece</p></a>
                      <br />
                      <a href="#"><p>Kurta</p></a>
                      <br />
                      <a href="#"><p>Pants</p></a>
                      <br />
                      <a href="#"><p>Shalwar</p></a>
                      <br />
                      <a href="#"><p>Dupatta</p></a>
                      <br />
                      <a href="#"><p>Stole</p></a>
                      <br />
                      <a href="#"><p>Shawl</p></a>
                    </div>
                    <div className="second-txt-ready">
                      <a href="#"><h3>Signature</h3></a>
                      <br />
                      <a href="#"><p>Tailored 3 Piece</p></a>
                      <br />
                      <a href="#"><p>Pants</p></a>
                      <br />
                      <a href="#"><p>Shalwar</p></a>
                      <br />
                      <a href="#"><p>Dupatta</p></a>
                      <br />
                      <a href="#"><p>Jacket</p></a>
                    </div>
                    <div className="third-txt-ready">
                      <a href="#"><h3>Casuals</h3></a>
                      <br />
                      <a href="#"><p>Shirt</p></a>
                      <br />
                      <a href="#"><p>Blouse</p></a>
                      <br />
                      <a href="#"><p>Tunic</p></a>
                      <br />
                      <a href="#"><p>Sweater</p></a>
                      <br />
                      <a href="#"><p>Maxi Dress</p></a>
                      <br />
                      <a href="#"><p>Sweatshirt</p></a>
                      <br />
                      <a href="#"><p>Hoodie</p></a>
                      <br />
                      <a href="#"><p>Jacket</p></a>
                      <br />
                      <a href="#"><p>Trousers</p></a>
                      <br />
                      <a href="#"><p>Jeans</p></a>
                      <br />
                      <a href="#"><p>Cape</p></a>
                      <br />
                      <a href="#"><p>Tights</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/Product">HOME</Link>
              <div className="hover-box-home">
                <div className="img-row">
                  <div className="img-wrapper-home">
                    <img src={HOME} />
                  </div>
                  <div className="txt-wrapper-home">
                    <div className="first-txt-home">
                      <a href="#"><h4>COASTER</h4></a>
                    </div>
                    <div className="second-txt-home">
                      <a href="#"><h4>CUSHION COVER</h4></a>
                    </div>
                    <div className="third-txt-home">
                      <a href="#"><h4>TABLE RUNNER</h4></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>

          <div className="navbar-icons">
            <i
              className="bi bi-search"
              ref={iconRef}
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            ></i>
            <Link to="/Wishlist" style={{ color: 'black' }}><i class="bi bi-heart"></i></Link>
            <i class="bi bi-person"
              ref={peopleIconRef} onClick={() => setShowLogin(!showLogin)} id="people-icon"></i>
            <Link to="/Cart" style={{ color: 'black' }}><i class="bi bi-bag"></i></Link>
          </div>
        </div>
      </div>

      {isDropdownVisible && (
        <div className="search-dropdown" id="search-dropdown" ref={dropdownRef}>
          <h2 className="text-search">SEARCH</h2>
          <i className="bi bi-search search-icon-dropdown"></i>

          <div className="input-group-search">
            <input type="text" name="text" placeholder="" required />
            <label htmlFor="search">
              Search <span>*</span>
            </label>
            <i className="bi bi-search" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
      )}

      <div>
        {/* Overlay */}
        <div
          id="overlay"
          ref={overlayRef}
          className={overlayVisible ? "show" : ""}
          onClick={() => {
            setShowLogin(false);
            setShowForgot(false);
            setShowSignup(false);
          }}
        ></div>

        {/* Login Dropdown */}
        <div id="logindropdown1" className={`dropdown-content ${showLogin ? "show" : ""}`}
          ref={loginRef}>
          <h2>WELCOME</h2>
          <p>Sign in to your account</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                id="signup-email"
                name="email"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="email">
                Email <span>*</span>
              </label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="signup-password"
                name="password"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="password">
                Password <span>*</span>
              </label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" className="checkbox" /> Remember Me{" "}
                <span>*</span>
              </label>
              <div className="forgot-password">
                <a href="#" id="forgotLink" onClick={(e) => {
                  e.preventDefault();
                  setShowForgot(true);
                  setShowLogin(false);
                }}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <button type="submit">LOGIN</button>
            <div className="divider">
              <span>OR LOGIN WITH</span>
            </div>
            <div className="social-icons-signin">
              <FaGoogle className="google-icon-login" />
              <FaFacebookF className="facebook-icon-login" />
            </div>
            <div className="signup">
              Don't have account?{" "} <a href="#" id="SignupLink" onClick={(e) => {
                e.preventDefault();
                setShowSignup(true);
                setShowLogin(false);
              }}>Sign Up</a>
            </div>
          </form>
        </div>

        {/* Forgot Password Dropdown */}
        <div className={`forgot-dropdown ${showForgot ? "show" : ""}`}
          id="forgotdropdown2"
          ref={forgotRef}>

          <span
            className="close-btn"
            id="close2"
            onClick={() => {
              setShowForgot(false);
              setTimeout(() => setShowLogin(true), 500);
            }}
          >&times;</span>
          <h2>Forgot your Password?</h2>
          <p>
            Provide your account email address to receive an email to reset your
            password.
          </p>
          <form>
            <div className="input-group-forgot">
              <input
                type="email"
                id="emailConfirm3"
                name="email"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="email">
                Email <span>*</span>
              </label>
            </div>
            <button type="button" onClick={handleForgotPassword}>
              SEND
            </button>
          </form>
        </div>

        {/* Signup Dropdown */}
        <div
          className={`container-signup-dropdown ${showSignup ? "show" : ""}`}
          id="SignupBoxLink"
          ref={signupRef}
        >

          <span
            className="close-btn-Signup"
            id="closeSignup"
            onClick={() => {
              setShowSignup(false);
              setTimeout(() => setShowLogin(true), 500);
            }}
          >
            &times;
          </span>
          <h2>WELCOME</h2>
          <h4>Create your account</h4>
          <form onSubmit={handleSignup}>
            <div className="input-group-signup-dropdown">
              <input
                type="text"
                id="Firstname"
                name="name"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="name">
                First Name<span>*</span>
              </label>
            </div>
            <div className="input-group-signup-dropdown">
              <input
                type="text"
                id="Lastname"
                name="name"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="name">
                Last Name<span>*</span>
              </label>
            </div>
            <div className="input-group-signup-dropdown">
              <input
                type="email"
                id="signupemail"
                name="email"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="email">
                Email <span>*</span>
              </label>
            </div>
            <div className="input-group-signup-dropdown">
              <input
                type="email"
                id="confirmemail"
                name="email"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="email">
                Confirm email <span>*</span>
              </label>
            </div>
            <div className="input-group-signup-dropdown">
              <input
                type="password"
                id="signuppassword"
                name="password"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="password">
                Password <span>*</span>
              </label>
            </div>
            <div className="input-group-signup-dropdown">
              <input
                type="password"
                id="confirmpassword"
                name="password"
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="password">
                Confirm password <span>*</span>
              </label>
            </div>
            <div className="signup-checkbox-dropdown">
              <label>
                <input type="checkbox" className="checkbox-signup" />
                Sign Up for Newsletter
              </label>
            </div>
            <button type="submit" className="signup-btn-dropdown">
              SIGN UP
            </button>
            <p>
              By clicking "Sign Up" you agree to the Khaadi terms and <br /> conditions.
              To see how we may use your information, <br /> take a look at our privacy
              policy.
            </p>
          </form>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>

    </div>
  );
};

export default Navbar;
