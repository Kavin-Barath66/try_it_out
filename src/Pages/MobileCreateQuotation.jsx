import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateQuotationMobile from '../Components/Response/ResponseCreateQuotationMobile';
import CreateQuotationMobile from '../Components/EndPoints/CreateQuotationMobile';

function MobileCreateQuotation() {
    return (
        <Grid container>
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