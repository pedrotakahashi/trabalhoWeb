import React from 'react';
import { Col, Row, Button } from 'reactstrap'
import ProductList from '../data/products.json'

export default function Product(props){

    // const products = ProductList;
    // console.log(products.products);

    const category = props.categoria;
    let color = '';
    switch(category)
    {
        case "Ação":
            color = "#EF6461"
            break;
        case "Aventura":
            color = "#EDAE49"
            break;
        case "Corrida":
            color = "#30638E"
            break;
        default: 
            color = "red";
            break;
            
        
    }
    


    return (<>
        
        <Col style={{height: "1em", float: "left", margin: "5px", backgroundColor: color, borderRadius: "8px"}}>
            <p style={{fontSize: "10px", color: "white"}}>{category}</p>
        </Col>
        
    </>)
}