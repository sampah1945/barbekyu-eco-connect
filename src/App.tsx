import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import CollectorDashboard from "./pages/CollectorDashboard";
import WasteInventory from "./pages/WasteInventory";
import Transactions from "./pages/Transactions";
import InteractiveMap from "./pages/InteractiveMap";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { CollectorAnalytics } from "@/components/analytics/CollectorAnalytics";
import { CollectorSchedule } from "@/components/schedule/CollectorSchedule";
import { CollectorSubscription } from "@/components/subscription/CollectorSubscription";
import { EnvironmentalImpact } from "@/components/environmental/EnvironmentalImpact";
import { Community } from "@/components/community/Community";
import { CustomerSettings } from "@/components/settings/CustomerSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={
            <AppLayout userRole="customer">
              <Index />
            </AppLayout>
          } />
          <Route path="/inventory" element={
            <AppLayout userRole="customer">
              <WasteInventory />
            </AppLayout>
          } />
          <Route path="/transactions" element={
            <AppLayout userRole="customer">
              <Transactions />
            </AppLayout>
          } />
          <Route path="/environmental" element={
            <AppLayout userRole="customer">
              <EnvironmentalImpact />
            </AppLayout>
          } />
          <Route path="/community" element={
            <AppLayout userRole="customer">
              <Community />
            </AppLayout>
          } />
          <Route path="/settings" element={
            <AppLayout userRole="customer">
              <CustomerSettings />
            </AppLayout>
          } />
          
          {/* Collector Routes */}
          <Route path="/collector" element={
            <AppLayout userRole="collector">
              <CollectorDashboard />
            </AppLayout>
          } />
          <Route path="/collector/map" element={
            <AppLayout userRole="collector">
              <InteractiveMap />
            </AppLayout>
          } />
          <Route path="/collector/analytics" element={
            <AppLayout userRole="collector">
              <CollectorAnalytics />
            </AppLayout>
          } />
          <Route path="/collector/schedule" element={
            <AppLayout userRole="collector">
              <CollectorSchedule />
            </AppLayout>
          } />
          <Route path="/collector/chat" element={
            <AppLayout userRole="collector">
              <Chat />
            </AppLayout>
          } />
          <Route path="/collector/subscription" element={
            <AppLayout userRole="collector">
              <CollectorSubscription />
            </AppLayout>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
