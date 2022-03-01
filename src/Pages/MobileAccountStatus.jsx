import React from 'react'
import {useState} from 'react'
import { Grid } from "@mui/material";
import AccountStatusMobile from '../Components/EndPoints/AccountStatus/AccountStatusMobile';
import ResponseAccountStatusMobile from '../Components/Response/AccountStatus/ResponseAccountStatusMobile';

function MobileAccountStatus({setMobileAccountStatusData, responseScreen, apiResponseData, apiResponseHeaderData, mobileAccountStatusData}) {
    
    return (
        <Grid container sx={{height: '100vh' }}>
            <Grid item xs={7}>
                <AccountStatusMobile setMobileAccountStatusData={setMobileAccountStatusData} mobileAccountStatusData={mobileAccountStatusData}/>
            </Grid>
            <Grid item xs={5}>
                <ResponseAccountStatusMobile responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default MobileAccountStatus