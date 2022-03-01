import React from 'react'
import { Stack, Button, Box, Typography, OutlinedInput } from '@mui/material'

function CorridorQuotation({corridorQuotationData, setCorridorQuotationData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Get Bank List</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        onChange={({ target }) =>
        setCorridorQuotationData( (prev) =>
            ({...prev, currency:target.value}))} 
        value={corridorQuotationData.currency} />
        </Stack>
    </Stack>
    </>
  )
}

export default CorridorQuotation