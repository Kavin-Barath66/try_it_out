import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateQuotationMobile(props) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Mobile</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Mobile Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' onChange={({ target }) => props.setCreditMobileNumber(target.value)} value={props.creditMobileNumber} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Amount
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
        Sending Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sending Currency' onChange={({ target }) => props.setSendCurrency(target.value)} value={props.sendCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiving Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Currency' onChange={({ target }) => props.setReciveCurrency(target.value)} value={props.reciveCurrency} />
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationMobile