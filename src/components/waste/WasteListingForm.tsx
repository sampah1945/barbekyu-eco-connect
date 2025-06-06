
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, Scale, DollarSign } from "lucide-react";
import { WASTE_CATEGORIES, type WasteCategory } from "@/data/subscriptionPlans";

export function WasteListingForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "" as WasteCategory,
    weight: "",
    estimatedPrice: "",
    location: "",
    conditions: "",
    images: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you'd upload these to a storage service
      console.log("Files selected:", files);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Jual Limbah Baru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Judul Limbah</Label>
              <Input
                id="title"
                placeholder="Contoh: Elektronik Bekas Laptop & Printer"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            {/* Category & Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select onValueChange={(value) => setFormData({...formData, category: value as WasteCategory})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori limbah" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(WASTE_CATEGORIES).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Berat (kg)</Label>
                <div className="relative">
                  <Scale className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0.0"
                    className="pl-10"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                placeholder="Jelaskan kondisi dan detail limbah Anda..."
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* Images */}
            <div className="space-y-2">
              <Label>Foto Limbah</Label>
              <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 text-center">
                <Camera className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Upload foto limbah (max 5 foto)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => document.getElementById("image-upload")?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Pilih Foto
                </Button>
              </div>
            </div>

            {/* Price & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Harga Perkiraan (Rp)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="50000"
                    className="pl-10"
                    value={formData.estimatedPrice}
                    onChange={(e) => setFormData({...formData, estimatedPrice: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Lokasi Pickup</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Alamat lengkap"
                    className="pl-10"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="space-y-2">
              <Label htmlFor="conditions">Kondisi & Catatan</Label>
              <Textarea
                id="conditions"
                placeholder="Kondisi fisik, cara penyimpanan, atau catatan khusus lainnya..."
                rows={2}
                value={formData.conditions}
                onChange={(e) => setFormData({...formData, conditions: e.target.value})}
              />
            </div>

            {/* Tips */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">💡 Tips untuk hasil terbaik:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Foto yang jelas meningkatkan minat pembeli 3x lipat</li>
                <li>• Pisahkan limbah berdasarkan jenis untuk harga lebih baik</li>
                <li>• Berikan deskripsi yang detail dan jujur</li>
                <li>• Pastikan limbah mudah diakses untuk pickup</li>
              </ul>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-gradient-eco text-white">
                Posting Limbah
              </Button>
              <Button type="button" variant="outline" className="border-primary/20">
                Simpan Draft
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
