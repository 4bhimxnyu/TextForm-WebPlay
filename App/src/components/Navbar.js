import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-NavLink active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink" to="/">{props.NavLinkName}</NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-NavLink disabled" to='/'>Disabled</NavLink>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode ==='light'?'dark':'light'} Mode`}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string ,
  linkName: PropTypes.string
}