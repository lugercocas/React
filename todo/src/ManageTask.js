import React from "react";
import { Fab} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {TextField} from "@mui/material";
import {Task} from "./Task"

const todos = [
    {text: 'Tarea 1. Diseño del sistema. Generando el documento inicial.',complete:true},
    {text: 'Tarea 2. Analisis de requerimientos',complete:false},
    {text: 'Tarea 3. Desarrollo de aplicaciones.',complete:false},
    {text: 'Tarea 4. Pruebas y despliegue',complete:false},
];
function ManageTask(){
    const onSearch = () => {
        alert("Buscando la tarea espec+ifica.")
    };
    const onChangeSearchTask = (event)=>{
        alert(event.target.value);
    };
    return (
        <React.Fragment>
            <h1><span className="material-icons">&#xf075;</span> Mis Tareas</h1>
            <h3><i>Completadas 2 de 3</i></h3>
            <Grid container spacing={2}>
            <Grid xs>
            <TextField 
                fullWidth color="primary" 
                id="fullWidth" 
                label="Nombre de la Tarea" 
                variant="filled" 
                onChange={onChangeSearchTask}
            />           
            </Grid>
            <Grid xs={2}>
            <Fab color="secundary" aria-label="search"
                onClick={onSearch}
            >
                <span className="material-icons">&#xe8b6;</span>
            </Fab>      
            </Grid>  
            </Grid> 
            {todos.map(todo =>(
                <Task 
                    key={todo.text} 
                    text = {todo.text} 
                    completed = {todo.complete}
                />
            ))}   
            <br />
        </React.Fragment>
    );
}
export {ManageTask};