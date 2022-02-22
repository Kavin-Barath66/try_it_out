import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionBank from '../Components/EndPoints/ViewTransactionBank';
import ResponseViewTransactionBank from '../Components/Response/ResponseViewTransactionBank';



function BankViewTransaction() {
    return (
        <Grid container>
            <Grid item xs={7}>
            <ViewTransactionBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseViewTransactionBank/>
            </Grid>
        </Grid>
    )
}

export default BankViewTransaction