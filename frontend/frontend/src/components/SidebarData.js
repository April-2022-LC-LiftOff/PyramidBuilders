import React from 'react'
import { Link } from "react-router";
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        icon: <FaIcons.FaHome />,
        link:
        <Link to="/">Home</Link>
    },
    {
        title: 'Profile',
        icon: <FaIcons.FaUser />,
        link: <Link to='/profile'>Profile</Link>
    },
    {
        title: 'Review',
        icon: <FaIcons.FaComment />,
        link: <Link to='/review'>Review</Link>
    },
    {
        title: 'Search',
        icon: <FaIcons.FaSearch />,
        link: <Link to='/search'>Search</Link>
    },
    {
        title: 'Filter',
        icon: <FaIcons.FaFilter />,
        link: <Link to='/filter'>Filter</Link>
    }
];