import React, { useState } from "react";
import "../css/page-common.css";

type FieldEl = HTMLInputElement | HTMLTextAreaElement;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Dùng cho onChange (ChangeEvent)
  const handleChange = (
    e: React.ChangeEvent<FieldEl>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value } as typeof prev));
  };

  // Dùng cho onInput (FormEvent) – tránh lỗi TS với onInput
  const handleInput = (
    e: React.FormEvent<FieldEl>
  ) => {
    const el = e.currentTarget;
    setFormData((prev) => ({ ...prev, [el.name]: el.value } as typeof prev));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lấy dữ liệu trực tiếp từ form để chắc chắn bắt được autofill
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      phone: (fd.get("phone") || "").toString().trim(),
      subject: (fd.get("subject") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
    };

    try {
      const API_URL = import.meta.env.VITE_CONTACT_API || "/api/contact";
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Send failed");
      }

      alert("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      e.currentTarget.reset();
    } catch (err) {
      alert("Sorry, we couldn't send your message. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>19n7b KĐT Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>0865903798</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>aidcinnovation@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Office Hours</h4>
                    <p>
                      Mon - Sat: 8 am - 5 pm
                      <br />
                      Sunday: CLOSED
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit} autoComplete="on">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onInput={handleInput}       // dùng FormEvent -> đúng kiểu TS
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onInput={handleInput}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onInput={handleInput}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onInput={handleInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onInput={handleInput}
                    autoComplete="off"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
