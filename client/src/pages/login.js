import React, { Component} from 'react';
import { PostData } from '../PostData';
import{ Redirect } from "react-router-dom";


class Login extends Component {
constructor(props){
    super(props);
    this.state ={
    username:'',
    password:'',
    redirect: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
}

login() {

    // if (this.state.username && this.state.password) {
    //     let responseJson = result;
    // }
    
    PostData('login', this.state).then ((result) =>{
    if (result.userData){
         sessionStorage.setItem('userData', result );

        this.setState({redirect: true});
    }
    else {
        console.log("login error")
    } 
    }); 


    }



onChange(e){
    this.setState({[e.target.name]: e.target.value});
}
render(){
    if(this.state.redirect){
        return(<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem("userData")){
    return (<Redirect to={'/home'}/>)
}
return(
    <div className="row small-up-2 medium-up-3 large-up-4">
    <div className="column bodypart">
    <h2>Sign up</h2>
    <label>username</label>
    <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
    <label>password</label>
    <input type="text" name="password" placeholder="password" onChange={this.onChange}/>
    <label>login</label>
    <input type="submit" value="login" className="button" onClick={this.login}/>
// <a href='/login'>Login</a>
</div>
</div>
);
}
}



export default Login;