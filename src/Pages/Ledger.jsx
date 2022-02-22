import React from 'react'
import { Grid } from "@mui/material";
import LedgerBalance from '../Components/EndPoints/LedgerBalance'
import ResponseLedger from '../Components/Response/ResponseLedger';

function Ledger() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <LedgerBalance/>
            </Grid>
            <Grid item xs={5}>
                <ResponseLedger/>
            </Grid>
        </Grid>
    )
}

export default Ledger