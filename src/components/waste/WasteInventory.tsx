
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Eye, MessageSquare, Edit, Trash, Filter } from "lucide-react";
import { sampleWasteItems } from "@/data/sampleData";
import { WASTE_CATEGORIES } from "@/data/subscriptionPlans";

export function WasteInventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      available: { label: "🟢 Tersedia", variant: "default" as const },
      negotiating: { label: "🟡 Negosiasi", variant: "secondary" as const },
      scheduled: { label: "🔵 Dijadwalkan", variant: "outline" as const },
      completed: { label: "✅ Selesai", variant: "default" as const }
    };
    
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.available;
  };

  const filteredItems = sampleWasteItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="stats-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">3</div>
            <div className="text-sm text-green-600">🟢 Tersedia</div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-700">2</div>
            <div className="text-sm text-yellow-600">🟡 Negosiasi</div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">1</div>
            <div className="text-sm text-blue-600">🔵 Dijadwalkan</div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-700">8</div>
            <div className="text-sm text-emerald-600">✅ Selesai</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">📦 Inventory Limbah</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari limbah..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="available">Tersedia</SelectItem>
                <SelectItem value="negotiating">Negosiasi</SelectItem>
                <SelectItem value="scheduled">Dijadwalkan</SelectItem>
                <SelectItem value="completed">Selesai</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {Object.entries(WASTE_CATEGORIES).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Items List */}
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const statusBadge = getStatusBadge(item.status);
              return (
                <div key={item.id} className="p-4 bg-white/50 rounded-lg border border-primary/10 hover:bg-primary/5 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Image placeholder */}
                    <div className="w-full md:w-24 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📷</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="font-medium text-primary">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>⚖️ {item.weight} kg</span>
                            <span>💰 Rp {item.estimatedPrice.toLocaleString('id-ID')}</span>
                            <span>📍 {item.location.address}</span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {item.views} views
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={statusBadge.variant}>
                            {statusBadge.label}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            Posted {new Date(item.postedDate).toLocaleDateString('id-ID')}
                          </div>
                        </div>
                      </div>
                      
                      {/* Offers */}
                      {item.offers.length > 0 && (
                        <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                          <div className="text-sm text-blue-800">
                            💬 {item.offers.length} Penawaran
                            {item.offers.length > 0 && (
                              <span className="ml-2">
                                🏆 Tertinggi: Rp {Math.max(...item.offers.map(o => o.amount)).toLocaleString('id-ID')}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Actions */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Button size="sm" variant="outline" className="border-primary/20">
                          Lihat Detail
                        </Button>
                        <Button size="sm" variant="outline" className="border-primary/20">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline" className="border-primary/20">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                          <Trash className="h-3 w-3 mr-1" />
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Tidak ada limbah yang sesuai dengan filter</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
