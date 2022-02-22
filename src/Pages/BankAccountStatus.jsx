import React from 'react'
import { Grid } from "@mui/material";
import AccountStatusBank from '../Components/EndPoints/AccountStatusBank';
import ResponseAccountStatusBank from '../Components/Response/ResponseAccountStatusBank';

function BankAccountStatus() {
    return (
        <Grid container>
            <Grid item xs={7}>
            <AccountStatusBank/>
            </Grid>
            <Grid item xs={5}>
            <ResponseAccountStatusBank/>
            </Grid>
        </Grid>
    )
}

export default BankAccountStatus