import React, { useState } from 'react';
import { PageAll } from './styled';
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Siderbar from '../Sidebar';

function Header(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');

  const showSidebar = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (

    <PageAll>
      <div className="headerContent">
        <div className="headerContent--left">
          <AiOutlineMenu onClick={showSidebar} className='icon--menu' />
        </div>
        <div className="headerContent--center">
          <div className="headerContent--center--search">
            <form onClick={handleSearch}>
              <FaSearch className='icon--search' />
              <input type="text" placeholder="Pesquisar" value={search} onChange={handleSearch} />
            </form>
          </div>
        </div>
        <div className="headerContent--right">
          <FaUserCircle />
        </div>
      </div>
      <div className='bodyContent'>
        <Siderbar active={isOpen ? 'active' : ""} />
        {props.children}
      </div>
    </PageAll>


  );
}

export default Header;