import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import Product from '../generic/Product'
import {Context} from '../Contexts/Context'
import Master from '../generic/Master'
export default function Table(){

    const {contexto, setContexto} = useContext(Context);
    const master = Master.getInstance();
    // useEffect(() => {
    //     setContexto(master.getCurrentContext());
    // }, [contexto])
    return(
        <>
        <Product/>
        </>
    )
}