import React from 'react';
import NavbarComponent from "../../assets/components/navbar/NavbarComponent"
import '../status/logout.css'


function Logout() {

  return (
    <div>
      <NavbarComponent />
      <div className='logout'>
      <h1>Keluar</h1>
    </div>
    </div>
  );
}

export default Logout;