import React from 'react'
import { Grid } from "@mui/material";
import B2PTransactionBank from '../Components/EndPoints/B2P/B2PTransactionBank';
import ResponseB2PTransactionBank from '../Components/Response/B2P/ResponseB2PTransactionBank';




function BankTransactionB2P({allowUatAccess, bankTransactionB2PData, setBankTransactionB2PData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px' }}>
            <Grid item xs={7} sx={{ height:"80vh", overflow:"auto"}} >
                <B2PTransactionBank allowUatAccess={allowUatAccess} bankTransactionB2PData={bankTransactionB2PData} setBankTransactionB2PData={setBankTransactionB2PData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"80vh", overflow:"auto"}} >
                <ResponseB2PTransactionBank  allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default BankTransactionB2P