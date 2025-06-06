
import { Customer, Collector, WasteItem, Transaction, Achievement, Notification } from "@/types";

export const sampleCustomer: Customer = {
  id: "customer-1",
  name: "Andi Setiawan",
  email: "andi@example.com",
  phone: "+62812345678",
  role: "customer",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  address: "Jl. Raya Darmo No. 123, Surabaya",
  location: { lat: -7.2775, lng: 112.7940 },
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
      id: "ach-1",
      title: "Eco Warrior",
      description: "Jual 50+ item limbah",
      icon: "🥇",
      type: "volume",
      requirement: 50,
      progress: 45,
      isUnlocked: false
    },
    {
      id: "ach-2", 
      title: "Green Champion",
      description: "Hemat 50kg CO₂",
      icon: "🌱",
      type: "environmental",
      requirement: 50,
      progress: 47.5,
      isUnlocked: false
    }
  ]
};

export const sampleCollector: Collector = {
  id: "collector-1",
  name: "CV Makmur Jaya",
  email: "makmur@example.com", 
  phone: "+62856789012",
  role: "collector",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  address: "Jl. Industri Raya No. 45, Surabaya",
  location: { lat: -7.2504, lng: 112.7688 },
  rating: 4.9,
  totalTransactions: 128,
  joinDate: "2024-02-01",
  isVerified: true,
  businessInfo: {
    companyName: "CV Makmur Jaya",
    license: "SIUP-123456789",
    operatingHours: "08:00 - 17:00 (Senin-Sabtu)",
    serviceRadius: 15,
    vehicleCapacity: 500,
    specialization: ["elektronik", "besi", "plastik", "aki"]
  },
  subscription: {
    tier: "advance",
    startDate: "2024-05-01",
    endDate: "2024-08-01",
    isActive: true,
    isTrial: false,
    autoRenewal: true
  },
  stats: {
    totalPurchased: 128,
    totalSpent: 2100000,
    avgDealSize: 45000,
    profitEstimate: 890000,
    successRate: 92,
    responseTime: 4.2
  }
};

export const sampleWasteItems: WasteItem[] = [
  {
    id: "waste-1",
    customerId: "customer-1", 
    title: "Elektronik Bekas (TV, Radio, HP)",
    description: "Kumpulan elektronik bekas dalam kondisi tidak terpakai. TV 32 inch rusak, radio jadul, HP bekas. Semua bisa diambil bersamaan.",
    category: "elektronik",
    weight: 8.5,
    weightRange: "ringan",
    estimatedPrice: 120000,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    ],
    location: {
      address: "Jl. Raya Darmo No. 123, Surabaya Timur",
      lat: -7.2775,
      lng: 112.7940
    },
    status: "available",
    postedDate: "2024-06-04",
    views: 24,
    offers: [
      {
        id: "offer-1",
        wasteItemId: "waste-1",
        collectorId: "collector-1",
        amount: 135000,
        message: "Saya tertarik dengan elektronik ini. Bisa diambil hari ini?",
        createdDate: "2024-06-04",
        status: "pending"
      }
    ],
    isUrgent: false,
    conditions: "Tidak ada komponen yang hilang, kondisi fisik masih utuh"
  },
  {
    id: "waste-2",
    customerId: "customer-1",
    title: "Kaleng Bekas Minuman",
    description: "Kumpulan kaleng bekas minuman bersoda dan bir. Sudah dicuci bersih, siap untuk didaur ulang.",
    category: "kaleng", 
    weight: 3.2,
    weightRange: "ringan",
    estimatedPrice: 15000,
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    ],
    location: {
      address: "Jl. Pemuda No. 67, Surabaya Selatan",
      lat: -7.3200,
      lng: 112.7300
    },
    status: "negotiating",
    postedDate: "2024-06-02",
    views: 12,
    offers: [
      {
        id: "offer-2",
        wasteItemId: "waste-2", 
        collectorId: "collector-1",
        amount: 18000,
        message: "Harga pas, bisa ambil besok pagi?",
        createdDate: "2024-06-03",
        status: "pending"
      }
    ],
    isUrgent: false,
    conditions: "Kaleng dalam kondisi bersih, tidak penyok"
  },
  {
    id: "waste-3",
    customerId: "customer-1",
    title: "Kardus Bekas Packing",
    description: "Kardus bekas dari online shop, berbagai ukuran. Kondisi masih bagus, tidak sobek atau basah.",
    category: "kardus",
    weight: 25,
    weightRange: "sedang", 
    estimatedPrice: 30000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    ],
    location: {
      address: "Jl. Ahmad Yani No. 89, Surabaya Pusat",
      lat: -7.2650,
      lng: 112.7520
    },
    status: "scheduled",
    postedDate: "2024-06-01",
    pickupDate: "2024-06-07",
    views: 18,
    offers: [
      {
        id: "offer-3",
        wasteItemId: "waste-3",
        collectorId: "collector-1", 
        amount: 35000,
        message: "Deal, saya ambil besok jam 10 pagi ya",
        createdDate: "2024-06-02",
        status: "accepted",
        pickupDate: "2024-06-07",
        pickupTime: "10:00"
      }
    ],
    isUrgent: false,
    conditions: "Kardus kering, tidak ada noda minyak"
  }
];

