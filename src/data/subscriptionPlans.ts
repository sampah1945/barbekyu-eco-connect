
import { SubscriptionPlan, WasteCategory } from "@/types";

export const WASTE_CATEGORIES: Record<WasteCategory, string> = {
  aki: "Aki",
  elektronik: "Elektronik", 
  kaca: "Kaca",
  kaleng: "Kaleng",
  kain: "Kain",
  minyak_oli: "Minyak & Oli",
  plastik: "Plastik",
  styrofoam: "Styrofoam",
  kardus: "Kardus",
  kertas: "Kertas",
  kayu_perabotan: "Kayu & Perabotan",
  besi: "Besi",
  kuningan: "Kuningan",
  aluminium: "Aluminium",
  tembaga: "Tembaga"
};

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    tier: "pemula",
    name: "PEMULA",
    price: 0,
    features: {
      categories: ["aki", "elektronik", "kaca", "kaleng", "kain", "minyak_oli", "plastik", "styrofoam"],
      weightLimit: 10, // kg
      radiusLimit: 2, // km
      features: [
        "Notifikasi real-time",
        "Transaksi & Riwayat",
        "Share pencapaian ke sosial media"
      ]
    }
  },
  {
    tier: "amatir",
    name: "AMATIR", 
    price: 100000,
    features: {
      categories: ["aki", "elektronik", "kaca", "kaleng", "kain", "minyak_oli", "plastik", "styrofoam", "kardus", "kertas", "besi"],
      weightLimit: 100, // kg
      radiusLimit: 5, // km
      features: [
        "Notifikasi real-time",
        "Transaksi & Riwayat",
        "Analisis & Statistik transaksi",
        "Share pencapaian ke sosial media"
      ]
    }
  },
  {
    tier: "advance",
    name: "ADVANCE",
    price: 150000,
    isPopular: true,
    features: {
      categories: ["aki", "elektronik", "kaca", "kaleng", "kain", "minyak_oli", "plastik", "styrofoam", "kardus", "kertas", "kayu_perabotan", "besi", "kuningan"],
      weightLimit: 1000, // kg
      radiusLimit: 10, // km
      features: [
        "Notifikasi real-time",
        "Peta interaktif",
        "Transaksi & Riwayat",
        "Analisis & Statistik transaksi",
        "Share pencapaian ke sosial media"
      ]
    }
  },
  {
    tier: "pro",
    name: "PRO",
    price: 200000,
    features: {
      categories: ["aki", "elektronik", "kaca", "kaleng", "kain", "minyak_oli", "plastik", "styrofoam", "kardus", "kertas", "kayu_perabotan", "besi", "kuningan", "aluminium", "tembaga"],
      weightLimit: 10000, // kg
      radiusLimit: 20, // km
      features: [
        "Notifikasi real-time",
        "Peta interaktif",
        "Transaksi & Riwayat", 
        "Analisis & Statistik transaksi",
        "Jadwal pengambilan & optimasi rute",
        "Share pencapaian ke sosial media",
        "Priority support"
      ]
    }
  }
];

export const getWeightRangeLabel = (weight: number): string => {
  if (weight <= 10) return "Ringan (0-10kg)";
  if (weight <= 100) return "Sedang (0-100kg)";
  if (weight <= 1000) return "Berat (0-1000kg)";
  return "Sangat Berat (0-10000kg)";
};

export const getRadiusLabel = (radius: number): string => {
  if (radius <= 2) return "Terbatas (0-2km)";
  if (radius <= 5) return "Dekat (0-5km)";
  if (radius <= 10) return "Menengah (0-10km)";
  return "Jauh (0-20km)";
};

export const canAccessCategory = (userTier: string, category: WasteCategory): boolean => {
  const plan = SUBSCRIPTION_PLANS.find(p => p.tier === userTier);
  return plan?.features.categories.includes(category) || false;
};

export const canAccessWeight = (userTier: string, weight: number): boolean => {
  const plan = SUBSCRIPTION_PLANS.find(p => p.tier === userTier);
  return weight <= (plan?.features.weightLimit || 0);
};

export const canAccessRadius = (userTier: string, distance: number): boolean => {
  const plan = SUBSCRIPTION_PLANS.find(p => p.tier === userTier);
  return distance <= (plan?.features.radiusLimit || 0);
};

export const formatPrice = (price: number): string => {
  return price === 0 ? "Gratis" : `Rp ${price.toLocaleString('id-ID')}`;
};

export const TRIAL_DURATION_MONTHS = 3;
