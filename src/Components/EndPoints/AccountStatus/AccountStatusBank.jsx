import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function AccountStatusBank(props) {
    
    
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
        <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => props.setAccountStatusBankAccountNumber(target.value)} value={props.accountStatusBankAccountNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full KYC name of the beneficiary
        </Typography>
        <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => props.setAccountStatusBankKycNumber(target.value)} value={props.accountStatusBankKycNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Account Instrument
        </Typography>
        <TextField
            sx={{ width: 205 }}
            label="instrument"
            value={props.accountStatusBankNetwork}
            onChange={({ target }) => props.setAccountStatusBankNetwork(target.value)}
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
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => props.setAccountStatusBankKycNumber(target.value)} value={props.accountStatusBankBankName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Bank code-IFSC/Routing Code/Swift BIC
        </Typography>
        <OutlinedInput sx={{ height: 40 }} onChange={({ target }) => props.setAccountStatusBankBankCode(target.value)} value={props.accountStatusBankBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} onChange={({ target }) =>  props.setAccountStatusBankCountry(target.value)} value={ props.accountStatusBankCountry} />
        </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusBank