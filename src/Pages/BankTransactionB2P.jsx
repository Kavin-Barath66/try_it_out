import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2PTransaction from '../Components/Response/ResponseB2PTransaction';
import B2PTransactionBank from '../Components/EndPoints/B2P/B2PTransactionBank';




function BankTransactionB2P() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <B2PTransactionBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2PTransaction/>
            </Grid>
        </Grid>
    )
}

export default BankTransactionB2P