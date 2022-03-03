import React from 'react'
import { Stack, Button, Box, Typography, OutlinedInput} from '@mui/material'

function GetBankList({allowUatAccess, setGetBankListData, getBankListData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Get Bank List</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={allowUatAccess}
        onChange={({ target }) =>
        setGetBankListData( (prev) =>
            ({...prev, country:target.value}))} 
        value={getBankListData.country} />
        </Stack>
    </Stack>
    </>
  )
}

export default GetBankList