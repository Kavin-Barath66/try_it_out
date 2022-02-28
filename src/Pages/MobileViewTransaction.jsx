import React from 'react'
import { Grid } from "@mui/material";
import ViewTransactionMobile from '../Components/EndPoints/ViewTransaction/ViewTransactionMobile';
import ResponseViewTransactionMobile from '../Components/Response/ViewTransaction/ResponseViewTransactionMobile';



function MobileViewTransaction({transRef, setTransRef, responseScreen, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <ViewTransactionMobile transRef={transRef} setTransRef={setTransRef}/>
            </Grid>
            <Grid item xs={5}>
                <ResponseViewTransactionMobile responseScreen={responseScreen} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default MobileViewTransaction