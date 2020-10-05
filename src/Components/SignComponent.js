import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import MainComponent from './MainComponent';

function SignComponent(){
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loginSuccess, setLogin] = useState(false);  
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange1 = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordChange2 = (e) => {
        if(e.target.value != password){
            document.getElementById("error").innerHTML = '<h6 style="text-align:center">' + '*Passwords dont match' +'</h6>';
        }
        else{
            document.getElementById("error").innerHTML = "";
        }
    }

    const handleClicked = (email, password) => {
        if(!validEmail(email)){
            document.getElementById("invalid").innerHTML = '<h6 style="text-align: center">' + 'Invalid email' + '</h6>'
        }
        else{
            if(localStorage.getItem(email) != null){
                document.getElementById("invalid").innerHTML = '<h6 style="text-align: center">' + 'This Email already exists' + '</h6>'
            }
            else{
                var userInfo = {password: password, tasks : []};
                localStorage.setItem(email, JSON.stringify(userInfo));
                var userDet = {in: true, user: email}
                localStorage.setItem("logged", JSON.stringify(userDet));
                setLogin(true);
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
                <div className="loginBox" style={{display:"block", height:"80vh", margin:"auto", borderStyle:"solid", borderWidth:"thin", borderRadius:"10%"}}>
                    <div style={{padding:"15px 15px 15px 15px"}}>
                        <h4 className="basic-font" style={{textAlign:"center", color:"floralwhite"}}>Sign up</h4>
                        <input type="text" placeholder="Email" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"60%", marginTop:"50px"}} onChange={handleEmailChange}/>                    
                        <input type="password" placeholder="Password" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"60%", marginTop:"50px"}} onChange={handlePasswordChange1}/>                    
                        <input type="password" placeholder="Confirm Password" style={{margin:"auto", display:"block", borderStyle:"solid", borderRadius:"5px", borderWidth:"thin"
                        , width:"60%", marginTop:"50px"}} onChange={handlePasswordChange2}/>
                        <div id="error" className="text-danger"></div>                    
                        <Button color="info" style={{margin:"auto", display:"block", marginTop:"50px"}} onClick={() => {
                            handleClicked(email, password);
                        }}>Sign in</Button>
                        <h6 style={{margin:"auto", display:"block", marginTop:"20px", textAlign:"center"}}>Or</h6>
                        <Button color="info" style={{margin:"auto", display:"block", marginTop:"20px"}}><Link to="/login" 
                        style={{textDecoration:"none", color:"floralwhite"}}>Log in</Link></Button>
                        <div id="invalid" className="text-danger"></div>                                   
                    </div>
                </div>
            </div>
        );
    }
}

export default SignComponent;