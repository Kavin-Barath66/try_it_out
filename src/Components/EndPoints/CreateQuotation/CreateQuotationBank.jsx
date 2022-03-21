import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

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
       <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationBank.requestDate}
        error={!createQuotationBank.requestDate && true}
          />
          {!createQuotationBank.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createQuotationBank.requestDate && "Mandatory Field"}
            </FormHelperText>
          )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Quotation Amount<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='requestAmount' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationBank.requestAmount} 
        error={!createQuotationBank.requestAmount && true}
          />
          {!createQuotationBank.requestAmount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createQuotationBank.requestAmount && "Mandatory Field"}
            </FormHelperText>
          )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Currency<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> 

        <TextField
          sx={{ width: 213 }}
          label="Currency"
          onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, requestCurrency:target.value}))} 
        value={createQuotationBank.requestCurrency} 
        /* error={!createQuotationBank.requestCurrency && true} */
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={createQuotationBank.requestCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>


        {/* !createQuotationBank.requestCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationBank.requestCurrency && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Mobile Number
        </Typography>
       <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }}
        placeholder ="msisdn debitParty"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
        value={createQuotationBank.senderMsisdn}
        /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number
        </Typography>
       <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }}
        placeholder ="msisdn creditParty"
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
        value={createQuotationBank.receiverMsisdn}
        /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Bank Account<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, bankaccountno:target.value}))} 
        value={createQuotationBank.bankaccountno}
        error={!createQuotationBank.bankaccountno && true}
        />
        {!createQuotationBank.bankaccountno && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationBank.bankaccountno && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Country<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> 
       
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              onChange={({ target }) =>
              setCreateQuotationBank( (prev) =>
                  ({...prev, receivingCountry:target.value}))} 
              value={createQuotationBank.receivingCountry} 
              /* error={!createQuotationBank.receivingCountry && true} */
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createQuotationBank.receivingCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

        {/* !createQuotationBank.receivingCountry && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationBank.receivingCountry && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency of Debitor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> 
       
        <TextField
          sx={{ width: 213 }}
          label="Currency"
          onChange={({ target }) =>
          setCreateQuotationBank( (prev) =>
              ({...prev, sendingCurrency:target.value}))} 
          value={createQuotationBank.sendingCurrency} 
          /* error={!createQuotationBank.sendingCurrency && true} */
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={createQuotationBank.sendingCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>


        {/* !createQuotationBank.sendingCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationBank.sendingCurrency && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Currency of Creditor<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
       <FormControl sx={{height:45}}> 
       
        <TextField
          sx={{ width: 213 }}
          label="Currency"
          onChange={({ target }) =>
        setCreateQuotationBank( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationBank.receivingCurrency}
        /* error={!createQuotationBank.receivingCurrency && true} */
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={createQuotationBank.receivingCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>

        {/* !createQuotationBank.receivingCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationBank.receivingCurrency && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationBank