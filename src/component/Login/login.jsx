import React from "react";
import firebase from 'firebase'
import Timer from "../timer/timer";
import instance from './instance'
import { NavLink } from 'react-router-dom'




class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            pass: '',
            hasAccount:false,
            arr:[],
            dd: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginAccount = this.loginAccount.bind(this)
    }
    componentDidMount(e){
        instance
         .get('/User.json')
         .then((response) => {
            let jsonObject = response.data
            this.setState({
                arr:this.state.arr.concat(jsonObject)
            })
        })
         .catch((error) => {
            alert(error)
        })
    }
    handleChange = ({target :{value,id}}) => {
        this.setState({
            [id]:value,
        })
    }
    loginAccount = (e) => {
        const {email,pass} = this.state
        firebase.auth().signInWithEmailAndPassword(email,pass)
        
        .then(res => {
            this.setState({
                hasAccount:true
            })
            console.log(res);
        })
        .catch()
    }
    render(){
        const {email,pass} = this.state
        return(
            <div>
                
                {this.state.hasAccount ? <Timer pass = {pass} email = {email} /> :  
                <div className = 'loginBox'> 
                <div className = 'loginBox_box'>
                    <h2>Login</h2>
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
                <button onClick = {this.loginAccount}>Login</button>
                <div className='navLink_Register'>
                    <p>Don’t have an account yet?</p>
                    <p><NavLink to="/Register" exact> Register</NavLink></p>
                </div>
                </div>
                </div>
    }
            </div>
        )
    }
}

export default Login

          
