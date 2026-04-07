import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change automatically
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/services", label: "Services" },
        { path: "/about", label: "About" },
        { path: "/areas", label: "Areas" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="navbar">
            <div className="logo">WEBLINK ONLINE SOLUTIONS</div>

            <div className={`links ${open ? "active" : ""}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={location.pathname === link.path ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div
                className={`menu ${open ? "open" : ""}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;