export const sampleTransactions: Transaction[] = [
  {
    id: "txn-1",
    wasteItemId: "waste-completed-1",
    customerId: "customer-1",
    collectorId: "collector-1",
    amount: 85000,
    weight: 12,
    status: "completed",
    paymentMethod: "cash",
    pickupDate: "2024-06-15",
    completedDate: "2024-06-15",
    rating: {
      customerRating: 5,
      collectorRating: 5,
      customerReview: "Pengepul profesional, tepat waktu",
      collectorReview: "Pelanggan ramah, limbah sesuai deskripsi"
    },
    invoice: {
      number: "TXN001245",
      items: [
        {
          description: "Aki Bekas",
          weight: 12,
          pricePerKg: 7083,
          total: 85000
        }
      ],
      subtotal: 85000,
      tax: 0,
      total: 85000
    }
  }
];

export const sampleNotifications: Notification[] = [
  {
    id: "notif-1",
    userId: "customer-1",
    type: "offer",
    title: "Penawaran Baru!",
    message: "Pak Budi tertarik dengan limbah elektronik Anda (Rp 135.000)",
    isRead: false,
    createdDate: "2024-06-06T10:30:00Z", 
    priority: "medium"
  },
  {
    id: "notif-2",
    userId: "customer-1",
    type: "system",
    title: "Tips Harian",
    message: "Foto yang baik meningkatkan respon 3x lipat! Gunakan cahaya alami untuk hasil terbaik.",
    isRead: false,
    createdDate: "2024-06-06T09:15:00Z",
    priority: "low"
  },
  {
    id: "notif-3",
    userId: "customer-1",
    type: "achievement",
    title: "Hampir Mencapai Target!",
    message: "5 item lagi untuk membuka badge 'Eco Warrior' 🏆",
    isRead: true,
    createdDate: "2024-06-05T16:45:00Z",
    priority: "medium"
  }
];

// Sample data untuk collector dashboard
export const sampleOpportunities = [
  {
    id: "opp-1",
    title: "Elektronik 15kg",
    price: 180000,
    distance: 1.2,
    timePosted: "3 menit lalu",
    isNew: true,
    category: "elektronik"
  },
  {
    id: "opp-2", 
    title: "Besi 45kg",
    price: 320000,
    distance: 2.8,
    timePosted: "15 menit lalu",
    isCompetitive: true,
    competitorCount: 2,
    category: "besi"
  },
  {
    id: "opp-3",
    title: "Aki Bekas 8kg", 
    price: 65000,
    distance: 0.9,
    timePosted: "1 jam lalu",
    isUrgent: true,
    pickupToday: true,
    category: "aki"
  }
];

export const monthlyRevenue = [
  { month: "Jan", amount: 1500000 },
  { month: "Feb", amount: 1800000 },
  { month: "Mar", amount: 2200000 },
  { month: "Apr", amount: 1900000 },
  { month: "Mei", amount: 2500000 },
  { month: "Jun", amount: 2100000 }
];

export const categoryBreakdown = [
  { category: "Aki", percentage: 35, amount: 742000, color: "#ef4444" },
  { category: "Elektronik", percentage: 28, amount: 594000, color: "#3b82f6" },
  { category: "Besi", percentage: 22, amount: 467000, color: "#6b7280" },
  { category: "Kaleng", percentage: 15, amount: 318000, color: "#f59e0b" }
];
