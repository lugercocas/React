import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
// import Grid from '@mui/material/Grid'; // Grid version 1

import { Title } from "./Title";
import { NewTask } from "./NewTask";
// import Icon from '@mui/material/Icon';
import { ManageTask } from "./ManageTask";
import { Divider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Title text={'Administrador Tareas TO-DO'} />
      <Divider />
      <br />
      <br />
      
      <Grid container spacing={2}>
        <Grid md></Grid>
        <Grid md={4} className="NewTask">
            <NewTask />
        </Grid>
        <Grid md={4} className="ManageTask">
            <ManageTask />
        </Grid>
        <Grid md></Grid>
      </Grid>
      </React.Fragment>
    );
}
export { App };
