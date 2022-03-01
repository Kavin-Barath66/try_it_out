import React from 'react'
import { Grid } from "@mui/material";
import B2BTransactionBank from '../Components/EndPoints/B2B/B2BTransactionBank';
import ResponseB2BTransactionBank from '../Components/Response/B2B/ResponseB2BTransactionBank';



function BankTransactionB2B({bankTransactionB2BData, setBankTransactionB2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <B2BTransactionBank bankTransactionB2BData={bankTransactionB2BData} setBankTransactionB2BData={setBankTransactionB2BData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseB2BTransactionBank responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default BankTransactionB2B