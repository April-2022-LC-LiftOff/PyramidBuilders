import React from 'react'
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        icon: <FaIcons.FaHome />,
        link: '/home'
    },
    {
        title: 'Profile',
        icon: <FaIcons.FaUser />,
        link: '/profile'
    },
    {
        title: 'Review',
        icon: <FaIcons.FaComment />,
        link: '/review'
    },
    {
        title: 'Search',
        icon: <FaIcons.FaSearch />,
        link: '/search'
    },
    {
        title: 'Filter',
        icon: <FaIcons.FaFilter />,
        link: '/filter'
    }
];