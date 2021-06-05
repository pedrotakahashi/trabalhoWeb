import "./Nav.css"

import React from 'react'

export default props =>
    <aside className = "menu-area">
        <nav className="menu">
            <a href="#/" style={{fontFamily: "Helvetica", fontWeight: "600"}}>
                TODOS
               
            </a>

            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/acao">
            AÇÃO
            </a>

            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/aventura">
            AVENTURA
            </a>
            <hr></hr>
            <a style={{fontFamily: "Helvetica", fontWeight: "600"}} href="#/carrinho">
            CARRINHO
            </a>
          
        </nav>
        
    </aside>