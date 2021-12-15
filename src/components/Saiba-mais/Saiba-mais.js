import React from "react";
import "./Style-saiba-mais.css";

class SaibaMais extends React.Component{
    render(){
        return(
            <>
                <div className="extras-section">
                    <iframe src={"https://www.youtube.com/watch?v=36PfcKn1Q_8&t=64s"} frameborder="10"></iframe>
                </div>
                <div className="extras-presentation">
                    <h2 className="extras-title-section">Conselhos e recomendações sobre NTF’s:</h2>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://i.ytimg.com/vi/MaGM1jMo4GU/maxresdefault.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://www.youtube.com/watch?v=MaGM1jMo4GU" className="btn--card">
                                    <h5 className="card-title">O que são NFTs e como ganhar dinheiro com elas?</h5>
                                    <p className="extra-cards">Um item fungível, como o dinheiro, pode ser trocado por outro. Já os itens infungíveis são como exemplares únicos.</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://i.ytimg.com/vi/6UxqXPx_y9s/maxresdefault.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://i.ytimg.com/vi/6UxqXPx_y9s/maxresdefault.jpg" className="btn--card">
                                    <h5 className="card-title">Como investir em jogos NFT’s</h5>
                                    <p className="extra-cards"> como começar a investir em jogos NFT como Axie Infinity, Cryptobomb, cryptomines, coin to fish, etc...</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://livecoins.com.br/wp-content/uploads/2021/11/Homem-manipulando-o-Metaverso-696x385.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://livecoins.com.br/especialistas-em-metaverso-nft-e-blockchain-sao-profissoes-do-futuro/" className="btn--card">
                                    <h5 className="card-title">Metaverso, NFT e Blockchain são profissões do futuro</h5>
                                    <p className="extra-cards">Estudo da Forbes Brasil, aponta cinco profissões que já são realidades, dentre elas as de especialista em NFT.</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://studioventuras.com/wp-content/uploads/2021/04/ABRE-Everydays-The-First-5000-Days-Beeple-034733-by-Christies.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://sonartrade.com.br/investimentos/mundo-cripto-tudo-o-que-voce-precisa-saber-sobre-os-nft/#:~:text=Fungible%2DToken)%3F-,Se%20voc%C3%AA%20j%C3%A1%20faz%20parte%20do%20mundo%20do%20trading%2C%20certamente,ao%20termo%20Non%2Dfungible%20token.&text=No%20caso%20do%20bitcoin%2C%20que,ter%C3%A1%20exatamente%20o%20mesmo%20valor." className="btn--card">
                                    <h5 className="card-title">O que são NFT’s?</h5>
                                    <p className="extra-cards">Se você já faz parte do mundo do trading, certamente já ouviu falar sobre NFTs. Mas, sabe o que isso significa?</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://i.ytimg.com/vi/GqpD27xMZNU/maxresdefault.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://www.youtube.com/watch?v=GqpD27xMZNU" className="btn--card">
                                    <h5 className="card-title">Entenda o que é Non-fungible token em 9 minutos</h5>
                                    <p className="extra-cards">NFT vem sendo um dos pilares da chamada Web 3.0 quando se trata da validação de autenticidade</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 cards-extras">
                        <div className="card extra-video-cards">
                            <img src="https://comoinvestir.thecap.com.br/wp-content/uploads/2021/03/o-que-sao-nfts-e-como-funcionam-os-tokens-nao-fungiveis-nft.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="https://comoinvestir.thecap.com.br/o-que-sao-nfts-e-como-funcionam-os-tokens-nao-fungiveis-nft/" className="btn--card">
                                    <h5 className="card-title">Entenda como funcionam os tokens não fungíveis</h5>
                                    <p className="extra-cards">Os NFTs se tornaram verdadeiras tendências no mercado de cripto. Entenda as vantagens e desvantagens.</p>
                                </a>    
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default SaibaMais;