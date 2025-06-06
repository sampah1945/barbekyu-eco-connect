
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  Scale,
  Leaf,
  TreePine,
  Droplets,
  Plus,
  Eye,
  MessageSquare,
  MapPin,
  Clock
} from "lucide-react";
import { sampleCustomer, sampleWasteItems, monthlyRevenue, sampleNotifications } from "@/data/sampleData";
import { formatPrice } from "@/data/subscriptionPlans";

export function CustomerDashboard() {
  const customer = sampleCustomer;
  const activeItems = sampleWasteItems.filter(item => item.status === 'available').length;
  const inNegotiation = sampleWasteItems.filter(item => item.status === 'negotiating').length;
  const scheduled = sampleWasteItems.filter(item => item.status === 'scheduled').length;

  const monthlyGrowth = 15; // percentage
  const currentMonthEarnings = 180000;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="glass-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Selamat Datang, {customer.name}! 👋
            </h1>
            <p className="text-muted-foreground mt-2">
              Mari kita ubah limbah menjadi rupiah dan selamatkan bumi bersama-sama
            </p>
          </div>
          <Button 
            size="lg"
            className="bg-gradient-eco hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
          >
            <Plus className="h-5 w-5 mr-2" />
            Jual Limbah Baru
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Terjual</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{customer.stats.totalSold}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +3 bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Penghasilan</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              Rp {customer.stats.totalEarnings.toLocaleString('id-ID')}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +{monthlyGrowth}% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Berat Total</CardTitle>
            <Scale className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{customer.stats.totalWeight} Kg</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +8% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dampak Lingkungan</CardTitle>
            <Leaf className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{customer.stats.co2Saved} Kg CO₂</div>
            <div className="flex items-center text-xs text-green-600">
              <Leaf className="h-3 w-3 mr-1" />
              Saved
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">🎯 Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-eco text-white hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Jual Limbah Baru
            </Button>
            <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5">
              <MapPin className="h-4 w-4 mr-2" />
              Update Lokasi
            </Button>
            <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat Aktif (3)
            </Button>
          </CardContent>
        </Card>

        {/* Monthly Earnings Chart */}
        <Card className="col-span-2 eco-card">
          <CardHeader>
            <CardTitle className="text-primary">📊 Penghasilan Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyRevenue.slice(-6).map((item, index) => (
                <div key={item.month} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.month}</span>
                  <div className="flex items-center gap-3 flex-1 mx-4">
                    <Progress value={(item.amount / 3000000) * 100} className="flex-1" />
                    <span className="text-sm font-medium">
                      Rp {(item.amount / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Status & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Overview */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">📦 Status Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-700">{activeItems}</div>
                <div className="text-sm text-green-600">🟢 Tersedia</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-700">{inNegotiation}</div>
                <div className="text-sm text-yellow-600">🟡 Negosiasi</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">{scheduled}</div>
                <div className="text-sm text-blue-600">🔵 Dijadwalkan</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-700">8</div>
                <div className="text-sm text-emerald-600">✅ Selesai</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">🔔 Notifikasi Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sampleNotifications.slice(0, 3).map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.isRead ? 'bg-gray-300' : 'bg-accent'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{notification.title}</span>
                      <span className="text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {notification.type === 'offer' ? '5 menit lalu' : 
                         notification.type === 'system' ? '12 menit lalu' : '1 jam lalu'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">🌱 Dampak Lingkungan Anda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{customer.stats.co2Saved} Kg CO₂</div>
              <div className="text-sm text-muted-foreground">Direduksi</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{customer.stats.treesEquivalent}</div>
              <div className="text-sm text-muted-foreground">Setara Menanam Pohon</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">150</div>
              <div className="text-sm text-muted-foreground">Liter Air Dihemat</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress ke Target Tahunan</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <Progress value={75} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              Target: 100 Pohon | 🏆 5 pohon lagi untuk membuka badge "Eco Master"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
