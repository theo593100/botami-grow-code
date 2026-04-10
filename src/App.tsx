import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import LandingPrix from "./pages/LandingPrix.tsx";
import LandingGoogle from "./pages/LandingGoogle.tsx";
import LandingGoogleSaas from "./pages/LandingGoogleSaas.tsx";
import LandingGoogleDev from "./pages/LandingGoogleDev.tsx";
import LandingGoogleStack from "./pages/LandingGoogleStack.tsx";
import LandingGooglePrix from "./pages/LandingGooglePrix.tsx";
import LandingGoogleMobile from "./pages/LandingGoogleMobile.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminSignup from "./pages/AdminSignup.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import LandingPages from "./pages/admin/LandingPages.tsx";
import UsersPage from "./pages/admin/UsersPage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lp/prix" element={<LandingPrix />} />
          <Route path="/lp/google" element={<LandingGoogle />} />
          <Route path="/lp/google/alternative-saas" element={<LandingGoogleSaas />} />
          <Route path="/lp/google/dev-sur-mesure" element={<LandingGoogleDev />} />
          <Route path="/lp/google/stack-bricole" element={<LandingGoogleStack />} />
          <Route path="/lp/google/prix" element={<LandingGooglePrix />} />
          <Route path="/lp/google/application-mobile" element={<LandingGoogleMobile />} />
          <Route path="/etude-de-cas" element={<CaseStudy />} />
          
          {/* Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="landing-pages" element={<LandingPages />} />
            <Route path="users" element={<UsersPage />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
