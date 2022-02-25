import React from 'react'
import { Grid } from "@mui/material";
import CancelTransaction from '../Components/EndPoints/CancelTransaction';
import ResponseCancelTransaction from '../Components/Response/ResponseCancelTransaction';


function TransactionCancel() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CancelTransaction/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCancelTransaction/>
            </Grid>
        </Grid>
    )
}

export default TransactionCancel