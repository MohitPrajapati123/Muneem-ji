"use client";

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import about from "../assets/about-us-hero-business-team.jpg";
import business from "../assets/business-mission-growth-strategy.jpg";
import professional from "../assets/professional-team-support.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-0 md:h-[900px] w-full overflow-hidden">
        <img
          src={about}
          alt="About Muneem Ji"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Muneem Ji</h1>
            <p className="text-xl md:text-2xl">
              Your Trusted Business Compliance Partner
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>

            <p className="text-lg text-gray-600 mb-4">
              At Muneem Ji, we simplify business finance and compliance for
              entrepreneurs, startup founders, and business owners across India.
            </p>

            <p className="text-lg text-gray-600 mb-4">
              We provide complete guidance on Finance, HR Services, ESIC, EPFO,
              and Startup registration to help you stay compliant.
            </p>

            <p className="text-lg text-gray-600">
              Our mission is to empower businesses to grow confidently while
              following all regulatory requirements.
            </p>
          </div>

          <div className="relative h-80 md:h-96">
            <img
              src={business}
              alt="Our Mission"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard icon={<Lightbulb className="text-red-600" size={32} />} title="Innovation">
              We constantly update our information to reflect latest regulations.
            </ValueCard>

            <ValueCard icon={<Target className="text-amber-600" size={32} />} title="Accuracy">
              Every piece of information is researched and verified by experts.
            </ValueCard>

            <ValueCard icon={<Users className="text-red-600" size={32} />} title="Community">
              We support the growth of the business community in India.
            </ValueCard>

            <ValueCard icon={<Award className="text-amber-600" size={32} />} title="Excellence">
              We strive for excellence in every service.
            </ValueCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 order-2 md:order-1">
            <img
              src={professional}
              alt="Why Choose Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Why Choose Muneem Ji?
            </h2>

            <WhyItem number={1} title="Comprehensive Information">
              All finance, HR, ESIC, EPFO & startup info in one place.
            </WhyItem>

            <WhyItem number={2} title="Easy to Understand">
              Compliance explained in simple and clear language.
            </WhyItem>

            <WhyItem number={3} title="Always Updated">
              Regularly updated with latest laws and regulations.
            </WhyItem>

            <WhyItem number={4} title="Expert Guidance">
              Accurate insights from experienced professionals.
            </WhyItem>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Explore our services and take your business to the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/finance"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------------------------
   REUSABLE COMPONENTS (Typed)
----------------------------*/

type ValueCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ValueCard({ icon, title, children }: ValueCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
      <div className="inline-block bg-red-100 p-4 rounded-lg mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

type WhyItemProps = {
  number: number | string;
  title: string;
  children: ReactNode;
};

function WhyItem({ number, title, children }: WhyItemProps) {
  return (
    <li className="flex gap-4 mb-4">
      <div className="shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </li>
  );
}
