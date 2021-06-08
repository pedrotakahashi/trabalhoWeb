import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Carrinho from '../components/generic/Carrinho';
import Endereco from '../components/generic/Endereco'
import Pedidos from '../components/generic/Pedidos';
import Table from '../components/generic/Table';

import Home from'../components/home/Home';
import Cadastro from '../components/user/Cadastro';




export default props =>
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route  path ="/acao" component={Home}/>
        <Route  path ="/corrida" component={Home}/>
        <Route  path ="/rpg" component={Home}/>
        <Route  path ="/simulador" component={Home}/>
        <Route  path ="/estrategia" component={Home}/>
        <Route  path ="/fps" component={Home}/>
        <Route  path ="/terror" component={Home}/>
        <Route  path ="/carrinho" component={Carrinho}/>
        <Route  path ="/cadastro" component={Endereco}/>
        <Route  path ="/pedidos" component={Pedidos}/>
        <Route path=""/> 
        
        <Redirect from='*' to='/' />
    </Switch>
