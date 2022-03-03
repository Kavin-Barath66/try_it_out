import React from 'react'
import { Grid } from "@mui/material";
import CorridorQuotation from '../Components/EndPoints/CorridorQuotation';
import ResponseCorridorQuotation from '../Components/Response/ResponseCorridorQuotation';

function Corridor({allowUatAccess, corridorQuotationData, setCorridorQuotationData, responseScreen, apiResponseHeaderData, apiResponseData}) {
    return (
        <Grid container sx={{minHeight: '100%' }}>
            <Grid item xs={7}>
                <CorridorQuotation allowUatAccess={allowUatAccess} corridorQuotationData={corridorQuotationData} setCorridorQuotationData={setCorridorQuotationData}  />
            </Grid>
            <Grid item xs={5}>
                <ResponseCorridorQuotation allowUatAccess={allowUatAccess} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />
            </Grid>
        </Grid>
    )
}

export default Corridor