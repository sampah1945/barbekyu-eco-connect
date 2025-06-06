
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Upload, 
  MapPin, 
  Camera, 
  X, 
  Check,
  AlertCircle,
  Zap
} from "lucide-react";
import { WasteCategory } from "@/types";

const wasteCategories = [
  { value: 'elektronik', label: '📱 Elektronik', price: 'Rp 8.000-15.000/kg' },
  { value: 'aki', label: '🔋 Aki Bekas', price: 'Rp 6.000-12.000/kg' },
  { value: 'besi', label: '🔧 Besi', price: 'Rp 4.000-8.000/kg' },
  { value: 'kaleng', label: '🥫 Kaleng', price: 'Rp 3.000-5.000/kg' },
  { value: 'kardus', label: '📦 Kardus', price: 'Rp 1.500-3.000/kg' },
  { value: 'plastik', label: '♻️ Plastik', price: 'Rp 2.000-4.000/kg' },
  { value: 'kaca', label: '🪟 Kaca', price: 'Rp 1.000-2.500/kg' },
  { value: 'kertas', label: '📄 Kertas', price: 'Rp 1.200-2.000/kg' }
];

interface SellWasteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SellWasteForm({ isOpen, onClose }: SellWasteFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    weight: '',
    estimatedPrice: '',
    description: '',
    address: '',
    isUrgent: false
  });
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting waste listing:', formData);
    onClose();
  };

  const addImage = () => {
    setImages([...images, `/placeholder.svg`]);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const selectedCategory = wasteCategories.find(cat => cat.value === formData.category);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            ♻️ Jual Limbah Baru
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg">📋 Informasi Dasar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Judul Listing</label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Contoh: Laptop Bekas, AC Rusak, dll"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Kategori Limbah</label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Pilih kategori limbah" />
                  </SelectTrigger>
                  <SelectContent>
                    {wasteCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{category.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">{category.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedCategory && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm">
                    💰 Harga pasar: {selectedCategory.price}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Berat Perkiraan (kg)</label>
                  <Input 
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    placeholder="0.0"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Harga Harapan (Rp)</label>
                  <Input 
                    type="number"
                    value={formData.estimatedPrice}
                    onChange={(e) => setFormData({...formData, estimatedPrice: e.target.value})}
                    placeholder="0"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Deskripsi Kondisi</label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Jelaskan kondisi limbah, cara didapat, dll"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg">📷 Foto Limbah</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img src={image} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <button
                    type="button"
                    onClick={addImage}
                    className="aspect-square border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <Camera className="h-6 w-6 mb-2" />
                    <span className="text-sm">Tambah Foto</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Tips: Foto yang jelas meningkatkan respon 3x lipat. Max 5 foto.
              </p>
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
                  placeholder="Masukkan alamat lengkap untuk pickup"
                  className="mt-1"
                  rows={2}
                  required
                />
              </div>
              
              <Button type="button" variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Gunakan Lokasi Saat Ini
              </Button>
            </CardContent>
          </Card>

          {/* Options */}
          <Card className="eco-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    Posting Urgent
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Prioritas tinggi, muncul di atas hasil pencarian
                  </div>
                </div>
                <Button
                  type="button"
                  variant={formData.isUrgent ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFormData({...formData, isUrgent: !formData.isUrgent})}
                >
                  {formData.isUrgent ? "ON" : "OFF"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Batal
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-eco text-white">
              <Check className="h-4 w-4 mr-2" />
              Posting Limbah
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
