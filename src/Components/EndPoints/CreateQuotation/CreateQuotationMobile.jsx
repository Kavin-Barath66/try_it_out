import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateQuotationMobile({allowUatAccess, createQuotationMobileData, setCreateQuotationMobileData,}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Mobile</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Request Date'
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationMobileData.requestDate} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver MSISDN
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, reciverMsisdn:target.value}))} 
        value={createQuotationMobileData.reciverMsisdn} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Amount
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Amount' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationMobileData.requestAmount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Request Currency'
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestCurrency:target.value}))} 
        value={createQuotationMobileData.requestCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sending Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sending Currency' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, sendingCurrency:target.value}))} 
        value={createQuotationMobileData.sendingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiving Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Currency' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationMobileData.receivingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Sender MSISDN
        </Typography>
        <OutlinedInput sx={{ height: 40 }} 
            placeholder="Disabled"
            disabled/>
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationMobile