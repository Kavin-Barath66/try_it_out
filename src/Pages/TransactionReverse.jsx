import React from 'react'
import { Grid } from "@mui/material";
import ResponseReverseTransaction from '../Components/Response/ResponseReverseTransaction';
import ReverseTransaction from '../Components/EndPoints/ReverseTransaction';


function TransactionReverse({allowUatAccess, reverseTransactionData, setReverseTransactionData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} >
                <ReverseTransaction allowUatAccess={allowUatAccess} setReverseTransactionData={setReverseTransactionData} reverseTransactionData={reverseTransactionData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseReverseTransaction allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default TransactionReverse