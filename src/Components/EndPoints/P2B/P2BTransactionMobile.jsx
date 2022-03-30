import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { countryList } from '../../../Utils/country'
import { currencyList } from '../../../Utils/currency'


import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function P2BTransactionMobile({allowUatAccess, mobileTransactionP2BData, setMobileTransactionP2BData}) {        
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">P2B Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={mobileTransactionP2BData.requestDate}
        error={!mobileTransactionP2BData.requestDate && true}
            />
            {!mobileTransactionP2BData.requestDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!mobileTransactionP2BData.requestDate && "Mandatory Field"}
              </FormHelperText>
            )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='amount'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, amount:target.value}))} 
        value={mobileTransactionP2BData.amount} 
        error={!mobileTransactionP2BData.amount && true}
            />
            {!mobileTransactionP2BData.amount && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!mobileTransactionP2BData.amount && "Mandatory Field"}
              </FormHelperText>
            )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Destination Currency<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <TextField
                sx={{ width: 213 }}
                label="Currency" 
                onChange={({ target }) =>
                setMobileTransactionP2BData( (prev) =>
                ({...prev, currency:target.value}))} 
                value={mobileTransactionP2BData.currency}
                select
                disabled={!allowUatAccess}
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={mobileTransactionP2BData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
                >
                {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
                return (
                    <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
                )
                })}
            </TextField>

        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Transaction Type<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='type'
        disabled={true}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, type:target.value}))} 
        value={mobileTransactionP2BData.type} 
        error={!mobileTransactionP2BData.type && true}
            />
            {!mobileTransactionP2BData.type && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!mobileTransactionP2BData.type && "Mandatory Field"}
              </FormHelperText>
            )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Free format Text Description
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, descriptionText:target.value}))} 
        value={mobileTransactionP2BData.descriptionText} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, transRef:target.value}))} 
        value={mobileTransactionP2BData.transRef}
        error={!mobileTransactionP2BData.transRef && true}
        />
        {!mobileTransactionP2BData.transRef && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.transRef && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Provider Code 
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, providerCode:target.value}))} 
        value={mobileTransactionP2BData.providerCode}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Payin Amount<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sendingAmount:target.value}))} 
        value={mobileTransactionP2BData.sendingAmount}
        error={!mobileTransactionP2BData.sendingAmount && true}
        />
        {!mobileTransactionP2BData.sendingAmount && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.sendingAmount && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Payin Currency<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>

        <TextField
            sx={{ width: 213 }}
            label="Currency" 
            onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, payinCcyCode:target.value}))} 
        value={mobileTransactionP2BData.payinCcyCode} 
            select
            disabled={!allowUatAccess}
            InputProps={{ style: { height: 40 } }}
            InputLabelProps={mobileTransactionP2BData.payinCcyCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
            >
            {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
            return (
                <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
            )
            })}
        </TextField>

        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Type of Payment<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='paymentMode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, paymentMode:target.value}))} 
        value={mobileTransactionP2BData.paymentMode} 
        error={!mobileTransactionP2BData.paymentMode && true}
        />
        {!mobileTransactionP2BData.paymentMode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.paymentMode && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Authentication Partner Code<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='authenticationPartnerCode' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, authenticationPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.authenticationPartnerCode}
        error={!mobileTransactionP2BData.authenticationPartnerCode && true}
        />
        {!mobileTransactionP2BData.authenticationPartnerCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.authenticationPartnerCode && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Payment Option<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='paymentOption'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, paymentOption:target.value}))} 
        value={mobileTransactionP2BData.paymentOption} 
        error={!mobileTransactionP2BData.paymentOption && true}
        />
        {!mobileTransactionP2BData.paymentOption && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.paymentOption && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Send Partner Code<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingPartnerCode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sendingPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.sendingPartnerCode}  
        error={!mobileTransactionP2BData.sendingPartnerCode && true}
        />
        {!mobileTransactionP2BData.sendingPartnerCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.sendingPartnerCode && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Partner Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingPartnerCode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receivingPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.receivingPartnerCode} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderMsisdn:target.value}))} 
        value={mobileTransactionP2BData.senderMsisdn} 
        error={!mobileTransactionP2BData.senderMsisdn && true}
        />
        {!mobileTransactionP2BData.senderMsisdn && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.senderMsisdn && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receiverMsisdn:target.value}))} 
        value={mobileTransactionP2BData.receiverMsisdn} 
        error={!mobileTransactionP2BData.receiverMsisdn && true}
        />
        {!mobileTransactionP2BData.receiverMsisdn && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.receiverMsisdn && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        SMS Notification
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, beneficiarySmsNotify:target.value}))} 
        value={mobileTransactionP2BData.beneficiarySmsNotify} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Bank Account Number
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receiverBankaccountno:target.value}))} 
        value={mobileTransactionP2BData.receiverBankaccountno} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, bankCode:target.value}))} 
        value={mobileTransactionP2BData.bankCode} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full Name of Beneficiary Bank
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, bankName:target.value}))} 
        value={mobileTransactionP2BData.bankName} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Sub Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, bankSubCode:target.value}))} 
        value={mobileTransactionP2BData.bankSubCode} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Account IBAN Number
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, accountIBAN:target.value}))} 
        value={mobileTransactionP2BData.accountIBAN} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 1 
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, accountAdditionalNo1:target.value}))} 
        value={mobileTransactionP2BData.accountAdditionalNo1} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 2
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, accountAdditionalNo2:target.value}))} 
        value={mobileTransactionP2BData.accountAdditionalNo2} /></FormControl>
    </Stack>







    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Nationality"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, nationality:target.value}))} 
        value={mobileTransactionP2BData.nationality} 
        error={!mobileTransactionP2BData.nationality && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionP2BData.nationality ?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>
        {!mobileTransactionP2BData.nationality && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.nationality && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date of Birth<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, dateOfBirth:target.value}))} 
        value={mobileTransactionP2BData.dateOfBirth} 
        error={!mobileTransactionP2BData.dateOfBirth && true}
        />
        {!mobileTransactionP2BData.dateOfBirth && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.dateOfBirth && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Gender (Sender)
        </Typography>
        <TextField
              sx={{ width: 213 }}
              label="gender"
              disabled={!allowUatAccess}     
              onChange={({ target }) =>
            setMobileTransactionP2BData( (prev) =>
            ({...prev, gender:target.value}))} 
            value={mobileTransactionP2BData.gender} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={{ style: { height: 40 } }}
            >
              <MenuItem value='M'>Male</MenuItem>
              <MenuItem value='F'>Female</MenuItem>
            </TextField>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Primary Contact Country Code (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactCountryCode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
        value={mobileTransactionP2BData.senderBusinessPrimaryContactCountryCode} 
        /* error={!mobileTransactionP2BData.senderBusinessPrimaryContactCountryCode && true} */
        />
        {/* !mobileTransactionP2BData.senderBusinessPrimaryContactCountryCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.senderBusinessPrimaryContactCountryCode && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Primary Contact Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
        value={mobileTransactionP2BData.senderBusinessPrimaryContactNo} 
        /* error={!mobileTransactionP2BData.senderBusinessPrimaryContactNo && true} */
        />
        {/* !mobileTransactionP2BData.senderBusinessPrimaryContactNo && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.senderBusinessPrimaryContactNo && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Primary Contact Number Type (Sender) <span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderPrimaryContactNoType:target.value}))} 
        value={mobileTransactionP2BData.senderPrimaryContactNoType} 
        /* error={!mobileTransactionP2BData.senderPrimaryContactNoType && true} */
        />
        {/* !mobileTransactionP2BData.senderPrimaryContactNoType && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.senderPrimaryContactNoType && "Mandatory Field"}
          </FormHelperText>
        ) */}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Id Document Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, idType:target.value}))} 
        value={mobileTransactionP2BData.idType} 
        error={!mobileTransactionP2BData.idType && true}
        />
        {!mobileTransactionP2BData.idType && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.idType && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, idNumber:target.value}))} 
        value={mobileTransactionP2BData.idNumber} 
        error={!mobileTransactionP2BData.idNumber && true}
        />
        {!mobileTransactionP2BData.idNumber && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.idNumber && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Id Document Issue Date (Sender)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, issueDate:target.value}))} 
        value={mobileTransactionP2BData.issueDate} /></FormControl>
    </Stack>  
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, expiryDate:target.value}))} 
        value={mobileTransactionP2BData.expiryDate}  
        error={!mobileTransactionP2BData.expiryDate && true}
        />
        {!mobileTransactionP2BData.expiryDate && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.expiryDate && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Id Issuer Country (Sender)
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="issuer Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setMobileTransactionP2BData( (prev) =>
              ({...prev, issuerCountry:target.value}))} 
              value={mobileTransactionP2BData.issuerCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionP2BData.issuerCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
        Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine1:target.value}))} 
        value={mobileTransactionP2BData.addressLine1} 
        error={!mobileTransactionP2BData.addressLine1 && true}
        />
        {!mobileTransactionP2BData.addressLine1 && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.addressLine1 && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Address Line2 (Sender Address)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine2:target.value}))} 
        value={mobileTransactionP2BData.addressLine2} /></FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        AAddress Line3 (Sender Address)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine3:target.value}))} 
        value={mobileTransactionP2BData.addressLine3}/></FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='city' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, city:target.value}))} 
        value={mobileTransactionP2BData.city}
        error={!mobileTransactionP2BData.city && true}
        />
        {!mobileTransactionP2BData.city && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.city && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        State (Sender Address)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, stateProvince:target.value}))} 
        value={mobileTransactionP2BData.stateProvince} /></FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Postal Code (Sender Address)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, postalCode:target.value}))} 
        value={mobileTransactionP2BData.postalCode} /></FormControl>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setMobileTransactionP2BData( (prev) =>
            ({...prev, country:target.value}))} 
            value={mobileTransactionP2BData.country} 
            error={!mobileTransactionP2BData.country && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionP2BData.country?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

        {!mobileTransactionP2BData.country && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.country && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Title (Sender)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='title'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderTitle:target.value}))} 
        value={mobileTransactionP2BData.senderTitle} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, firstName:target.value}))} 
        value={mobileTransactionP2BData.firstName}  
        error={!mobileTransactionP2BData.firstName && true}
        />
        {!mobileTransactionP2BData.firstName && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.firstName && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Middle Name (Sender)
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='middleName' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, middleName:target.value}))} 
        value={mobileTransactionP2BData.middleName}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='lastName' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, lastName:target.value}))} 
        value={mobileTransactionP2BData.lastName}
        error={!mobileTransactionP2BData.lastName && true}
        />
        {!mobileTransactionP2BData.lastName && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.lastName && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    




    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Receiver Details:-</Typography>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessName:target.value}))} 
        value={mobileTransactionP2BData.businessName} 
        error={!mobileTransactionP2BData.businessName && true}
        />
        {!mobileTransactionP2BData.businessName && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.businessName && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company PIN Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPINCode:target.value}))} 
        value={mobileTransactionP2BData.businessPINCode} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered Address 1
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddress1:target.value}))} 
        value={mobileTransactionP2BData.businessAddress1} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered Address 2
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddress2:target.value}))} 
        value={mobileTransactionP2BData.businessAddress2}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered City
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressCity:target.value}))} 
        value={mobileTransactionP2BData.businessAddressCity}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered State
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressState:target.value}))} 
        value={mobileTransactionP2BData.businessAddressState}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
        alignItems='center'
          sx={{ width: 213}}
          label="country"
          disabled={!allowUatAccess}
          onChange={({ target }) =>
          setMobileTransactionP2BData( (prev) =>
          ({...prev, businessAddressCountryCode:target.value}))} 
          value={mobileTransactionP2BData.businessAddressCountryCode} 
          error={!mobileTransactionP2BData.businessAddressCountryCode && true}
          select
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={mobileTransactionP2BData.businessAddressCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
        >
          <MenuItem value="">Country</MenuItem>
          {countryList && countryList.length > 0 && countryList.map((value, index) => {
          return (
            <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
          )
        })}
        </TextField>


        {!mobileTransactionP2BData.businessAddressCountryCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.businessAddressCountryCode && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Registered Address Zip Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressZip:target.value}))} 
        value={mobileTransactionP2BData.businessAddressZip} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Primary Contact Country Code
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setMobileTransactionP2BData( (prev) =>
              ({...prev, businessPrimaryContactCountryCode:target.value}))} 
              value={mobileTransactionP2BData.businessPrimaryContactCountryCode}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionP2BData.businessPrimaryContactCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
        Recipient Company Primary Contact Number
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
        disabled={!allowUatAccess}    
         onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPrimaryContactNo:target.value}))} 
        value={mobileTransactionP2BData.businessPrimaryContactNo}/></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Primary Contact Number type
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPrimaryContactNoType:target.value}))} 
        value={mobileTransactionP2BData.businessPrimaryContactNoType} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Type of Company
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessDescription:target.value}))} 
        value={mobileTransactionP2BData.businessDescription} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Email Id
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessEmail:target.value}))} 
        value={mobileTransactionP2BData.businessEmail} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Country Code
        </Typography>
        <FormControl sx={{height:45}}>
        <TextField
            alignItems='center'
            sx={{ width: 213}}
            label="country"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setMobileTransactionP2BData( (prev) =>
            ({...prev, businessCountryCode:target.value}))} 
            value={mobileTransactionP2BData.businessCountryCode}
            select
            InputProps={{ style: { height: 40 } }}
            InputLabelProps={mobileTransactionP2BData.businessCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
        Recipient Type of Registration
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationType:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationType}  /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Incorporation Number
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationNumber:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationNumber} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Incorporation Issued by
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssuedBy:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssuedBy} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Incorporation Issued at
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssuedAt:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssuedAt} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Incorporation Issued Date
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssueDate:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssueDate} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company Incorporation Expiry Date
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessIDValidThru:target.value}))} 
        value={mobileTransactionP2BData.businessIDValidThru} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Type of Company
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, typeofbusiness:target.value}))} 
        value={mobileTransactionP2BData.typeofbusiness} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Recipient Company PO Box
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPObox:target.value}))} 
        value={mobileTransactionP2BData.businessPObox} /></FormControl>
    </Stack>






    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, quoteId:target.value}))} 
        value={mobileTransactionP2BData.quoteId} 
        error={!mobileTransactionP2BData.quoteId && true}
        />
        {!mobileTransactionP2BData.quoteId && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.quoteId && "Mandatory Field"}
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
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setMobileTransactionP2BData( (prev) =>
              ({...prev, receivingCountry:target.value}))} 
              value={mobileTransactionP2BData.receivingCountry} 
              error={!mobileTransactionP2BData.receivingCountry && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionP2BData.receivingCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>
        {!mobileTransactionP2BData.receivingCountry && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.receivingCountry && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, remittancePurpose:target.value}))} 
        value={mobileTransactionP2BData.remittancePurpose} 
        error={!mobileTransactionP2BData.remittancePurpose && true}
        />
        {!mobileTransactionP2BData.remittancePurpose && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.remittancePurpose && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Source of Funds<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' 
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sourceOfFunds:target.value}))} 
        value={mobileTransactionP2BData.sourceOfFunds} 
        error={!mobileTransactionP2BData.sourceOfFunds && true}
        />
        {!mobileTransactionP2BData.sourceOfFunds && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionP2BData.sourceOfFunds && "Mandatory Field"}
          </FormHelperText>
        )}
        </FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
        <Typography color="#575757" fontWeight='500'>
        Relationship - Sender & Beneficiary
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, relationshipSender:target.value}))} 
        value={mobileTransactionP2BData.relationshipSender} /></FormControl>
    </Stack>
</Stack>
    </>
  )
}

export default P2BTransactionMobile