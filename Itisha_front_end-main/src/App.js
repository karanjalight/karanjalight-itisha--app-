import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header
import Header from './components/Header';
// Footer
import Footer from './components/Footer';

// Modals
import SignInModal from './components/SignInModal';

import Home from './pages/Home';
import ProductListing from "./pages/ProductListing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Order from "./pages/Order";
import FaqAndHelp from "./pages/Faq";

import ScrollToTop from "./components/ScrollToTop";
import NewsAndEvents from "./pages/NewsAndEvents";
import NewsDetail from "./pages/NewsDetail";

import ProductDetailModal from "./components/ProductDetailModal";


function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>

        <Route exact path='/' element={<Home/>}/>
        <Route path='/product-listing' element={<ProductListing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/order-summary' element={<Order/>}/>
        <Route path='/faq_and_help' element={<FaqAndHelp/>}/>
        <Route path='/news_and_events' element={<NewsAndEvents/>}/>
        <Route path='/news_detail' element={<NewsDetail/>}/>
          
      </Routes>

      <SignInModal/>
      <ProductDetailModal/>

      <Footer/>


    </Router>
  );
}

export default App;
