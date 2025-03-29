import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div class={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
     <input class="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
     <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
  </div>
</nav>
  )
}

export default Navbar

Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defautProps = {title: 'Rahul'}