import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionMobile from '../Components/Response/ResponseCreateTransactionMobile';
import CreateTransactionMobile from '../Components/EndPoints/CreateTransactionMobile';


function MobileCreateTransaction() {
    return (
        <Grid container>
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