import React, { Component } from 'react'
import axios from 'axios';
import Main from '../templates/Main'

const headerProps ={
    icon: 'users',
    title: 'Cadastro de usuario ',
    subtitle: 'Cadastro de usuarios: Crud'
}

const baseUrl = 'http://localhost:3001/users'
const initialState ={
    user:{name:'', email: ''},
    list:[]
}



export default class UserCrud extends Component {
    state = {...initialState}
 
    //Carregar a lista de usuarios 
    componentWillMount(){
        axios(baseUrl).then(resp =>{
            this.setState({list:resp.data})
        })
    }
    clear(){
        this.setState({user: initialState.user})
    }
    getUpdateList(user, add=true){
        const list = this.state.list.filter(u=>u.id !== user.id)
        if(add) list.unshift(user) //se usuario estiver setado, ai adiciona na lista, senao remova
        return list
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        axios[method](url,user)
        .then (resp =>{
            const list = this.getUpdateList(resp.data)
            this.setState({user: initialState.user, list})

        })
    }

   

    updateField(event) {
        const user = {...this.state.user}
        user [event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return( <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label> nome </label>
                    <input type="text" className="form-control"
                    name="name" 
                    value={this.state.user.name}
                    onChange={e=>this.updateField(e)}
                    placeholder = "digite o nome"/>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label> email </label>
                    <input type="text" className="form-control"
                    name="email" 
                    value={this.state.user.email}
                    onChange={e=>this.updateField(e)}
                    placeholder = "digite o email"/>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label> endereço </label>
                    <input type="text" className="form-control"
                    name="endereço" 
                    
                    onChange={e=>this.updateField(e)}
                    placeholder = "digite rua/avenida/travessa"/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label> Bairro: </label>
                    <input type="text" className="form-control"
                    name="bairro:"                    
                    onChange={e=>this.updateField(e)}
                    placeholder = "Digite o bairro"/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label> cep: </label>
                    <input type="text" className="form-control"
                    name="cep:"                    
                    onChange={e=>this.updateField(e)}
                    placeholder = "Digite o cep"/>
                </div>
            </div>
        </div>
    <hr/>
    <div className="row">
        <div className="col-12 d-flex-justify-content-end">
            <button className="btn btn-primary"
                onClick={e=>this.save(e)}>
                salvar
            </button>
            <button className="btn btn-secondary ml-3"
                onClick = {e=>this.clear(e)}>
                Cancelar
            </button>
        </div>
    </div>


    </div>
)
   
    }
    load(user){
            this.setState({user})
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdateList(user, false) 
            this.setState({list})
        })
    }

 
    render(){
        return(
            <Main {... headerProps} >
                {this.renderForm()}
               
            </Main>
        )
    }
}