import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2BTransaction from '../Components/Response/ResponseB2BTransaction';
import B2BTransaction from '../Components/EndPoints/B2BTransaction';



function TransactionB2B() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <B2BTransaction/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default TransactionB2B