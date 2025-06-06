import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Bell, 
  Search, 
  Plus, 
  SidebarOpen,
  User,
  Settings,
  LogOut 
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { sampleCustomer, sampleNotifications } from "@/data/sampleData";
import { SellWasteForm } from "@/components/forms/SellWasteForm";

interface TopNavigationProps {
  userRole: 'customer' | 'collector' | 'admin';
}

export function TopNavigation({ userRole }: TopNavigationProps) {
  const unreadNotifications = sampleNotifications.filter(n => !n.isRead).length;
  const [showSellWasteForm, setShowSellWasteForm] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="text-primary hover:bg-primary/5" />
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={userRole === 'customer' ? "Cari limbah, transaksi..." : "Cari opportunity, customer..."}
                className="pl-10 bg-white/50 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {userRole === 'customer' && (
              <Button 
                onClick={() => setShowSellWasteForm(true)}
                className="bg-gradient-eco hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Jual Limbah
              </Button>
            )}

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative hover:bg-primary/5">
                  <Bell className="h-5 w-5 text-primary" />
                  {unreadNotifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-accent">
                      {unreadNotifications}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-white/95 backdrop-blur-sm">
                <DropdownMenuLabel className="text-primary">Notifikasi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sampleNotifications.slice(0, 3).map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3">
                    <div className="flex items-center gap-2 w-full">
                      <div className={`w-2 h-2 rounded-full ${notification.isRead ? 'bg-gray-300' : 'bg-accent'}`} />
                      <span className="font-medium text-sm">{notification.title}</span>
                      <span className="text-xs text-muted-foreground ml-auto">5m</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 ml-4">
                      {notification.message}
                    </p>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-primary">
                  Lihat Semua Notifikasi
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarImage src={sampleCustomer.avatar} alt={sampleCustomer.name} />
                    <AvatarFallback className="bg-gradient-eco text-white">
                      {sampleCustomer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-sm">
                <DropdownMenuLabel className="text-primary">
                  <div className="flex flex-col">
                    <span className="font-medium">{sampleCustomer.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {userRole === 'customer' ? 'Penjual Limbah' : 'Pengepul'}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Pengaturan</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Sell Waste Form Dialog */}
      <SellWasteForm 
        isOpen={showSellWasteForm} 
        onClose={() => setShowSellWasteForm(false)} 
      />
    </>
  );
}
