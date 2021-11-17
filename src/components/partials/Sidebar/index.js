import React from 'react';
import { SidebarArea } from './styled';
import { SidebarData } from './dataSidebar/SidebarData';
import SidebarItem from './ItemSidebar';

function Siderbar(props) {
  return (
    <SidebarArea className={props.active}  >
      <div className="sidebar--header">
        <h1>Quenede Abreu</h1>
      </div>
      {SidebarData.map((item, index) => {
        return (
          <div>
            <SidebarItem item={item} key={index} />
            <div className='bar--bottom--item--sidebar'></div>
          </div>
        )
      })}
    </SidebarArea>

  );
}

export default Siderbar;

