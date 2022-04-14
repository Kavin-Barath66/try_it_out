import React from 'react'
import { Stack, Button, Box, Typography, OutlinedInput, MenuItem, TextField } from '@mui/material'
import { currencyList } from '../../Utils/currency'

function CorridorQuotation({allowUatAccess, corridorQuotationData, setCorridorQuotationData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Corridor Quotation</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500' sx={{width:350}}>
        Prefunding Currency
        </Typography>
        <TextField
          sx={{ width: 213 }}
          label="Currency"
          onChange={({ target }) =>
          setCorridorQuotationData( (prev) =>
              ({...prev, currency:target.value}))} 
          value={corridorQuotationData.currency}
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40, width:213 } }}
          InputLabelProps={corridorQuotationData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
        {/* <MenuItem value="">All</MenuItem> */}
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>
        </Stack>
    </Stack>
    </>
  )
}

export default CorridorQuotation