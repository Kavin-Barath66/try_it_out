import React from 'react'
import { Grid } from "@mui/material";
import CreateQuotationBank from '../Components/EndPoints/CreateQuotation/CreateQuotationBank';
import ResponseCreateQuotationBank from '../Components/Response/CreateQuotation/ResponseCreateQuotationBank';

function BankCreateQuotation({allowUatAccess, createQuotationBank, setCreateQuotationBank, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{height: '100%', paddingTop:'150px' }}>
            <Grid item xs={7} sx={{ height:"80vh", overflow:"auto"}}>
                <CreateQuotationBank allowUatAccess={allowUatAccess} createQuotationBank={createQuotationBank} setCreateQuotationBank={setCreateQuotationBank} />
            </Grid>
            <Grid item xs={5} sx={{ height:"80vh", overflow:"auto"}}>
                <ResponseCreateQuotationBank allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankCreateQuotation