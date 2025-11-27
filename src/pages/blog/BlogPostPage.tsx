"use client";

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/header";
import Footer from "@/components/footer";

// Images
import gst from "../../assets/gst-tax-guide.jpg";
import payroll from "../../assets/payroll-management-team.png";
import employee from "../../assets/employee-social-insurance.png";
import provident from "../../assets/provident-fund-retirement.jpg";
import startup from "../../assets/startup-launch-business.png";
import income from "../../assets/income-tax-filing.jpg";

// TYPE DEFINITIONS  ---------------------------
type BlogPost = {
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
};

// BLOG POSTS DATA  ---------------------------
const blogPosts: Record<number, BlogPost> = {
    1: {
  title: "Understanding GST: A Complete Guide for Businesses",
  category: "finance",
  date: "15 Nov 2025",
  image: gst,
  content: `
    <h2>Understanding GST: A Complete Guide for Businesses</h2>

    <p>Goods and Services Tax (GST) is India's biggest tax reform implemented to unify multiple indirect taxes under one system. 
    Before GST, businesses struggled with complex tax structures like VAT, Service Tax, Excise Duty, Entry Tax, Luxury Tax, etc. 
    GST simplified the entire process, making taxation more transparent and business-friendly.</p>

    <h3> What is GST?</h3>
    <p>GST is a <strong>destination-based indirect tax</strong> applied on the supply of goods and services. 
    It is collected at every point of sale but allows full input tax credit (ITC), which means businesses only pay tax on the value addition.</p>

    <h3>Types of GST</h3>
    <ul>
      <li><strong>CGST</strong> – Central Goods & Services Tax</li>
      <li><strong>SGST</strong> – State Goods & Services Tax</li>
      <li><strong>IGST</strong> – Integrated Goods & Services Tax (interstate)</li>
      <li><strong>UTGST</strong> – Union Territory GST</li>
    </ul>

    <h3>Who Needs to Register for GST?</h3>
    <p>Businesses need to register for GST if:</p>
    <ul>
      <li>Annual turnover exceeds ₹40 lakhs (Goods)</li>
      <li>Annual turnover exceeds ₹20 lakhs (Services)</li>
      <li>They sell products online</li>
      <li>They supply interstate goods/services</li>
      <li>They run e-commerce businesses</li>
    </ul>

    <h3>GST Registration Process</h3>
    <p>The registration is fully online and simple:</p>
    <ol>
      <li>Create an account on <strong>GST Portal</strong></li>
      <li>Fill Form GST REG-01</li>
      <li>Upload required documents (PAN, Aadhar, Address Proof)</li>
      <li>Verification by GST department</li>
      <li>Receive GSTIN</li>
    </ol>

    <h3> Benefits of GST Registration</h3>
    <ul>
      <li>Full Input Tax Credit (ITC)</li>
      <li>Easy nationwide business expansion</li>
      <li>Transparent taxation system</li>
      <li>Eliminates cascading effect of taxes</li>
      <li>Boosts business credibility</li>
    </ul>

    <h3>Common GST Mistakes to Avoid</h3>
    <ul>
      <li>Late filing of GSTR-3B & GSTR-1</li>
      <li>Incorrect invoices</li>
      <li>Claiming wrong ITC</li>
      <li>Not reconciling books with GSTR-2B</li>
    </ul>

    <p>By following proper GST compliance, businesses can avoid penalties and ensure smooth financial operations.</p>
  `,
},


    2: {
  title: "How to Manage Payroll for Your Growing Team",
  category: "hr",
  date: "12 Nov 2025",
  image: payroll,
  content: `
    <h2>How to Manage Payroll for Your Growing Team</h2>

    <p>Payroll management is a crucial HR function that ensures employees are paid accurately, on time, and in compliance with labour regulations. 
    A well-structured payroll process boosts employee morale, reduces errors, and prevents legal complications.</p>

    <h3>Importance of Payroll Management</h3>
    <p>A robust payroll system ensures:</p>
    <ul>
      <li>Timely salary disbursement</li>
      <li>Accurate tax deductions</li>
      <li>Better financial planning</li>
      <li>Smooth statutory compliance (PF, ESIC, TDS)</li>
    </ul>

    <h3>Components of Payroll</h3>
    <ul>
      <li><strong>Basic Salary</strong></li>
      <li><strong>Allowances</strong> – HRA, Travel, Medical, Special Allowances</li>
      <li><strong>Deductions</strong> – PF, ESIC, TDS</li>
      <li><strong>Net Pay</strong> – Take-home salary</li>
    </ul>

    <h3>Setting Up Payroll System</h3>
    <p>A growing organization should automate payroll using software. This reduces errors and ensures smooth workflows.</p>

    <h3>Payroll Compliance Checklist</h3>
    <ul>
      <li>PF Registration & Monthly Payment</li>
      <li>ESIC Registration & Payments</li>
      <li>Monthly PT (Professional Tax)</li>
      <li>Income Tax TDS Filing</li>
    </ul>

    <h3>Best Payroll Practices</h3>
    <ul>
      <li>Maintain clean employee records</li>
      <li>Use digital attendance systems</li>
      <li>Share detailed salary slips</li>
      <li>Audit payroll quarterly</li>
      <li>Always stay updated with labour laws</li>
    </ul>

    <p>Good payroll management helps your company become more professional and compliant.</p>
  `,
},


    3: {
  title: "ESIC Benefits You Cannot Afford to Miss",
  category: "esic",
  date: "10 Nov 2025",
  image: employee,
  content: `
    <h2>ESIC Benefits You Cannot Afford to Miss</h2>

    <p>Employees’ State Insurance Corporation (ESIC) is one of India’s largest social security schemes designed to protect employees during sickness, maternity, disability, and employment injury.</p>

    <h3>Who is Eligible for ESIC?</h3>
    <p>Any employee earning <strong>up to ₹21,000 per month</strong> in an organization with <strong>10+ employees</strong> must be enrolled under ESIC.</p>

    <h3>Key ESIC Benefits</h3>
    <ul>
      <li><strong>Medical Benefits</strong> – Free medical care for employees & family</li>
      <li><strong>Sickness Benefit</strong> – Up to 70% wage replacement</li>
      <li><strong>Maternity Benefit</strong> – Paid leave for female employees</li>
      <li><strong>Disability Benefit</strong> – Monthly payments for permanent disability</li>
      <li><strong>Dependents Benefit</strong> – Pension for family in case of death</li>
    </ul>

    <h3>ESIC Registration Steps</h3>
    <ol>
      <li>Register employer on ESIC Portal</li>
      <li>Add all eligible employees</li>
      <li>Generate ESIC number</li>
      <li>Monthly contribution deposit</li>
    </ol>

    <h3> How to Claim ESIC Benefits?</h3>
    <p>Employees can visit any ESIC dispensary or hospital.  
    Claims are verified by employer and ESIC officer before approval.</p>

    <p>ESIC ensures both financial and medical security to employees, making it a crucial part of HR compliance.</p>
  `,
},


    4: {
  title: "Maximizing Your EPF: Smart Financial Planning",
  category: "epfo",
  date: "8 Nov 2025",
  image: provident,
  content: `
    <h2>Maximizing Your EPF: Smart Financial Planning</h2>

    <p>Employee Provident Fund (EPF) is one of India’s most trusted retirement savings schemes. With employer and employee contributions, it ensures long-term financial security.</p>

    <h3> How EPF Works</h3>
    <p>Both employer and employee contribute <strong>12% of basic salary</strong> toward EPF. 
    The amount grows with annual interest declared by the EPFO.</p>

    <h3> Benefits of EPF</h3>
    <ul>
      <li>Guaranteed returns with government backing</li>
      <li>Tax-free interest</li>
      <li>Tax-free withdrawal after 5 years</li>
      <li>Pension benefits under EPS</li>
    </ul>

    <h3> EPF Withdrawal Rules</h3>
    <p>You can withdraw EPF for:</p>
    <ul>
      <li>Retirement</li>
      <li>Buying a home</li>
      <li>Medical emergencies</li>
      <li>Marriage or education</li>
      <li>Unemployment</li>
    </ul>

    <h3> Tips to Maximize EPF Wealth</h3>
    <ul>
      <li>Keep EPF for long-term compounding</li>
      <li>Avoid frequent withdrawals</li>
      <li>Ensure KYC is updated</li>
      <li>Check balance regularly on UMANG app</li>
    </ul>

    <p>EPF is the strongest foundation for your retirement planning.</p>
  `,
},

    5: {
  title: "5 Steps to Launch Your Startup Successfully",
  category: "startup",
  date: "5 Nov 2025",
  image: startup,
  content: `
    <h2>5 Steps to Launch Your Startup Successfully</h2>

    <p>Launching a startup requires planning, execution, and clarity. 
    A successful business starts with strong research and a strategic roadmap.</p>

    <h3> Step 1: Validate Your Idea</h3>
    <p>Conduct surveys, analyze competitors, and study market demand.</p>

    <h3> Step 2: Business Planning</h3>
    <p>Prepare documents like:</p>
    <ul>
      <li>Market Analysis</li>
      <li>Target Audience</li>
      <li>SWOT Report</li>
      <li>Financial Projections</li>
    </ul>

    <h3> Step 3: Register Your Startup</h3>
    <p>You can register as:</p>
    <ul>
      <li>Sole Proprietorship</li>
      <li>Partnership</li>
      <li>LLP</li>
      <li>Private Limited Company</li>
    </ul>

    <h3>Step 4: Funding Options</h3>
    <ul>
      <li>Angel Investors</li>
      <li>Venture Capital</li>
      <li>Bank Loans</li>
      <li>Government Schemes</li>
    </ul>

    <h3> Step 5: Build & Launch</h3>
    <p>Develop product MVP, test with real customers, and launch with marketing strategy.</p>
  `,
},


    6: {
  title: "Income Tax Filing Made Simple for Entrepreneurs",
  category: "finance",
  date: "1 Nov 2025",
  image: income,
  content: `
    <h2>Income Tax Filing Made Simple for Entrepreneurs</h2>

    <p>Filing Income Tax Returns (ITR) is mandatory for all individuals whose income exceeds the basic exemption limit. 
    Entrepreneurs should maintain proper records to avoid penalties and ensure transparency.</p>

    <h3> Who Needs to File?</h3>
    <p>Anyone earning above ₹3,00,000 per year must file ITR.</p>

    <h3> Types of Income</h3>
    <ul>
      <li>Salary</li>
      <li>Business Income</li>
      <li>Freelance Income</li>
      <li>Capital Gains</li>
      <li>Other Sources (FD, Interest, etc.)</li>
    </ul>

    <h3> Deductions You Can Claim</h3>
    <ul>
      <li>Section 80C – ₹1.5 lakhs</li>
      <li>Section 80D – Health Insurance</li>
      <li>Section 80G – Donations</li>
    </ul>

    <h3>ITR Filing Process</h3>
    <ol>
      <li>Login to Income Tax Portal</li>
      <li>Select correct ITR form (ITR-3, ITR-4 for businesses)</li>
      <li>Fill income details</li>
      <li>Upload documents</li>
      <li>E-verify return</li>
    </ol>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Not declaring all income</li>
      <li>Mismatch in Form 26AS</li>
      <li>Late filing penalties</li>
    </ul>

    <p>Filing early ensures smooth processing and faster refunds.</p>
  `,
},
 
  };

 // MAIN COMPONENT  ------------------------------
export default function BlogPostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const post = blogPosts[postId];

  if (!post) {
    return (
      <main className="min-h-screen text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-red-600 font-semibold">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* HEADER */}
        <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-10">
          <div className="max-w-4xl mx-auto px-4">

            <Link to="/blog" className="inline-flex items-center gap-2 mb-6 text-white">
              <ArrowLeft size={20} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="bg-white text-red-600 px-3 py-1 rounded-full font-semibold">
                {post.category.toUpperCase()}
              </span>
              <span>{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
          </div>
        </section>

        {/* IMAGE */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-12 pb-20">
          <div className="max-w-4xl mx-auto px-4">

            <article
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ABOUT BOX */}
            <div className="mt-12 pt-8 border-t bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">About Muneem Ji</h3>
              <p>
                Muneem Ji provides expert guidance on Finance, HR, ESIC, EPFO, and Startup formation to help entrepreneurs grow.
              </p>
            </div>

            {/* BACK BUTTON */}
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <ArrowLeft size={18} /> Back to All Posts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}