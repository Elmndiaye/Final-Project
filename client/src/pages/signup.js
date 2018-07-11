import React, { Component} from 'react';
import { PostData } from '../../PostData';
import {Redirect} from "react-router-dom";

class signup extends Component {
constructor(props){
    super(props);
    this.state =
    {
    username:'',
    password:'',
    email:'',
    name:'',
    address:"",
    Redirect: false
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
}
signup() {
    if (this.state.username && this.state.password && this .state.email){
    PostData('signup', this.state).then ((result) =>{
      let responseJson = result;
      if(responseJson.userData){
        sessionStorage.setItem('userData', responseJson);
        this.setState({redirect: true});
      }    
      else{
        console.log("login error")
      }  
    });   
  }
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
    <label>email</label>
    <input type="text" name="email" placeholder="email" onChange={this.onChange}/>
    <label>name</label>
    <input type="text" name="name" placeholder="name" onChange={this.onChange}/>
    <label>address</label>
    <input type="text" name="address" placeholder="address" onChange={this.onChange}/>
    <label>signup</label>
    
</div>
</div>
);
}
}
export default signup;