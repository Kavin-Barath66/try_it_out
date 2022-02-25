import React from 'react'
import { Grid } from "@mui/material";
import ResponseP2BTransaction from '../Components/Response/P2B/ResponseP2BTransaction';
import P2BTransactionMobile from '../Components/EndPoints/P2B/P2BTransactionMobile';




function MobileTransactionP2B() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <P2BTransactionMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseP2BTransaction/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionP2B