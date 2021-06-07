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
    const {contexto, setContexto, itemArray, setItemArray, total, setTotal} = useContext(Context);
    let auxItems = itemArray;

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
        else if(contexto == "Corrida")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "Corrida")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        // <Route  path ="/rpg" component={Home}/>
        //     <Route  path ="/simulador" component={Home}/>
        //     <Route  path ="/estrategia" component={Home}/>
        //     <Route  path ="/fps" component={Home}/>
        //     <Route  path ="/terror" component={Home}/>
        else if(contexto == "RPG")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "RPG")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        else if(contexto == "Simulador")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "Simulador")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        else if(contexto == "Estratégia")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "Estratégia")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        else if(contexto == "FPS")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "FPS")
                    {
                        aux.push(item);
                    }
                })
            })
            setProductsShow(aux);
        }
        else if(contexto == "Terror")
        {
            ProductList.products.map(item =>{
                item.category.map(category =>{
                    if(category == "Terror")
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
                    
                    <Button color="success" onClick={() => {auxItems.push(item); setItemArray(auxItems); setTotal(total + item.price) }} >Comprar</Button>
                </Col>
                </>
            ))} 
        </Row>
        
    </>)
}