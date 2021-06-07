import React, {useContext} from 'react';
import Main from '../templates/Main';
import Table from '../generic/Table'
import Context from '../Contexts/Context'

export default function Home(){

        return (
    <>
        <h1 className="m-2" style={{fontFamily: "Helvetica", fontWeight: "900"}}>Games Plus Ultra<i class="fa fa-shopping-cart ml-4"></i></h1>
        
            <Table/>
        
    </>
    )
}
