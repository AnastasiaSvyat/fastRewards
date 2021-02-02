import React from "react";
import firebase from 'firebase'
import timer from "../img/timer.png";


class Timer extends React.Component{
    constructor(props){
        super(props)
        this.timer = null
        this.timerMobile = null

        this.state = {
            seconds: 0,
            secondsMobile:0,
            email:'',
            pass:'',
            promoCode:''
        }
    }
   
    componentDidMount(){
        var userId = firebase.auth().currentUser.uid;
        console.log(userId);
        

    


        if(window.innerWidth <= 600){
            firebase.database().ref(userId).orderByChild('secondsMobile').on('value', snapshoot => {
                console.log(snapshoot);
                snapshoot.forEach(userSnapshot => {
                console.log(userSnapshot);
                    let data = userSnapshot.node_.value_;
                    console.log('data: ', data);
                    this.setState({
                        secondsMobile:data + 1
                               
                    })  
                });
            })
            this.timer = setInterval(() => {
                firebase.database().ref(userId).set({
                    email: this.props.email,
                    pass: this.props.pass,
                    secondsMobile:this.state.secondsMobile
                })
                
            },1000)
        }
        if(window.innerWidth >= 600){
            firebase.database().ref(userId).orderByChild('seconds').on('value', snapshot => {
                console.log(snapshot);
                snapshot.forEach(userSnapshot => {
                console.log(userSnapshot.node_.value_);
                    let data = userSnapshot.node_.value_;
                    console.log('data: ', data);
                    this.setState({
                        seconds:data + 1
                               
                    })  
                });
            })
            this.timer = setInterval(() => {
                firebase.database().ref(userId).set({
                    email: this.props.email,
                    pass: this.props.pass,
                    seconds:this.state.seconds,
                    
                });
               
               
                
            },1000)
        }
    }  
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render(){
        console.log(this.props.pass);
        return(
            <div className = 'timer'>
                <div className = 'mobileTimer'>
                <h2>Mobile</h2>
                    <div className = 'mobileTimer_box'>
                    <img src={timer} alt=""/>
                </div>
                <p>{this.state.secondsMobile} sec</p>
                </div>
                

            <div className = 'mobileTimer'>
                <h2>Desktop</h2>
                    <div className = 'mobileTimer_box'>
                    <img src={timer} alt=""/>
                </div>
                <p>{this.state.seconds} sec</p>
            </div>
            </div>
        )
    }
}

export default Timer
