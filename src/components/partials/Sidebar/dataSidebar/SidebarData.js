import React from "react";
// import * as FaIcons from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiComputerLine
} from "react-icons/ri";
import { GiBinoculars } from "react-icons/gi";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    authorization: 0
  },
  {
    title: 'Overview',
    path: '/overview',
    icon: <GiBinoculars />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    authorization: 0,
    subNav: [
      {
        title: 'Computers',
        path: '/overview/computers',
        icon: <RiComputerLine />,
        authorization: 0
      }
    ]
  }
];