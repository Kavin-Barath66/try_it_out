import React from 'react'
import { Grid } from "@mui/material";
import ResponseP2BTransaction from '../Components/Response/ResponseP2BTransaction';
import P2BTransaction from '../Components/EndPoints/P2BTransaction';



function TransactionP2B() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <P2BTransaction/>
            </Grid>
            <Grid item xs={5}>
                <ResponseP2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default TransactionP2B