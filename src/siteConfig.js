export const siteConfig = {
  brand: "ORI Financeiro",
  appName: "ORI",
  oldPrice: "R$ 97,00/mês",
  price: "R$ 39,90",
  pricePeriod: "/mês",
  whatsappNumber: "5571993504818",
  whatsappDisplay: "71 99350-4818",
  appUrl: "https://ori-clareza-financeira.vercel.app/",
  scarcity: {
    totalSpots: 100,
    filledSpots: 68,
  },
  whatsappMessage: "Oi, quero acessar o ORI Financeiro por R$ 39,90 por mês e entender como funciona a demonstração do sistema.",
};

export function getWhatsappUrl() {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
