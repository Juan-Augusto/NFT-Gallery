import React from "react";
import apiNFTGallery from "../Services/Api";

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
            <div className="container" key={produto.codigo}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src={produto.link_foto} width="100%" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p><strong>Preço: ETH {produto.preco}</strong></p>
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