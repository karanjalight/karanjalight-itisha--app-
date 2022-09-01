import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

import { Helmet } from "react-helmet";

class Home extends React.Component{
    render() {
        return (
            <div>

            <link href="css/home.css" rel="stylesheet"/>
            
            <main>
                <div className="hero_single version_1">
                    <div className="opacity-mask">
                        <div className="container">
                            <div className="row justify-content-lg-start justify-content-md-center">
                                <div className="col-xl-6 col-lg-8">
                                    <h1>Fast Delivery of Drinks and Beverages</h1>
                                    <p>The Best Drinks At The Best Price</p>
                                    <form method="post" action="grid-listing-filterscol.html">
                                        <div className="row no-gutters custom-search-input">
                                            <div className="col-lg-10">
                                                <div className="form-group">
                                                    <input className="form-control no_border_r" type="text" id="autocomplete" placeholder="Coca Cola, Delmonte, Gilbeys..."/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <button className="btn_1 gradient" type="submit">Search</button>
                                            </div>
                                        </div>
                                        {/* <!-- /row --> */}
                                        <div className="search_trends">
                                            <h5>Trending:</h5>
                                            <ul>
                                                <li><a href="#0">Soda</a></li>
                                                <li><a href="#0">Juice</a></li>
                                                <li><a href="#0">Cocktails</a></li>
                                                <li><a href="#0">Vodka</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- row --> */}
                        </div>
                    </div>
                    <div className="wave hero"></div>
                </div>
                {/* <!-- /hero_single --> */}
        
                <div className="container margin_30_60">
                    <div className="main_title center">
                        <span><em></em></span>

                        <h2>Popular Categories</h2>
                        <p>What do you need?</p>
                    </div>
                    {/* <!-- /main_title --> */}
                    
                    <div className="owl-carousel owl-theme categories_carousel">
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>98</span>
                                    <img src="img/juice.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Juice</h3>
                                        <small>Starting from kes.150</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>87</span>
                                    <img src="img/alcohol.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Alcohol</h3>
                                        <small>Starting from kes.600</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>55</span>
                                    <img src="img/soda.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Soda</h3>
                                        <small>Starting from kes.70</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>55</span>
                                    <img src="img/cocktails.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Cocktail</h3>
                                        <small>Starting from kes.150</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>65</span>
                                    <img src="img/fresh_juice.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Fresh Juice</h3>
                                        <small>Starting from kes.150</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="item_version_2">
                            <Link to="/product-listing">
                                <figure>
                                    <span>25</span>
                                    <img src="img/energy.png" alt="" className="owl-lazy"/>
                                    <div className="info">
                                        <h3>Energy Drink</h3>
                                        <small>Starting from kes.170</small>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- /carousel --> */}
                </div>
                {/* <!-- /container --> */}
        
                <div className="bg_gray">
                    <div className="container margin_60_40">
                        <div className="main_title">
                            <span><em></em></span>
                            <h2>Top Rated Drinks</h2>
                            <p>Our Most Ordered Beverages & Alcohol</p>
                            <a href="#0">View All &rarr;</a>
                        </div>
                        <div className="row add_bottom_25">
                            <div className="col-lg-6">
                                <div className="list_home">
                                    <ul>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="list_home">
                                    <ul>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="detail-restaurant.html">
                                                <figure>
                                                    <img src="img/location_list_1.jpg" alt=""/>
                                                </figure>
                                                <div className="score"><strong>9.5</strong></div>
                                                <em>Energy Drink</em>
                                                <h3>Red Bull</h3>
                                                <small>Need an energy boost?</small>
                                                <ul>
                                                    <li><span className="ribbon off">Kes 150</span></li>
                                                    <li>-10% off</li>
                                                </ul>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /row --> */}
                        <div className="banner cstm-bg-img2">
                            <div style={{"background-color":"rgba(0, 0, 0, 0.3)"}} className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                                <div>
                                    <small>Fast & Reliable Delivery</small>
                                    <h3>We Deliver Straight to Your Doorstep</h3>
                                    <p>Enjoy a cold drink in minutes!</p>
                                    <Link to="/product-listing" className="btn_1 gradient">Order Now!</Link>
                                </div>
                            </div>
                            {/*<!-- /wrapper --> */}
                        </div>
                        {/* <!-- /banner --> */}
                    </div>
                </div>
                {/* <!-- /bg_gray --> */}
        
                <div className="shape_element_2">
                    <div className="container margin_60_0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="box_how">
                                            <figure><img src="img/how_1.svg" alt="" width="150" height="167"/></figure>
                                            <h3>Easily Order</h3>
                                            <p>Place an order for beverages or alcohol easily through our app.</p>
                                        </div>
                                        <div className="box_how">
                                            <figure><img src="img/how_2.svg" alt="" width="130" height="145"/></figure>
                                            <h3>Quick Delivery</h3>
                                            <p>We commit to making fast deliveries that are within our 30 mins standard.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 align-self-center">
                                        <div className="box_how">
                                            <figure><img src="img/how_3.svg" alt="" width="150" height="132"/></figure>
                                            <h3>Enjoy Cold Drinks</h3>
                                            <p>Quench your thirst, and enjoy the drink you ordered.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center mt-3 d-block d-lg-none"><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
                            </div>
                            <div className="col-lg-5 offset-lg-1 align-self-center">
                                <div className="intro_txt">
                                    <div className="main_title">
                                        <span><em></em></span>
                                        <h2>Start Ordering Now</h2>
                                    </div>
                                    <p className="lead">Create an account and to using the best drinks delivery app, we give 50% discount on your first delivery cost.</p>
                                    <p>Ready to join the Itisha community?</p>
                                    <p><Link to="/register#" className="btn_1 medium gradient pulse_bt mt-2">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /shape_element_2 --> */}
        
            </main>
            {/* <!-- /main --> */}


            </div>
        )
    }
    componentDidMount() {}
    
}
export default Home