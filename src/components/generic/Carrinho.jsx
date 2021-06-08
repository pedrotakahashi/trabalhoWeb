import React, {useContext, useEffect, useState} from 'react';
import { Col, Row, Button, Table } from 'reactstrap'
import ProductList from '../data/products.json'
import Currency from 'currency.js'
import CategoryCard from '../generic/CategoryCard'
import {Context} from '../Contexts/Context'
import Master from '../generic/Master'
export default function Carrinho(props){

    const master = Master.getInstance();
    const carrinho = master.getCarrinho();
        let aux = 0;
    
    const {contexto, setContexto, itemArray, setItemArray, total, setTotal, entrega, setEntrega, pedidos, setPedidos, idPedidos, setIdPedidos} = useContext(Context);
    
    let pedido = {
        itens : [],
        id : [idPedidos],
        totalPedido: total,
        
    };
    useEffect(() =>{
        console.log("itemarray: ", itemArray)
        // itemArray.map(item =>{
        //     aux++;
        // })
        // setPrecoTotal(aux);

    }, [itemArray])
    return(
        <>

        <h1 className="m-2" style={{fontFamily: "Helvetica", fontWeight: "900"}}>CARRINHO<i class="fa fa-shopping-cart ml-4"></i></h1>

        <Row className="m-5 text-center" style={{backgroundColor: "white"}}>
            <h4 className="mt-3 ml-2 mb-0" style={{fontFamily: "Helvetica", fontWeight: "900"}}>
            <i className="fa fa-list-ul mr-4"></i>
            LISTA DE PRODUTOS
            
            </h4>
            <Table dark>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Preço</th>
                    <th>Categorias</th>
                    </tr>
                </thead>
                <tbody>
                    {itemArray.map(item => (
                        <>
                            <tr>
                                <td>{item.id}</td>{/*id*/ }
                                <td>{item.title}</td>{/*titulo*/ }
                                <td><img src={item.image} style={{height:"100px", width: "100px"}}></img></td>{/*imagem*/ }
                                <td><h6>{Currency(item.price, { separator: ' ' }).format()}</h6></td>
                                <td>
                                {item.category.map(category =>(
                                    <h5>
                                        {category}
                                    </h5>
                                ))}
                                </td>
                            </tr>
                        </>
                    ))}

                    {(entrega.adress && entrega.zipCode)&&<tr>
                        <td>---</td>
                        <td>
                            <h6>Endereço de entrega: {entrega.adress} - {entrega.placement}, {entrega.zipCode} <br></br> Será recebido por: {entrega.name} Contato: {entrega.mail} </h6>
                        </td>
                        <td>---</td>
                        <td>
                            <h3 className="mr-4">TOTAL: {Currency(total, { separator: ' ' }).format()}</h3>
                        </td>
                        <td>---</td>
                    </tr>}
                    {(!(entrega.adress && entrega.zipCode))&&<tr>
                        <td>---</td>
                        <td>
                            <h6 style={{color: "red"}}>POR FAVOR, CADASTRE SEU ENDEREÇO ANTES DE CONTINUAR</h6>
                        </td>
                        <td>---</td>
                        <td>
                            {/* <h3 className="mr-4">TOTAL: {Currency(total, { separator: ' ' }).format()}</h3> */}
                        </td>
                        <td>---</td>
                    </tr>}

                </tbody>

                
            </Table>
            <Row className="ml-5 text-right" style={{backgroundColor: "white"}}>
                <Col lg="3">
                <Button disabled={(!(entrega.adress && entrega.zipCode))} onClick={() => {
                    let aux3 = idPedidos + 1;
                    let p = pedidos;


                    itemArray.map(i => {
                        pedido.itens.push(i);
                    })
                    pedido.totalPedido = total;
                    pedido.id = aux3;

                    p.push(pedido);
                    setIdPedidos(aux3)
                    setPedidos(p);
                    setItemArray([]);
                    setEntrega({})
                    setTotal(0);
                }} color="success">Fazer Pedido</Button>
                </Col>
                
               
            </Row>
        </Row>
        
        </>
    )

}
