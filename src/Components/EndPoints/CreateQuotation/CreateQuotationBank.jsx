import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateQuotationBank(props) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Account Number' onChange={({ target }) => props.setAccountNumber(target.value)} value={props.accountNumber} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Recive Country' onChange={({ target }) => props.setReciveCountry(target.value)} value={props.reciveCountry} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Amount
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Amount' onChange={({ target }) => props.setAmount(target.value)} value={props.amount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Request Currency' onChange={({ target }) => props.setRequestCurrency(target.value)} value={props.requestCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Send Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Send Currency' onChange={({ target }) => props.setSendCurrency(target.value)} value={props.sendCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency' onChange={({ target }) => props.setReciveCurrency(target.value)} value={props.reciveCurrency} />
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationBank