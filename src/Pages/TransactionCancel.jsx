import React from 'react'
import { Grid } from "@mui/material";
import CancelTransaction from '../Components/EndPoints/CancelTransaction';
import ResponseCancelTransaction from '../Components/Response/ResponseCancelTransaction';


function TransactionCancel({responseScreen, apiResponseData, apiResponseHeaderData, cancelTransactionData, setCancelTransactionData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CancelTransaction 
                cancelTransactionData={cancelTransactionData}
                setCancelTransactionData={setCancelTransactionData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseCancelTransaction
                responseScreen={responseScreen}
                apiResponseData={apiResponseData} 
                apiResponseHeaderData={apiResponseHeaderData}
                />
            </Grid>
        </Grid>
    )
}

export default TransactionCancel