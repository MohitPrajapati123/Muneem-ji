"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-foreground/70">We're here to help. Reach out to us anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Card 1 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">finance@diamondore.in</p>
              <p className="text-foreground/70 text-sm mt-1">We'll respond within 24 hours</p>
            </div>

            {/* Contact Info Card 2 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">+919654796526</p>
              {/* <p className="text-foreground/70 text-sm mt-1">Monday - Friday, 9AM - 6PM</p> */}
            </div>

            {/* Contact Info Card 3 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">B-127, Sector-63,Noida-201301 Second floor</p>
              <p className="text-foreground/70 text-sm mt-1">India</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="Finance">Finance & Accounts Query</option>
                    <option value="HR">HR Services Inquiry</option>
                    <option value="ESIC">ESIC Information</option>
                    <option value="EPFO">EPFO Information</option>
                    <option value="Startup">Startup Guidance</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition" />
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-green-500/20 border border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Info Box */}
            <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Muneemjee?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Expert Guidance</h4>
                    <p className="text-foreground/70 text-sm">
                      Get professional advice on all business compliance matters
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Comprehensive Information</h4>
                    <p className="text-foreground/70 text-sm">
                      Complete details on Finance, HR, ESIC, EPFO and Startups
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Quick Response</h4>
                    <p className="text-foreground/70 text-sm">We respond to all inquiries within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Free Consultation</h4>
                    <p className="text-foreground/70 text-sm">
                      Initial consultation is completely free with no obligations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
