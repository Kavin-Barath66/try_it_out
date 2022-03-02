import React from 'react'
import { Grid } from "@mui/material";
import P2BTransactionMobile from '../Components/EndPoints/P2B/P2BTransactionMobile';
import ResponseP2BTransactionMobile from '../Components/Response/P2B/ResponseP2BTransactionMobile';




function MobileTransactionP2B({mobileTransactionP2BData, setMobileTransactionP2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <P2BTransactionMobile mobileTransactionP2BData={mobileTransactionP2BData} setMobileTransactionP2BData={setMobileTransactionP2BData}/>
            </Grid>
            <Grid item xs={5}>
                <ResponseP2BTransactionMobile responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default MobileTransactionP2B