import React, {useState} from 'react';
import {Button} from 'reactstrap';
import LoginComponent from './LoginComponent';

function HeaderComponent() {    
    return(
        <div style={{backgroundImage: "linear-gradient(#34b8e5, #207693)", top:"0"}}>
            <div style={{paddingTop:"10px", paddingBottom:"10px", width:"100vw", display:"flex"}}>
                <div style={{margin:"auto"}}>
                    <h3 style={{textAlign:"center", color:"floralwhite"}}><b>Task Manager</b></h3>
                </div>  
                <div style={{height:"40px", width:"40px", borderRadius:"50%", backgroundColor:"#000000", marginRight:"30px", overflow:"hidden"}}>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
                    style={{height:"100%", width:"100%"}}></img>           
                </div>                  
            </div>        
        </div>
    );
}

export default HeaderComponent;