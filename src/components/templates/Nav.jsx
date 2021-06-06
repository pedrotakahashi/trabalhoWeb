import "./Nav.css"

import React, {useContext} from 'react'
import Master from '../generic/Master'
import {Context} from '../Contexts/Context'

export default function Nav (props){
    const master = Master.getInstance();
    const {contexto, setContexto} = useContext(Context);
    return(
        <aside className = "menu-area">
        
        <nav className="menu">
            <a href="#/" style={{fontFamily: "Helvetica", fontWeight: "600"}} onClick={() => setContexto("Home")}>
                TODOS
               
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("Ação")}>
            AÇÃO
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("RPG")}>
            RPG
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("Simulador")}>
            SIMULADOR
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("Estratégia")}>
            ESTRATÉGIA
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("FPS")}>
            FPS
            </a>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao" onClick={() => setContexto("Terror")}>
            TERROR
            </a>

            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/corrida" onClick={() => setContexto("Corrida")}>
            CORRIDA
            </a>
            <hr></hr>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/carrinho" onClick={() => setContexto("Carrinho")}>
            CARRINHO
            </a>
          
        </nav>
        
    </aside>
    )
}
    