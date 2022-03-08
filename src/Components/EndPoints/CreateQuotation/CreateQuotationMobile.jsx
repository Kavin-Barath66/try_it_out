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
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestDate'
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationMobileData.requestDate} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Quotation Amount<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestAmount' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationMobileData.requestAmount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestCurrency'
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestCurrency:target.value}))} 
        value={createQuotationMobileData.requestCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Mobile Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
        value={createQuotationMobileData.senderMsisdn}
        />
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, reciverMsisdn:target.value}))} 
        value={createQuotationMobileData.reciverMsisdn} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Bank Account
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno creditParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
        value={createQuotationMobileData.receiverBankaccountno}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry creditParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receiverCountry:target.value}))} 
        value={createQuotationMobileData.receiverCountry}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency of Debitor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='sendingCurrency' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, sendingCurrency:target.value}))} 
        value={createQuotationMobileData.sendingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Currency of Creditor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='receivingCurrency' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationMobileData.receivingCurrency} />
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationMobile