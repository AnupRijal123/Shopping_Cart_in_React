import '../styles/Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GithubImage from '../UI-Images/githubLogo.png';
function Footer() {
    const [userEmail, setUserEmail] = useState('your@email.com');
    return (
        <div className="footer-container d-flex align-center">

            <div className="form-section d-flex align-center g-10">
                <h3>Newsletter</h3>
                <div className="d-flex g-5">
                    <input type="text"
                        value={userEmail}
                        onChange={(e) => {
                            setUserEmail(e.target.value)
                        }}
                    />
                    <button onClick={() => setUserEmail('this is demo')} className="button white-button">Subscribe</button>
                </div>
            </div>

            <div className="contact-div d-flex g-10 align-center">
                <div className="d-flex g-10">
                    <Link to='/'><h4>About</h4></Link>
                    <Link to='/'> <h4>Location</h4></Link>
                    <Link to='/'><h4>FAQs</h4></Link>
                    <Link to='/'><h4>News</h4></Link>
                    <Link to='/'> <h4>Careers</h4></Link>
                    <Link to='/'><h4>Contact Us</h4></Link>
                </div>
                <div className="d-flex g-10 align-center">
                    <p className="font-small">developed by anup rijal</p>
                    <Link to='https://github.com/AnupRijal123/Shopping_Cart_in_React/tree/final-development'>
                        <div className="d-flex align-center g-5">
                            <p className="font-small">Get Code</p>
                            <img src={GithubImage} width="20px" height="20px" />
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}
export default Footer;