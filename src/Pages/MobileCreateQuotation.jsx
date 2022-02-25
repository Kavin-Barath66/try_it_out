import React from 'react'
import { Grid, Box } from "@mui/material";
import ResponseCreateQuotationMobile from '../Components/Response/CreateQuotation/ResponseCreateQuotationMobile';
import CreateQuotationMobile from '../Components/EndPoints/CreateQuotation/CreateQuotationMobile';

function MobileCreateQuotation() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CreateQuotationMobile/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateQuotationMobile/>
            </Grid>
        </Grid>
    )
}

export default MobileCreateQuotation