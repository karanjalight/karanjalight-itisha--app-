import React from "react";

class ProductDetailModal extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Modal item order --> */}
                <div id="modal-dialog" class="zoom-anim-dialog mfp-hide">
                    <div class="small-dialog-header">
                        <h3>Coca Cola 2 litres</h3>
                    </div>
                    <div class="content">
                        <h5>How Many?</h5>
                        <div class="numbers-row">
                            <input type="text" value="1" id="qty_1" class="qty2 form-control" name="quantity"/>
                        </div>
                        
                        <h5>An Accompaniment?</h5>
                        <ul class="clearfix">
                            <li>
                                <label class="container_check">Red Bull Energy Drink<span>+ Kes 180</span>
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Afia 1 litre mango juice<span>+ Kes 200</span>
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label class="container_check">Afia 1 litre mango juice<span>+ Kes 200</span>
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <br/>
                            <p>Total: Kes 450</p>
                        </ul>
                    </div>
                    <div class="footer">
                        <div class="row small-gutters">
                            <div class="col-md-4">
                                <button type="reset" class="btn_1 outline full-width mb-mobile">Cancel</button>
                            </div>
                            <div class="col-md-8">
                                <button type="reset" class="btn_1 full-width">Add to cart</button>
                            </div>
                        </div>
                        {/* <!-- /Row --> */}
                    </div>
                </div>
                {/* <!-- /Modal item order --> */}
            </div>
        )
    }
}

export default ProductDetailModal;