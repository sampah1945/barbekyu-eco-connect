
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Package,
  Clock,
  Users,
  Star,
  Crown,
  BarChart3,
  Calendar,
  Navigation
} from "lucide-react";
import { sampleCollector, sampleOpportunities, monthlyRevenue, categoryBreakdown } from "@/data/sampleData";

export function CollectorDashboard() {
  return (
    <div className="space-y-6">
      {/* Subscription Status */}
      <Card className="eco-card border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-primary">PAKET {sampleCollector.subscription.tier.toUpperCase()} AKTIF</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Rp 150.000/bulan • Berlaku s/d: 25 Juli 2024 (12 hari lagi)
                </p>
              </div>
            </div>
            <Badge className="bg-gradient-eco text-white">Aktif</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Akses Kategori</div>
              <div className="font-semibold text-primary">13 Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Berat Limit</div>
              <div className="font-semibold text-primary">1000kg</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Radius</div>
              <div className="font-semibold text-primary">10km</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Fitur</div>
              <div className="font-semibold text-primary">Peta + Analytics</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-eco text-white">🔄 Upgrade ke PRO</Button>
            <Button variant="outline" className="border-primary/20">📊 Usage Report</Button>
            <Button variant="outline" className="border-primary/20">💳 Payment History</Button>
          </div>
        </CardContent>
      </Card>

      {/* Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Items Bought</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{sampleCollector.stats.totalPurchased} Items</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Rp {(sampleCollector.stats.totalSpent / 1000000).toFixed(1)} Jt</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg per Kg</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Rp 1.850</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
              -5% market
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profit Est.</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Rp {(sampleCollector.stats.profitEstimate / 1000).toFixed(0)}k</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +25% bulan ini
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Opportunities */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            🔥 HOT OPPORTUNITIES • Real-time Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleOpportunities.map((opp) => (
              <div key={opp.id} className="p-4 bg-white/50 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {opp.isNew && <Badge className="bg-green-500 text-white text-xs">BARU!</Badge>}
                      {opp.isCompetitive && <Badge className="bg-red-500 text-white text-xs">🔥</Badge>}
                      {opp.isUrgent && <Badge className="bg-orange-500 text-white text-xs">⏰</Badge>}
                    </div>
                    <div>
                      <div className="font-medium">{opp.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Rp {opp.price.toLocaleString('id-ID')} • 📍 {opp.distance}km • {opp.timePosted}
                        {opp.competitorCount > 0 && ` • 👥 ${opp.competitorCount} pengepul lain tertarik`}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-gradient-eco text-white">Quick Bid</Button>
                    <Button size="sm" variant="outline" className="border-primary/20">💬 Chat</Button>
                    <Button size="sm" variant="outline" className="border-primary/20">📍 Route</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">📈 Revenue Trend (6 months)</CardTitle>
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

            {/* Category Breakdown */}
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">📊 Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryBreakdown.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{category.category}</span>
                        <span className="font-medium">{category.percentage}% (Rp {(category.amount / 1000).toFixed(0)}k)</span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Insights */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">🎯 Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-sm font-medium">Elektronik demand +35% vs last month</div>
                  <div className="text-xs text-muted-foreground">High opportunity category</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-sm font-medium">Best pickup time: 10-14:00 (78% success rate)</div>
                  <div className="text-xs text-muted-foreground">Optimize your schedule</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-sm font-medium">Optimal radius: 3-7km (highest ROI)</div>
                  <div className="text-xs text-muted-foreground">Focus area recommendation</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-sm font-medium">Competitor activity: Medium in your area</div>
                  <div className="text-xs text-muted-foreground">Market competition level</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">📊 PAKET ADVANCE - Usage Bulan Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>📈 AKSES KATEGORI</span>
                    <span>13/13 Available</span>
                  </div>
                  <Progress value={100} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>⚖️ BERAT AKSES</span>
                    <span>478kg / 1000kg limit</span>
                  </div>
                  <Progress value={48} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>📍 RADIUS UTILIZATION</span>
                    <span>Avg: 4.2km / 10km limit</span>
                  </div>
                  <Progress value={42} className="h-3" />
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="text-sm font-medium text-amber-800">🎯 RECOMMENDATION</div>
                  <div className="text-sm text-amber-700 mt-1">
                    Upgrade ke PRO untuk unlimited weight & 20km radius
                  </div>
                  <div className="text-xs text-amber-600 mt-1">
                    ROI Analysis: +45% potential revenue with PRO features
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Pickup Schedule Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">09:00-10:00 • Pak Joko</div>
                      <div className="text-sm text-muted-foreground">Elektronik 15kg • Jl. Basuki Rahmat</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">13:00-14:00 • Bu Ani</div>
                      <div className="text-sm text-muted-foreground">Kardus 22kg • Jl. Raya Darmo</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">15:30-16:30 • Pak Wawan</div>
                      <div className="text-sm text-muted-foreground">Besi 35kg • Jl. Ahmad Yani</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm">
                    <strong>Capacity Used:</strong> 72kg/500kg (14%) • <strong>Distance:</strong> 18.5km • <strong>Est:</strong> 4h 30m
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">🏆 Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl mb-2">🥇</div>
                  <div className="font-medium">VOLUME KING</div>
                  <div className="text-xs text-muted-foreground">50+ Items/month</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl mb-2">🥈</div>
                  <div className="font-medium">QUICK RESPONDER</div>
                  <div className="text-xs text-muted-foreground">&lt;5min avg reply</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl mb-2">🥉</div>
                  <div className="font-medium">ECO CHAMPION</div>
                  <div className="text-xs text-muted-foreground">100kg CO₂ saved</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>🎯 Progress to "WASTE WARRIOR"</span>
                    <span>80% (15/20 deals)</span>
                  </div>
                  <Progress value={80} className="h-3" />
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-sm font-medium text-green-800">🎁 Rewards Available:</div>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• Unlock premium analytics features</li>
                    <li>• Priority customer support</li>
                    <li>• Early access to new categories</li>
                    <li>• Monthly bonus cashback 2%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
