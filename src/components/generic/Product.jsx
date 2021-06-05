import React from 'react';
import { Col, Row, Button } from 'reactstrap'
import ProductList from '../data/products.json'
import Currency from 'currency.js'
import CategoryCard from '../generic/CategoryCard'
export default function Product(props){

    // const products = ProductList;
    // console.log(products.products);
    


    return (<>
        <Row className="text-center m-3" style={{backgroundColor: "white"}}>
            {ProductList.products.map(item =>(
                <>
            
                <Col className="text-center p-3 m-3" style={{border: "1px solid black", borderRadius: "10px"}} lg="2">
                    <img src={item.image} style={{height:"100px", width: "100px"}}></img>
                    <h4>{item.title}</h4>
                    <h5>{Currency(item.price, { separator: ' ' }).format()}</h5>
                    <Row className="text-center">
                        {item.category.map(category =>(
                            <>
                                <CategoryCard categoria={category}></CategoryCard>
                            </>
                        ))}
                    </Row>
                    
                    <Button color="warning">Comprar</Button>
                </Col>
                </>
            ))} 
        </Row>
        
    </>)
}