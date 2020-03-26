import React,{useState} from 'react'
import './registration.css'
import logo from './school.svg'

export default class Registration extends React.Component{

    state={
        registrationForm: 'display-none',
        loginForm: ''
    }


    render(){
        return(
            <React.Fragment>
               <div className='login-page' >
                   <div className='form'>
                       <img src={logo} alt="logo" className='logo'/>
                       <form className={this.state.registrationForm}>
                       <input type="text" placeholder='name'/>
                       <input type="password" placeholder='password'/>
                       <input type="text" placeholder='email address'/>
                       <button>create</button>
                       <p className="message">Already registered? <a href="#" onClick={()=>this.registered()} >Sign In</a></p>
                       </form>
                       <form className={this.state.loginForm}>
                           <input type="text" placeholder='username'/>
                           <input type="password" placeholder='password'/>
                           <button>login</button>
                           <p className="message">Not registered? <a href="#" onClick={()=>this.login()} >Create an account</a></p>
                       </form>
                   </div>
               </div>
            </React.Fragment>
        )
    }

    registered(){
        this.setState({registrationForm:'display-none',loginForm:''})
    }

    login(){
        this.setState({loginForm:'display-none',registrationForm:''})
    }
}
