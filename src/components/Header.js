import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="navbar-brand">
        Robyn in the Hood
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Map</Link>
          </li>
        </ul>
      </div>
      <form className="form-inline">
        <input className="form-control" type="search" placeholder="Search" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
      
      
    </div>
  )
}

export default Header;

// <nav classname="navbar navbar-expand-lg navbar-light bg-light">
// <Link classname="navbar-brand" to="/">Navbar</Link>
// <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//   <span classname="navbar-toggler-icon"></span>
// </button>

// <div classname="collapse navbar-collapse" id="navbarTogglerDemo02">
//   <ul classname="navbar-nav mr-auto mt-2 mt-lg-0">
//     <li classname="nav-item">
//       <Link classname="nav-link" to="/">Home <span classname="sr-only">(current)</span></Link>
//     </li>
//     <li classname="nav-item">
//       <Link classname="nav-link" to="/">Link</Link>
//     </li>
//     <li classname="nav-item">
//       <Link classname="nav-link" to="/">Not Disabled</Link>
//     </li>
//   </ul>
//   <form classname="form-inline my-2 my-lg-0">
//     <input classname="form-control mr-sm-2" type="search" placeholder="Search" />
//     <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </div>
// </nav>