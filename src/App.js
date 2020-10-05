import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import SignComponent from './Components/SignComponent';

function App() {  
  const CheckLog = () => {
    var logged = JSON.parse(localStorage.getItem("logged"));    
    if(logged != null && logged.in === true){      
        return (
            <div>
              <MainComponent/>
            </div>
        );
    }
    else{
      return(
        <div>          
          <HashRouter>
            <Switch>
                <Route path="/login" component={() => <LoginComponent/>} />
                <Route path="/signup" component={() => <SignComponent/>}/>
                <Redirect to="/login"/>
            </Switch>
          </HashRouter>
        </div>
      );
    }
  } 
  return (
    <div className="App">
        <CheckLog/>   
    </div>
  );
}

export default App;
