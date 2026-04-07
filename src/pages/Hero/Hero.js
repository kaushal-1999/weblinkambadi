import "./Hero.css";
import heroImg from "../../assets/hero.png";
function Hero() {
    return (
        <section className="hero">

            <div className="hero-container">

                <div className="hero-text">
                    <h1>
                        Next-Generation <span>Fiber Internet</span>
                    </h1>

                    <p className="tagline">
                        Built for speed. Designed for reliability. Trusted by modern homes & businesses.
                    </p>

                    <p className="subtext">
                        Enjoy ultra-fast streaming, lag-free gaming, and uninterrupted work 
                        with high-performance broadband that keeps you always connected.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Get Started</button>
                        <button className="btn-outline">Contact Us</button>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <h3>99.9%</h3>
                            <p>Uptime</p>
                        </div>
                        <div>
                            <h3>200+</h3>
                            <p>Mbps Speed</p>
                        </div>
                        <div>
                            <h3>24/7</h3>
                            <p>Support</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img 
                        src={heroImg}
                        alt="fiber internet"
                    />
                </div>

            </div>

        </section>
    );
}

export default Hero;