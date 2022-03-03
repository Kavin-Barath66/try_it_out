import React from 'react'
import { Grid } from "@mui/material";
import GetBankList from '../Components/EndPoints/GetBankList';
import ResponseGetBankList from '../Components/Response/ResponseGetBankList';


function BankList({allowUatAccess, responseScreen, setGetBankListData, getBankListData, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <GetBankList allowUatAccess={allowUatAccess} setGetBankListData={setGetBankListData} getBankListData={getBankListData} />
            </Grid>
            <Grid item xs={5}>
                <ResponseGetBankList allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />
            </Grid>
        </Grid>
    )
}

export default BankList