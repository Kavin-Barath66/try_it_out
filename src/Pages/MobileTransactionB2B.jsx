import React from 'react'
import { Grid } from "@mui/material";
import B2BTransactionMobile from '../Components/EndPoints/B2B/B2BTransactionMobile';
import ResponseB2BTransactionMobile from '../Components/Response/B2B/ResponseB2BTransactionMobile';



function MobileTransactionB2B({allowUatAccess, mobileTransactionB2BData, setMobileTransactionB2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
                <B2BTransactionMobile allowUatAccess={allowUatAccess} mobileTransactionB2BData={mobileTransactionB2BData} setMobileTransactionB2BData={setMobileTransactionB2BData}/>
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseB2BTransactionMobile allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionB2B