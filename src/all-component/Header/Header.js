import React from 'react';
import headerImg from '../../images/logo.png'
import './Header.css'
import me from '../../images/only me.jpg'
const Header = () => {
    return (
        <div> 
            <div>
            <a className="me" href=""><img src={me} title="This Is Tanvir Ahemd" alt="" /></a>
        
              <img className="header-img" src={headerImg} title="header logo/image" alt="pic"/>
        
            </div>
            <div className="social">
                <a href="https://www.facebook.com" title='Go To Facebook' target="blank"><i class="fab fa-facebook-square"></i> Facebook</a>
                <a href="https://www.messenger.com" title='Go  To Messenger' target="blank"><i class="fab fa-facebook-messenger"></i> Messenger</a> 
                {/* <a href="https://www.messenger.com" target="blank"><i class="fab fa-google"></i> Google</a> */}
                <a href="https://www.youtube.com" target="blank"><i class="fab fa-youtube-square"></i> Youtube</a><a href="https://www.twitter.com" target="blank"><i class="fab fa-twitter"></i> Twitter</a>
            </div>
            <div className="main-nav">
              <nav className="left-nav">
                  
                 <a className="not-alllow" href="/home"><i class="fas fa-home"></i> Home</a>
                 <a className="not-alllow" href="/sop"><i class="fab fa-shopify"></i> Shop</a>
                 <a className="not-alllow" href="/Order All">All Order</a>
                 <a className="right" target="blank" href="https://www.facebook.com/profile.php?id=100011553548099"><i class="far fa-address-card"></i> About</a>
                 <a className="right2" href="tel:+8801984616146" target="blank"><i class="fas fa-phone-square-alt"></i> Contact Me</a>
              </nav>
              
            </div>
        </div>
    );
};

export default Header;