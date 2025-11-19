import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Start Your Business Journey?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
          Get expert guidance on finance, HR compliance, and everything you need to build a successful business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         {/* HERE — Added Link */}
          <Link
            to="/startup"    // 
            className="bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
           {/* LEARN MORE BUTTON → GOES TO THE LEARN MORE PAGE */}
          <Link
            to="/learn-more1"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
