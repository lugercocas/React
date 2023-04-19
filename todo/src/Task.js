import React from "react";
import { Fab } from "@mui/material";
import {Alert} from "@mui/material";
import {AlertTitle} from "@mui/material";
import "./Task.css"

function Task(props){
    const onComplete = props.onComplete;
    const onDelete = props.onDelete;
    const onEdit = () =>{
        alert("El TODO "+props.text+" se va a editar.")
    };
    return (
        <React.Fragment>
            <br /> 
            <Alert severity="success" className="Task">
                <AlertTitle className={`${props.completed && 'Icon-check--active'}`}>
                    {props.text}</AlertTitle> 
                <br />
                <div className="AlingBttnTask">
                    {/* Delete */}
                    <Fab 
                        color="error" 
                        aria-label="error" 
                        onClick={()=>onDelete(props.text)}
                    >
                    <span className="material-icons">&#xe872;</span>
                    </Fab>
                    {/* Completed */}
                    <Fab 
                        aria-label="success" 
                        color="success"
                        onClick={()=>onComplete(props.text)}
                    >
                        <span className="material-icons">&#xe2e6;</span>
                    </Fab>
                    {/* Edit */}
                    <Fab 
                        color="warning" 
                        aria-label="success"
                        onClick={onEdit}
                    >
                        <span className="material-icons">&#xe745;</span>
                    </Fab>
                </div>               
            </Alert>   
                
        </React.Fragment>
    );
}
export {Task};