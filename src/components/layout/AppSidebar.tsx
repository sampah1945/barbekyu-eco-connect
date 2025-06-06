
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Package, 
  DollarSign, 
  Leaf, 
  Users, 
  MapPin, 
  BarChart3, 
  Calendar,
  MessageSquare,
  Settings,
  Crown,
  Recycle
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface AppSidebarProps {
  userRole: 'customer' | 'collector' | 'admin';
}

export function AppSidebar({ userRole }: AppSidebarProps) {
  const location = useLocation();

  const customerMenuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Inventory Limbah",
      url: "/inventory",
      icon: Package,
      badge: "3 Aktif"
    },
    {
      title: "Transaksi",
      url: "/transactions",
      icon: DollarSign,
    },
    {
      title: "Dampak Lingkungan",
      url: "/environmental",
      icon: Leaf,
    },
    {
      title: "Community",
      url: "/community",
      icon: Users,
    },
  ];

  const collectorMenuItems = [
    {
      title: "Dashboard",
      url: "/collector",
      icon: LayoutDashboard,
    },
    {
      title: "Peta Limbah",
      url: "/collector/map",
      icon: MapPin,
      badge: "5 Baru"
    },
    {
      title: "Analytics",
      url: "/collector/analytics", 
      icon: BarChart3,
    },
    {
      title: "Jadwal Pickup",
      url: "/collector/schedule",
      icon: Calendar,
      badge: "3 Hari Ini"
    },
    {
      title: "Chat",
      url: "/collector/chat",
      icon: MessageSquare,
      badge: "7"
    },
    {
      title: "Subscription",
      url: "/collector/subscription",
      icon: Crown,
    },
  ];

  const menuItems = userRole === 'customer' ? customerMenuItems : collectorMenuItems;

  return (
    <Sidebar className="border-r-0 bg-white/50 backdrop-blur-xl">
      <SidebarHeader className="border-b border-primary/10 pb-4">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-eco rounded-xl shadow-lg">
            <Recycle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
              Barbekyu
            </h1>
            <p className="text-sm text-muted-foreground">
              {userRole === 'customer' ? 'Penjual Limbah' : 'Pengepul'}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            Menu Utama
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="group hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs bg-primary/10 text-primary">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            Pengaturan
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings" className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Pengaturan</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-primary/10 pt-4">
        <div className="px-4 py-2">
          {userRole === 'collector' && (
            <div className="glass-card p-3 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Paket ADVANCE</span>
                <Badge className="bg-gradient-eco text-white">Aktif</Badge>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Berlaku s/d: 25 Juli 2024
              </div>
            </div>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-primary/20 hover:bg-primary/5"
          >
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
