import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render() {
        return(
            <div className="mgntpbtm-3" id="register">
                {/* SPECIFIC STYLING */}
                <link href="css/order-sign_up.css" rel="stylesheet"/>

                <aside>
                    <div class="access_social">
                            <a href="#0" class="social_bt facebook">Register with Facebook</a>
                            <a href="#0" class="social_bt google">Register with Google</a>
                        </div>
                    <div class="divider"><span>Or</span></div>
                    <form autocomplete="off">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Name"/>
                            <i class="icon_pencil-edit"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="Email"/>
                            <i class="icon_mail_alt"></i>
                            <span><em>*We'll send you receipts over email</em></span>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="tel" placeholder="Phone Number"/>
                            <i class="icon_phone"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" id="password1" placeholder="Password"/>
                            <i class="icon_lock_alt"></i>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" id="password2" placeholder="Confirm Password"/>
                            <i class="icon_lock_alt"></i>
                        </div>
                        <div id="pass-info" class="clearfix"></div>
                        <a href="#0" class="btn_1 gradient full-width">Register Now!</a>
                        <div class="text-center mt-2"><small>Already have an acccount? <strong><Link to="/login">Sign In</Link></strong></small></div>
                    </form>
                </aside>

                {/* SPECIFIC SCRIPTS */}
                <script src="js/pw_strenght.js"></script>

            </div>
            
        )
    }
}
export default Register