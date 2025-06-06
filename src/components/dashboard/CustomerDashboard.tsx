
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  TrendingUp, 
  Package, 
  DollarSign, 
  Leaf, 
  MessageSquare,
  Bell,
  Star,
  Award,
  Target
} from "lucide-react";
import { sampleCustomer, monthlyRevenue, categoryBreakdown, sampleNotifications } from "@/data/sampleData";

export function CustomerDashboard() {
  return (
    <div className="space-y-6">
      {/* Quick Actions Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard Pelanggan</h1>
          <p className="text-muted-foreground">Selamat datang kembali, {sampleCustomer.name}!</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-gradient-eco text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Plus className="h-4 w-4 mr-2" />
            Jual Limbah Baru
          </Button>
          <Button variant="outline" className="border-primary/20">
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat (3)
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Terjual</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sampleCustomer.stats.totalSold} Item</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3 bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Penghasilan</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Rp {sampleCustomer.stats.totalEarnings.toLocaleString('id-ID')}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +15% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Berat Total</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sampleCustomer.stats.totalWeight} Kg</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Dampak Lingkungan</CardTitle>
            <Leaf className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sampleCustomer.stats.co2Saved} Kg CO₂</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <Leaf className="h-3 w-3 mr-1" />
              Tersimpan
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environment">Environmental</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">📊 Penghasilan Bulanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {monthlyRevenue.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-eco rounded-t transition-all duration-500 hover:opacity-80"
                        style={{ height: `${(data.amount / 350000) * 200}px` }}
                      />
                      <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifikasi Terbaru
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleNotifications.slice(0, 4).map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg border border-primary/10">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.isRead ? 'bg-gray-300' : 'bg-accent'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{notification.title}</span>
                          <span className="text-xs text-muted-foreground">5m</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="environment" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">🌱 Dampak Lingkungan Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{sampleCustomer.stats.co2Saved} Kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Direduksi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{sampleCustomer.stats.treesEquivalent}</div>
                  <div className="text-sm text-muted-foreground">Setara Menanam Pohon</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150</div>
                  <div className="text-sm text-muted-foreground">Liter Air Dihemat</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress ke Target Tahunan</span>
                    <span>75% (Target: 100 Pohon)</span>
                  </div>
                  <Progress value={75} className="h-3" />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-gradient-eco text-white">🥇 Eco Warrior</Badge>
                  <Badge className="bg-gradient-eco text-white">🥈 Recycling Hero</Badge>
                  <Badge className="bg-gradient-eco text-white">🥉 Green Champion</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievement System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {sampleCustomer.achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-primary/10">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.requirement}</span>
                        </div>
                        <Progress value={(achievement.progress / achievement.requirement) * 100} className="h-2" />
                      </div>
                    </div>
                    <div className="text-right">
                      {achievement.isUnlocked ? (
                        <Badge className="bg-gradient-eco text-white">Unlocked</Badge>
                      ) : (
                        <Badge variant="outline">In Progress</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">📈 Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Rate</span>
                    <div className="flex items-center gap-2">
                      <Progress value={94} className="w-20 h-2" />
                      <span className="text-sm font-medium">94%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <div className="flex items-center gap-2">
                      <Progress value={89} className="w-20 h-2" />
                      <span className="text-sm font-medium">89%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Deal Time</span>
                    <span className="text-sm font-medium">2.3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">🎯 Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categoryBreakdown.slice(0, 4).map((category) => (
                    <div key={category.category} className="flex items-center justify-between">
                      <span className="text-sm">{category.category}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-eco" 
                            style={{ width: `${category.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{category.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
