import React, { useState, useEffect } from 'react';
import { PageAll } from './styled';
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Siderbar from '../Sidebar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header(props) {

  //Open sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  var largura = window.innerWidth;
  useEffect(() => {
    if (largura <= 600) {
      setIsShow(true);
      setIsOpen(true);
    } else {
      setIsShow(false);
      setIsOpen(false);
    }
  }, [largura])

  useEffect(() => {
    window.addEventListener('resize', function () {
      largura = window.innerWidth;
      if (largura <= 600) {
        setIsShow(true);
        setIsOpen(true);
      } else {
        setIsShow(false);
        setIsOpen(false);
      }
    });
  }, [largura])

  const [search, setSearch] = useState('');

  const showSidebar = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const sistemLogout = (e) => {
    e.preventDefault();
    alert('Logout');
    Cookies.remove('token', { path: '' })
    window.location.reload();
  }
  const user = {
    name: 'Quenede Abreu array',
    email: 'quenede.in@gmail.com'
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
          <Link to="/profile">
            <FaUserCircle className='icon--perfil' />
          </Link>
          <button onClick={sistemLogout}>
            <div className="headerContent--right--logout">
              <MdLogout className='icon--logout' />
              <span>Sair</span>
            </div>
          </button>
        </div>
      </div>

      <div className='bodyContent'>
        <Siderbar active={isOpen ? 'active' : ""} user={user} />
        {!isOpen && isShow &&
          <div className="box--all-shadow" onClick={showSidebar}></div>
        }
        {props.children}
      </div>
    </PageAll>


  );
}

export default Header;