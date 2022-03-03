import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function AccountStatusBank({allowUatAccess, bankAccountStatusData, setBankAccountStatusData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Bank Account Status</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Bank Account ID or IBAN Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
            ({...prev, accountId:target.value}))} 
        value={bankAccountStatusData.accountId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full KYC name of the beneficiary
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bnv:target.value}))} 
        value={bankAccountStatusData.bnv}
        />
        </Stack>
        {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Account Instrument
        </Typography>
        <TextField
            sx={{ width: 205 }}
            label="instrument"
            onChange={({ target }) =>
            setBankAccountStatusData( (prev) =>
            ({...prev, instrument:target.value}))} 
            value={bankAccountStatusData.instrument}
            select
            InputProps={{ style: { height: 40 } }}
            InputLabelProps={{ style: { height: 40 } }}
        >
            <MenuItem value="" >
            instrument
            </MenuItem>
            <MenuItem value='mobile-wallet'>Mobile-Wallet</MenuItem>
            <MenuItem value='bank-account'>Bank-Account</MenuItem>
        </TextField>
        </Stack> */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bankName:target.value}))} 
        value={bankAccountStatusData.bankName}
        />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Bank code-IFSC/Routing Code/Swift BIC
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, bankCode:target.value}))} 
        value={bankAccountStatusData.bankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setBankAccountStatusData( (prev) =>
        ({...prev, country:target.value}))} 
        value={bankAccountStatusData.country} />
        </Stack>
        {/* Optional & conditional fields */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full name of the sender as per KYC Id
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="Disabled"
        disabled />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary MSISDN with country code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="Disabled"
        disabled />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Bank Sub code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
        placeholder="Disabled"
        disabled />
        </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusBank