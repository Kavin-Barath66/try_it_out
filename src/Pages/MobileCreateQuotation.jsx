import React from 'react'
import { Grid, Box } from "@mui/material";
import ResponseCreateQuotationMobile from '../Components/Response/CreateQuotation/ResponseCreateQuotationMobile';
import CreateQuotationMobile from '../Components/EndPoints/CreateQuotation/CreateQuotationMobile';

function MobileCreateQuotation({allowUatAccess, createQuotationMobileData, setCreateQuotationMobileData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
                <CreateQuotationMobile allowUatAccess={allowUatAccess} setCreateQuotationMobileData={setCreateQuotationMobileData} createQuotationMobileData={createQuotationMobileData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseCreateQuotationMobile allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default MobileCreateQuotation