import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionBank from '../Components/Response/CreateTransaction/ResponseCreateTransactionBank';
import CreateTransactionBank from '../Components/EndPoints/CreateTransaction/CreateTransactionBank';


function BankCreateTransaction() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
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