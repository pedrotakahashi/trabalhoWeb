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
        <Route  path ="/corrida" component={Desafio2}/>
        <Route  path ="/carrinho" component={Carrinho}/>
        <Route path=""/> 
        
        <Redirect from='*' to='/' />
    </Switch>
