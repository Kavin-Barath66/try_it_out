import React from 'react'
import { Grid } from "@mui/material";
import AccountStatusBank from '../Components/EndPoints/AccountStatus/AccountStatusBank';
import ResponseAccountStatusBank from '../Components/Response/AccountStatus/ResponseAccountStatusBank';

function BankAccountStatus({bankAccountStatusData, setBankAccountStatusData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <AccountStatusBank bankAccountStatusData={bankAccountStatusData} setBankAccountStatusData={setBankAccountStatusData} />
            </Grid>
            <Grid item xs={5}>
            <ResponseAccountStatusBank responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankAccountStatus
