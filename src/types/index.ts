
// Core types for Barbekyu application

export type UserRole = 'customer' | 'collector' | 'admin';

export type SubscriptionTier = 'pemula' | 'amatir' | 'advance' | 'pro';

export type WasteCategory = 
  | 'aki' | 'elektronik' | 'kaca' | 'kaleng' | 'kain' 
  | 'minyak_oli' | 'plastik' | 'styrofoam' | 'kardus' 
  | 'kertas' | 'kayu_perabotan' | 'besi' | 'kuningan' 
  | 'aluminium' | 'tembaga';

export type WeightRange = 'ringan' | 'sedang' | 'berat' | 'sangat_berat';

export type WasteStatus = 'available' | 'negotiating' | 'scheduled' | 'completed' | 'cancelled';

export type TransactionStatus = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  rating: number;
  totalTransactions: number;
  joinDate: string;
  isVerified: boolean;
  preferences?: {
    notifications: boolean;
    autoAccept: boolean;
    preferredCategories: WasteCategory[];
  };
}

export interface Customer extends User {
  role: 'customer';
  stats: {
    totalSold: number;
    totalEarnings: number;
    totalWeight: number;
    co2Saved: number;
    treesEquivalent: number;
  };
  achievements: Achievement[];
}

export interface Collector extends User {
  role: 'collector';
  businessInfo: {
    companyName: string;
    license: string;
    operatingHours: string;
    serviceRadius: number;
    vehicleCapacity: number;
    specialization: WasteCategory[];
  };
  subscription: {
    tier: SubscriptionTier;
    startDate: string;
    endDate: string;
    isActive: boolean;
    isTrial: boolean;
    autoRenewal: boolean;
  };
  stats: {
    totalPurchased: number;
    totalSpent: number;
    avgDealSize: number;
    profitEstimate: number;
    successRate: number;
    responseTime: number;
  };
}

export interface WasteItem {
  id: string;
  customerId: string;
  title: string;
  description: string;
  category: WasteCategory;
  weight: number;
  weightRange: WeightRange;
  estimatedPrice: number;
  images: string[];
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  status: WasteStatus;
  postedDate: string;
  pickupDate?: string;
  views: number;
  offers: Offer[];
  isUrgent: boolean;
  conditions: string;
}

export interface Offer {
  id: string;
  wasteItemId: string;
  collectorId: string;
  amount: number;
  message: string;
  createdDate: string;
  status: 'pending' | 'accepted' | 'rejected' | 'cancelled';
  pickupDate?: string;
  pickupTime?: string;
}

export interface Transaction {
  id: string;
  wasteItemId: string;
  customerId: string;
  collectorId: string;
  amount: number;
  weight: number;
  status: TransactionStatus;
  paymentMethod: 'cash' | 'transfer' | 'ewallet';
  pickupDate: string;
  completedDate?: string;
  rating?: {
    customerRating: number;
    collectorRating: number;
    customerReview?: string;
    collectorReview?: string;
  };
  invoice: {
    number: string;
    items: Array<{
      description: string;
      weight: number;
      pricePerKg: number;
      total: number;
    }>;
    subtotal: number;
    tax: number;
    total: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'volume' | 'environmental' | 'social' | 'milestone';
  requirement: number;
  progress: number;
  isUnlocked: boolean;
  unlockedDate?: string;
  reward?: {
    type: 'badge' | 'discount' | 'feature';
    value: string;
  };
}

export interface Notification {
  id: string;
  userId: string;
  type: 'offer' | 'message' | 'pickup' | 'achievement' | 'system';
  title: string;
  message: string;
  data?: any;
  isRead: boolean;
  createdDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface SubscriptionPlan {
  tier: SubscriptionTier;
  name: string;
  price: number;
  features: {
    categories: WasteCategory[];
    weightLimit: number;
    radiusLimit: number;
    features: string[];
  };
  isPopular?: boolean;
}

export interface Analytics {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  data: {
    revenue: Array<{ date: string; amount: number }>;
    transactions: Array<{ date: string; count: number }>;
    categories: Array<{ category: WasteCategory; count: number; value: number }>;
    locations: Array<{ area: string; count: number }>;
    performance: {
      responseTime: number;
      successRate: number;
      customerSatisfaction: number;
    };
  };
}

export interface Route {
  id: string;
  collectorId: string;
  pickups: Array<{
    wasteItemId: string;
    address: string;
    estimatedTime: string;
    priority: number;
  }>;
  totalDistance: number;
  estimatedDuration: number;
  totalValue: number;
  fuelCost: number;
  optimizedOrder: boolean;
  createdDate: string;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  message: string;
  type: 'text' | 'image' | 'location' | 'offer';
  timestamp: string;
  isRead: boolean;
  attachments?: string[];
}

export interface Conversation {
  id: string;
  wasteItemId: string;
  participants: string[];
  lastMessage: ChatMessage;
  unreadCount: number;
  isActive: boolean;
}

// Utility types for forms and API responses
export type CreateWasteItemData = Omit<WasteItem, 'id' | 'postedDate' | 'views' | 'offers' | 'status'>;
export type UpdateWasteItemData = Partial<Pick<WasteItem, 'title' | 'description' | 'estimatedPrice' | 'conditions'>>;
export type CreateOfferData = Omit<Offer, 'id' | 'createdDate' | 'status'>;

// Dashboard data types
export interface DashboardStats {
  customer: {
    totalSold: number;
    totalEarnings: number;
    totalWeight: number;
    monthlyGrowth: number;
    environmentalImpact: {
      co2Saved: number;
      treesEquivalent: number;
      waterSaved: number;
    };
  };
  collector: {
    totalBought: number;
    totalSpent: number;
    profitEstimate: number;
    monthlyGrowth: number;
    subscriptionUsage: {
      categoriesUsed: number;
      weightUsed: number;
      radiusUsed: number;
    };
  };
}
