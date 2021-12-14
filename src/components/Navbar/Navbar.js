import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style-navbar.css'
class  Navbar extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light" id="navbar--dom">
                    <div className="container-fluid">
                        <a className="navbar--title" href="#"><h1>Horizon</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="navlink"><h3>Home</h3></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/saibamais"} className="navlink"><h3>Saiba mais</h3></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/categorias/' + 1} className="navlink"><h3>Artes</h3></NavLink>
                                </li>    
                                <li className="nav-item">
                                    <NavLink to={'/categorias/' + 2} className="navlink"><h3>Jogos</h3></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/categorias/' + 3} className="navlink"><h3>Músicas</h3></NavLink>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </nav> 
        );
    }
}
export default Navbar;