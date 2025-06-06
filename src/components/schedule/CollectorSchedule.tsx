
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Truck, 
  Route,
  Plus,
  Navigation,
  AlertCircle
} from "lucide-react";

export function CollectorSchedule() {
  const todaySchedule = [
    {
      id: 1,
      time: "09:00-10:00",
      customer: "Pak Joko",
      type: "Elektronik",
      weight: "15kg",
      address: "Jl. Basuki Rahmat",
      value: "Rp 180k",
      status: "confirmed"
    },
    {
      id: 2,
      time: "13:00-14:00",
      customer: "Bu Ani",
      type: "Kardus",
      weight: "22kg",
      address: "Jl. Raya Darmo",
      value: "Rp 66k",
      status: "confirmed"
    },
    {
      id: 3,
      time: "15:30-16:30",
      customer: "Pak Wawan",
      type: "Besi",
      weight: "35kg",
      address: "Jl. Ahmad Yani",
      value: "Rp 280k",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Schedule Management</h1>
          <p className="text-muted-foreground">Kelola jadwal pickup dan optimasi rute</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Route className="h-4 w-4 mr-2" />
            Optimize Route
          </Button>
          <Button className="bg-gradient-eco text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Pickup
          </Button>
        </div>
      </div>

      {/* Vehicle Status */}
      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Vehicle Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">Pickup Truck</div>
              <div className="text-sm text-muted-foreground">Vehicle Type</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">500kg</div>
              <div className="text-sm text-muted-foreground">Max Capacity</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">72kg</div>
              <div className="text-sm text-muted-foreground">Today's Load</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">14%</div>
              <div className="text-sm text-muted-foreground">Capacity Used</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="route">Route Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule - 16 Juli 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((item) => (
                  <div key={item.id} className="p-4 bg-white/50 rounded-lg border border-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-medium">{item.time}</span>
                        </div>
                        <div>
                          <div className="font-medium">{item.customer}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.type} • {item.weight} • {item.address}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium text-primary">{item.value}</div>
                          <Badge 
                            variant={item.status === 'confirmed' ? 'default' : 'secondary'}
                            className={item.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {item.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-900">Route Summary</div>
                    <div className="text-sm text-blue-800 mt-1">
                      Total Distance: 18.5km • Estimated Time: 4h 30m • Total Value: Rp 526k
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Weekly Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, index) => (
                  <div key={day} className="text-center p-2 bg-white/50 rounded">
                    <div className="text-xs text-muted-foreground">{day}</div>
                    <div className="text-lg font-bold text-primary">{15 + index}</div>
                    <div className="text-xs text-muted-foreground">
                      {index === 1 ? '3 pickups' : index === 3 ? '2 pickups' : '1 pickup'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Monthly Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-muted-foreground">
                📅 Calendar view dengan pickup scheduling akan ditampilkan di sini
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="route" className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-primary">Smart Route Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium text-green-900">Optimized Route for Today</div>
                  <div className="text-sm text-green-800 mt-2">
                    1. Pak Joko (09:00) → Bu Ani (13:00) → Pak Wawan (15:30)
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    📍 Total: 18.5km • ⏱️ 4h 30m • 💰 Rp 526k • ⛽ Fuel: Rp 25k
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-eco text-white">
                  <Navigation className="h-4 w-4 mr-2" />
                  Start Navigation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
