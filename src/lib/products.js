import { IconDatabase, IconDoorEnter, IconFileText, IconHome, IconHome2, IconHomeBolt, IconMessageChatbot, IconUserCheck } from "@tabler/icons-react";

export default [
    {
        name: 'Rent now, Pay Later',
        description: `Is your rent due in a few days? Ileyah to the rescue.`,
        backgroundColor: 'bg-blue-500',
        textColor: 'text-blue-500',
        icon: IconHome,
        homeLink: '/sensii',
        dashboardLink: '/dashboard/sensii',
    },
    {
        name: 'Rent to Own(Beta)',
        description: `Unlock the Door to Ownership: Rent to Own Solutions.`,
        backgroundColor: 'bg-yellow-600',
        textColor: 'text-red-500',
        icon: IconHomeBolt,
        homeLink: '/betrue',
        dashboardLink: '/dashboard/betrue',
    },
    {
        name: 'Shortlet(coming soon)',
        description: `Temporary Haven: Embrace Short-Term Rentals.`,
        backgroundColor: 'bg-teal-500',
        textColor: 'text-teal-500',
        icon: IconDoorEnter,
        homeLink: '/statement',
        dashboardLink: '/dashboard/statement',
    },
    // {
    //     name: 'MineMe',
    //     description: `A bespoke customer data analyzed for businesses`,
    //     backgroundColor: 'bg-orange-500',
    //     textColor: 'text-orange-500',
    //     icon: IconDatabase,
    //     homeLink: '/mineme',
    //     dashboardLink: '/dashboard/mineme',
    // }
];