import React from 'react'
import { Grid } from "@mui/material";
import GetBankList from '../Components/EndPoints/GetBankList';
import ResponseGetBankList from '../Components/Response/ResponseGetBankList';


function BankList({responseScreen}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
            <GetBankList/>
            </Grid>
            <Grid item xs={5}>
                <ResponseGetBankList responseScreen={responseScreen}/>
            </Grid>
        </Grid>
    )
}

export default BankList