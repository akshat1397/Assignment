import React from 'react';
import Home from './Home'
import About from './About'
import Loops from './02loops'
import Compo from './03compo'
import State from './04State'
import LifeCycle from './05LifeCycle'
import API from './06API'
import UseState from './FunCompo/01UseState'
import UseEffect from './FunCompo/02UseEffect'
import Loader from './FunCompo/03Loader'
import UseRef from './FunCompo/04UseRef'
import UseReducer from './FunCompo/05UseReducer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function Headernew(props) {
    const Menus = {'/home':'Home','/about':'About','/loops':'Loops','/compo':'Compo',
                  '/state':'State', '/lifecycle':'LifeCycle', 'api':'API', '/usestate': 'UseState', '/useeffect': 'UseEffect', '/loader': 'Loader', '/useref':'UseRef','/usereducer':'UseReducer'}
    const AllData = Object.entries(Menus).map((res,i)=>{
        console.log(res);
        return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
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
        {AllData}
       
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/loops' element={<Loops/>}/>
    <Route path='/compo' element={<Compo/>}/>
    <Route path='/state' element={<State/>}/>
    <Route path='/lifecycle' element={<LifeCycle/>}/>
    <Route path='/api' element={<API/>}/>
    <Route path='/useState' element={<UseState/>}/>
    <Route path='/useEffect' element={<UseEffect/>}/>
    <Route path='/loader' element={<Loader/>}/>
    <Route path='/useref' element ={<UseRef/>}/>
    <Route path='/usereducer' element ={<UseReducer/>}/>
</Routes>
</Router>

        </>
    );
}

export default Headernew;