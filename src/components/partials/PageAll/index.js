import React, { useState } from 'react';
import { PageAll } from './styled';
import { AiOutlineMenu } from "react-icons/ai";
import Siderbar from '../Sidebar';

function Header(props) {
  const [isOpen, setIsOpen] = useState(true);

  const showSidebar = () => setIsOpen(!isOpen);
  return (

    <PageAll>
      <div className="headerContent">
        <AiOutlineMenu onClick={showSidebar} />
      </div>
      <div className='bodyContent'>
        <Siderbar active={isOpen ? 'active' : ""} />
        {props.children}
      </div>
    </PageAll>


  );
}

export default Header;