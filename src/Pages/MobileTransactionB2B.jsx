import React from 'react'
import { Grid } from "@mui/material";
import B2BTransactionMobile from '../Components/EndPoints/B2B/B2BTransactionMobile';
import ResponseB2BTransactionMobile from '../Components/Response/B2B/ResponseB2BTransactionMobile';



function MobileTransactionB2B({mobileTransactionB2BData, setMobileTransactionB2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <B2BTransactionMobile mobileTransactionB2BData={mobileTransactionB2BData} setMobileTransactionB2BData={setMobileTransactionB2BData}/>
            </Grid>
            <Grid item xs={5}>
                <ResponseB2BTransactionMobile   responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionB2B