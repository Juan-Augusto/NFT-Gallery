import React from 'react';
import { Link } from 'react-router-dom';
import './Style-navbar.css'
class  Navbar extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">NFT Gallery</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="navlink">Início</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/produtos" className="navlink">Produtos</Link>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </nav> 
        );
    }
}
export default Navbar;