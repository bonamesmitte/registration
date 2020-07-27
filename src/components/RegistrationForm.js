import React, { Component } from 'react';
// import './App.css';

class RegistrationForm extends Component{
    constructor(props){
        super(props)
        this.state={
            id: "",
            password: ""
        }
    }

    idhandler = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    passhandler = (e) => {
        this.setState({
            password: e.target.value
        })
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Registration</h1>
                    <label>ID: </label> 
                    <input type="text" value={this.state.id}></input>
                    <button type="button" onClick={this.idhandler}>submit</button>
               
                    <br></br><br></br>

                    <label>Password: </label> 
                    <input type="text" value={this.state.password}></input>
                    <button type="button" onClick={this.idhandler}>submit</button>
            
                
                </form>

            </div>
        )
        }
    }
    export default RegistrationForm;
   