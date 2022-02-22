import React from 'react'
import { Grid } from "@mui/material";
import GetBankList from '../Components/EndPoints/GetBankList';
import ResponseGetBankList from '../Components/Response/ResponseGetBankList';


function BankList() {
    return (
        <Grid container>
            <Grid item xs={7}>
            <GetBankList/>
            </Grid>
            <Grid item xs={5}>
                <ResponseGetBankList/>
            </Grid>
        </Grid>
    )
}

export default BankList