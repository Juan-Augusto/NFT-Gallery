import React from "react";
import "./Style-detalhes.css";
import apiNFTGallery from "../Services/Api";
import { NavLink } from 'react-router-dom';


class Detalhes extends React.Component{
    state = {
        produto: {
            codigo: 0,
            nome: '',
            descricao: '',
            link_foto: ''
        }
    }
    render(){
        const {produto} = this.state
        return(
            <div className="container-fluid" key={produto.codigo}>
                <div className="details-container">
                    <div className="container-fluid details-title">
                        <h3 className="product-title">{produto.nome}</h3>
                    </div>
                    <NavLink to="/" className="navlink"><i className="icon-arrow_back_ios"></i></NavLink>
                    <div className="details-show">
                        <img src={produto.link_foto} className="product-photo"/>
                        <div className="details-description">
                            <p className="product-description">{produto.descricao}</p>
                            <div className="buttons-section">
                                <a href={produto.disponivel} target="_blank"><button className="button-details">Conheça o produto <i className="icon-planet"></i></button></a>
                                <a href={produto.preco} target="_blank"><button className="button-details">Redes associadas <i className="icon-planet"></i></button></a>
                                <a href={produto.destaque} target="_blank"><button className="button-details">Mais detalhes <i className="icon-read_more"></i></button></a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
            let id = window.location.pathname.replace("/produtos/", "");
            console.log("ID recuperado = " + id);
            apiNFTGallery.get("/produtos/" + id).then(res =>{
                this.setState({produto: res.data})
            })
            
        
    }
}
export default Detalhes;