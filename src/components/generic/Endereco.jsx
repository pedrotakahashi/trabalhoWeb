import React, {useContext, useEffect, useState} from 'react';
import { Col, Row, Button, Table } from 'reactstrap'
import {Context} from '../Contexts/Context'
export default function Endereco(props){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const {entrega, setEntrega} = useContext(Context);
    
    let obj = {
        name : "",
        mail : "",
        adress : "",
        placement : "",
        zipCode: ""
    };
    
    const [error, setError] = useState(false);

    return(
        <>

        <h1 className="m-2" style={{fontFamily: "Helvetica", fontWeight: "900"}}>ENDEREÇO DE ENTREGA<i class="fa fa-shopping-cart ml-4"></i></h1>
        <Row className="m-5" style={{backgroundColor: "white", border: "1px solid black", borderRadius: "10px"}}>
            <Col lg="12">
            <div className="form p-4 align-center">
            <h5>Cadastre seu endereço de entrega:</h5>
            <div className="row">
                
                <div className="col-12 col-md-6">
                    
                    <div className="form-group">
                        <label> Nome </label>
                        <input type="text" className="form-control"
                        name="name" 
                        
                        onChange={e=>{setNome(e.target.value); setError(false)}}
                        placeholder = "digite o nome"/>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label> Email </label>
                        <input type="text" className="form-control"
                        name="email" 
                        onChange={e=>{setEmail(e.target.value); setError(false)}}
                        placeholder = "digite o email"/>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label> Endereço </label>
                        <input type="text" className="form-control"
                        name="endereço" 
                        
                        onChange={e=>{setEndereco(e.target.value); setError(false)}}
                        placeholder = "digite rua/avenida/travessa"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label> Bairro: </label>
                        <input type="text" className="form-control"
                        name="bairro:"                    
                        onChange={e=>{setBairro(e.target.value); setError(false)}}
                        placeholder = "Digite o bairro"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label> CEP: </label>
                        <input type="text" className="form-control"
                        name="cep:"                    
                        onChange={e=>{setCep(e.target.value); setError(false)}}
                        placeholder = "Digite o cep"/>
                    </div>
                </div>
            </div>
            <hr/>

            {(error)&&<h6 style={{color: "red"}}>Preencha todos os dados</h6>}
            <div className="row text-center">
                <div className="col-12 d-flex-justify-content-end">
                    <button className="btn btn-primary"
                        onClick={e=>{

                            if(nome != "" &&
                                email != "" &&
                                endereco != "" &&
                                bairro != ""&&
                                cep != ""
                                )
                                {
                                    obj.name = nome;
                                    obj.mail = email;
                                    obj.adress = endereco;
                                    obj.placement = bairro;
                                    obj.zipCode = cep;
                                    setEntrega(obj);
                                    setError(false);
                                }
                            else{
                                setError(true)
                            }
                            
                        }}>
                        Salvar
                    </button>
                    <button className="btn btn-secondary ml-3"
                        >
                        Cancelar
                    </button>
                </div>
            </div>


            </div>
            </Col>
            
        </Row>
        
        </>
    )
}
