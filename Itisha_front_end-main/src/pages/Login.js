import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return(
            <div className="mgntpbtm-3" id="register">
                {/* SPECIFIC STYLING */}
                <link href="css/order-sign_up.css" rel="stylesheet"/>

                <aside>
                    <form>
                        <div class="sign-in-wrapper">
                            <a href="#0" class="social_bt facebook">Login with Facebook</a>
                            <a href="#0" class="social_bt google">Login with Google</a>
                            <div class="divider"><span>Or</span></div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" class="form-control" name="phone_number" id="phone_number"/>
                                <i style={{"top":"32px"}} class="icon_phone"></i>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" id="password2"/>
                                <i style={{"top":"32px"}} class="icon_lock_alt"></i>
                            </div>
                            <div class="clearfix add_bottom_15">
                                <div class="checkboxes float-left">
                                    <label class="container_check">Remember me
                                        <input type="checkbox"/>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="float-right"><a id="forgot" href="#0">Forgot Password?</a></div>
                            </div>
                            <div class="text-center">
                                <input type="submit" value="Log In" class="btn_1 full-width mb_5"/>
                                Don’t have an account? <Link to="/register">Sign up</Link>
                            </div>
                            <div id="forgot_pw">
                                <div class="form-group">
                                    <label>Please confirm login email below</label>
                                    <input type="email" class="form-control" name="email_forgot" id="email_forgot"/>
                                    <i class="icon_mail_alt"></i>
                                </div>
                                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                                <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"/></div>
                            </div>
                        </div>
                    </form>
                </aside>

                {/* SPECIFIC SCRIPTS */}
                <script src="js/pw_strenght.js"></script>

            </div>
            
        )
    }
}
export default Login