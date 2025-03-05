import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import EventPage from "./pages/EventPage";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import { Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from "./GlobalProvider";
import ProductDetailedPage from "./pages/ProductDetailedPage";
import BottomNavFooter from "./components/BottomNavFooter";
import MyProfile from "./pages/MyProfile";
import MyCart from "./pages/MyCart";
import Notification from "./pages/Notification";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCheckOutPage from "./pages/ProductCheckOutPage";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsNCondition from "./pages/TermsNCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MyOrder from "./pages/MyOrder";
function App() {
 
  return (
    <>
      <GlobalStateProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/all-products" element={<Products />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product/:id" element={<ProductDetailedPage />} />
          <Route path="/product-checkout/:id" element={<ProductCheckOutPage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-carts" element={<MyCart />} />
          <Route path="/my-orders" element={<MyOrder />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/otp" element={<Otp />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-condition" element={<TermsNCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <BottomNavFooter />
      </GlobalStateProvider>
      <ToastContainer/>
    </>
  );
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route />
      </Routes>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Products/> */}
      {/* <EventPage/> */}
      {/* <TeamPage/> */}
      {/* <GalleryPage/> */}
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default App;
