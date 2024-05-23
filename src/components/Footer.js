import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
                    <Link to='/about'><h4>About</h4></Link>
                    <Link to='/'> <h4>Location</h4></Link>
                    <Link to='/contact'><h4>FAQs</h4></Link>
                    <Link to='/about'><h4>News</h4></Link>
                    <Link to='/'> <h4>Careers</h4></Link>
                    <Link to='/contact'><h4>Contact Us</h4></Link>
                </div>
                <p className="font-small">developed by anup rijal</p>
            </div>


        </div>
    )
}
export default Footer;