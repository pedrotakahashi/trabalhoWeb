import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Carrinho from '../components/generic/Carrinho';
import Table from '../components/generic/Table';

import Home from'../components/home/Home';
import Desafio1 from '../components/user/Desafio1';
import Desafio2 from '../components/user/Desafio2';



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
        <Route path=""/> 
        
        <Redirect from='*' to='/' />
    </Switch>
