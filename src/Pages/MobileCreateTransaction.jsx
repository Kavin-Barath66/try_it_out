import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionMobile from '../Components/Response/CreateTransaction/ResponseCreateTransactionMobile';
import CreateTransactionMobile from '../Components/EndPoints/CreateTransaction/CreateTransactionMobile';


function MobileCreateTransaction() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <CreateTransactionMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateTransactionMobile/>
            </Grid>
        </Grid>
    )
}

export default MobileCreateTransaction