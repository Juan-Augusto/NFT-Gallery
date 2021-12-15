import React from "react";
// import "./Style-jogos.css";
import featurePhotoGames from "../../Images/feature-photo-games.png"


class Teste extends React.Component{
    render(){
        return(
            <>
                <div className="container feature-photo">
                    <img src={featurePhotoGames} alt="" className="feature-photo-pic"/>
                    <h3 className="section--title">Jogos</h3>  
                </div>    
            </>
        );
    }
}
export default Teste;