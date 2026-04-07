import "./Footer.css";
import { Phone, Mail, MapPin, User, Wifi } from "lucide-react";

function Footer() {
    return (
        <footer className="footer4">

            {/* 🌐 MAIN CONTAINER */}
            <div className="footer4-container">

                {/* LEFT BRAND */}
                <div className="footer4-brand">
                    <h2><Wifi size={20} /> WEBLINK ONLINE SOLUTIONS</h2>
                    <p>
                        Reliable Fiber Internet | IPTV | OTT Services.
                        Delivering high-speed connectivity with premium entertainment.
                    </p>

                    <div className="owner-box">
                        <p><User size={16} /> Owner: Prashant Adhikari</p>
                        <p><Phone size={16} /> +91 8550934568</p>
                    </div>
                </div>

                {/* RIGHT LINKS */}
                <div className="footer4-links">

                    <div>
                        <h4>Internet</h4>
                        <ul>
                            <li>Plans & Pricing</li>
                            <li>Speed Test</li>
                            <li>Coverage Area</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Entertainment</h4>
                        <ul>
                            <li>OTT Packages</li>
                            <li>IPTV Channels</li>
                            <li>Combo Offers</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Raise Complaint</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* 📍 CONTACT STRIP */}
            <div className="footer4-contact">
                <p><Mail size={15} /> weblinkambadi@gmail.com</p>
                <p><MapPin size={15} /> Ambadi, Maharashtra</p>
            </div>

            {/* 🔻 BOTTOM */}
            <div className="footer4-bottom">
                <p>© 2026 SearchNet Ambadi. All rights reserved.</p>
                <p>
                    Design by{" "}
                    <a
                        href="https://kaushalportfolio.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <span>Kaushal Patil</span>
                    </a>
                </p>
            </div>

            {/* 💬 WHATSAPP FLOAT */}
            <a
                href="https://wa.me/918550934568"
                className="whatsapp-float"
                target="_blank"
                rel="noreferrer"
            >
                💬
            </a>

        </footer>
    );
}

export default Footer;