
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
  Target,
  Clock,
  MessageSquare,
  MapPin,
  Calendar,
  Star,
  Crown,
  Zap,
  AlertTriangle
} from "lucide-react";
import { sampleCollector, sampleOpportunities, categoryBreakdown } from "@/data/sampleData";
import { formatPrice } from "@/data/subscriptionPlans";

export function CollectorDashboard() {
  const collector = sampleCollector;
  const subscriptionUsage = {
    categoriesUsed: 13,
    categoriesLimit: 13,
    weightUsed: 478,
    weightLimit: 1000,
    radiusUsed: 4.2,
    radiusLimit: 10
  };

  const daysUntilRenewal = 12;

  return (
    <div className="space-y-6">
      {/* Welcome & Subscription Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 glass-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-primary">
                  Selamat Datang, {collector.businessInfo.companyName}! 🏭
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Temukan peluang limbah terbaik dan tingkatkan profit bisnis Anda
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">{collector.rating}</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="tier-card bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6" />
              <CardTitle className="text-white">PAKET ADVANCE</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">Rp 150.000/bulan</div>
              <div className="text-sm opacity-90">
                Berlaku s/d: 25 Juli 2024 ({daysUntilRenewal} hari lagi)
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                <Badge variant="secondary" className="bg-white/20 text-white">13 Kategori</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">1000kg</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">10km</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Items Bought</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{collector.stats.totalPurchased}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +12% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              Rp {(collector.stats.totalSpent / 1000000).toFixed(1)}Jt
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +18% bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg per Kg</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Rp 1.850</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
              -5% market
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Est.</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              Rp {(collector.stats.profitEstimate / 1000).toFixed(0)}k
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +25% bulan ini
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Opportunities */}
      <Card className="eco-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-primary">🔥 Peluang Hari Ini</CardTitle>
            <Badge className="bg-accent text-white animate-pulse">
              <Zap className="h-3 w-3 mr-1" />
              Real-time Updates
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleOpportunities.map((opp) => (
              <div key={opp.id} className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    opp.isNew ? 'bg-green-500 animate-pulse' : 
                    opp.isCompetitive ? 'bg-red-500' : 
                    opp.isUrgent ? 'bg-orange-500 animate-bounce' : 'bg-blue-500'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{opp.title}</span>
                      {opp.isNew && <Badge variant="secondary" className="bg-green-100 text-green-800">BARU!</Badge>}
                      {opp.isCompetitive && <Badge variant="secondary" className="bg-red-100 text-red-800">🔥 {opp.competitorCount} pengepul lain</Badge>}
                      {opp.isUrgent && <Badge variant="secondary" className="bg-orange-100 text-orange-800">⏰ Pickup hari ini</Badge>}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      💰 Rp {opp.price.toLocaleString('id-ID')} • 📍 {opp.distance}km • {opp.timePosted}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="border-primary/20">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button size="sm" className="bg-gradient-eco text-white">
                    Quick Bid
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Subscription Usage & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscription Usage */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">📊 Usage Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Akses Kategori</span>
                <span>{subscriptionUsage.categoriesUsed}/{subscriptionUsage.categoriesLimit}</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Berat Akses</span>
                <span>{subscriptionUsage.weightUsed}kg / {subscriptionUsage.weightLimit}kg</span>
              </div>
              <Progress value={(subscriptionUsage.weightUsed / subscriptionUsage.weightLimit) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Radius Utilization</span>
                <span>Avg: {subscriptionUsage.radiusUsed}km / {subscriptionUsage.radiusLimit}km</span>
              </div>
              <Progress value={(subscriptionUsage.radiusUsed / subscriptionUsage.radiusLimit) * 100} className="h-2" />
            </div>
            <div className="mt-4 p-3 bg-gradient-warning/10 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 text-orange-800">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">Rekomendasi</span>
              </div>
              <p className="text-xs text-orange-700 mt-1">
                Upgrade ke PRO untuk unlimited weight & radius 20km. 
                ROI Analysis: +45% potential revenue
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Performance Stats */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">⚡ Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Success Rate</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{collector.stats.successRate}%</span>
                <Badge className="bg-green-100 text-green-800">Excellent</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg Response Time</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{collector.stats.responseTime} min</span>
                <Badge className="bg-blue-100 text-blue-800">Fast</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Customer Rating</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{collector.rating}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < Math.floor(collector.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pickup Success</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">92/95</span>
                <Progress value={(92/95) * 100} className="w-16 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">📊 Breakdown Kategori (6 bulan)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryBreakdown.map((category) => (
              <div key={category.category} className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-lg font-bold text-primary">{category.percentage}%</div>
                <div className="text-sm text-muted-foreground">{category.category}</div>
                <div className="text-xs text-muted-foreground">
                  Rp {(category.amount / 1000).toFixed(0)}k
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="h-2 rounded-full" 
                    style={{ 
                      backgroundColor: category.color,
                      width: `${category.percentage}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-16 bg-gradient-eco text-white hover:opacity-90">
          <MapPin className="h-5 w-5 mr-2" />
          Buka Peta Limbah
        </Button>
        <Button variant="outline" className="h-16 border-primary/20 hover:bg-primary/5">
          <Calendar className="h-5 w-5 mr-2" />
          Jadwal Pickup
        </Button>
        <Button variant="outline" className="h-16 border-primary/20 hover:bg-primary/5">
          <MessageSquare className="h-5 w-5 mr-2" />
          Chat Center (7)
        </Button>
      </div>
    </div>
  );
}
