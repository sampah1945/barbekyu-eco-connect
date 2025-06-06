
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Star, Phone, MapPin, MessageSquare, RotateCcw } from "lucide-react";

export function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("all");

  // Sample transaction data
  const transactions = [
    {
      id: "TXN001245",
      date: "15 Jun 2024",
      status: "completed",
      item: "Aki Bekas",
      weight: 12,
      amount: 85000,
      collector: "CV Makmur Jaya",
      rating: 4.8,
      distance: 2.3,
      paymentMethod: "Cash on Pickup",
      pickupDate: "15 Jun, 14:30"
    },
    {
      id: "TXN001244", 
      date: "12 Jun 2024",
      status: "scheduled",
      item: "Kardus Bekas",
      weight: 8,
      amount: 24000,
      collector: "UD Sumber Rezeki",
      rating: 4.9,
      distance: 1.8,
      paymentMethod: "Transfer",
      pickupDate: "16 Jun, 09:00"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "✅ SELESAI", variant: "default" as const },
      scheduled: { label: "🔵 DIJADWALKAN", variant: "secondary" as const },
      in_progress: { label: "🟡 BERLANGSUNG", variant: "outline" as const },
      cancelled: { label: "❌ DIBATALKAN", variant: "destructive" as const }
    };
    
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.completed;
  };

  return (
    <div className="space-y-6">
      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">💰 Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Penghasilan:</span>
                <span className="font-bold text-primary">Rp 180.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaksi:</span>
                <span className="font-bold">4 Item</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rata² per Item:</span>
                <span className="font-bold">Rp 45.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Target Bulan:</span>
                <span className="font-bold text-green-600">67% ████▓▓▓</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="text-primary">📊 Total Sepanjang Masa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Terjual:</span>
                <span className="font-bold text-primary">45 Item</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Berat:</span>
                <span className="font-bold">287 Kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Penghasilan:</span>
                <span className="font-bold">Rp 1.2 Jt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since:</span>
                <span className="font-bold">Jan 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction List */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary">📋 Riwayat Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari transaksi..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={periodFilter} onValueChange={setPeriodFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Period</SelectItem>
                <SelectItem value="this_month">Bulan Ini</SelectItem>
                <SelectItem value="last_month">Bulan Lalu</SelectItem>
                <SelectItem value="this_year">Tahun Ini</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="completed">Selesai</SelectItem>
                <SelectItem value="scheduled">Dijadwalkan</SelectItem>
                <SelectItem value="in_progress">Berlangsung</SelectItem>
                <SelectItem value="cancelled">Dibatalkan</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-primary/20">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Transaction Items */}
          <div className="space-y-4">
            {transactions.map((transaction) => {
              const statusBadge = getStatusBadge(transaction.status);
              return (
                <div key={transaction.id} className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm text-muted-foreground">#{transaction.id}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{transaction.date}</span>
                        <Badge variant={statusBadge.variant}>
                          {statusBadge.label}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="font-medium text-primary">
                          🔋 {transaction.item} • {transaction.weight} Kg • Rp {transaction.amount.toLocaleString('id-ID')}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            👤 {transaction.collector}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            {transaction.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {transaction.distance} km
                          </span>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          💳 {transaction.paymentMethod} • 📅 Pickup: {transaction.pickupDate}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {transaction.status === "completed" && (
                        <>
                          <Button size="sm" variant="outline" className="border-primary/20">
                            <Star className="h-3 w-3 mr-1" />
                            Rate
                          </Button>
                          <Button size="sm" variant="outline" className="border-primary/20">
                            📄 Invoice
                          </Button>
                          <Button size="sm" variant="outline" className="border-primary/20">
                            <RotateCcw className="h-3 w-3 mr-1" />
                            Repeat Order
                          </Button>
                        </>
                      )}
                      
                      {transaction.status === "scheduled" && (
                        <>
                          <Button size="sm" variant="outline" className="border-primary/20">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline" className="border-primary/20">
                            <MapPin className="h-3 w-3 mr-1" />
                            Track
                          </Button>
                          <Button size="sm" variant="outline" className="border-orange-200 text-orange-600">
                            ⚠️ Reschedule
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
