import React from "react";
import { Fab } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {TextField} from "@mui/material";
import Image from './todolist-icon.jpg'


function NewTask({onNewTask}){
  
  const [text, setText] = React.useState('');
  const eventOnExchangevalue = (event)=>{
    setText(event.target.value);
  }
  const NewTask = ()=>{
    console.log(text);
    onNewTask(text);
    setText('');
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      onNewTask(text);
      setText('');
    }
  };
    return (
        <React.Fragment>
            <h1><span className="material-icons">&#xf23a;</span> Crear Nueva Tarea</h1>
              <Grid container spacing={2}>
                <Grid xs>
                <TextField 
                  fullWidth color="primary" 
                  id="fullWidth" 
                  label="Nombre Tarea" 
                  variant="filled"
                  onChange={eventOnExchangevalue} 
                  value={text}
                  onKeyDown={handleKeyDown}
                />           
                </Grid>
                <Grid xs={2}>
                <Fab 
                  color="secundary" 
                  aria-label="add" 
                  onClick={NewTask}
                >
                    <span className="material-icons">&#xe145;</span>
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