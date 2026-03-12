import HardMoneyMichigan from "./pages/HardMoneyMichigan";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import WhatWeOffer from "./pages/WhatWeOffer";
import LendingProcess from "./pages/LendingProcess";
import WhyChooseUs from "./pages/WhyChooseUs";
import LoanRequest from "./pages/LoanRequest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/lending-process" element={<LendingProcess />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/loan-request" element={<LoanRequest />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hard-money-lending-michigan" element={<HardMoneyMichigan />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
