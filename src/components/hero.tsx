"use client"

import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-primary/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6">
          <div className="inline-block bg-primary/30 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-4 border border-primary/50 shadow-lg">
            <span className="text-sm font-semibold tracking-wide">📊 Your Complete Business Compliance Guide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 text-balance leading-tight drop-shadow-lg">
            Master Finance, HR & Compliance
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 text-pretty leading-relaxed font-light drop-shadow-md">
            Comprehensive information on Finance & Accounts, HR Services, ESIC, EPFO, and everything you need to start
            your business journey with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 font-medium w-full sm:w-auto">
                Explore Now <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/learn-more">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition font-medium w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
