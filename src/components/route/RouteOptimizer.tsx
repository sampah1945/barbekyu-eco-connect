
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Route, 
  MapPin, 
  Clock, 
  Fuel, 
  Navigation,
  Check,
  X,
  Truck,
  AlertCircle
} from "lucide-react";

interface RouteOptimizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RouteOptimizer({ isOpen, onClose }: RouteOptimizerProps) {
  const [pickups] = useState([
    {
      id: 1,
      customer: "Pak Joko",
      type: "Elektronik",
      weight: "15kg",
      address: "Jl. Basuki Rahmat No. 45",
      estimatedValue: "Rp 180k",
      time: "09:00-10:00",
      priority: "high",
      distance: "1.2km"
    },
    {
      id: 2,
      customer: "Bu Ani",
      type: "Kardus",
      weight: "22kg", 
      address: "Jl. Raya Darmo No. 123",
      estimatedValue: "Rp 66k",
      time: "13:00-14:00",
      priority: "normal",
      distance: "2.8km"
    },
    {
      id: 3,
      customer: "Pak Wawan",
      type: "Besi",
      weight: "35kg",
      address: "Jl. Ahmad Yani No. 78",
      estimatedValue: "Rp 280k", 
      time: "15:30-16:30",
      priority: "normal",
      distance: "3.5km"
    },
    {
      id: 4,
      customer: "Mbak Sari",
      type: "Plastik",
      weight: "12kg",
      address: "Jl. Pemuda No. 56",
      estimatedValue: "Rp 48k",
      time: "10:00-11:00",
      priority: "low",
      distance: "1.8km"
    },
    {
      id: 5,
      customer: "Pak Budi",
      type: "Kaleng",
      weight: "18kg",
      address: "Jl. Tunjungan No. 90",
      estimatedValue: "Rp 54k",
      time: "14:00-15:00",
      priority: "normal",
      distance: "2.1km"
    }
  ]);

  const [selectedPickups, setSelectedPickups] = useState<number[]>([1, 2, 3]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizedRoute, setOptimizedRoute] = useState<any>(null);

  const togglePickup = (id: number) => {
    if (selectedPickups.includes(id)) {
      setSelectedPickups(selectedPickups.filter(p => p !== id));
    } else {
      setSelectedPickups([...selectedPickups, id]);
    }
  };

  const optimizeRoute = () => {
    setIsOptimizing(true);
    
    // Simulate optimization
    setTimeout(() => {
      const selected = pickups.filter(p => selectedPickups.includes(p.id));
      const totalWeight = selected.reduce((sum, p) => sum + parseInt(p.weight), 0);
      const totalValue = selected.reduce((sum, p) => sum + parseInt(p.estimatedValue.replace(/[^\d]/g, '')), 0);
      const totalDistance = selected.reduce((sum, p) => sum + parseFloat(p.distance), 0);
      
      setOptimizedRoute({
        pickups: selected.sort((a, b) => {
          // Sort by priority and proximity
          if (a.priority === 'high' && b.priority !== 'high') return -1;
          if (b.priority === 'high' && a.priority !== 'high') return 1;
          return parseFloat(a.distance) - parseFloat(b.distance);
        }),
        summary: {
          totalDistance: totalDistance.toFixed(1),
          totalWeight,
          totalValue: totalValue.toLocaleString('id-ID'),
          estimatedTime: Math.ceil(totalDistance * 15 + selected.length * 30), // 15 min per km + 30 min per stop
          fuelCost: Math.ceil(totalDistance * 1.5) * 1000, // Rp 1500 per km
          efficiency: Math.min(95, 65 + (selected.length * 5)) // Base 65% + 5% per pickup
        }
      });
      setIsOptimizing(false);
    }, 2000);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <Route className="h-6 w-6" />
            Smart Route Optimizer
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Pickups */}
          <div className="space-y-4">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-lg">📋 Available Pickups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pickups.map((pickup) => (
                  <div 
                    key={pickup.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedPickups.includes(pickup.id) 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => togglePickup(pickup.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{pickup.customer}</span>
                          <Badge 
                            variant={pickup.priority === 'high' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {pickup.priority}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {pickup.type} • {pickup.weight} • {pickup.estimatedValue}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          📍 {pickup.distance} • ⏰ {pickup.time}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedPickups.includes(pickup.id)
                          ? 'bg-primary border-primary text-white'
                          : 'border-gray-300'
                      }`}>
                        {selectedPickups.includes(pickup.id) && <Check className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button 
              onClick={optimizeRoute}
              disabled={selectedPickups.length === 0 || isOptimizing}
              className="w-full bg-gradient-eco text-white"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Optimizing Route...
                </>
              ) : (
                <>
                  <Route className="h-4 w-4 mr-2" />
                  Optimize Route ({selectedPickups.length} pickups)
                </>
              )}
            </Button>
          </div>

          {/* Optimized Route */}
          <div className="space-y-4">
            {optimizedRoute ? (
              <>
                <Card className="eco-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      Optimized Route
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {optimizedRoute.pickups.map((pickup: any, index: number) => (
                      <div key={pickup.id} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{pickup.customer}</div>
                          <div className="text-sm text-muted-foreground">
                            {pickup.type} • {pickup.weight} • {pickup.estimatedValue}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{pickup.time}</div>
                          <div className="text-xs text-muted-foreground">{pickup.distance}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="eco-card">
                  <CardHeader>
                    <CardTitle className="text-lg">📊 Route Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-900">{optimizedRoute.summary.totalDistance}km</div>
                        <div className="text-sm text-blue-700">Total Distance</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-900">{formatTime(optimizedRoute.summary.estimatedTime)}</div>
                        <div className="text-sm text-green-700">Est. Time</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-900">Rp {optimizedRoute.summary.totalValue}</div>
                        <div className="text-sm text-purple-700">Total Value</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-900">Rp {optimizedRoute.summary.fuelCost.toLocaleString('id-ID')}</div>
                        <div className="text-sm text-orange-700">Fuel Cost</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Route Efficiency:</span>
                        <span className="font-bold text-green-600">{optimizedRoute.summary.efficiency}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Weight:</span>
                        <span className="font-bold">{optimizedRoute.summary.totalWeight}kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net Profit Est:</span>
                        <span className="font-bold text-green-600">
                          Rp {(parseInt(optimizedRoute.summary.totalValue.replace(/,/g, '')) * 0.3 - optimizedRoute.summary.fuelCost).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <div className="text-sm text-green-800">
                          <strong>Optimization Tips:</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• Start with Pak Joko (highest priority)</li>
                            <li>• Avoid rush hour 12:00-13:00</li>
                            <li>• Consider traffic on Jl. Ahmad Yani</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <Button className="flex-1 bg-gradient-eco text-white">
                        <Navigation className="h-4 w-4 mr-2" />
                        Start Navigation
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        Save to Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="eco-card">
                <CardContent className="pt-6">
                  <div className="text-center py-12 text-muted-foreground">
                    <Route className="h-12 w-12 mx-auto mb-4 text-primary/30" />
                    <p>Select pickups and click "Optimize Route" to see the best route plan</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
