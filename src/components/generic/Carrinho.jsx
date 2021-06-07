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
    
    const {contexto, setContexto, itemArray, setItemArray, total} = useContext(Context);
    

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

                </tbody>
            </Table>
            <Row className="ml-5 text-center" style={{backgroundColor: "white"}}>
            <Col lg="3">
             <h3>TOTAL: {Currency(total, { separator: ' ' }).format()}</h3>
            </Col>
        </Row>
        </Row>
        
        </>
    )

}
