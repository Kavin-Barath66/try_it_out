import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

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
        <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='requestDate'
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
        value={createQuotationMobileData.requestDate} 
        error={!createQuotationMobileData.requestDate && true}
          />
          {!createQuotationMobileData.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createQuotationMobileData.requestDate && "Mandatory Field"}
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
        setCreateQuotationMobileData( (prev) =>
            ({...prev, requestAmount:target.value}))} 
        value={createQuotationMobileData.requestAmount} 
        error={!createQuotationMobileData.requestAmount && true}
        />
        {!createQuotationMobileData.requestAmount && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationMobileData.requestAmount && "Mandatory Field"}
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
          setCreateQuotationMobileData( (prev) =>
              ({...prev, requestCurrency:target.value}))} 
          value={createQuotationMobileData.requestCurrency} 
          /* error={!createQuotationMobileData.requestCurrency && true} */
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={createQuotationMobileData.requestCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>
        
        {/* !createQuotationMobileData.requestCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationMobileData.requestCurrency && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Mobile Number
        </Typography>
        <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
        value={createQuotationMobileData.senderMsisdn}
        />
        </FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, reciverMsisdn:target.value}))} 
        value={createQuotationMobileData.reciverMsisdn} 
        error={!createQuotationMobileData.reciverMsisdn && true}
        />
        {!createQuotationMobileData.reciverMsisdn && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationMobileData.reciverMsisdn && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver Bank Account
        </Typography>
        <FormControl sx={{height:45}}> <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno creditParty' 
        disabled={!allowUatAccess} 
        onChange={({ target }) =>
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
        value={createQuotationMobileData.receiverBankaccountno}
        /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Country
        </Typography>
        <FormControl sx={{height:45}}> 
        
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              onChange={({ target }) =>
              setCreateQuotationMobileData( (prev) =>
                  ({...prev, receiverCountry:target.value}))} 
              value={createQuotationMobileData.receiverCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createQuotationMobileData.receiverCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>


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
          setCreateQuotationMobileData( (prev) =>
              ({...prev, sendingCurrency:target.value}))} 
          value={createQuotationMobileData.sendingCurrency} 
          /* error={!createQuotationMobileData.sendingCurrency && true} */
          select
          disabled={!allowUatAccess}
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={createQuotationMobileData.sendingCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
        >
          {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
              <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
          })}
        </TextField>


        {/* !createQuotationMobileData.sendingCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationMobileData.sendingCurrency && "Mandatory Field"}
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
        setCreateQuotationMobileData( (prev) =>
            ({...prev, receivingCurrency:target.value}))} 
        value={createQuotationMobileData.receivingCurrency} 
        /* error={!createQuotationMobileData.receivingCurrency && true} */
        select
        disabled={!allowUatAccess}
        InputProps={{ style: { height: 40 } }}
        InputLabelProps={createQuotationMobileData.receivingCurrency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
      >
        {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
          return (
            <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
          )
        })}
      </TextField>

        {/* !createQuotationMobileData.receivingCurrency && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!createQuotationMobileData.receivingCurrency && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    </Stack>
    </>
  )
}

export default CreateQuotationMobile