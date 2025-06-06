
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Navigation, Route, Settings } from "lucide-react";

export function InteractiveMap() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterWeight, setFilterWeight] = useState("all");
  const [searchArea, setSearchArea] = useState("");

  // Sample map data
  const wasteLocations = [
    { id: 1, lat: -7.257472, lng: 112.751389, category: "elektronik", weight: 12, status: "available", price: 180000 },
    { id: 2, lat: -7.250445, lng: 112.738411, category: "besi", weight: 45, status: "negotiating", price: 320000 },
    { id: 3, lat: -7.265472, lng: 112.755389, category: "aki", weight: 8, status: "available", price: 65000 }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      available: "bg-green-500",
      negotiating: "bg-yellow-500", 
      competitive: "bg-red-500"
    };
    return colors[status as keyof typeof colors] || colors.available;
  };

  return (
    <div className="space-y-6">
      {/* Map Filters */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">🗺️ Peta Limbah Interaktif</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari area atau alamat..."
                className="pl-10"
                value={searchArea}
                onChange={(e) => setSearchArea(e.target.value)}
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="elektronik">Elektronik</SelectItem>
                <SelectItem value="besi">Besi</SelectItem>
                <SelectItem value="aki">Aki</SelectItem>
                <SelectItem value="plastik">Plastik</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterWeight} onValueChange={setFilterWeight}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Berat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Berat</SelectItem>
                <SelectItem value="light">0-10kg</SelectItem>
                <SelectItem value="medium">10-100kg</SelectItem>
                <SelectItem value="heavy">100kg+</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-primary/20">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Map akan tersedia setelah integrasi dengan service peta</p>
                <p className="text-sm text-muted-foreground mt-2">Lokasi limbah akan ditampilkan sebagai marker interaktif</p>
              </div>
            </div>

            {/* Sample markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
            <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
              <h4 className="font-medium text-sm mb-2">Legend:</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Negotiating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Competitive</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                <Navigation className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                📊 Heatmap
              </Button>
              <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                <Route className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Opportunities */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">📍 Peluang Terdekat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wasteLocations.map((location) => (
              <div key={location.id} className="p-4 bg-white/50 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(location.status)}`}></div>
                    <div>
                      <div className="font-medium">
                        {location.category.charAt(0).toUpperCase() + location.category.slice(1)} {location.weight}kg
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Rp {location.price.toLocaleString('id-ID')} • 📍 1.2km dari Anda
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-gradient-eco text-white">
                      Quick Bid
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/20">
                      Route
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
