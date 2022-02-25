import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionMobile from '../Components/EndPoints/ViewTransaction/ViewTransactionMobile';
import ResponseViewTransactionMobile from '../Components/Response/ViewTransaction/ResponseViewTransactionMobile';



function MobileViewTransaction() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <ViewTransactionMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseViewTransactionMobile/>
            </Grid>
        </Grid>
    )
}

export default MobileViewTransaction