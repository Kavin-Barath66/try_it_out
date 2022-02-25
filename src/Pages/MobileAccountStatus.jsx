import React from 'react'
import { Grid } from "@mui/material";
import AccountStatusMobile from '../Components/EndPoints/AccountStatus/AccountStatusMobile';
import ResponseAccountStatusMobile from '../Components/Response/AccountStatus/ResponseAccountStatusMobile';

function MobileAccountStatus() {
    return (
        <Grid container sx={{height: '100vh' }}>
            <Grid item xs={7}>
                <AccountStatusMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseAccountStatusMobile/>
            </Grid>
        </Grid>
    )
}

export default MobileAccountStatus