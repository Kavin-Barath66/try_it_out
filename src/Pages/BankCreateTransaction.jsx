import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionBank from '../Components/Response/ResponseCreateTransactionBank';
import CreateTransactionBank from '../Components/EndPoints/CreateTransactionBank';


function BankCreateTransaction() {
    return (
        <Grid container>
            <Grid item xs={7}>
            <CreateTransactionBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateTransactionBank/>
            </Grid>
        </Grid>
    )
}

export default BankCreateTransaction