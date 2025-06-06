
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  Truck, 
  MapPin, 
  Clock,
  Bell,
  Shield,
  CreditCard,
  Settings,
  User,
  Phone,
  Mail
} from "lucide-react";

export function CollectorSettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Pengaturan Pengepul</h1>
          <p className="text-muted-foreground">Kelola profil bisnis dan preferensi operasional</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Settings className="h-4 w-4 mr-2" />
            Reset Default
          </Button>
          <Button className="bg-gradient-eco text-white">
            Simpan Perubahan
          </Button>
        </div>
      </div>

      <Tabs defaultValue="business" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto">
          <TabsTrigger value="business">Bisnis</TabsTrigger>
          <TabsTrigger value="operations">Operasional</TabsTrigger>
          <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          <TabsTrigger value="subscription">Langganan</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Informasi Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nama Perusahaan</label>
                  <Input defaultValue="CV Makmur Jaya" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Nomor SIUP</label>
                  <Input defaultValue="SIUP-123456789" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Alamat Kantor</label>
                  <Textarea 
                    defaultValue="Jl. Raya Industri No. 45, Surabaya Timur, Jawa Timur 60291"
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Telepon</label>
                    <Input defaultValue="(031) 555-0123" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email Bisnis</label>
                    <Input defaultValue="info@makmurjaya.com" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Armada Kendaraan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-green-900">🚛 Pickup Truck #1</div>
                      <div className="text-sm text-green-800">Kapasitas: 500kg • Plat: B 1234 XYZ</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-blue-900">🚐 Van #2</div>
                      <div className="text-sm text-blue-800">Kapasitas: 300kg • Plat: B 5678 ABC</div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
                  </div>
                </div>

                <Button className="w-full bg-gradient-eco text-white">
                  <Truck className="h-4 w-4 mr-2" />
                  Tambah Kendaraan
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Pengaturan Operasional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-4">⏰ Jam Operasional</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2 items-center">
                      <span className="text-sm">Senin - Jumat</span>
                      <Input defaultValue="08:00" type="time" className="text-sm" />
                      <Input defaultValue="17:00" type="time" className="text-sm" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 items-center">
                      <span className="text-sm">Sabtu</span>
                      <Input defaultValue="08:00" type="time" className="text-sm" />
                      <Input defaultValue="14:00" type="time" className="text-sm" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 items-center">
                      <span className="text-sm">Minggu</span>
                      <span className="text-sm text-muted-foreground col-span-2">Tutup</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-4">📍 Area Layanan</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Radius Maksimal</label>
                      <Select defaultValue="15">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 km</SelectItem>
                          <SelectItem value="10">10 km</SelectItem>
                          <SelectItem value="15">15 km</SelectItem>
                          <SelectItem value="20">20 km</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Area Khusus</label>
                      <Textarea 
                        placeholder="Contoh: Avoid: Sidoarjo, Gresik. Priority: Surabaya Pusat, Timur"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-4">🎯 Preferensi Bisnis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Minimum Profit Margin</label>
                    <div className="flex items-center mt-1 gap-2">
                      <Input defaultValue="35" type="number" className="flex-1" />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Kapasitas Harian Maksimal</label>
                    <div className="flex items-center mt-1 gap-2">
                      <Input defaultValue="500" type="number" className="flex-1" />
                      <span className="text-sm text-muted-foreground">kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferensi Notifikasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-4">📱 Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">New Waste Opportunities</div>
                      <div className="text-sm text-muted-foreground">Limbah baru sesuai tier Anda</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">High Value Items</div>
                      <div className="text-sm text-muted-foreground">Item dengan nilai tinggi (>Rp 100k)</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Pickup Reminders</div>
                      <div className="text-sm text-muted-foreground">Pengingat jadwal pickup</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-4">📧 Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Daily Summary</div>
                      <div className="text-sm text-muted-foreground">Ringkasan harian opportunities</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Payment Confirmations</div>
                      <div className="text-sm text-muted-foreground">Konfirmasi pembayaran langganan</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Manajemen Langganan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">PAKET ADVANCE</h3>
                    <p className="text-muted-foreground">Aktif hingga 25 Juli 2024</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">13</div>
                    <div className="text-sm text-muted-foreground">Kategori</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000kg</div>
                    <div className="text-sm text-muted-foreground">Berat Max</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10km</div>
                    <div className="text-sm text-muted-foreground">Radius</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-gradient-eco text-white">
                    Upgrade ke PRO
                  </Button>
                  <Button variant="outline">
                    Kelola Pembayaran
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-4">🔒 Autentikasi</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Keamanan tambahan untuk login</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-red-600 text-white">
                    Ganti Password
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-4">📊 Privasi Data</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Share Business Analytics</div>
                      <div className="text-sm text-muted-foreground">Tampilkan performa di leaderboard</div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                      ON
                    </Button>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Download Data Saya
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
