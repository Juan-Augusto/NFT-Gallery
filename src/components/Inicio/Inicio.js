import React from "react";
import "./Style-inicio.css"
class Caroussel extends React.Component{
    render(){
        return(
            <div>
                <div className="section-nft">
                    <h3>Conheça a mais nova forma de mercadoria que revolucionou o mercado de criptomoedas</h3>
                    <button className="saiba-mais">Saiba mais</button>
                    <img src="https://img.freepik.com/vetores-gratis/fundo-elegante-padrao-de-linha-hexagonal_1017-19742.jpg?size=626&ext=jpg" className="image-init" alt="" />
                </div>
                <div className="product-presentation">
                    <div className="presentation-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1590/1590898.png" class="d-block categories-nft" alt="..."/>
                        <h1>Galerias</h1>
                        <p>Conheça nossa curadoria de NFTs, com categorias envolvendo games, artes e música</p>
                    </div>
                    <div className="presentation-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JGj3PxSBUg8xoSE4n6fd80AIGXRRrIdmhA&usqp=CAU" class="d-block categories-nft" alt="..."/>
                        <h1>Explore</h1>
                        <p>Conheça nossa curadoria de NFTs, com categorias envolvendo games, artes e música</p>

                    </div>
                    <div className="presentation-item">
                        <img src="https://www.seekpng.com/png/detail/410-4109531_carrinho-de-compras-.png" class="d-block categories-nft" alt="..."/>
                        <h1>Compra</h1>
                        <p>Conheça nossa curadoria de NFTs, com categorias envolvendo games, artes e música</p>

                    </div>
                </div>
                <div className="section-games">
                    <h3 className="section-description-right">Obtenha os colecionáveis mais desejados do mundos das Blockchains</h3>
                    <button className="saiba-mais">Games</button>
                </div>
                <div className="section-art">
                    <h3 className="section-description-left">Veja o que há de melhor no mercado digital mais aquecido do momento</h3>
                    <button className="saiba-mais">Arte</button>
                </div>
                <div className="section-music">
                    <h3 className="section-description-right">Confira a mais nova forma de entretenimento musical</h3>
                    <button className="saiba-mais">Música</button>
                </div>
            </div>
        );
    }
}
export default Caroussel;