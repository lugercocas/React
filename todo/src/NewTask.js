import React from "react";
import { Fab } from "@mui/material";
// import {Grid} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {TextField} from "@mui/material";
import Image from './todolist-icon.jpg'


function NewTask(){
  const onNewTask = ()=>{
    alert("Se está creando una nueva tarea.")
  };
    return (
        <React.Fragment>
            <h1><span className="material-icons">&#xf23a;</span> Crear Nueva Tarea</h1>
              <Grid container spacing={2}>
                <Grid xs>
                <TextField fullWidth color="primary" id="fullWidth" label="Nombre Tarea" variant="filled" />           
                </Grid>
                <Grid xs={2}>
                <Fab color="secundary" aria-label="add">
                    <span className="material-icons"
                      onClick={onNewTask}
                    >&#xe145;</span>
                </Fab>      
                </Grid>  
              </Grid>
              <br />
              <img src={Image} alt="Girl in a jacket" 
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    border: '10px solid transparent',
                }}
              />
        </React.Fragment>
    );
}
export {NewTask};