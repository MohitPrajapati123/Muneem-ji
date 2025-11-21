"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // const autoReplyId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    // 1️⃣ Send Email to Admin
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log("Admin email sent!");
      })
      .catch((error) => console.error("Admin email failed:", error));

   
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border rounded-lg p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">finance@diamondore.in</p>
            </div>

            <div className="bg-white border rounded-lg p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 96547 96526</p>
            </div>

            <div className="bg-white border rounded-lg p-8 text-center shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                B-127, Sector-63, Noida - 201301 Second floor India
              </p>
            </div>
          </div>

          {/* Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-600"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-600"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-600"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="Finance">Finance & Accounts</option>
                    <option value="HR">HR Inquiry</option>
                    <option value="ESIC">ESIC Query</option>
                    <option value="EPFO">EPFO Query</option>
                    <option value="Startup">Startup Guidance</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-600 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {/* {submitted && (
                  <div className="text-green-700 bg-green-100 border border-green-500 px-4 py-3 rounded-lg text-center">
                    Thank you! Your message has been sent.
                  </div>
                )} */}
              </form>
            </div>

            {/* Info Box */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Muneemjee?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <p className="text-gray-700">
                    Expert guidance for business compliance
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <p className="text-gray-700">
                    Details on Finance, HR, ESIC, EPFO & Startups
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <p className="text-gray-700">We respond within 24 hours</p>
                </li>

                <li className="flex gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <p className="text-gray-700">Free initial consultation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
