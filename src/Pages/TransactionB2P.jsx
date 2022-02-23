import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2PTransaction from '../Components/Response/ResponseB2PTransaction';
import B2PTransaction from '../Components/EndPoints/B2PTransaction';



function TransactionB2P() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <B2PTransaction/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2PTransaction/>
            </Grid>
        </Grid>
    )
}

export default TransactionB2P