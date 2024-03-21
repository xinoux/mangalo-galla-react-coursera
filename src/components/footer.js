import './index-style.css'
export default function Footer() {

return(

    <footer>
        <section className="footer-container">
          
          <div className="footer-content"> 
            <img src="img/logowhite.png" id="logo-footer"></img>
          
          <ul className="footer-list">
            <li><a href="index.html" >Contact us</a></li>
            <li><a href="about.html">Size Guide</a></li>
            <li><a href="services.html" >Terms</a></li>
            <li><a href="contact.html">Privacy</a></li>
          </ul>

            <div className="social-media">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="img/facebook-circle-fill.png" className="social-media-icons"/></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="img/instagram-fill.png" className="social-media-icons"/></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="img/twitter-x-fill.png" className="social-media-icons"/></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img src="img/tiktok-fill.png" className="social-media-icons"/></a>
            </div>
          
          </div>
        </section>
        <section className="copyright">
        <label>
          &copy; 2024 Mangata and Gallo. All rights reserved.
        </label>
        </section>
      </footer>

)

}