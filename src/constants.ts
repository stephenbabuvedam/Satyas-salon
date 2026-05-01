import { 
  Scissors, 
  Trash2, 
  Droplets, 
  Flower2, 
  Sparkles, 
  Palette, 
  User, 
  Wind,
  Bath,
  SprayCan,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  Wifi,
  AirVent,
  Coffee,
  Users
} from 'lucide-react';

export const PHONE_NUMBER = "7702778984";
export const DEFAULT_MESSAGE = "Hi, I want to book a service at your studio.";
export const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export const getWhatsAppLink = (serviceName: string, date?: string, time?: string, payment?: string) => {
  let msg = `Hi Satya’s Saloon, I want to book the "${serviceName}" service.`;
  if (date) msg += `\nPreferred Date: ${date}`;
  if (time) msg += `\nPreferred Time: ${time}`;
  if (payment) msg += `\nPayment Method: ${payment}`;
  msg += `\n\nPlease let me know if this slot is available.`;
  return `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const AMENITIES = [
  { name: "Washrooms", icon: Bath },
  { name: "Clean Towels", icon: Droplets },
  { name: "WiFi", icon: Wifi },
  { name: "Air Conditioned", icon: AirVent },
  { name: "Waiting Area", icon: Coffee },
  { name: "Work Friendly", icon: MapPin },
  { name: "Expert Stylists", icon: Users },
];

export const SERVICE_CATEGORIES = [
  {
    id: "grooming",
    name: "Grooming",
    icon: Scissors,
    services: [
      { name: "Head Shave", price: "Premium" },
      { name: "Shave – Gillette Foam", price: "Standard" },
    ]
  },
  {
    id: "body-care",
    name: "Body Care",
    icon: Bath,
    services: [
      { name: "Steam Bath", price: "Relaxing" },
    ]
  },
  {
    id: "mehndi",
    name: "Mehndi",
    icon: Flower2,
    services: [
      { name: "Bridal Mehndi", price: "Artistic" },
    ]
  },
  {
    id: "hair-care",
    name: "Hair Care",
    icon: Scissors,
    services: [
      { name: "Hair Cut", price: "Expert" },
      { name: "Hair Styling", price: "Trendy" },
      { name: "Hair Weaving", price: "Professional" },
      { name: "Hair Patch", price: "Fixing" },
    ]
  },
  {
    id: "hair-removal",
    name: "Hair Removal",
    icon: Trash2,
    services: [
      { name: "Waxing", price: "Smooth" },
    ]
  },
  {
    id: "makeup",
    name: "Makeup & Bridal",
    icon: Sparkles,
    services: [
      { name: "Bridal Make Over", price: "Exquisite" },
      { name: "Bridal Package", price: "Complete" },
      { name: "Basic Makeup", price: "Natural" },
      { name: "Advanced Makeup", price: "Premium" },
      { name: "Advanced Party Makeup", price: "Stunning" },
      { name: "Bridal Makeup – HD", price: "Luxury" },
      { name: "Air Brush Makeup", price: "Professional" },
      { name: "Groom Makeup", price: "Sharp" },
    ]
  },
  {
    id: "nails",
    name: "Nails & Spa",
    icon: Droplets,
    services: [
      { name: "Manicure – Ora Chocolate", price: "Premium" },
      { name: "Manicure With Scrub", price: "Refreshing" },
      { name: "Citrus Blossom Manicure", price: "Glow" },
      { name: "Pedicure", price: "Relaxing" },
    ]
  },
  {
    id: "skin-care",
    name: "Skin Care",
    icon: User,
    services: [
      { name: "Detanning", price: "Glow" },
      { name: "Skin Treatment – Oxy Hydration", price: "Healing" },
      { name: "Ubtan Body Polishing", price: "Natural" },
      { name: "Stretch Marks Treatment", price: "Expert" },
      { name: "White Lumination Treatment", price: "Premium" },
      { name: "Skin Whitening Bleach", price: "Brightening" },
      { name: "Gold Facial & Bleach", price: "Luxury" },
      { name: "Anti Ageing Premium Facial", price: "Royal" },
    ]
  },
  {
    id: "tattoo",
    name: "Tattoo Studio",
    icon: Palette,
    services: [
      { name: "Colour Tattoo", price: "Vibrant" },
      { name: "Permanent Tattoo", price: "Custom" },
      { name: "Tattoo Removal", price: "Safe" },
    ]
  },
];
