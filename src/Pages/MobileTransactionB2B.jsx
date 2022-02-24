import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2BTransaction from '../Components/Response/ResponseB2BTransaction';
import B2BTransactionMobile from '../Components/EndPoints/B2B/B2BTransactionMobile';



function MobileTransactionB2B() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <B2BTransactionMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionB2B