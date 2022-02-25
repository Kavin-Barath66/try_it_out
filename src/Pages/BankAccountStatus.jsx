import React from 'react'
import { Grid } from "@mui/material";
import AccountStatusBank from '../Components/EndPoints/AccountStatus/AccountStatusBank';
import ResponseAccountStatusBank from '../Components/Response/AccountStatus/ResponseAccountStatusBank';

function BankAccountStatus() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
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