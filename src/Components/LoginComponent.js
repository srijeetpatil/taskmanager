import React, {useState} from 'react';
import {Button} from 'reactstrap';
import MainComponent from './MainComponent';
import {Link} from 'react-router-dom';

function LoginComponent() {  
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLogin] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }    
    const loginClicked = (email, password) => {  
        if(!validEmail(email)){
            document.getElementById("error").innerHTML = '<div style="color: red; text-align: center">' + '*Invalid Email' + '</div>';
        }
        else{
            document.getElementById("error").innerHTML = "";
            var email = JSON.parse(localStorage.getItem(email));
            if(email == null){
                document.getElementById("invalid").innerHTML = '<div style="color: red; text-align: center">' + '*Invalid Email or Password' + '</div>'
            }          
            else{
                if(email.password != password){
                    document.getElementById("invalid").innerHTML = '<div style="color: red; text-align: center">' + '*Invalid Email or Password' + '</div>'
                }
                else{
                    var userDet = {in: true, user: email}
                    localStorage.setItem("logged", JSON.stringify(userDet));
                    setLogin(true);
                }
            }  
        }           
    }
    if(loginSuccess){
        return(
            <div>
                <MainComponent/>
            </div>
        );
    }
    else{
        return(
            <div style={{backgroundImage: "linear-gradient(#34b8e5, #207693)", width:"100%", height:"100%", paddingTop:"100px", position:"fixed"}}>
                <div className="loginBox" style={{display:"block", height:"70vh", margin:"auto", borderStyle:"solid", borderWidth:"thin", borderRadius:"10%"}}>
                    <div style={{padding:"15px 15px 15px 15px"}}>
                        <h4 className="basic-font" style={{textAlign:"center", color:"floralwhite"}}>Login</h4>
                        <input type="text" placeholder="Email" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"60%", marginTop:"50px"}} onChange={handleEmailChange}/>
                        <div id="error"></div>
                        <input type="password" placeholder="Password" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"60%", marginTop:"50px"}} onChange={handlePasswordChange}/>                    
                        <Button color="info" style={{margin:"auto", display:"block", marginTop:"50px"}} onClick={() => {
                            loginClicked(email, password);
                        }}>Log in</Button>
                        <div id="invalid"></div>
                        <h6 style={{margin:"auto", display:"block", marginTop:"20px", textAlign:"center"}}>Or</h6>
                        <Button color="info" style={{margin:"auto", display:"block", marginTop:"20px"}}><Link to="/signup" 
                        style={{textDecoration:"none", color:"floralwhite"}}>Sign in</Link></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;