import React from "react";
import { Fab} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {TextField} from "@mui/material";
import {Task} from "./Task"


function ManageTask(props){
    const todos = props.todos;
    const completedTodos = props.completedTodos;
    const totalTodos = props.totalTodos;
    const onComplete = props.onComplete;
    const onDelete = props.onDelete;
    const onSearch = () => {
        alert("Buscando la tarea espec+ifica.")
    };
    const onChangeSearchTask = (event)=>{
        console.log(event.target.value);
    };
    return (
        <React.Fragment>
            <h1><span className="material-icons">&#xf075;</span> Mis Tareas</h1>
            <h3><i>Completadas {completedTodos} de {totalTodos}</i></h3>
            <Grid container spacing={2}>
            <Grid xs>
            <TextField 
                fullWidth color="primary" 
                id="fullWidth" 
                label="Nombre de la Tarea" 
                variant="filled" 
                onChange={onChangeSearchTask}
                // value={valueSearch}
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
            {/* <p>{valueSearch}</p>    */}
            {todos.map(todo =>(
                <Task 
                    key={todo.text} 
                    text = {todo.text} 
                    completed = {todo.complete}
                    onComplete = {onComplete}
                    onDelete = {onDelete}
                />
            ))}   
            <br />
        </React.Fragment>
    );
}
export {ManageTask};