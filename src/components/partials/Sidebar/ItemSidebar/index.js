import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  SidebarLink,
  SidebarNoLink,
  SidebarLabel,
  DropdownLink
} from "./styled";

function ItemSidebar({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      {item.subNav ? <SidebarNoLink onClick={item.subNav && showSubnav} >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>

        <div >
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>

      </SidebarNoLink>
        :
        <SidebarLink to={item.path}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>

        </SidebarLink>
      }
      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink key={index} to={item.path} >
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </div>
  );
}

export default ItemSidebar;