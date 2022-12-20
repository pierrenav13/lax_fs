import React, { Component } from "react";
import SplashIntro from "./splash_intro";
import SplashBreakdown from "./splash_breakdown";
import SplashFooter from "./splash_footer";
import SplashLowerButtons from "./splash_lower_buttons";

class Splash extends Component {
    render(){
        const { loggedIn, loginDemo, navigate } = this.props;
        return(
            <div className="splash">
                <SplashIntro loggedIn={loggedIn} loginDemo={loginDemo} navigate={navigate} />
                <SplashFooter />
            </div>
        )
    }
}

export default Splash;