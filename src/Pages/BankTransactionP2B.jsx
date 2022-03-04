import React from 'react'
import { Grid } from "@mui/material";
import P2BTransactionBank from '../Components/EndPoints/P2B/P2BTransactionBank';
import ResponseP2BTransactionBank from '../Components/Response/P2B/ResponseP2BTransactionBank';


function BankTransactionP2B({allowUatAccess, bankTransactionP2BData, setBankTransactionP2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px' }}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
                <P2BTransactionBank allowUatAccess={allowUatAccess} bankTransactionP2BData={bankTransactionP2BData} setBankTransactionP2BData={setBankTransactionP2BData}/>
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseP2BTransactionBank allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default BankTransactionP2B