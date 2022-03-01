import React from 'react'
import { Grid } from "@mui/material";
import CreateQuotationBank from '../Components/EndPoints/CreateQuotation/CreateQuotationBank';
import ResponseCreateQuotationBank from '../Components/Response/CreateQuotation/ResponseCreateQuotationBank';

function BankCreateQuotation({createQuotationBank, setCreateQuotationBank, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CreateQuotationBank createQuotationBank={createQuotationBank} setCreateQuotationBank={setCreateQuotationBank} />
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateQuotationBank  responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankCreateQuotation