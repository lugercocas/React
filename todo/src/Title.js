import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
// import {Grid} from "@mui/material";

function Title(props){
    return (
        <React.Fragment>
            <br />
            <Grid container spacing={4}>
            <Grid xs></Grid>
            <Grid xs={8} style={{
                textAlign: 'center',
                backgroundColor: '#0277BD',
                color: 'white',
                borderRadius: '15px 15px 15px 15px'
                }}>
                <h1><span className="material-icons" style={{fontSize:'150%'}}>&#xf848;</span> {props.text}</h1>
            </Grid>          
            <Grid xs></Grid>
            </Grid>
        </React.Fragment>
    );
}

export {Title};