import React from 'react'
import { Grid } from "@mui/material";
import P2BTransactionMobile from '../Components/EndPoints/P2B/P2BTransactionMobile';
import ResponseP2BTransactionMobile from '../Components/Response/P2B/ResponseP2BTransactionMobile';
import './home.css'




function MobileTransactionP2B({allowUatAccess, mobileTransactionP2BData, setMobileTransactionP2BData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{height: '100%', paddingTop:'150px'}}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
                <P2BTransactionMobile allowUatAccess={allowUatAccess} mobileTransactionP2BData={mobileTransactionP2BData} setMobileTransactionP2BData={setMobileTransactionP2BData}/>
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseP2BTransactionMobile allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default MobileTransactionP2B