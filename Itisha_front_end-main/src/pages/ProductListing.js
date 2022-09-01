import React from "react";

import { Helmet } from "react-helmet";

class ProductListing extends React.Component {
    render() {
        return(
            <div className="mgntp-3">

                <link href="css/listing.css" rel="stylesheet"/>
                <link href="css/detail-page.css" rel="stylesheet"/>

                <main>
                    <div class="page_header element_to_stick">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
                                    <h1>145 restaurants in Convent Street 2983</h1>
                                    <a href="#0">Change address</a>
                                </div>
                                <div class="col-xl-4 col-lg-5 col-md-5">
                                    <div class="search_bar_list">
                                        <input type="text" class="form-control" placeholder="Coca Cola, Delmonte, Monster Energy..."/>
                                        <button type="submit"><i class="icon_search"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /row --> */}	       
                        </div>
                    </div>
                    {/* <!-- /page_header --> */}
            
                    <div class="container margin_30_20">			
                        <div class="row">
                            <aside class="col-lg-3" id="sidebar_fixed">
                                <div class="type_delivery">
                                    <ul class="clearfix">
                                        <li>
                                            <label class="container_radio">Delivery
                                                <input type="radio" name="type_d" checked="checked"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- /type_delivery --> */}
                            
                                <a href="#0" class="open_filters btn_filters"><i class="icon_adjust-vert"></i><span>Filters</span></a>
                            
                                <div class="filter_col">
                                    <div class="inner_bt clearfix">Filters<a href="#" class="open_filters"><i class="icon_close"></i></a></div>
                                    <div class="filter_type">
                                        <h4><a href="#filter_1" data-toggle="collapse" class="opened">Sort</a></h4>
                                        <div class="collapse show" id="filter_1">
                                            <ul>
                                                <li>
                                                    <label class="container_radio">Top Rated
                                                        <input type="radio" name="filter_sort"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_radio">Recommended
                                                        <input type="radio" name="filter_sort"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_radio">Price: low to high
                                                        <input type="radio" name="filter_sort"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_radio">Up to 15% off
                                                        <input type="radio" name="filter_sort"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_radio">All Offers
                                                        <input type="radio" name="filter_sort"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- /filter_type --> */}
                                    <div class="filter_type">
                                        <h4><a href="#filter_2" data-toggle="collapse" class="closed">Categories</a></h4>
                                        <div class="collapse" id="filter_2">
                                            <ul>
                                                <li>
                                                    <label class="container_check">Juice <small>12</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_check">Alcohol <small>24</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_check">Soda <small>23</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_check">Cocktail <small>11</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_check">Fresh Juice <small>18</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="container_check">Energy Drink <small>12</small>
                                                        <input type="checkbox"/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- /filter_type --> */}
                                    <p><a href="#0" class="btn_1 outline full-width">Apply Filters</a></p>
                                </div>
                            </aside>
            
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="title_small">Top Categories</h2>
                                        <div class="owl-carousel owl-theme categories_carousel_in listing">
                                            <div class="item">
                                                <figure>
                                                    <a><img src="/img/juice.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Juice</h3></a>
                                                </figure>
                                            </div>
                                            <div class="item">
                                                <figure>
                                                    <a><img src="img/alcohol.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Alcohol</h3></a>
                                                </figure>
                                            </div>
                                            <div class="item">
                                                <figure>
                                                    <a><img src="img/soda.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Soda</h3></a>
                                                </figure>
                                            </div>
                                            <div class="item">
                                                <figure>
                                                    <a><img src="img/cocktails.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Cocktail</h3></a>
                                                </figure>
                                            </div>
                                            <div class="item">
                                                <figure>
                                                    <a><img src="img/fresh_juice.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Fresh Juice</h3></a>
                                                </figure>
                                            </div>
                                            <div class="item">
                                                <figure>
                                                    <a><img src="img/energy.png" alt="" class="owl-lazy"/></a>
                                                    <a href="#0"><h3>Energy Drink</h3></a>
                                                </figure>
                                            </div>	
                                        </div>
                                        {/* <!-- /carousel --> */}
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
            
                                <div class="promo">
                                    <h3>We offer 20% off on your first Order!</h3>
                                    <p>We have a wide variety of drinks available. Checkout our categories below.</p>
                                    <i class="icon-food_icon_delivery"></i>
                                </div>
                                {/* <!-- /promo --> */}
                                
                                <div>
                                    <div class="container margin_detail">
                                        <div class="row">
                                            <div class="col-lg-12 list_menu">
                                                <section id="section-1">
                                                    <h4>Juices</h4>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Delmonte</h3>
                                                                <p>Enjoy a fresh 1 litre packet.</p>
                                                                <strong>Kes 240</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Delmonte</h3>
                                                                <p>Enjoy a fresh 1 litre packet.</p>
                                                                <strong>Kes 240</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Delmonte</h3>
                                                                <p>Enjoy a fresh 1 litre packet.</p>
                                                                <strong>Kes 240</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Delmonte</h3>
                                                                <p>Enjoy a fresh 1 litre packet.</p>
                                                                <strong>Kes 240</strong>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /row --> */}
                                                </section>
                                                {/* <!-- /section --> */}
                                                <section id="section-2">
                                                    <h4>Alcohol</h4>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Konyagi Vodka 750ml</h3>
                                                                <p>Get a Konyangi <i>Mzinga</i> at a good price.</p>
                                                                <strong>Kes 700</strong>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /row --> */}
                                                </section>
                                                {/* <!-- /section --> */}
                                                <section id="section-3">
                                                    <h4>Soda</h4>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Coca Cola 2 litres</h3>
                                                                <p>Get a cold bottle of cocacola.</p>
                                                                <strong>Kes 180</strong>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /row --> */}
                                                </section>
                                                {/* <!-- /section --> */}
                                                <section id="section-4">
                                                    <h4>Cocktail</h4>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <a class="menu_item modal_dialog" href="#modal-dialog">
                                                                <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-5.jpg" alt="thumb" class="lazy"/></figure>
                                                                <h3>Mojito</h3>
                                                                <p>Get a cup full of freshly made mojitos</p>
                                                                <strong>Kes 250</strong>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /row --> */}
                                                </section>
                                                {/* <!-- /section --> */}
                                            </div>
                                            {/* <!-- /col --> */}
                                        </div>
                                        {/* <!-- /row --> */}
                                    </div>
                                    {/* <!-- /container --> */}
                                </div>
                                {/* <!-- /row --> */}
                                <div class="pagination_fg">
                                <a href="#">&laquo;</a>
                                <a href="#" class="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">&raquo;</a>
                                </div>
                            </div>
                            {/* <!-- /col --> */}
                        </div>		
                    </div>
                    {/* <!-- /container --> */}
                    
                </main>
                {/* <!-- /main --> */}

                <Helmet>
                    <script src="js/common_scripts.min.js"></script>
                    <script src="js/common_func.js"></script>
                    <script src="js/sticky_sidebar.min.js"></script>
                    <script src="js/specific_listing.js"></script>

                    <script src="js/sticky-kit.min.js"></script>
                    <script src="js/specific_detail.js"></script>
                </Helmet>
            </div>
        )
    }
}
export default ProductListing