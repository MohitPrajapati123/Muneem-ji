// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import BlogPage from "./pages/blog/Blog";
import BlogPostPage from "./pages/blog/BlogPostPage";
import ContactPage from "./pages/contact";
import DisclaimerPage from "./pages/disclaimer";
import EPFOPage from "./pages/epfo";
import ESICPage from "./pages/esic";
import ExplorePage from "./pages/explore";
import FAQsPage from "./pages/faqs";
import FinancePage from "./pages/finance";
import HRServicesPage from "./pages/hr-services";
import LearnMorePage from "./pages/learn-more";
import LearnMorePage1 from "./pages/learn-more1";
import PrivacyPolicy from "./pages/privacy-policy";
import StartupPage from "./pages/startup";
import TermsAndConditionsPage from "./pages/terms-and-conditions";

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
          <Route path="/epfo" element={<EPFOPage />} />
          <Route path="/esic" element={<ESICPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/hr-services" element={<HRServicesPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/learn-more1" element={<LearnMorePage1 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/startup" element={<StartupPage/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>}/>
           <Route path="/financial-reporting/esic-registration" element={<EPFOPage />} />
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
};

export default App;
