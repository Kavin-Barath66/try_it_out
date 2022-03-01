import React from 'react'
import { Grid } from "@mui/material";
import ResponseReverseTransaction from '../Components/Response/ResponseReverseTransaction';
import ReverseTransaction from '../Components/EndPoints/ReverseTransaction';


function TransactionReverse({reverseTransactionData, setReverseTransactionData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <ReverseTransaction setReverseTransactionData={setReverseTransactionData} reverseTransactionData={reverseTransactionData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseReverseTransaction  responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default TransactionReverse