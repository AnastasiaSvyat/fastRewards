import React from "react";
import { NavLink } from 'react-router-dom'

import firebase from "firebase";
import Login from "../Login/login";


class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            pass: '',
            hasAccount:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.createAccount = this.createAccount.bind(this)
    }
    componentDidMount(){
        const db = firebase.database()
        console.log(db);
    }
    handleChange = ({target :{value,id}}) => {
        this.setState({
            [id]:value,
            
        })
    }
  

       

    
    createAccount = (e) => {
        const {email,pass} = this.state
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(res => {
                    this.setState({
                        hasAccount:true
                    })
                    console.log(res);
                })
        .catch(error => console.log(error))
    }
    render(){
        console.log(this.state);
const {hasAccount} = this.state
        return(
            <div>
                {hasAccount ? <Login/>: 
        <div className = 'loginBox'>
            <div className = 'loginBox_box'>
            <div>First name
                    <input type="text"/>
                </div>
                <div>Last name
                    <input type="text"/>
                </div>
                <div>Email
                    <input type="text" 
                    id = 'email'
                    onChange = {this.handleChange}/>
                </div>
                <div>Password
                    <input type="text" 
                    id = 'pass'
                    onChange = {this.handleChange}/>
                </div>
                <button onClick = {this.createAccount}>Sing up</button>
                <div className='navLink_Register'>
                    <p>Already registered?</p>
                    <p><NavLink to="/" exact> Log in</NavLink></p>
                </div>
            </div>
            </div>
    }
            </div>
                
            

        )
    }
}

export default Register
          
