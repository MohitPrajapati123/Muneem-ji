"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Correct image imports
import gst from "../../assets/gst-tax-guide.jpg";
import payroll from "../../assets/payroll-management-team.png";
import employee from "../../assets/employee-social-insurance.png";
import provident from "../../assets/provident-fund-retirement.jpg";
import startup from "../../assets/startup-launch-business.png";
import income from "../../assets/income-tax-filing.jpg";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding GST: A Complete Guide for Businesses",
      category: "finance",
      date: "15 Nov 2025",
      excerpt:
        "Learn everything about GST registration, filing, and compliance requirements for your business.",
      image: gst,
    },
    {
      id: 2,
      title: "How to Manage Payroll for Your Growing Team",
      category: "hr",
      date: "12 Nov 2025",
      excerpt:
        "Best practices for payroll management, employee benefits, and salary structuring.",
      image: payroll,
    },
    {
      id: 3,
      title: "ESIC Benefits You Cannot Afford to Miss",
      category: "esic",
      date: "10 Nov 2025",
      excerpt:
        "Complete information about ESIC registration, benefits, and how to claim them.",
      image: employee,
    },
    {
      id: 4,
      title: "Maximizing Your EPF: Smart Financial Planning",
      category: "epfo",
      date: "8 Nov 2025",
      excerpt:
        "Strategic guide to Employee Provident Fund management and retirement planning.",
      image: provident,
    },
    {
      id: 5,
      title: "5 Steps to Launch Your Startup Successfully",
      category: "startup",
      date: "5 Nov 2025",
      excerpt:
        "Essential steps to register your startup, secure funding, and grow your business.",
      image: startup,
    },
    {
      id: 6,
      title: "Income Tax Filing Made Simple for Entrepreneurs",
      category: "finance",
      date: "1 Nov 2025",
      excerpt:
        "Step-by-step guide to filing income tax returns and claiming deductions.",
      image: income,
    },
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "finance", label: "Finance" },
    { id: "hr", label: "HR" },
    { id: "esic", label: "ESIC" },
    { id: "epfo", label: "EPFO" },
    { id: "startup", label: "Startup" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Header />

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm">
                    <span className="text-amber-600 font-semibold">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700"
                  >
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
