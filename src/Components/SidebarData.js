import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <BsIcons.BsCalendarFill />,
        cName: 'nav-text'
    },
    {
        title: 'Chatbot',
        path: '/chatbot',
        icon: <BsIcons.BsFillChatDotsFill />,
        cName: 'nav-text'
    },
]