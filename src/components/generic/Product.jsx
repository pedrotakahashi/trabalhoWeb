import React, {useState, useEffect, useContext} from 'react';
import { Col, Row, Button } from 'reactstrap'
import ProductList from '../data/products.json'
import Currency from 'currency.js'
import CategoryCard from '../generic/CategoryCard'
import Master from '../generic/Master'
import {Context} from '../Contexts/Context'
export default function Product(props){

    // const products = ProductList;
    // console.log(products.products);
    const master = Master.getInstance();
    const [productsShow, setProductsShow] = useState([]);
    let aux = [];
    const {contexto, setContexto} = useContext(Context);

    useEffect(() =>{
        console.log("contexto: ",contexto)
        if(contexto == "Ação")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "Ação")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        else{
            setProductsShow(ProductList.products);
        }
    }, [contexto])

    
    return (<>
        <Row className="text-center m-3" style={{backgroundColor: "white"}}>
            {productsShow.map(item =>(
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
                    
                    <Button color="success" >Comprar</Button>
                </Col>
                </>
            ))} 
        </Row>
        
    </>)
}