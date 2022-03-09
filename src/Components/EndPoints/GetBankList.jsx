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
            Destination Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="countryCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, country:target.value}))} 
            value={getBankListData.country} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Updated Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="lastUpdatedOn"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, lastUpdatedOn:target.value}))} 
            value={getBankListData.lastUpdatedOn} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankName"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankName:target.value}))} 
            value={getBankListData.bankName} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankCode:target.value}))} 
            value={getBankListData.bankCode} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="providerCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, providerCode:target.value}))} 
            value={getBankListData.providerCode} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Account Status<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="status"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, status:target.value}))} 
            value={getBankListData.status} />
        </Stack>
    </Stack>
    </>
  )
}

export default GetBankList