import React from 'react'
import { Grid } from "@mui/material";
import ResponseP2BTransaction from '../Components/Response/P2B/ResponseP2BTransaction';
import P2BTransactionBank from '../Components/EndPoints/P2B/P2BTransactionBank';



function BankTransactionP2B() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
               <P2BTransactionBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseP2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default BankTransactionP2B