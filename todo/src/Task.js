import React from "react";
import { Fab } from "@mui/material";
import {Alert} from "@mui/material";
import {AlertTitle} from "@mui/material";
import "./Task.css"

function Task(props){
    const onComplete = () =>{
        alert("El TODO "+props.text+" ha sido completado.")
    };
    const onDelete = () =>{
        alert("El TODO "+props.text+" ha sido eliminado.")
    };
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
                    <Fab color="error" aria-label="error">
                    <span className="material-icons"
                        onClick={onDelete}
                    >&#xe872;</span>
                    </Fab>
                    {/* Completed */}
                    <Fab aria-label="success" color="success">
                            <span className="material-icons"
                                onClick={onComplete}
                            >&#xe2e6;</span>
                    </Fab>
                    {/* Edit */}
                    <Fab color="warning" aria-label="success">
                            <span 
                                className="material-icons"
                                onClick={onEdit}
                            >&#xe745;</span>
                    </Fab>
                </div>               
            </Alert>   
                
        </React.Fragment>
    );
}
export {Task};