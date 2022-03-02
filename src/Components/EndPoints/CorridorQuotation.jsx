import React from 'react'
import { Stack, Button, Box, Typography, OutlinedInput, MenuItem, TextField } from '@mui/material'

function CorridorQuotation({corridorQuotationData, setCorridorQuotationData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Corridor Quotation</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency
        </Typography>
        <TextField
          sx={{ width: 205 }}
          label="Currency"
          onChange={({ target }) =>
          setCorridorQuotationData( (prev) =>
              ({...prev, currency:target.value}))} 
          value={corridorQuotationData.currency}
          select
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={{ style: { height: 40 } }}
        >
          <MenuItem value='USD'>USD</MenuItem>
          <MenuItem value='INR'>INR</MenuItem>
        </TextField>
        </Stack>
    </Stack>
    </>
  )
}

export default CorridorQuotation