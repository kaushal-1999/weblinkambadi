import "./Contact.css";
import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📩 FORM SUBMIT (Backend API)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      alert("Message Sent Successfully ✅");
      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      alert("Error sending message ❌");
    }
  };

  // 📞 WhatsApp Auto Message
  const whatsappMsg = `Hi, I am ${form.name}. I want information about your internet services.`;

  return (
    <section className="contact">

      <h2>Contact <span>Us</span></h2>
      <p className="subtitle">
        Let’s connect for high-speed internet 🚀
      </p>

      <div className="contact-container">

        {/* 📩 FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {/* 📞 WhatsApp Button */}
          <a
            href={`https://wa.me/918550934568?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

        </form>

        {/* 📍 DETAILS */}
        <div className="contact-info">

          <h3>Contact Details</h3>

          <p><strong>Owner:</strong> Prashant Adhikari.</p>
          <p><strong>Email:</strong> weblinkambadi@gmail.com</p>
          <p><strong>Mobile:</strong> +91 8550934568</p>

          {/* 🌍 LIVE MAP (Ambadi) */}
          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=ambadi%20maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Ambadi Map"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

      {/* 💬 FLOATING WHATSAPP */}
      <a
        href="https://wa.me/918550934568?text=Hi, I want to know more about your internet services"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>

    </section>
  );
}

export default Contact;