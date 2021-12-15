import React from "react";
import "./Style-inicio.css"; 
import teste from "../../Images/teste.png";
import galerias from "../../Images/galerias.png";
import explore from "../../Images/explore.png";
import selecione from "../../Images/selecione.png";
import jogos from "../../Images/jogos-pic.png";
import artes from "../../Images/artes-pic.png";
import musicas from "../../Images/musicas-pic.png";

class Caroussel extends React.Component{
    render(){
        return(
            <div>
                <div className="section-nft">
                    <img src={teste} className="image-init" alt="" />
                    <div className="section-nft-content">
                        <h3>Seja parte da nova revolução da arte</h3>
                        <div className="divider-1"></div>
                        <h2>Conheça o mercado de NFTs, a forma de arte da era da criptoeconomia.</h2>
                        <button className="saiba-mais"><h2 className="button-description">Saiba mais</h2></button>
                    </div>
                </div>

                <div className="product-presentation">
                    <div className="presentation-item">
                        <img src={galerias} className="d-block categories-nft" alt="..."/>
                        <h1>Galerias</h1>
                        <p>Conheça nossa curadoria de NFT`s com categorias de jogos, artes e músicas.</p>
                    </div>
                    <div className="presentation-item">
                        <img src={explore} className="d-block categories-nft" alt="..."/>
                        <h1>Explore</h1>
                        <p>Explore dentro das galerias e descubra nossa seleção.</p>

                    </div>
                    <div className="presentation-item">
                        <img src={selecione} className="d-block categories-nft" alt="..."/>
                        <h1>Selecione</h1>
                        <p>Se interessou pela NFT? Clique e và diretamente à página de compra.</p>

                    </div>
                    <h3 className="text-transition">Experimente, descubra e explore as categorias</h3>
                    <div className="card-home-section">
                        <div className="card">
                            <img src={jogos} className="card-img-top" alt="..."/>
                            <div className="card-body card-games">
                                <p className="card-text">JOGOS</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={artes} className="card-img-top" alt="..."/>
                            <div className="card-body card-arts">
                                <p className="card-text">ARTES</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={musicas} className="card-img-top" alt="..."/>
                            <div className="card-body card-musics">
                                <p className="card-text">MÚSICAS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Caroussel;