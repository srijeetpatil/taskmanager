import React, {useState} from 'react';
import HeaderComponent from './HeaderComponent';
import {Toast, ToastHeader, ToastBody, Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

function MainComponent() {  
    var loggedUser = JSON.parse(localStorage.getItem("logged")).user;
    var tasks = JSON.parse(localStorage.getItem(loggedUser)).tasks;
    const [modal, setModal] = useState(false);
    const [taskname, changeName] = useState('');
    const [details, changeDetails] = useState('');
    var password = JSON.parse(localStorage.getItem(loggedUser)).password;

    const deleteClicked = (t) => {
        for(var i = 0; i < tasks.length; i++){
            if(tasks[i][0] === t){
                tasks.splice(i, 1);
                localStorage.setItem(loggedUser, JSON.stringify({password: password, tasks: tasks}));
                window.location.reload(false);
                break;
            }
        }
    }
    
    const taskList = tasks.map((t) => {       
        return(
            <div>
                <p>{t[0]}<i className="fa fa-trash ml-2" onClick={() => {                    
                    deleteClicked(t[0]);                                       
                }}></i></p>
                <p>{t[1]}</p>
            </div>
        );
    });      
    const toggle = () => setModal(!modal);

    const handleNameChange = (e) => {
        changeName(e.target.value);
    }

    const handleAdd = () => {
        if(taskname.length === 0){

        }
        else{
            var arr = [taskname + ": date added: " + new Date(), details];
            var userDet = {password: password, tasks: tasks.concat([arr])}
            localStorage.setItem(loggedUser, JSON.stringify(userDet));
            toggle();
        }
    }

    const handleDetailsChange = (e) => {
        changeDetails(e.target.value);
    }

    return(
        <div style={{backgroundColor:"#ccd5d8", height:"100vh"}}> 
            <HeaderComponent/> 
            <div className="container" style={{marginTop:"20px"}}>
                <Toast>
                    <ToastHeader>
                        Add Tasks to your schedule
                    </ToastHeader>
                    <ToastBody>
                        Add a new task   <i className="fa fa-plus-circle fa-lg" style={{marginLeft:"auto"}} onClick={() => {
                            toggle();
                        }}></i>
                        <div style={{marginTop:"15px"}}>{taskList}</div>                        
                    </ToastBody>
                </Toast>                
            </div> 
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a new task</ModalHeader>
                <ModalBody>
                        <input type="text" placeholder="Name of the task" onChange={handleNameChange}></input>
                        <Button color="info" style={{marginLeft:"15px"}} onClick={() => {
                            handleAdd(taskname);
                        }}>Add task</Button>
                        <textarea type="textArea" placeholder="Details" style={{height:"100px"}} onChange={handleDetailsChange}></textarea>                     
                </ModalBody>                
            </Modal>           
        </div>
    );
}

export default MainComponent;