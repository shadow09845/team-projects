import './Footer.css'

function Footer() {
    return(
        <>
        <footer className="footer-container">
      <div className="footer-content">
        
     
        <div className="footer-section logo-contact">
          <div className="footer-logo">
            
            <span className="logo-icon"></span> 
            <span className="logo-text">Coffee</span>
          </div>
          <p className="tagline">
            Creating a catchy tagline coffee shop business growth.
          </p>
          <div className="contact-info">
            <span className="phone-icon"></span> 
            <span className="phone-number">+8801742-527137</span>
          </div>
        </div>

       
        <div className="footer-section categories">
          <h3 className="section-title">CATEGORIES</h3>
          <ul className="section-list">
            <li><a href="#">Ashley Szekeres Art</a></li>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Gift Certificates</a></li>
          </ul>
        </div>

     
        <div className="footer-section information">
          <h3 className="section-title">INFORMATION</h3>
          <ul className="section-list">
            <li><a href="#">Coffee Beans</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

      
        <div className="footer-section follow-us">
          <h3 className="section-title">FOLLOW US</h3>
          <div className="social-links">
            <a href="#" className="social-icon"></a> {/* Twitter ikonka o'rni */}
            <a href="#" className="social-icon"></a> {/* Facebook ikonka o'rni */}
            <a href="#" className="social-icon"></a> {/* Instagram ikonka o'rni */}
            <a href="#" className="social-icon"></a> {/* LinkedIn ikonka o'rni */}
            
       
          </div>
        </div>

      </div>

      <hr className="footer-divider" />
      
      
      <div className="footer-bottom">
        <p className="copyright">
          Copyright © 2021 Coffee. All rights reserved. Present by MoxCreative.
        </p>
      </div>
    </footer>
        
        </>

    )
}
export default Footer