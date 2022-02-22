import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionMobile from '../Components/EndPoints/ViewTransactionMobile';
import ResponseViewTransactionMobile from '../Components/Response/ResponseViewTransactionMobile';



function MobileViewTransaction() {
    return (
        <Grid container>
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