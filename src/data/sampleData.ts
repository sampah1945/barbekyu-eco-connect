
import { User, Customer, Collector, WasteItem, Offer, Transaction, Notification, Achievement, Analytics } from "@/types";

// Sample Customer Data
export const sampleCustomer: Customer = {
  id: "cust-001",
  name: "Andi Wijaya",
  email: "andi.wijaya@email.com",
  phone: "+62812-3456-7890",
  role: "customer",
  avatar: "/placeholder.svg",
  address: "Jl. Raya Darmo No. 123, Surabaya Timur",
  location: {
    lat: -7.257472,
    lng: 112.751389
  },
  rating: 4.8,
  totalTransactions: 45,
  joinDate: "2024-01-15",
  isVerified: true,
  stats: {
    totalSold: 45,
    totalEarnings: 1200000,
    totalWeight: 287,
    co2Saved: 47.5,
    treesEquivalent: 8
  },
  achievements: [
    {
      id: "ach-001",
      title: "Eco Warrior",
      description: "Jual 50+ item limbah",
      icon: "🥇",
      type: "volume",
      requirement: 50,
      progress: 45,
      isUnlocked: false
    }
  ]
};

// Sample Collector Data
export const sampleCollector: Collector = {
  id: "coll-001",
  name: "Budi Santoso",
  email: "budi@cvmakmurjaya.com",
  phone: "+62813-5555-1234",
  role: "collector",
  avatar: "/placeholder.svg",
  address: "Jl. Industri No. 45, Surabaya Barat",
  location: {
    lat: -7.250445,
    lng: 112.738411
  },
  rating: 4.9,
  totalTransactions: 187,
  joinDate: "2024-03-01",
  isVerified: true,
  businessInfo: {
    companyName: "CV Makmur Jaya",
    license: "SIUP-123456789",
    operatingHours: "08:00 - 17:00 (Mon-Sat)",
    serviceRadius: 15,
    vehicleCapacity: 500,
    specialization: ["elektronik", "besi", "aki"]
  },
  subscription: {
    tier: "advance",
    startDate: "2024-06-25",
    endDate: "2024-07-25",
    isActive: true,
    isTrial: false,
    autoRenewal: true
  },
  stats: {
    totalPurchased: 187,
    totalSpent: 2100000,
    avgDealSize: 45000,
    profitEstimate: 890000,
    successRate: 94.5,
    responseTime: 4.2
  }
};

// Sample Waste Items
export const sampleWasteItems: WasteItem[] = [
  {
    id: "waste-001",
    customerId: "cust-001",
    title: "Elektronik Bekas Laptop & Printer",
    description: "Laptop lama + printer inkjet yang masih bisa diservis",
    category: "elektronik",
    weight: 8.5,
    weightRange: "ringan",
    estimatedPrice: 120000,
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: {
      address: "Jl. Raya Darmo No. 123, Surabaya Timur",
      lat: -7.257472,
      lng: 112.751389
    },
    status: "available",
    postedDate: "2024-06-14T10:30:00Z",
    views: 24,
    offers: [],
    isUrgent: false,
    conditions: "Kondisi fisik baik, ada beberapa kerusakan minor"
  },
  {
    id: "waste-002",
    customerId: "cust-002", 
    title: "Kaleng Bekas Campur",
    description: "Kaleng minuman dan makanan bersih",
    category: "kaleng",
    weight: 3.2,
    weightRange: "ringan",
    estimatedPrice: 15000,
    images: ["/placeholder.svg"],
    location: {
      address: "Jl. Pemuda No. 45, Surabaya Selatan",
      lat: -7.289472,
      lng: 112.751389
    },
    status: "negotiating",
    postedDate: "2024-06-11T14:15:00Z",
    views: 12,
    offers: [],
    isUrgent: false,
    conditions: "Sudah dibersihkan dan dipisahkan"
  }
];

// Sample Opportunities for Collectors
export const sampleOpportunities = [
  {
    id: "opp-001",
    title: "Elektronik 15kg",
    price: 180000,
    distance: 1.2,
    timePosted: "3 menit lalu",
    isNew: true,
    isCompetitive: false,
    isUrgent: false,
    competitorCount: 0
  },
  {
    id: "opp-002", 
    title: "Besi 45kg",
    price: 320000,
    distance: 2.8,
    timePosted: "15 menit lalu",
    isNew: false,
    isCompetitive: true,
    isUrgent: false,
    competitorCount: 2
  },
  {
    id: "opp-003",
    title: "Aki Bekas 8kg", 
    price: 65000,
    distance: 0.9,
    timePosted: "1 jam lalu",
    isNew: false,
    isCompetitive: false,
    isUrgent: true,
    competitorCount: 0
  }
];

// Sample Monthly Revenue Data
export const monthlyRevenue = [
  { month: "Jan", amount: 150000 },
  { month: "Feb", amount: 220000 },
  { month: "Mar", amount: 180000 },
  { month: "Apr", amount: 280000 },
  { month: "Mei", amount: 320000 },
  { month: "Jun", amount: 250000 }
];

// Sample Category Breakdown
export const categoryBreakdown = [
  { category: "Elektronik", percentage: 35, amount: 742000, color: "#3B82F6" },
  { category: "Besi", percentage: 28, amount: 594000, color: "#EF4444" },
  { category: "Aki", percentage: 22, amount: 467000, color: "#10B981" },
  { category: "Kaleng", percentage: 15, amount: 318000, color: "#F59E0B" }
];

// Sample Notifications
export const sampleNotifications: Notification[] = [
  {
    id: "notif-001",
    userId: "cust-001",
    type: "offer",
    title: "Penawaran Baru!",
    message: "Pak Budi tertarik dengan limbah elektronik Anda",
    isRead: false,
    createdDate: "2024-06-16T10:25:00Z",
    priority: "medium"
  },
  {
    id: "notif-002", 
    userId: "cust-001",
    type: "system",
    title: "Harga Naik!",
    message: "Harga limbah plastik naik 15% hari ini",
    isRead: false,
    createdDate: "2024-06-16T10:12:00Z", 
    priority: "low"
  },
  {
    id: "notif-003",
    userId: "cust-001", 
    type: "achievement",
    title: "Tips Foto",
    message: "Foto yang baik meningkatkan respon 3x lipat",
    isRead: true,
    createdDate: "2024-06-16T09:00:00Z",
    priority: "low"
  }
];
