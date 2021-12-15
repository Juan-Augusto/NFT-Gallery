import React, { useEffect, useState } from "react";
import "./Style-artes.css";
import { NavLink, useParams } from "react-router-dom";
import apiNFTGallery from "../Services/Api"
import featurePhotoArts from "../../Images/feature-photo-art.png"
    

const Artes= () =>{
    const [lista, setLista]= useState([]); 
    const props = useParams();
    useEffect(() =>{
                apiNFTGallery.get("/categorias/" + props.id).then(res =>{
                    setLista(res.data)
                })
    } , [props]);
    return(
 
            <>
                <div className="container-fluid">
                    <div className="container-fluid feature-photo">
                            <img src={featurePhotoArts} alt="" className="feature-photo-pic"/>
                    </div>
                    <div className="container-fuid row product-presentation">
                        <h3 className="section--title">Confira os produtos</h3>
                        { lista.map(produto => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                                <div className="card" key={produto.id_categoria}>
                                    <img src={produto.link_foto} class="card-img-top" alt="..."/>
                                    <div className="card-body">
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

export default Artes;
