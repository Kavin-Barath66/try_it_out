import React from 'react'
import { Grid, Box } from "@mui/material";
import ResponseCreateQuotationMobile from '../Components/Response/CreateQuotation/ResponseCreateQuotationMobile';
import CreateQuotationMobile from '../Components/EndPoints/CreateQuotation/CreateQuotationMobile';

function MobileCreateQuotation({createQuotationMobileData, setCreateQuotationMobileData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CreateQuotationMobile setCreateQuotationMobileData={setCreateQuotationMobileData} createQuotationMobileData={createQuotationMobileData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseCreateQuotationMobile responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default MobileCreateQuotation