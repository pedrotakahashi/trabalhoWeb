import "./Nav.css"

import React from 'react'

export default props =>
    <aside className = "menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Todos
               
            </a>

            <a href="#/categoria1">
            <i className="fa fa-users"></i> Categoria 1
            </a>

            <a href="#/categoria2">
            <i className="fa fa-users"></i> Categoria 2
            </a>
          
        </nav>
        
    </aside>