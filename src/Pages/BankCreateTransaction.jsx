import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionBank from '../Components/Response/CreateTransaction/ResponseCreateTransactionBank';
import CreateTransactionBank from '../Components/EndPoints/CreateTransaction/CreateTransactionBank';


function BankCreateTransaction({allowUatAccess, createTransactionBankData, setCreateTransactionBankData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} sx={{ height:"80vh", overflow:"auto"}} >
            <CreateTransactionBank allowUatAccess={allowUatAccess} createTransactionBankData={createTransactionBankData} setCreateTransactionBankData={setCreateTransactionBankData}  />
            </Grid>
            <Grid item xs={5} sx={{ height:"80vh", overflow:"auto"}} >
                <ResponseCreateTransactionBank allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default BankCreateTransaction