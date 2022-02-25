import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2BTransaction from '../Components/Response/B2B/ResponseB2BTransaction';
import B2BTransactionBank from '../Components/EndPoints/B2B/B2BTransactionBank';



function BankTransactionB2B() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <B2BTransactionBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default BankTransactionB2B