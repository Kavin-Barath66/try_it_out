import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionBank from '../Components/Response/CreateTransaction/ResponseCreateTransactionBank';
import CreateTransactionBank from '../Components/EndPoints/CreateTransaction/CreateTransactionBank';


function BankCreateTransaction({createTransactionBankData, setCreateTransactionBankData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <CreateTransactionBank createTransactionBankData={createTransactionBankData} setCreateTransactionBankData={setCreateTransactionBankData}  />
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateTransactionBank responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default BankCreateTransaction