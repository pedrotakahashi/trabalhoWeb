import React from 'react';
import Main from '../templates/Main';
import Table from '../generic/Table'

// export default props =>
//     <Main
//     icon="home" title="inicio"
//     subtitle="Projeto de cadastro">
//     <div className = 'display-4'> Bem vindo </div>
//     <hr/>
//     <p className="mb-0"> Sistema para exemplificação </p>
//     </Main>

export default function Home(){
    return (
    <>
        <h1 className="m-2" style={{fontFamily: "Helvetica", fontWeight: "900"}}>1000HOUSE STORE<i class="fa fa-shopping-cart ml-4"></i></h1>

        <Table/>
    </>
    )
}
