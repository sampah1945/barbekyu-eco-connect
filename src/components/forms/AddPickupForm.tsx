
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  User, 
  Phone,
  Calendar,
  Check,
  X
} from "lucide-react";

interface AddPickupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddPickupForm({ isOpen, onClose }: AddPickupFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    wasteType: '',
    estimatedWeight: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    priority: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding pickup:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            📅 Tambah Jadwal Pickup
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Info */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                Informasi Customer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Nama Customer</label>
                <Input 
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  placeholder="Nama lengkap customer"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Nomor Telepon</label>
                <Input 
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                  placeholder="+62 xxx-xxxx-xxxx"
                  className="mt-1"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Waste Details */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg">♻️ Detail Limbah</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Jenis Limbah</label>
                <Select 
                  value={formData.wasteType} 
                  onValueChange={(value) => setFormData({...formData, wasteType: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Pilih jenis limbah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elektronik">📱 Elektronik</SelectItem>
                    <SelectItem value="aki">🔋 Aki Bekas</SelectItem>
                    <SelectItem value="besi">🔧 Besi</SelectItem>
                    <SelectItem value="kaleng">🥫 Kaleng</SelectItem>
                    <SelectItem value="kardus">📦 Kardus</SelectItem>
                    <SelectItem value="plastik">♻️ Plastik</SelectItem>
                    <SelectItem value="kaca">🪟 Kaca</SelectItem>
                    <SelectItem value="kertas">📄 Kertas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Perkiraan Berat (kg)</label>
                <Input 
                  type="number"
                  value={formData.estimatedWeight}
                  onChange={(e) => setFormData({...formData, estimatedWeight: e.target.value})}
                  placeholder="0.0"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Catatan Tambahan</label>
                <Textarea 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Kondisi khusus, akses lokasi, dll"
                  className="mt-1"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Jadwal Pickup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Tanggal Pickup</label>
                  <Input 
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Waktu Pickup</label>
                  <Select 
                    value={formData.preferredTime} 
                    onValueChange={(value) => setFormData({...formData, preferredTime: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Pilih waktu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00-10:00">09:00 - 10:00</SelectItem>
                      <SelectItem value="10:00-11:00">10:00 - 11:00</SelectItem>
                      <SelectItem value="11:00-12:00">11:00 - 12:00</SelectItem>
                      <SelectItem value="13:00-14:00">13:00 - 14:00</SelectItem>
                      <SelectItem value="14:00-15:00">14:00 - 15:00</SelectItem>
                      <SelectItem value="15:00-16:00">15:00 - 16:00</SelectItem>
                      <SelectItem value="16:00-17:00">16:00 - 17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Prioritas</label>
                <Select 
                  value={formData.priority} 
                  onValueChange={(value) => setFormData({...formData, priority: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Rendah</Badge>
                        <span>Fleksibel</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="normal">
                      <div className="flex items-center gap-2">
                        <Badge>Normal</Badge>
                        <span>Standar</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="high">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-100 text-orange-800">Tinggi</Badge>
                        <span>Segera</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="urgent">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                        <span>Hari ini</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Lokasi Pickup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Alamat Lengkap</label>
                <Textarea 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Alamat lengkap pickup"
                  className="mt-1"
                  rows={2}
                  required
                />
              </div>
              
              <Button type="button" variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Tandai di Peta
              </Button>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              <X className="h-4 w-4 mr-2" />
              Batal
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-eco text-white">
              <Check className="h-4 w-4 mr-2" />
              Tambah Pickup
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
