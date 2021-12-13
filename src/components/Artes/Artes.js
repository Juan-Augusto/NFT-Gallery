import React, { useEffect, useState } from "react";
import "./Style-artes.css";
import { NavLink, useParams } from "react-router-dom";
import apiNFTGallery from "../Services/Api"


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
                <div className="container teste">
                    <div className="row">
                        <div className="col-12 text-center mt-3 mb-3">
                            <h3>Confira os produtos</h3>
                        </div>
                    </div>
                    <div className="row">
                        { lista.map(produto => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                <div className="card" key={produto.id_categoria}>
                                    <img src={produto.link_foto} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.nome}</h5>
                                        <p className="card-text">Owner: {produto.descricao}</p>
                                        <p className="card-text">{produto.preco}ETH</p>
                                        <NavLink to={'/produtos/' + produto.codigo} className="btn btn-primary">Go somewhere</NavLink>
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
