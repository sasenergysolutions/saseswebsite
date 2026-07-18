// Central site configuration (contact + brand data)
export const SITE = {
  brand: "SAS Energy Solutions",
  tagline: "Think Future Get Benefits",
  established: "Since 2024",
  phone: "+91 75987 76759",
  phoneRaw: "+917598776759",
  whatsapp: "917598776759",
  whatsappDisplay: "+91 75987 76759",
  email: "sasenergysolution@gmail.com",
  addressLines: [
    "SAS Energy Solutions",
    "Devakottai, Sivagangai District",
    "Tamil Nadu – 630302, India",
  ],
  address: "SAS Energy Solutions, Devakottai, Sivagangai District, Tamil Nadu – 630302, India",
  hours: {
    weekdays: "Monday – Saturday · 9:30 AM – 7:00 PM",
    sunday: "Sunday · Closed",
  },
  googleBusiness: "https://www.google.com/search?q=SAS+Energy+Solutions",
  googleMapsLink: "https://maps.app.goo.gl/9ZCy8hiNSGvnfDKWA",
  // Embedded map URL – uses Google Maps place query so the iframe renders
  // Devakottai centred on the correct location without needing an API key.
  mapEmbed:
    "https://maps.google.com/maps?q=SAS%20Energy%20Solutions%20Devakottai%20Sivagangai%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
