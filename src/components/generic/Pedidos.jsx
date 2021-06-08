import React, {useContext, useEffect, useState} from 'react';
import { Col, Row, Button, Table } from 'reactstrap'
import ProductList from '../data/products.json'
import Currency from 'currency.js'
import CategoryCard from '../generic/CategoryCard'
import {Context} from '../Contexts/Context'
import Master from '../generic/Master'
export default function Pedidos(props){

    const master = Master.getInstance();
    

    
    const {contexto, setContexto, itemArray, setItemArray, total, entrega, pedidos} = useContext(Context);
    

    useEffect(() =>{
        console.log("pedidos:  ", pedidos)
        // itemArray.map(item =>{
        //     aux++;
        // })
        // setPrecoTotal(aux);

    }, [itemArray])
    return(
        <>

        <h1 className="m-2" style={{fontFamily: "Helvetica", fontWeight: "900"}}>PEDIDOS<i class="fa fa-shopping-cart ml-4"></i></h1>

        <Row className="m-5 text-center" style={{backgroundColor: "white"}}>
            <h4 className="mt-3 ml-2 mb-0" style={{fontFamily: "Helvetica", fontWeight: "900"}}>
            <i className="fa fa-list-ul mr-4"></i>
            LISTA DE PEDIDOS
            
            </h4>
            <Table >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Produtos</th>
                    <th>Total</th>
                    <th>Entrega</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => (
                        <>
                            <tr>
                                <td><h5>{pedido.id}</h5></td>{/*id*/ }
                                <td>
                                    {pedido.itens.map(item => (
                                        <>
                                        <Row className="mt-2">
                                            <img style={{width: "50px", height: "50px"}} src={item.image}></img>
                                            <h5 className="ml-5">-{item.title}</h5>
                                        </Row>
                                        
                                        
                                        </>
                                    ))}
                                    
                                </td>

                                <td><h5>{Currency(pedido.totalPedido, { separator: ' ' }).format()}</h5></td>
                                
                                <td><h5>Entrega em {Math.floor(Math.random() * 10) + 1 } Dias</h5></td>
                                
                            </tr>
                        </>
                    ))}

                    

                </tbody>

                
            </Table>
            
        </Row>
        
        </>
    )
    return <></>
}
