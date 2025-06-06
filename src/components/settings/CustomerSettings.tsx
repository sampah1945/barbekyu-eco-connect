
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Bell, 
  Shield, 
  MapPin,
  CreditCard,
  Settings,
  Smartphone,
  Mail,
  Eye,
  EyeOff
} from "lucide-react";

export function CustomerSettings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Settings</h1>
          <p className="text-muted-foreground">Kelola profil dan preferensi akun Anda</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Settings className="h-4 w-4 mr-2" />
            Reset to Default
          </Button>
          <Button className="bg-gradient-eco text-white">
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                    Andi Pratama
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                    andi.pratama@email.com
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                    +62 812-3456-7890
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-white">
                    15 Januari 1990
                  </div>
                </div>

                <Button className="w-full bg-gradient-eco text-white">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-primary">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Verification</span>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Phone Verification</span>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Identity Verification</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Account Type</span>
                  <Badge className="bg-blue-100 text-blue-800">Customer</Badge>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">📋 Complete Identity Verification</div>
                  <div className="text-sm text-blue-800 mt-1">
                    Upload KTP untuk meningkatkan trust score dan akses fitur premium
                  </div>
                  <Button size="sm" className="mt-3 bg-blue-600 text-white">
                    Verify Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-4">📱 Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">New Offers</div>
                        <div className="text-sm text-muted-foreground">Saat ada pengepul yang tertarik</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Price Updates</div>
                        <div className="text-sm text-muted-foreground">Perubahan harga pasar limbah</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Pickup Reminders</div>
                        <div className="text-sm text-muted-foreground">Pengingat jadwal pengambilan</div>
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
                        <div className="font-medium">Weekly Summary</div>
                        <div className="text-sm text-muted-foreground">Ringkasan aktivitas mingguan</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Payment Confirmations</div>
                        <div className="text-sm text-muted-foreground">Konfirmasi pembayaran</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Marketing Updates</div>
                        <div className="text-sm text-muted-foreground">Tips dan penawaran khusus</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-gray-50 text-gray-800 border-gray-200">
                        OFF
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-4">⏰ Quiet Hours</h3>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="text-sm font-medium text-purple-900">Do Not Disturb</div>
                    <div className="text-sm text-purple-800 mt-1">
                      20:00 - 07:00 (Tidak ada notifikasi kecuali emergency)
                    </div>
                    <Button size="sm" variant="outline" className="mt-2">
                      Change Hours
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-4">🔒 Account Security</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Extra security layer untuk login</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-gray-50 text-gray-800 border-gray-200">
                        Enable
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Login Alerts</div>
                        <div className="text-sm text-muted-foreground">Notifikasi saat ada login baru</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <Button className="w-full bg-red-600 text-white">
                      Change Password
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-4">👁️ Visibility Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Profile Visibility</div>
                        <div className="text-sm text-muted-foreground">Siapa yang bisa melihat profil Anda</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Public
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Achievement Sharing</div>
                        <div className="text-sm text-muted-foreground">Tampilkan pencapaian di leaderboard</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Location Sharing</div>
                        <div className="text-sm text-muted-foreground">Perkiraan lokasi untuk pengepul</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-4">📊 Data & Analytics</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Usage Analytics</div>
                        <div className="text-sm text-muted-foreground">Bantu kami tingkatkan layanan</div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-800 border-green-200">
                        ON
                      </Button>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Download My Data
                    </Button>
                    
                    <Button variant="outline" className="w-full text-red-600 border-red-200">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Pickup Addresses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-green-900">🏠 Rumah Utama</div>
                      <div className="text-sm text-green-800 mt-1">
                        Jl. Raya Darmo No. 123, Surabaya Pusat<br/>
                        Surabaya, Jawa Timur 60241
                      </div>
                      <Badge className="bg-green-100 text-green-800 mt-2">Primary</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-white/50 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-medium">🏢 Kantor</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Jl. Basuki Rahmat No. 45, Surabaya Timur<br/>
                        Surabaya, Jawa Timur 60271
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-eco text-white">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">📍 Location Tips</div>
                  <ul className="text-sm text-blue-800 mt-2 space-y-1">
                    <li>• Pastikan alamat mudah diakses kendaraan pickup</li>
                    <li>• Berikan landmark yang jelas untuk memudahkan pencarian</li>
                    <li>• Update alamat jika ada perubahan untuk menghindari masalah</li>
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
