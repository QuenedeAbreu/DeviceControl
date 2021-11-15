import React from 'react';
import { SidebarArea } from './styled';

function Siderbar(props) {
  return (
    <SidebarArea className={props.active}  >
      <h1>Sidebar</h1>
    </SidebarArea>

  );
}

export default Siderbar;

