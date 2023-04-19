import React from "react";
import Grid from '@mui/material/Unstable_Grid2';

import { Title } from "./Title";
import { NewTask } from "./NewTask";
import { ManageTask } from "./ManageTask";
import { Divider } from "@mui/material";
import "./App.css";

const defaultTodos = [
  {text: 'Tarea 1. Diseño del sistema. Generando el documento inicial.',complete:true},
  {text: 'Tarea 2. Analisis de requerimientos',complete:false},
  {text: 'Tarea 3. Desarrollo de aplicaciones.',complete:false},
  {text: 'Tarea 4. Pruebas y despliegue',complete:false},
];

function App() {
  const [todos, setValueTodos] = React.useState(defaultTodos);
  // const [valueSearch, setValueSearch] = React.useState('');

  const completedTodos = todos.filter(todo => todo.complete).length;
  const totalTodos = todos.length;
  const onNewTask = (textFieldText)=>{
    // console.log(todos);
    const newTask = {text: textFieldText,complete:false};
    // console.log(textFieldText);
    const newTodos = [...todos];
    newTodos.push(newTask);
    // console.log(newTodos);
    setValueTodos(newTodos);
    console.log("Se creó la tarea: "+textFieldText);
  };
  const onComplete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    setValueTodos(newTodos);
    console.log("Completando ToDo.. "+text);
    // console.log(newTodos);
  };
  const onDelete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);  
    const newTodos = [...todos];
    //Eliminando elemento del array
    newTodos.splice(todoIndex,1)
    setValueTodos(newTodos);
    console.log("Eliminando ToDo.. "+text);
  };

  return (
    <React.Fragment>
      <Title text={'Administrador Tareas TO-DO'} />
      <Divider />
      <br />
      <br />
      
      <Grid container spacing={2}>
        <Grid md></Grid>
        <Grid md={4} className="NewTask">
            <NewTask 
              onNewTask = {onNewTask}
            />
        </Grid>
        <Grid md={4} className="ManageTask">
            <ManageTask 
              todos = {todos}
              completedTodos = {completedTodos}
              setValueTodos = {setValueTodos}
              totalTodos = {totalTodos}
              onComplete = {onComplete}
              onDelete = {onDelete}
            />
        </Grid>
        <Grid md></Grid>
      </Grid>
      </React.Fragment>
    );
}
export { App };
