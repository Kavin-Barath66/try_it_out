import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, FormHelperText, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function AccountStatusBank({allowUatAccess, bankAccountStatusData, setBankAccountStatusData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Bank Account Status</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" direction='row' fontWeight='500'>
        Beneficiary Bank Account<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        placeholder="accountId"
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
            ({...prev, accountId:target.value}))} 
        value={bankAccountStatusData.accountId} 
        />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full KYC name of Beneficiary<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        placeholder="bnv"
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bnv:target.value}))} 
        value={bankAccountStatusData.bnv}
        />
        </Stack>

        {/* Full name of Sender  optional*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full name of Sender
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="snv"
        disabled={!allowUatAccess} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="bankcode"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bankCode:target.value}))} 
        value={bankAccountStatusData.bankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="bankname"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bankName:target.value}))} 
        value={bankAccountStatusData.bankName}
        />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Country Code<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="country"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, country:target.value}))} 
        value={bankAccountStatusData.country} />
        </Stack>
        {/* Optional & conditional fields */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="msisdn"
        disabled={!allowUatAccess} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Provider Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="provider"
        disabled={!allowUatAccess} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Bank Sub Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="banksubcode"
        disabled={!allowUatAccess} />
        </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusBank