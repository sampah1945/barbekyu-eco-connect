
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  TreePine, 
  Droplets, 
  Award, 
  TrendingUp,
  Share2,
  Target,
  Globe
} from "lucide-react";

export function EnvironmentalImpact() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Environmental Impact</h1>
          <p className="text-muted-foreground">Lihat dampak positif Anda terhadap lingkungan</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Target className="h-4 w-4 mr-2" />
            Set Target
          </Button>
          <Button className="bg-gradient-eco text-white">
            <Share2 className="h-4 w-4 mr-2" />
            Share Achievement
          </Button>
        </div>
      </div>

      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Direduksi</CardTitle>
            <Leaf className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">47.5 Kg CO₂</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8.2kg bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Setara Menanam Pohon</CardTitle>
            <TreePine className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8 Pohon</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2 pohon bulan ini
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Air Dihemat</CardTitle>
            <Droplets className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">150 Liter</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +35L bulan ini
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">🎯 Progress ke Target Tahunan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Target: 100 Pohon (Setara CO₂)</span>
                    <span>8/100 Pohon (8%)</span>
                  </div>
                  <Progress value={8} className="h-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Monthly Breakdown</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Januari</span>
                        <span>1.2 pohon</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Februari</span>
                        <span>1.8 pohon</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Maret</span>
                        <span>2.1 pohon</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium text-primary">
                        <span>Juni (Current)</span>
                        <span>2.9 pohon</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Impact Breakdown</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-sm font-medium text-green-800">📱 Elektronik</div>
                        <div className="text-sm text-green-700">32% dari total impact</div>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="text-sm font-medium text-blue-800">📦 Kardus & Kertas</div>
                        <div className="text-sm text-blue-700">28% dari total impact</div>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="text-sm font-medium text-purple-800">🔧 Logam</div>
                        <div className="text-sm text-purple-700">25% dari total impact</div>
                      </div>
                    </div>
                  </div>
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
                Eco Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4 flex-wrap">
                  <Badge className="bg-gradient-eco text-white p-2">🥇 Eco Warrior</Badge>
                  <Badge className="bg-gradient-eco text-white p-2">🥈 Recycling Hero</Badge>
                  <Badge className="bg-gradient-eco text-white p-2">🥉 Green Champion</Badge>
                  <Badge className="bg-gradient-eco text-white p-2">🌱 First Steps</Badge>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Achievement Progress</h3>
                  
                  <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">🌍 Carbon Saver</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Reduce 50kg CO₂ (47.5/50kg)
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">🌳 Tree Planter</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Plant equivalent of 10 trees (8/10 trees)
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">💧 Water Guardian</span>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Save 100 liters of water (150/100L)
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">📊 Community Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">67%</div>
                  <div className="text-sm text-muted-foreground">
                    Anda lebih baik dari 67% pengguna lain di Surabaya
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-4">🏆 Leaderboard Surabaya</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm">🥇 EcoMaster99</span>
                        <span className="text-sm font-medium">89 Kg CO₂</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">🥈 GreenHero</span>
                        <span className="text-sm font-medium">78 Kg CO₂</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                        <span className="text-sm">🥉 RecycleKing</span>
                        <span className="text-sm font-medium">71 Kg CO₂</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded border-2 border-blue-200">
                        <span className="text-sm font-medium">➡️ You (Andi)</span>
                        <span className="text-sm font-medium text-primary">47 Kg CO₂</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-4">📈 Statistics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Your CO₂ Reduction</span>
                        <span className="text-sm font-medium">47.5 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">City Average</span>
                        <span className="text-sm font-medium">35.2 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">National Average</span>
                        <span className="text-sm font-medium">28.7 kg</span>
                      </div>
                      <div className="flex justify-between font-medium text-primary">
                        <span className="text-sm">Your Performance</span>
                        <span className="text-sm">+35% above average</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Environmental Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">♻️ Recycling Tips</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Pisahkan limbah berdasarkan jenisnya</li>
                      <li>• Bersihkan kemasan sebelum didaur ulang</li>
                      <li>• Hindari mencampur limbah organik dan anorganik</li>
                      <li>• Gunakan kemasan ulang sebanyak mungkin</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">🌍 Impact Facts</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 1 ton kertas = 17 pohon diselamatkan</li>
                      <li>• 1 kg plastik = 2kg CO₂ dikurangi</li>
                      <li>• 1 kaleng aluminium = 95% energi dihemat</li>
                      <li>• 1 botol kaca = 30% energi dihemat</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">📚 Did You Know?</h3>
                  <p className="text-sm text-yellow-800">
                    Dengan mendaur ulang 1 ton elektronik, Anda dapat menghemat energi yang cukup 
                    untuk menyalakan 3,500 rumah selama 1 jam! Elektronik mengandung logam mulia 
                    yang sangat berharga jika didaur ulang dengan benar.
                  </p>
                </div>

                <Button className="w-full bg-gradient-eco text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Your Impact Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
