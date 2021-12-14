import React, { useEffect, useState } from "react";
import "./Style-jogos.css";
import { NavLink, useParams } from "react-router-dom";
import apiNFTGallery from "../Services/Api"
import featurePhotoGames from "../../Images/feature-photo-games.png"


const Jogos= () =>{
    const [lista, setLista]= useState([]); 
    const props = useParams();
    useEffect(() =>{
                apiNFTGallery.get("/categorias/" + props.id).then(res =>{
                    setLista(res.data)
                })
    } , [props]);
    return(
 
            <>
                <div className="container teste">
                    <div className="container feature-photo">
                        <img src={featurePhotoGames} alt="" className="feature-photo-pic"/>
                    </div>
                    <div className="row">
                        <h3 className="section--title">Jogos</h3>
                        { lista.map(produto => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                <div className="card" key={produto.id_categoria}>
                                    <img src={produto.link_foto} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.nome}</h5>
                                        <NavLink to={'/produtos/' + produto.codigo} className="btn--card"><h5 className="card-text">{produto.nome}</h5></NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

export default Jogos;
