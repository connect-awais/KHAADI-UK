import { Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css'
import Navbar from './components/NAVBAR/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Firstpage from './pages/FIRSTPAGE/Firstpage'
import Wishlist from './pages/WISHLIST/Wishlist'
import Cart from './pages/CART/Cart'
import Track from './pages/TRACKING/Track'
import Products from './pages/PRODUCTS/Products';
import Detail from './pages/PRODUCTS-DETAIL/Detail'
import Footer from './components/FOOTER/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {

  const location = useLocation();

  // List of paths where you don't want Navbar/Footer
  const hideLayoutPaths = ["/Track"]; 

  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
    <ToastContainer position="top-center" autoClose={3000} />
    {!hideLayout && <Navbar />}
    <Routes>
      <Route path="/" element={<Firstpage/>}></Route>
      <Route path="/Wishlist" element={<Wishlist/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Track" element={<Track/>}></Route>
      <Route path="/Product" element={<Products/>}></Route>
      <Route path="/Product/:id" element={<Detail/>}></Route>
    </Routes>
    {!hideLayout && <Footer />}
</>
  )
}

export default App
