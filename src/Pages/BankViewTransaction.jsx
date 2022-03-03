import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionBank from '../Components/EndPoints/ViewTransaction/ViewTransactionBank';
import ResponseViewTransactionBank from '../Components/Response/ViewTransaction/ResponseViewTransactionBank';



function BankViewTransaction({allowUatAccess, viewTransactionBankData, setViewTransactionBankData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <ViewTransactionBank allowUatAccess={allowUatAccess} viewTransactionBankData={viewTransactionBankData} setViewTransactionBankData={setViewTransactionBankData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseViewTransactionBank allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankViewTransaction