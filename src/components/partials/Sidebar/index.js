import React, { useState } from 'react';
import { SidebarArea } from './styled';
import { SidebarData } from './dataSidebar/SidebarData';
import SidebarItem from './ItemSidebar';
import ImgPerfil from '../../../assets/images/perfilPadrao.jpg';
import { AiFillHome, AiFillBank } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Siderbar(props) {

  const [userAuthorization, setUserAuthorization] = useState(0);

  const itemHome = {
    section: false,
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    authorization: 2
  }
  // Filter item sidebar
  const authorizationMenu = (item, index) => {
    if (userAuthorization === 0
      && (item.authorization === 0
        || item.authorization === 1
        || item.authorization === 2)) {
      return ItemSelecetd(item, index);
    }
    else if (userAuthorization === 1
      && (item.authorization === 1
        || item.authorization === 2)) {

      return ItemSelecetd(item, index);
    }
    else if (userAuthorization === 2
      && item.authorization === 2) {
      return ItemSelecetd(item, index);
    }

  }
  // Type of item selected
  const ItemSelecetd = (item, index) => {
    if (item.bar) {
      return (
        <div className='bar--bottom--item--sidebar' key={index}></div>
      )
    }
    if (item.section) {
      return (
        <div className='sidebar--section' key={index}>
          <h1>{item.title}</h1>
        </div>
      )
    } else {
      return (
        <div key={index}>
          <SidebarItem item={item} />
        </div>
      )
    }

  }


  return (
    <SidebarArea className={props.active}  >
      <div className='sidebar--top'>
        <div className="sidebar--header">
          <div className="sidebar--header--imgPerfil">
            <img src={ImgPerfil} alt="Imagem Perfil" />
          </div>
          <h1>{props.user.name}</h1>
          <span>{props.user.email}</span>
        </div>
        <SidebarItem item={itemHome} />
        {SidebarData.map((item, index) => {
          return (
            // <SidebarItem item={item} key={index} />

            authorizationMenu(item, index)

          )
        })}
      </div>
      <div className='sidebar--bottom' >
        <Link to="/teste" >
          <AiFillBank className='icon-bank' />
          <span>BNDV</span>
        </Link>
      </div>
    </SidebarArea>

  );
}

export default Siderbar;

