import React from "react";
import { Fab } from "@mui/material";
import {Alert} from "@mui/material";
import {AlertTitle} from "@mui/material";
import "./Task.css"

function Task(props){
    return (
        <React.Fragment>
            <br /> 
            <Alert severity="success" className="Task">
                <AlertTitle className={`${props.completed && 'Icon-check--active'}`}>
                    {props.text}</AlertTitle> 
                <br />
                <div className="AlingBttnTask">
                    <Fab color="error" aria-label="error">
                    <span className="material-icons">&#xe872;</span>
                    </Fab>
                    <Fab aria-label="success" color="success">
                            <span className="material-icons">&#xe2e6;</span>
                    </Fab>
                    <Fab color="warning" aria-label="success">
                            <span className="material-icons">&#xe745;</span>
                    </Fab>
                </div>               
            </Alert>   
                
        </React.Fragment>
    );
}
export {Task};