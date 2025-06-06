
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MessageSquare, 
  Trophy, 
  Gift,
  UserPlus,
  Share2,
  Star,
  Calendar
} from "lucide-react";

export function Community() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Community</h1>
          <p className="text-muted-foreground">Bergabung dengan komunitas eco-warrior Surabaya</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Friends
          </Button>
          <Button className="bg-gradient-eco text-white">
            <Share2 className="h-4 w-4 mr-2" />
            Share Achievement
          </Button>
        </div>
      </div>

      <Tabs defaultValue="leaderboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  🏆 Top Eco Warriors Surabaya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-2xl">🥇</div>
                    <div className="flex-1">
                      <div className="font-medium">EcoMaster99</div>
                      <div className="text-sm text-muted-foreground">156 items • 89 Kg CO₂</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">92%</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="text-2xl">🥈</div>
                    <div className="flex-1">
                      <div className="font-medium">GreenHero</div>
                      <div className="text-sm text-muted-foreground">142 items • 78 Kg CO₂</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">87%</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="text-2xl">🥉</div>
                    <div className="flex-1">
                      <div className="font-medium">RecycleKing</div>
                      <div className="text-sm text-muted-foreground">138 items • 71 Kg CO₂</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">84%</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-blue-50 border-2 border-blue-300 rounded-lg">
                    <div className="text-2xl">7️⃣</div>
                    <div className="flex-1">
                      <div className="font-medium text-primary">You (Andi)</div>
                      <div className="text-sm text-muted-foreground">45 items • 47 Kg CO₂</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">67%</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">📊 Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">15.2 Ton</div>
                      <div className="text-xs text-muted-foreground">Total CO₂ Saved</div>
                    </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-lg font-bold text-primary">8,543</div>
                      <div className="text-xs text-muted-foreground">Items Recycled</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-center">
                      🌍 Together we've planted the equivalent of
                    </div>
                    <div className="text-xl font-bold text-primary text-center">
                      305 Trees
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">🎯 Monthly Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">June 2024: Electronic Recycling</h3>
                    <p className="text-sm text-green-800 mb-3">
                      Recycle 5kg elektronik dalam bulan Juni dan menangkan hadiah menarik!
                    </p>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress:</span>
                      <span>3.2kg / 5kg</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                    <div className="mt-3">
                      <Badge className="bg-green-100 text-green-800">🎁 Hadiah: Voucher Rp 100k</Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Weekly Sprint</h3>
                    <p className="text-sm text-blue-800 mb-3">
                      Jual 3 item dalam seminggu
                    </p>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress:</span>
                      <span>2 / 3 items</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <div className="mt-3">
                      <Badge className="bg-blue-100 text-blue-800">🏆 Badge: Speed Seller</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">🏅 Completed Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-xl">🏆</div>
                    <div className="flex-1">
                      <div className="font-medium">First Steps</div>
                      <div className="text-sm text-muted-foreground">Jual item pertama</div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Completed</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="text-xl">💚</div>
                    <div className="flex-1">
                      <div className="font-medium">Eco Starter</div>
                      <div className="text-sm text-muted-foreground">Save 10kg CO₂</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Completed</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-xl">🌱</div>
                    <div className="flex-1">
                      <div className="font-medium">Tree Planter</div>
                      <div className="text-sm text-muted-foreground">Plant 5 trees equivalent</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forum" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Community Forum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-eco rounded-full flex items-center justify-center text-white text-sm font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">AndiRecycle</span>
                        <Badge variant="outline" className="text-xs">Eco Warrior</Badge>
                        <span className="text-xs text-muted-foreground">2 jam lalu</span>
                      </div>
                      <p className="text-sm mb-2">
                        Tips untuk menjual elektronik bekas: pastikan data sudah dihapus total dan bersihkan dulu sebelum difoto. Harga bisa naik 20-30%!
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          24 likes
                        </span>
                        <span>12 replies</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-eco rounded-full flex items-center justify-center text-white text-sm font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">SaraGreen</span>
                        <Badge variant="outline" className="text-xs">Green Champion</Badge>
                        <span className="text-xs text-muted-foreground">5 jam lalu</span>
                      </div>
                      <p className="text-sm mb-2">
                        Ada yang tahu pengepul terpercaya di area Surabaya Timur? Saya punya banyak kardus bekas yang mau dijual.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          18 likes
                        </span>
                        <span>8 replies</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Post New Topic
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Available Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-green-900">🎁 Voucher GoFood Rp 50k</h3>
                      <Badge className="bg-green-100 text-green-800">500 pts</Badge>
                    </div>
                    <p className="text-sm text-green-800 mb-3">
                      Voucher makan gratis dari GoFood untuk eco warriors!
                    </p>
                    <Button size="sm" className="bg-green-600 text-white">
                      Redeem
                    </Button>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-blue-900">🎽 Eco T-Shirt</h3>
                      <Badge className="bg-blue-100 text-blue-800">1000 pts</Badge>
                    </div>
                    <p className="text-sm text-blue-800 mb-3">
                      T-shirt eksklusif dengan design ramah lingkungan
                    </p>
                    <Button size="sm" variant="outline" disabled>
                      Need 450 more pts
                    </Button>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-purple-900">🌱 Plant a Real Tree</h3>
                      <Badge className="bg-purple-100 text-purple-800">2000 pts</Badge>
                    </div>
                    <p className="text-sm text-purple-800 mb-3">
                      Kami akan menanam pohon sungguhan atas nama Anda!
                    </p>
                    <Button size="sm" variant="outline" disabled>
                      Need 1450 more pts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">🏆 Your Reward Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">550 pts</div>
                  <div className="text-sm text-muted-foreground">Available to redeem</div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Recent Earnings</h3>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Sold Elektronik 12kg</span>
                    <span className="text-green-600 font-medium">+120 pts</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Monthly Challenge</span>
                    <span className="text-green-600 font-medium">+200 pts</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Referral Bonus</span>
                    <span className="text-green-600 font-medium">+100 pts</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Daily Login</span>
                    <span className="text-green-600 font-medium">+10 pts</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm font-medium text-yellow-900">💡 Tip</div>
                  <div className="text-sm text-yellow-800 mt-1">
                    Invite friends untuk mendapat 100 poin per referral yang berhasil!
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
