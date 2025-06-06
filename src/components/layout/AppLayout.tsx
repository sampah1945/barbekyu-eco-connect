
import React from "react";
import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNavigation } from "./TopNavigation";

interface AppLayoutProps {
  children: React.ReactNode;
  userRole: 'customer' | 'collector' | 'admin';
}

export function AppLayout({ children, userRole }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <AppSidebar userRole={userRole} />
        <main className="flex-1 flex flex-col">
          <TopNavigation userRole={userRole} />
          <div className="flex-1 p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
