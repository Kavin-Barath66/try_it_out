import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionBank from '../Components/EndPoints/ViewTransaction/ViewTransactionBank';
import ResponseViewTransactionBank from '../Components/Response/ViewTransaction/ResponseViewTransactionBank';



function BankViewTransaction() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
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