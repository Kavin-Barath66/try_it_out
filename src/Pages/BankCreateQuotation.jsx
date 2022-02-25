import React from 'react'
import { Grid } from "@mui/material";
import CreateQuotationBank from '../Components/EndPoints/CreateQuotation/CreateQuotationBank';
import ResponseCreateQuotationBank from '../Components/Response/CreateQuotation/ResponseCreateQuotationBank';

function BankCreateQuotation() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CreateQuotationBank/>
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateQuotationBank/>
            </Grid>
        </Grid>
    )
}

export default BankCreateQuotation