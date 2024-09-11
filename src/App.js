import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import EventPage from './pages/EventPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ContactUsPage from './pages/ContactUsPage';
import {Routes, Route} from "react-router-dom"
// import AdminLogin from './pages/AdminLogin';

import { GlobalStateProvider } from "./GlobalProvider";
import TopStrip from './components/TopStrip';
import ProductDetailedPage from './pages/ProductDetailedPage';
import BottomNavFooter from './components/BottomNavFooter';
import MyProfile from './pages/MyProfile';
import MyCart from './pages/MyCart';
import Notification from './pages/Notification';
function App() {
  return(
    <>
     <GlobalStateProvider>
      
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/all-products" element={<Products/>}/>
        <Route path="/events" element={<EventPage/>}/>
        <Route path="/teams" element={<TeamPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/contact-us" element={<ContactUsPage/>}/>
        <Route path="/product/:id" element={<ProductDetailedPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
      <Footer/>
      <BottomNavFooter/>
      </GlobalStateProvider>
    
      </>
  )
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route />
     </Routes>
     {/* <Home/> */}
     {/* <About/> */}
     {/* <Products/> */}
     {/* <EventPage/> */}
{/* <TeamPage/> */}
{/* <GalleryPage/> */}
<ContactUsPage/>
     <Footer/>
    </div>
  );
}

export default App;
