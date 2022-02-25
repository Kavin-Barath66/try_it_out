import React from 'react'
import { Grid } from "@mui/material";
import CorridorQuotation from '../Components/EndPoints/CorridorQuotation';
import ResponseCorridorQuotation from '../Components/Response/ResponseCorridorQuotation';

function Corridor() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CorridorQuotation/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCorridorQuotation/>
            </Grid>
        </Grid>
    )
}

export default Corridor