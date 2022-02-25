import React from 'react'
import { Grid } from "@mui/material";
import ResponseReverseTransaction from '../Components/Response/ResponseReverseTransaction';
import ReverseTransaction from '../Components/EndPoints/ReverseTransaction';


function TransactionReverse() {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <ReverseTransaction/>
            </Grid>
            <Grid item xs={5}>
                <ResponseReverseTransaction/>
            </Grid>
        </Grid>
    )
}

export default TransactionReverse