import "./Entertainment.css";
import { Tv, PlayCircle } from "lucide-react";
import promovideo from "../../assets/promo.mp4";

const plans = [
    {
        title: "OTT Services",
        icon: <PlayCircle />,
        desc: "Access to popular OTT platforms with unlimited streaming experience.",
        features: ["HD Streaming", "Multiple Platforms", "On-Demand Content"]
    },
    {
        title: "IPTV Channels",
        icon: <Tv />,
        desc: "Live TV channels with crystal clear quality and zero buffering.",
        features: ["Live TV", "100+ Channels", "Sports & Movies"]
    }
];

// ✅ Working OTT logos (stable CDN)
const ottLogos = [
    // Netflix (Official red N or Wordmark)
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    
    // Amazon Prime Video
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
    
    // Disney+ Hotstar (Current brand)
   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hotstar_logo.svg/640px-Hotstar_logo.svg.png",
    
    // Zee5
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/640px-Zee5_Logo_2018-2025.svg.png",
    
    // SonyLIV (New 2022 branding)
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/SonyLIV_2020.png/640px-SonyLIV_2020.png",
    
    // JioCinema
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/640px-Disney%2B_Hotstar_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jiocinema.png/640px-Jiocinema.png"
];

function Entertainment() {

    const handleMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const resetTilt = (e) => {
        e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };

    return (
        <section className="entertainment">

            <h2>
                Entertainment <span>Packages</span>
            </h2>

            <p className="subtitle">
                Enjoy unlimited entertainment with OTT & IPTV bundled with your internet plan
            </p>

            {/* 🎬 OTT SLIDER */}
            <div className="ott-slider">
                <div className="ott-track">
                    {[...ottLogos, ...ottLogos].map((logo, i) => (
                        <div className="ott-item" key={i}>
                            <img src={logo} alt="OTT" />
                        </div>
                    ))}
                </div>
            </div>

            {/* 🎥 VIDEO */}
            <div className="iptv-preview">
                <video
                    src={promovideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* 💼 CARDS */}
            <div className="ent-grid">
                {plans.map((item, i) => (
                    <div
                        className="ent-card"
                        key={i}
                        onMouseMove={handleMove}
                        onMouseLeave={resetTilt}
                    >

                        <div className="ent-badge">
                            {i === 1 ? "🔥 Free with 200 Mbps Plan" : "Included"}
                        </div>

                        <div className="ent-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                        <ul>
                            {item.features.map((f, index) => (
                                <li key={index}>✔ {f}</li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/918550934568?text=Hi, I want OTT/IPTV service"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="ent-btn whatsapp">
                                Check Availability
                            </button>
                        </a>

                    </div>
                ))}
            </div>

        </section>
    );
}

export default Entertainment;