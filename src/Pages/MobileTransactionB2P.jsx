import React from 'react'
import { Grid } from "@mui/material";
import ResponseB2PTransactionMobile from '../Components/Response/B2P/ResponseB2PTransactionMobile';
import B2PTransactionMobile from '../Components/EndPoints/B2P/B2PTransactionMobile';




function MobileTransactionB2P({allowUatAccess, mobileTransactionB2PData, setMobileTransactionB2PData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px' }}>
            <Grid item xs={7} sx={{ height:"80vh", overflow:"auto"}}  >
                <B2PTransactionMobile allowUatAccess={allowUatAccess} mobileTransactionB2PData={mobileTransactionB2PData} setMobileTransactionB2PData={setMobileTransactionB2PData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"80vh", overflow:"auto"}}  >
                <ResponseB2PTransactionMobile allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default MobileTransactionB2P