import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateQuotationBank({createQuotationBank, setCreateQuotationBank}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Account Number' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationBank.requestDate}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Account Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Account Number' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, bankaccountno:target.value}))} 
        value={createQuotationBank.bankaccountno}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Recive Country' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
        value={createQuotationBank.receivingCountry} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Amount
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Amount' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationBank.requestAmount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Request Currency' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestCurrency:target.value}))} 
        value={createQuotationBank.requestCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sending Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Send Currency' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, sendingCurrency:target.value}))} 
        value={createQuotationBank.sendingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiving Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency' 
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationBank.receivingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
    <Typography color="#575757" fontWeight='500'>
    Receiver MSISDN
    </Typography>
    <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency'
    placeholder ="Disabled"
    disabled />
</Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender MSISDN
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Recive Currency'
        placeholder ="Disabled"
        disabled/>
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationBank