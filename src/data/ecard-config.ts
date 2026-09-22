import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  ContactRound,
  FileImage,
  Gift,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  Phone,
  Printer,
  Send,
  Share2,
  Shirt,
  Sparkles,
  Store,
} from "lucide-react";

export type ECardService = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export type ECardConfig = {
  businessName: string;
  legalName: string;
  activity: string;
  tagline: string;
  description: string;
  location: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram: string;
  map: string;
  portfolio: string;
  quoteMessage: string;
  services: ECardService[];
};

const whatsappNumber = "573008374808";

export const ecardConfig: ECardConfig = {
  businessName: "Graficolor",
  legalName: "Graficolor SM",
  activity: "Litografía y Diseño",
  tagline: "Imprimimos tus ideas.",
  description: "Diseño, impresión y soluciones que hacen visible tu marca.",
  location: "Santa Marta, Magdalena · Colombia",
  phone: "+57 300 837 4808",
  phoneHref: "+573008374808",
  whatsapp: whatsappNumber,
  email: "comercial@graficolorsm.com",
  website: "https://www.graficolorsm.com",
  instagram: "https://www.instagram.com/graficolorsm",
  map: "https://www.google.com/maps/search/?api=1&query=Graficolor+SM+Santa+Marta+Magdalena+Colombia",
  // El sitio corporativo no publica una URL separada de portafolio.
  // Cambia solo esta constante cuando Graficolor defina su enlace oficial.
  portfolio: "https://www.graficolorsm.com",
  quoteMessage: "Hola, vi su E-Card y quiero solicitar una cotización.",
  services: [
    {
      id: "impresion",
      name: "Impresión offset y digital",
      description: "Producción precisa para tirajes cortos y grandes formatos.",
      icon: Printer,
    },
    {
      id: "diseno",
      name: "Diseño gráfico",
      description: "Identidad y piezas visuales listas para comunicar.",
      icon: Palette,
    },
    {
      id: "publicidad",
      name: "Material publicitario",
      description: "Piezas impresas que mantienen tu marca en movimiento.",
      icon: FileImage,
    },
    {
      id: "ecards",
      name: "Tarjetas virtuales",
      description: "Presentaciones digitales ágiles, útiles y memorables.",
      icon: MonitorSmartphone,
    },
    {
      id: "empaques",
      name: "Empaques y etiquetas",
      description: "Acabados que convierten cada entrega en una experiencia.",
      icon: PackageCheck,
    },
    {
      id: "promocionales",
      name: "Ropa y promocionales",
      description: "Objetos y prendas personalizados para destacar tu marca.",
      icon: Shirt,
    },
  ],
};

export const actionIcons = {
  whatsapp: MessageCircle,
  call: Phone,
  email: Mail,
  website: Store,
  instagram: Instagram,
  location: MapPin,
  portfolio: Boxes,
  quote: Send,
  share: Share2,
  save: ContactRound,
  spark: Sparkles,
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${ecardConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}