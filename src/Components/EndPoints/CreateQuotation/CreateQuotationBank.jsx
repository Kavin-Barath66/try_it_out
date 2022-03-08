import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateQuotationBank({allowUatAccess, createQuotationBank, setCreateQuotationBank}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationBank.requestDate}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Quotation Amount<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestAmount' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationBank.requestAmount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestCurrency' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestCurrency:target.value}))} 
        value={createQuotationBank.requestCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Mobile Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }}
        placeholder ="msisdn debitParty"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
        value={createQuotationBank.senderMsisdn}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }}
        placeholder ="msisdn creditParty"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
        value={createQuotationBank.receiverMsisdn}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Bank Account<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, bankaccountno:target.value}))} 
        value={createQuotationBank.bankaccountno}
        />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Country<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry creditParty' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
        value={createQuotationBank.receivingCountry} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency of Debitor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='sendingCurrency' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, sendingCurrency:target.value}))} 
        value={createQuotationBank.sendingCurrency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Currency of Creditor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='receivingCurrency' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationBank.receivingCurrency} />
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationBank