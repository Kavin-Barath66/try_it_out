import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateQuotationBank from '../Components/Response/ResponseCreateQuotationBank';
import CreateQuotationBank from '../Components/EndPoints/CreateQuotationBank';

function BankCreateQuotation() {
    return (
        <Grid container>
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