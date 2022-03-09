import React from 'react'
import { Grid } from "@mui/material";
import GetBankList from '../Components/EndPoints/GetBankList';
import ResponseGetBankList from '../Components/Response/ResponseGetBankList';


function BankList({allowUatAccess, responseScreen, setGetBankListData, getBankListData, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%', paddingTop:'150px'  }}>
            <Grid item xs={7} sx={{ height:"100vh", overflow:"auto"}} >
            <GetBankList allowUatAccess={allowUatAccess} setGetBankListData={setGetBankListData} getBankListData={getBankListData} />
            </Grid>
            <Grid item xs={5} sx={{ height:"100vh", overflow:"auto"}} >
                <ResponseGetBankList allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankList