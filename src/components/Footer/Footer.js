import React from 'react';
import './Style-footer.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="footer">
                        <h1 className="footer-text">Horizon</h1> 
                        <p className="footer-text">©2021</p>
                        <p className="footer-text">Todos os direitos reservados</p>
                </div>
                    {/* <div className="social grid">
                        <a href="https://instagram.com"><i className="icon-instagram"></i></a>
                        <a href="https://facebook.com"><i className="icon-facebook"></i></a>
                        <a href="https://youtube.com"><i className="icon-youtube"></i></a>
                    </div> */}
                </div>
        );
    }
}
export default Footer;