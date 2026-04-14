import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import LandingPrix from "./pages/LandingPrix.tsx";
import LandingGoogle from "./pages/LandingGoogle.tsx";
import LandingGoogleMobile from "./pages/LandingGoogleMobile.tsx";
import LandingGoogleAgenceDevWeb from "./pages/LandingGoogleAgenceDevWeb.tsx";
import LandingGoogleDeveloppementLogiciel from "./pages/LandingGoogleDeveloppementLogiciel.tsx";
import LandingGoogleApplicationWebSurMesure from "./pages/LandingGoogleApplicationWebSurMesure.tsx";
import LandingGoogleDeveloppementApplication from "./pages/LandingGoogleDeveloppementApplication.tsx";
import LandingGoogleLogicielBtp from "./pages/LandingGoogleLogicielBtp.tsx";
import LandingGoogleLogicielRh from "./pages/LandingGoogleLogicielRh.tsx";
import LandingGoogleErpSurMesure from "./pages/LandingGoogleErpSurMesure.tsx";
import LandingGoogleCrmSurMesure from "./pages/LandingGoogleCrmSurMesure.tsx";
import LandingGoogleLogicielFacturation from "./pages/LandingGoogleLogicielFacturation.tsx";
import LandingGoogleLogicielComptabilite from "./pages/LandingGoogleLogicielComptabilite.tsx";
import LandingGoogleLogicielSurMesure from "./pages/LandingGoogleLogicielSurMesure.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminSignup from "./pages/AdminSignup.tsx";
import AdminForgotPassword from "./pages/AdminForgotPassword.tsx";
import AdminResetPassword from "./pages/AdminResetPassword.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import LandingPages from "./pages/admin/LandingPages.tsx";
import UsersPage from "./pages/admin/UsersPage.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import CGV from "./pages/CGV.tsx";
import CookieBanner from "./components/CookieBanner.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lp/prix" element={<LandingPrix />} />
          <Route path="/lp/google" element={<LandingGoogle />} />
          <Route path="/lp/google/application-mobile" element={<LandingGoogleMobile />} />
          <Route path="/lp/google/agence-dev-web" element={<LandingGoogleAgenceDevWeb />} />
          <Route path="/lp/google/developpement-logiciel" element={<LandingGoogleDeveloppementLogiciel />} />
          <Route path="/lp/google/application-web-sur-mesure" element={<LandingGoogleApplicationWebSurMesure />} />
          <Route path="/lp/google/developpement-application" element={<LandingGoogleDeveloppementApplication />} />
          <Route path="/lp/google/logiciel-btp" element={<LandingGoogleLogicielBtp />} />
          <Route path="/lp/google/logiciel-rh" element={<LandingGoogleLogicielRh />} />
          <Route path="/lp/google/erp-sur-mesure" element={<LandingGoogleErpSurMesure />} />
          <Route path="/lp/google/crm-sur-mesure" element={<LandingGoogleCrmSurMesure />} />
          <Route path="/lp/google/logiciel-facturation" element={<LandingGoogleLogicielFacturation />} />
          <Route path="/lp/google/logiciel-comptabilite" element={<LandingGoogleLogicielComptabilite />} />
          <Route path="/lp/google/logiciel-sur-mesure" element={<LandingGoogleLogicielSurMesure />} />
          <Route path="/etude-de-cas" element={<CaseStudy />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          
          {/* Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          <Route path="/admin/reset-password" element={<AdminResetPassword />} />
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
