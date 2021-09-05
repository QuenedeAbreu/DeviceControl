import React from 'react';
import { All } from './style';
import Header from '../../components/partials/Header';
import Siderbar from '../../components/partials/Sidebar';
function page() {

  return (
    <All>
      <Header />
      <div className="containerAll">
        <Siderbar />
        <div className="containerBody">
          <h1>Home Page</h1>
          <p>First Page</p>
        </div>
      </div>

    </All>
  );
}

export default page;