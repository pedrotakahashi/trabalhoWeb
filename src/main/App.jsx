import './App.css'
import React from 'react'
import {HashRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from'../components/templates/Logo'
import Nav from'../components/templates/Nav'
import Routes from './Routes'
import Footer from'../components/templates/Footer'
import Context from '../components/Contexts/Context'

export default props =>
    <HashRouter>
        <div className="app">
            <Context>
                <Logo/>
                <Nav/>
                <Routes/>
                <Footer/>
            </Context>
        </div>
    </HashRouter>

   