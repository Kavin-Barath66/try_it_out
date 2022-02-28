import React from 'react'
import { Grid } from "@mui/material";
import LedgerBalance from '../Components/EndPoints/LedgerBalance'
import ResponseLedger from '../Components/Response/ResponseLedger';

function Ledger({responseScreen}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <LedgerBalance/>
            </Grid>
            <Grid item xs={5}>
                <ResponseLedger responseScreen={responseScreen}/>
            </Grid>
        </Grid>
    )
}

export default Ledger