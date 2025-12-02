// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import BlogPage from "./pages/blog/Blog";
import BlogPostPage from "./pages/blog/BlogPostPage";
import ContactPage from "./pages/contact";
import DisclaimerPage from "./pages/disclaimer";
import RegistrationPage from "./pages/registration..tsx";
import AccountingPage from "./pages/accounting";
import ExplorePage from "./pages/explore";
import FAQsPage from "./pages/faqs";
import FinancialReportingPage from "./pages/financial-reporting";
import LabourAndLegalCompliance from "./pages/LabourAndLegalCompliance.tsx";
import LearnMorePage from "./pages/learn-more";
import LearnMorePage1 from "./pages/learn-more1";
import PrivacyPolicy from "./pages/privacy-policy";
import StartupPage from "./pages/startup";
import TermsAndConditionsPage from "./pages/terms-and-conditions";
import TaxationPage from "./pages/taxation";

const App = () => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/financial-reporting"element={<FinancialReportingPage />}/>
          <Route path="/labour-legal-compliance"element={<LabourAndLegalCompliance />}/>
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/learn-more1" element={<LearnMorePage1 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/startup" element={<StartupPage/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>}/>
          <Route path="/taxation" element={<TaxationPage />} />
          <Route path="/accounting" element={<AccountingPage />} />
           
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
};

export default App;
