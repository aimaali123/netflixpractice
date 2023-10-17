import React from 'react'
import './App.scss';
import net from "./Images/net.png";
import {Link, useNavigate } from 'react-router-dom';
const Header = () => {

const navigate= useNavigate();
const clickHandle =(event)=>{
  event.preventDefault();
navigate("/login");
}


  return (
    <> 
     <nav className="navbar navbar-color">
  <div className="container"> 
  <Link to="/">
    <img  className="nav-im" src={net} alt='netfix-im'/>
    </Link>
    <form className="d-flex" role="search">
      <select>
        <option>English</option>
        <option>Urdu</option>
      </select>
      <button className="btn btn-danger sign-style" onClick={clickHandle} type="button">Sign In</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Header;
