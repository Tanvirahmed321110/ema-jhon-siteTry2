import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <h3>Code OpaSity</h3>
            <h3>CopyRight&copy; 2021 By Tanvir Ahmed </h3>
            <div className="social foo">
                <a href="https://www.facebook.com" title='Go To Facebook' target="blank"><i class="fab fa-facebook-square"></i> Facebook</a>
                <a href="https://www.messenger.com" title='Go  To Messenger' target="blank"><i class="fab fa-facebook-messenger"></i> Messenger</a> 
                {/* <a href="https://www.messenger.com" target="blank"><i class="fab fa-google"></i> Google</a> */}
                <a href="https://www.youtube.com" target="blank"><i class="fab fa-youtube-square"></i> Youtube</a><a href="https://www.twitter.com" target="blank"><i class="fab fa-twitter"></i> Twitter</a>
               </div> 
        </div>
    );
};

export default Footer;