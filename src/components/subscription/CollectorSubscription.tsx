
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  CreditCard, 
  TrendingUp, 
  Package, 
  MapPin,
  CheckCircle,
  AlertCircle,
  Calendar
} from "lucide-react";
import { SUBSCRIPTION_PLANS, formatPrice } from "@/data/subscriptionPlans";

export function CollectorSubscription() {
  const currentPlan = SUBSCRIPTION_PLANS.find(plan => plan.tier === 'advance');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Subscription Management</h1>
          <p className="text-muted-foreground">Kelola langganan dan upgrade plan Anda</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment History
          </Button>
          <Button className="bg-gradient-eco text-white">
            <Crown className="h-4 w-4 mr-2" />
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* Current Plan Status */}
      <Card className="eco-card border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-primary">PAKET {currentPlan?.name} AKTIF</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(currentPlan?.price || 0)}/bulan • Berlaku s/d: 25 Juli 2024 (12 hari lagi)
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
              <div className="font-semibold text-primary">{currentPlan?.features.categories.length} Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Berat Limit</div>
              <div className="font-semibold text-primary">{currentPlan?.features.weightLimit}kg</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Radius</div>
              <div className="font-semibold text-primary">{currentPlan?.features.radiusLimit}km</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Fitur</div>
              <div className="font-semibold text-primary">Peta + Analytics</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="usage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Usage This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>📈 AKSES KATEGORI</span>
                    <span>{currentPlan?.features.categories.length}/{currentPlan?.features.categories.length} Available</span>
                  </div>
                  <Progress value={100} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>⚖️ BERAT AKSES</span>
                    <span>478kg / {currentPlan?.features.weightLimit}kg limit</span>
                  </div>
                  <Progress value={48} className="h-3" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>📍 RADIUS UTILIZATION</span>
                    <span>Avg: 4.2km / {currentPlan?.features.radiusLimit}km limit</span>
                  </div>
                  <Progress value={42} className="h-3" />
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-amber-800">🎯 RECOMMENDATION</div>
                      <div className="text-sm text-amber-700 mt-1">
                        Upgrade ke PRO untuk unlimited weight & 20km radius
                      </div>
                      <div className="text-xs text-amber-600 mt-1">
                        ROI Analysis: +45% potential revenue with PRO features
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <Card key={plan.tier} className={`eco-card ${plan.isPopular ? 'border-2 border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary">{plan.name}</CardTitle>
                    {plan.isPopular && <Badge className="bg-gradient-eco text-white">Popular</Badge>}
                  </div>
                  <div className="text-2xl font-bold text-primary">{formatPrice(plan.price)}</div>
                  {plan.price > 0 && <div className="text-sm text-muted-foreground">per bulan</div>}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Kategori:</strong> {plan.features.categories.length} jenis
                    </div>
                    <div className="text-sm">
                      <strong>Berat:</strong> 0-{plan.features.weightLimit}kg
                    </div>
                    <div className="text-sm">
                      <strong>Radius:</strong> 0-{plan.features.radiusLimit}km
                    </div>
                    <div className="space-y-1">
                      {plan.features.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full ${plan.tier === 'advance' ? 'bg-gray-400' : 'bg-gradient-eco text-white'}`}
                      disabled={plan.tier === 'advance'}
                    >
                      {plan.tier === 'advance' ? 'Current Plan' : 'Upgrade'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Jul 2024 • ADVANCE</div>
                      <div className="text-sm text-muted-foreground">Auto-renewal ON</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">Rp 150.000</div>
                      <Badge className="bg-green-100 text-green-800">PAID</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Jun 2024 • ADVANCE</div>
                      <div className="text-sm text-muted-foreground">BCA ****1234</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">Rp 150.000</div>
                      <Badge className="bg-green-100 text-green-800">PAID</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">May 2024 • AMATIR</div>
                      <div className="text-sm text-muted-foreground">GoPay</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">Rp 100.000</div>
                      <Badge className="bg-green-100 text-green-800">PAID</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-blue-900">Next Payment</div>
                      <div className="text-sm text-blue-800">Rp 150.000 on 25 Jul 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Plan Benefits Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Feature</th>
                      <th className="text-center py-2">PEMULA</th>
                      <th className="text-center py-2">AMATIR</th>
                      <th className="text-center py-2 bg-primary/10">ADVANCE</th>
                      <th className="text-center py-2">PRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Kategori Akses</td>
                      <td className="text-center">8</td>
                      <td className="text-center">11</td>
                      <td className="text-center bg-primary/10 font-bold">13</td>
                      <td className="text-center">15</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Weight Limit</td>
                      <td className="text-center">10kg</td>
                      <td className="text-center">100kg</td>
                      <td className="text-center bg-primary/10 font-bold">1000kg</td>
                      <td className="text-center">10000kg</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Radius</td>
                      <td className="text-center">2km</td>
                      <td className="text-center">5km</td>
                      <td className="text-center bg-primary/10 font-bold">10km</td>
                      <td className="text-center">20km</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Peta Interaktif</td>
                      <td className="text-center">❌</td>
                      <td className="text-center">❌</td>
                      <td className="text-center bg-primary/10">✅</td>
                      <td className="text-center">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Analytics</td>
                      <td className="text-center">❌</td>
                      <td className="text-center">✅</td>
                      <td className="text-center bg-primary/10">✅</td>
                      <td className="text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="py-2">Route Optimization</td>
                      <td className="text-center">❌</td>
                      <td className="text-center">❌</td>
                      <td className="text-center bg-primary/10">❌</td>
                      <td className="text-center">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
