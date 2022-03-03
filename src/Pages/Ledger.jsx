import React from 'react'
import { Grid } from "@mui/material";
import LedgerBalance from '../Components/EndPoints/LedgerBalance'
import ResponseLedger from '../Components/Response/ResponseLedger';

function Ledger({allowUatAccess, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <LedgerBalance allowUatAccess={allowUatAccess} />
            </Grid>
            <Grid item xs={5}>
                <ResponseLedger allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default Ledger