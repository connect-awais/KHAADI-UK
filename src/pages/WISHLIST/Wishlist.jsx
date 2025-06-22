import React, { useState, useRef } from 'react';
import './Wishlist.css';
import { toast } from 'react-toastify';
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

const Signin = () => {
  const [showSignin, setShowSignin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const forgotEmailRef = useRef(null);

  const handleShowSignup = () => {
    setShowSignin(false);
    setShowSignup(true);
    setShowForgot(false);
  };

  const handleShowSignin = () => {
    setShowSignin(true);
    setShowSignup(false);
    setShowForgot(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const email = forgotEmailRef.current?.value.trim();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent to " + email);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else {
        toast.error("Error: " + error.message);
      }
    }
  };


  return (
    <div className="open">
      <p className="open-txt">If you are not signed in, your wishlist items will get removed at the end of this session</p>
    
    <div>
      {/* Signin Box */}
      {showSignin && (
        <div className="container-signin" id="signin-box">
          <h2>WELCOME</h2>
          <p>Sign in to your account</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const email = document.getElementById("Signinemail").value;
              const password = document.getElementById("Signinpassword").value;

              try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                if (!user.emailVerified) {
                  toast.error("Please verify your email before logging in.");
                  await auth.signOut(); // sign out unverified user
                  return;
                }

                toast.success("Login successful");
                // Optional: redirect or hide modal
              } catch (error) {
                console.error(error);
                if (error.code === "auth/wrong-password") {
                  toast.error("Incorrect password");
                } else if (error.code === "auth/user-not-found") {
                  toast.error("No account found with this email");
                } else if (error.code === "auth/invalid-email") {
                  toast.error("Invalid email address");
                } else {
                  toast.error("Login failed: " + error.message);
                }
              }
            }}
          >
            <div className="input-group">
              <input type="email" id="Signinemail" name="email" placeholder=" " required />
              <label htmlFor="Signinemail">Email <span>*</span></label>
            </div>
            <div className="input-group">
              <input type="password" id="Signinpassword" name="password" placeholder=" " required />
              <label htmlFor="Signinpassword">Password <span>*</span></label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" className="checkbox" /> Remember Me</label>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setShowForgot(true);
              }}>Forgot Password?</a>
            </div>
            <button type="submit">LOGIN</button>
            <div className="divider"><span>OR LOGIN WITH</span></div>
            <div className="social-icons-signin">
              <i className="fab fa-google google-icon-login"></i>
              <i className="fab fa-facebook-f facebook-icon-login"></i>
            </div>
            <div className="signup">
              Don't have an account? <a href="#" onClick={handleShowSignup}>Sign Up</a>
            </div>
          </form>
        </div>
      )}

      {/* Forgot Password Box */}
      {showForgot && (
        <div className={`forgot-dropdown show`} id="forgotdropdown2">
          <span
            className="close-btn"
            onClick={() => {
              setShowForgot(false);
              setTimeout(() => setShowSignin(true), 500);
            }}
          >
            &times;
          </span>
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
                ref={forgotEmailRef}
                placeholder=" "
                autoComplete="on"
                required
              />
              <label htmlFor="emailConfirm3">Email <span>*</span></label>
            </div>
            <button type="button" onClick={handleForgotPassword}>
              SEND
            </button>
          </form>
        </div>
      )}


      {/* Signup Box */}
      {showSignup && (
        <div className="container-signup" id="signup-box">
          <h2>WELCOME</h2>
          <p className="create-acc-txt">Create your account</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const email = document.getElementById("signUpemail").value.trim();
              const confirmEmail = document.getElementById("signupconfirmemail").value.trim();
              const password = document.getElementById("signUppassword").value.trim();
              const confirmPassword = document.getElementById("signupconfirmpassword").value.trim();

              if (email !== confirmEmail) {
                toast.error("Emails do not match");
                return;
              }

              if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
              }

              try {
                await createUserWithEmailAndPassword(auth, email, password);

                const user = auth.currentUser;

                if (user) {
                  await sendEmailVerification(user);
                  toast.success("Verification email sent to " + email);
                } else {
                  toast.error("User not found");
                }
              } catch (error) {
                console.error(error);
                toast.error(error.message);
              }
            }}
          >


            <div className="input-group-signup">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">First Name<span>*</span></label>
            </div>
            <div className="input-group-signup">
              <input type="text" id="signupname" name="name" placeholder=" " required />
              <label htmlFor="signupname">Last Name<span>*</span></label>
            </div>
            <div className="input-group-signup">
              <input type="email" id="signUpemail" name="email" placeholder=" " required />
              <label htmlFor="signUpemail">Email <span>*</span></label>
            </div>
            <div className="input-group-signup">
              <input type="email" id="signupconfirmemail" name="email" placeholder=" " required />
              <label htmlFor="signupconfirmemail">Confirm email <span>*</span></label>
            </div>
            <div className="input-group-signup">
              <input type="password" id="signUppassword" name="password" placeholder=" " required />
              <label htmlFor="signUppassword">Password <span>*</span></label>
            </div>
            <div className="input-group-signup">
              <input type="password" id="signupconfirmpassword" name="password" placeholder=" " required />
              <label htmlFor="signupconfirmpassword">Confirm password <span>*</span></label>
            </div>
            <div className="signup-checkbox">
              <label><input type="checkbox" className="checkbox-signup" />Sign Up for Newsletter</label>
            </div>
            <button type="submit" className="signup-btn">SIGN UP</button>
            <p className="instructions-txt">
              By clicking "Sign Up" you agree to the Khaadi terms and <br />
              conditions. To see how we may use your information,<br />
              take a look at our privacy policy.
            </p>
            <div className="signin">
              Already have an account? <a href="#" onClick={handleShowSignin}>Sign In</a>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default Signin;
