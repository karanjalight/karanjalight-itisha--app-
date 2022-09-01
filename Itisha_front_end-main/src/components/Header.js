import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="header black_nav clearfix element_to_stick">
                    <div className="container">
                        <div id="logo">
                            <Link to="/">
                                <img src="img/itisha_logo_long.png" width="150" alt=""/>
                            </Link>
                        </div>
                        <div className="layer"></div>
                        {/* <!-- Opacity Mask Menu Mobile --> */}
                        <ul id="top_menu">
                            <li><a href="#sign-in-dialog" id="sign-in" className="login">Sign In</a></li>
                            <li>
                                <div className="dropdown dropdown-cart">
                                    <Link to="#0" className="cart_bt"><strong>2</strong></Link>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="" width="50" height="50" className="lazy"/></figure>
                                                <strong><span>1x Pizza Napoli</span>$12.00</strong>
                                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                            </li>
                                            <li>
                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-2.jpg" alt="" width="50" height="50" className="lazy"/></figure>
                                                <strong><span>1x Hamburgher Maxi</span>$10.00</strong>
                                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                            </li>
                                            <li>
                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-3.jpg" alt="" width="50" height="50" className="lazy"/></figure>
                                                <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                                                <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                            </li>
                                        </ul>
                                        <div className="total_drop">
                                            <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                                            <Link to="/order-summary" className="btn_1 outline">View Cart</Link><Link to="order-summary" className="btn_1">Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /dropdown-cart--> */}
                            </li>
                        </ul>
                        {/* <!-- /top_menu --> */}
                        <a href="#0" className="open_close">
                            <i className="icon_menu"></i><span>Menu</span>
                        </a>
                        <nav className="main-menu">
                            <div id="header_menu">
                                <a href="#0" className="open_close">
                                    <i className="icon_close"></i><span>Menu</span>
                                </a>
                                <a href="index.html"><img src="img/itisha_logo_long.png" width="162" alt=""/></a>
                            </div>
                            <ul>
                                <li className="submenu">
                                    <Link to="/" className="show-submenu">Home</Link>
                                </li>
                                <li className="submenu">
                                    <Link to="/product-listing" className="show-submenu">Our Products</Link>
                                </li>
                                <li className="submenu">
                                    <Link to="/product-listing" className="show-submenu">About Us</Link>
                                </li>
                                <li className="submenu">
                                    <Link to="/faq_and_help" className="show-submenu">Help & FAQs</Link>
                                </li>

                                <li className="submenu">
                                    <Link to="/news_and_events" className="show-submenu">News & Events</Link>
                                </li>

                                <li className="submenu">
                                    <Link to="/contact-us" className="show-submenu">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <!-- /header --> */}

                <Helmet>
                    <script src="js/common_func.js" type="text/javascript"></script>
                </Helmet>
            
            </div>
        )
    }
}
export default Header;
