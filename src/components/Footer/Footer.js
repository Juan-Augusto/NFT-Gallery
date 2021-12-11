import React from 'react';
import './Style-footer.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center">
                        <h1>NFT <span>Gallery</span></h1> 
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center">
                        <p>©2021 Gallery</p>
                        <p>Todos os direitos reservados</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center social grid">
                        <a href="https://instagram.com"><i className="icon-instagram"></i></a>
                        <a href="https://facebook.com"><i className="icon-facebook"></i></a>
                        <a href="https://youtube.com"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;