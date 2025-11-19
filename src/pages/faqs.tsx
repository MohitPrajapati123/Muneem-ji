"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FAQsPage() {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      category: "Finance",
      question: "What is GST and who needs to register?",
      answer:
        "GST (Goods and Services Tax) is a unified indirect tax on supply of goods and services. Businesses with annual turnover above Rs. 40 lakhs (Rs. 20 lakhs for certain states) must register for GST.",
    },
    {
      id: 2,
      category: "Finance",
      question: "How often should I file GST returns?",
      answer:
        "GST returns are filed monthly or quarterly depending on your business turnover. Most businesses file monthly GSTR-1 (outward supplies) and GSTR-3B (summary return).",
    },
    {
      id: 3,
      category: "HR",
      question: "What are the key HR compliance requirements?",
      answer:
        "Key HR compliance includes maintaining employee records, adhering to minimum wage laws, ensuring safe working conditions, providing statutory benefits, and maintaining proper documentation.",
    },
    {
      id: 4,
      category: "HR",
      question: "What are the minimum wage requirements?",
      answer:
        "Minimum wage varies by state and is revised periodically. Employers must pay at least the statutory minimum wage to all employees. Check your state government website for current rates.",
    },
    {
      id: 5,
      category: "ESIC",
      question: "Who is eligible for ESIC coverage?",
      answer:
        "All establishments with 10 or more workers are covered under ESIC. Employees earning up to Rs. 21,000 per month are eligible for ESIC benefits.",
    },
    {
      id: 6,
      category: "ESIC",
      question: "What benefits does ESIC provide?",
      answer:
        "ESIC provides medical benefits, disability benefits, dependent benefits, cash benefits during sickness/maternity, and higher benefits for more severe disabilities.",
    },
    {
      id: 7,
      category: "EPFO",
      question: "What is the current EPF contribution rate?",
      answer:
        "The current EPF contribution is 12% of basic salary from the employee and 12% from the employer (for a total of 24%). Additional 1.61% employer contribution goes to EPS.",
    },
    {
      id: 8,
      category: "EPFO",
      question: "Can I withdraw my EPF before retirement?",
      answer:
        "Yes, you can partially withdraw your EPF for specific purposes like home purchase, medical emergencies, higher education, or after 7 years of service.",
    },
    {
      id: 9,
      category: "Startup",
      question: "What are the basic steps to register a startup?",
      answer:
        "Basic steps include: registering the business name, obtaining PAN and TAN, registering with GST, opening a business bank account, and registering with relevant regulatory bodies.",
    },
    {
      id: 10,
      category: "Startup",
      question: "Are there any tax benefits for startups?",
      answer:
        "Yes, the Government of India offers tax exemption on profits for eligible startups for 3 years. Startups can also claim 80IAC deduction and other incentives.",
    },
  ]

  // const categories = ["All", ...new Set(faqs.map((faq) => faq.category))]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90">
              Find answers to common questions about finance, HR, compliance, and startups
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left"
                  >
                    <div>
                      <span className="inline-block text-sm font-semibold text-amber-600 mb-2">{faq.category}</span>
                      <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-red-600 shrink-0 ml-4 transition ${openId === faq.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
