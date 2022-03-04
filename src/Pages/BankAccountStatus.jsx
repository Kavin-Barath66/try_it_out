import React from 'react'
import { Grid } from "@mui/material";
import AccountStatusBank from '../Components/EndPoints/AccountStatus/AccountStatusBank';
import ResponseAccountStatusBank from '../Components/Response/AccountStatus/ResponseAccountStatusBank';

function BankAccountStatus({allowUatAccess, bankAccountStatusData, setBankAccountStatusData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px' }}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
            <AccountStatusBank allowUatAccess={allowUatAccess} bankAccountStatusData={bankAccountStatusData} setBankAccountStatusData={setBankAccountStatusData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
            <ResponseAccountStatusBank allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankAccountStatus
