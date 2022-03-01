import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionMobile from '../Components/EndPoints/ViewTransaction/ViewTransactionMobile';
import ResponseViewTransactionMobile from '../Components/Response/ViewTransaction/ResponseViewTransactionMobile';



function MobileViewTransaction({viewTransactionMobileData, setViewTransactionMobileData, responseScreen, apiResponseData, apiResponseHeaderData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <ViewTransactionMobile viewTransactionMobileData={viewTransactionMobileData} setViewTransactionMobileData={setViewTransactionMobileData}/>
            </Grid>
            <Grid item xs={5}>
                <ResponseViewTransactionMobile responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default MobileViewTransaction