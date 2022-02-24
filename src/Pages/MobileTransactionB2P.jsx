import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2PTransaction from '../Components/Response/ResponseB2PTransaction';
import B2BTransactionMobile from '../Components/EndPoints/B2B/B2BTransactionMobile';




function MobileTransactionB2P() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <B2BTransactionMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2PTransaction/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionB2P