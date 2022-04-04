import React from 'react'
import { Grid } from "@mui/material";
import ResponseCreateTransactionMobile from '../Components/Response/CreateTransaction/ResponseCreateTransactionMobile';
import CreateTransactionMobile from '../Components/EndPoints/CreateTransaction/CreateTransactionMobile';


function MobileCreateTransaction({allowUatAccess, createTransactionMobileData, setCreateTransactionMobileData,  apiResponseHeaderData, apiResponseData,responseScreen }) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} sx={{ height:"80vh", overflow:"auto"}} >
            <CreateTransactionMobile allowUatAccess={allowUatAccess} createTransactionMobileData={createTransactionMobileData} setCreateTransactionMobileData={setCreateTransactionMobileData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"80vh", overflow:"auto"}} >
                <ResponseCreateTransactionMobile allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData}/>
            </Grid>
        </Grid>
    )
}

export default MobileCreateTransaction