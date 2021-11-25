import React from "react";
import { FaUserGraduate } from "react-icons/fa";
// import { AiFillHome } from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiComputerLine
} from "react-icons/ri";
import { GiBinoculars } from "react-icons/gi";

//Administrador = 0
//Supervisor = 1
//Estagiário = 2


export const SidebarData = [
  // Section administrador
  {
    section: false,
    bar: true,
    authorization: 0,
  },
  {
    section: true,
    title: "Administrador",
    authorization: 0,
  },
  // {
  //   section: false,
  //   title: 'Home',
  //   path: '/',
  //   icon: <AiFillHome />,
  //   authorization: 0
  // },
  {
    section: false,
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
  },
  {
    section: false,
    bar: true,
    authorization: 0,
  },
  // End section administrador

  // Section Supervisores
  {
    section: true,
    title: "Supervisores",
    authorization: 1,
  },
  {
    section: false,
    title: 'Item de Supervisor',
    path: '/teste',
    icon: <RiAdminFill />,
    authorization: 1
  },
  {
    bar: true,
    authorization: 1,
  },

  // end section Supervisores

  // Section Estagiários
  {
    section: true,
    title: "Estagiários",
    authorization: 2,
  },
  {
    section: false,
    title: 'Item de Estagiário',
    path: '/teste',
    icon: <FaUserGraduate />,
    authorization: 2
  },
  {
    section: false,
    bar: true,
    authorization: 2,
  }
  // end section Estagiários
];