import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Home from './Home'
import About from './About'

function Header(props) {
    const MenuData = {'/home':'Home','/about':'About'}
    const ReturnData = Object.entries(MenuData).map((res,i)=>{
        console.log(res);
        console.log(i);
        return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]} </Link>
      </li>
    })
    return (
      <>
      <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        {ReturnData}
       
      </ul>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
</Routes>
</Router>
      </>
    );
}

export default Header;