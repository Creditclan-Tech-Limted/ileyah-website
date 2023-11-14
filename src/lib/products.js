import { IconDoorEnter, IconHome, IconHomeBolt, IconListSearch } from "@tabler/icons-react";

export default [
  {
    name: 'Monthly Rent',
    description: `Pay your rent monthly forerver.`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconHome,
    homeLink: '/',
    dashboardLink: '/',
  },
  {
    name: 'Subscription Services',
    description: `Unlock a World of Convenience - Elevate Your Lifestyle with Our Subscription Services.`,
    backgroundColor: 'bg-yellow-600',
    textColor: 'text-red-500',
    icon: IconHomeBolt,
    homeLink: '/',
    dashboardLink: '/',
  },
  {
    name: 'Shortlet(Beta)',
    description: `Overnight or short stay? We have you covered at ileyah.`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconDoorEnter,
    homeLink: '/',
    dashboardLink: '/',
  },
  {
    name: 'Listings',
    description: `Browse our well curated listings of over 100k+ properties`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconListSearch,
    homeLink: '/listings',
    dashboardLink: '/listings',
  }
];