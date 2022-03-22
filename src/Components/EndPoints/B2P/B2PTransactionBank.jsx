import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function B2PTransactionBank({allowUatAccess, bankTransactionB2PData, setBankTransactionB2PData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2P Transaction Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setBankTransactionB2PData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={bankTransactionB2PData.requestDate} 
        error={!bankTransactionB2PData.requestDate && true}
          />
          {!bankTransactionB2PData.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.requestDate && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={bankTransactionB2PData.amount} 
          error={!bankTransactionB2PData.amount && true}
          />
          {!bankTransactionB2PData.amount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.amount && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={bankTransactionB2PData.currency}
              select
              disabled={!allowUatAccess}
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionB2PData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, type:target.value}))} 
          value={bankTransactionB2PData.type} 
          error={!bankTransactionB2PData.type && true}
          />
          {!bankTransactionB2PData.type && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.type && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={bankTransactionB2PData.descriptionText} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={bankTransactionB2PData.transRef} 
          error={!bankTransactionB2PData.transRef && true}
          />
          {!bankTransactionB2PData.transRef && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.transRef && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, providerCode:target.value}))} 
          value={bankTransactionB2PData.providerCode} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Payin Amount<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={bankTransactionB2PData.sendingAmount} 
          error={!bankTransactionB2PData.sendingAmount && true}
          />
          {!bankTransactionB2PData.sendingAmount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.sendingAmount && "Mandatory Field"}
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
              setBankTransactionB2PData( (prev) =>
              ({...prev, payinCcyCode:target.value}))} 
              value={bankTransactionB2PData.payinCcyCode} 
              select
              disabled={!allowUatAccess}
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionB2PData.payinCcyCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={bankTransactionB2PData.paymentMode} 
          error={!bankTransactionB2PData.paymentMode && true}
          />
          {!bankTransactionB2PData.paymentMode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.paymentMode && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={bankTransactionB2PData.authenticationPartnerCode} 
          error={!bankTransactionB2PData.authenticationPartnerCode && true}
          />
          {!bankTransactionB2PData.authenticationPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.authenticationPartnerCode && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={bankTransactionB2PData.paymentOption} 
          error={!bankTransactionB2PData.paymentOption && true}
          />
          {!bankTransactionB2PData.paymentOption && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.paymentOption && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={bankTransactionB2PData.sendingPartnerCode} 
          error={!bankTransactionB2PData.sendingPartnerCode && true}
          />
          {!bankTransactionB2PData.sendingPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.sendingPartnerCode && "Mandatory Field"}
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
          setBankTransactionB2PData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={bankTransactionB2PData.receivingPartnerCode} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderMsisd:target.value}))} 
          value={bankTransactionB2PData.senderMsisd} 
          error={!bankTransactionB2PData.senderMsisd && true}
          />
          {!bankTransactionB2PData.senderMsisd && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.senderMsisd && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Beneficiary Mobile Number 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverMsisdn:target.value}))} 
          value={bankTransactionB2PData.receiverMsisdn} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          SMS Notification
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, beneficiarySmsNotify:target.value}))} 
          value={bankTransactionB2PData.beneficiarySmsNotify} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={bankTransactionB2PData.receiverBankaccountno}  
          error={!bankTransactionB2PData.receiverBankaccountno && true}
          />
          {!bankTransactionB2PData.receiverBankaccountno && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receiverBankaccountno && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Bank Account Type
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accounttype' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankAccountType:target.value}))} 
          value={bankTransactionB2PData.receiverBankAccountType}  /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Bank Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankCode:target.value}))} 
          value={bankTransactionB2PData.receiverBankCode} 
          error={!bankTransactionB2PData.receiverBankCode && true}
          />
          {!bankTransactionB2PData.receiverBankCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receiverBankCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2PData.receiverBankName} 
          error={!bankTransactionB2PData.receiverBankName && true}
          />
          {!bankTransactionB2PData.receiverBankName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receiverBankName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Bank Sub Code
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, bankSubCode:target.value}))} 
          value={bankTransactionB2PData.bankSubCode} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Account Name
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, accountName:target.value}))} 
          value={bankTransactionB2PData.accountName} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Branch Name
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='branchName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, branchName:target.value}))} 
          value={bankTransactionB2PData.branchName} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Account IBAN Number
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, accountIBAN:target.value}))} 
          value={bankTransactionB2PData.accountIBAN}
          />
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Account Number Additional field 1
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, accountAdditionalNo1:target.value}))} 
          value={bankTransactionB2PData.accountAdditionalNo1} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 2
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setBankTransactionB2PData( (prev) =>
        ({...prev, accountAdditionalNo2:target.value}))} 
        value={bankTransactionB2PData.accountAdditionalNo2} /></FormControl>
    </Stack>


    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040" >Sender Details:-</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessName:target.value}))} 
          value={bankTransactionB2PData.businessName} 
          error={!bankTransactionB2PData.businessName && true}
          />
          {!bankTransactionB2PData.businessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company PIN Code
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={bankTransactionB2PData.senderBusinessPINCode} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address 1<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddress1:target.value}))} 
          value={bankTransactionB2PData.businessAddress1} 
          error={!bankTransactionB2PData.businessAddress1 && true}
          />
          {!bankTransactionB2PData.businessAddress1 && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessAddress1 && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address 2
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={bankTransactionB2PData.senderBusinessAddress2} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered City
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddressCity:target.value}))} 
          value={bankTransactionB2PData.businessAddressCity} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Country Code
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddressCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessAddressCountryCode} /></FormControl>
      </Stack>
      {/*  */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address Zip Code 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={bankTransactionB2PData.senderBusinessAddressZip} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Primary Contact Country Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessPrimaryContactCountryCode} 
          error={!bankTransactionB2PData.businessPrimaryContactCountryCode && true}
          />
          {!bankTransactionB2PData.businessPrimaryContactCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessPrimaryContactCountryCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Primary Contact Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2PData.businessPrimaryContactNo}
          error={!bankTransactionB2PData.businessPrimaryContactNo && true}
          />
          {!bankTransactionB2PData.businessPrimaryContactNo && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessPrimaryContactNo && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Company
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessDescription:target.value}))} 
          value={bankTransactionB2PData.businessDescription} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Email Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessEmail:target.value}))} 
          value={bankTransactionB2PData.businessEmail} 
          error={!bankTransactionB2PData.businessEmail && true}
          />
          {!bankTransactionB2PData.businessEmail && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessEmail && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Country Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessCountryCode} 
          error={!bankTransactionB2PData.businessCountryCode && true}
          />
          {!bankTransactionB2PData.businessCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessCountryCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Registration<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationType:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationType} 
          error={!bankTransactionB2PData.businessRegistrationType && true}
          />
          {!bankTransactionB2PData.businessRegistrationType && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessRegistrationType && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued by 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2PData.senderBusinessRegistrationIssuedBy} /></FormControl>
      </Stack> 
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued at  
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2PData.senderBusinessRegistrationIssuedAt} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationNumber:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationNumber} 
          error={!bankTransactionB2PData.businessRegistrationNumber && true}
          />
          {!bankTransactionB2PData.businessRegistrationNumber && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessRegistrationNumber && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued Date
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationIssueDate} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Expiry Date<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessIDValidThru:target.value}))} 
          value={bankTransactionB2PData.businessIDValidThru} 
          error={!bankTransactionB2PData.businessIDValidThru && true}
          />
          {!bankTransactionB2PData.businessIDValidThru && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.businessIDValidThru && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>







    {/* Receiver */}
    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Recipient Details:-</Typography>   
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Nationality
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverNationality:target.value}))} 
          value={bankTransactionB2PData.receiverNationality} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Country Code
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactCountryCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactCountryCode} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Number
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNo:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactNo} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Number Type
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNoType:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactNoType} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient First Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverFirstName:target.value}))} 
          value={bankTransactionB2PData.receiverFirstName} 
          error={!bankTransactionB2PData.receiverFirstName && true}
          />
          {!bankTransactionB2PData.receiverFirstName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receiverFirstName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Last Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverLastName:target.value}))} 
          value={bankTransactionB2PData.receiverLastName} 
          error={!bankTransactionB2PData.receiverLastName && true}
          />
          {!bankTransactionB2PData.receiverLastName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receiverLastName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Type 
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={bankTransactionB2PData.receiverIdType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Number  
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={bankTransactionB2PData.receiverIdNumber} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Issue Date  
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={bankTransactionB2PData.receiverIssueDate} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Expiry Date  
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={bankTransactionB2PData.receiverExpiryDate} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Issuer Country 
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={bankTransactionB2PData.receiverIssuerCountry} /></FormControl>
        </Stack>







      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Quoted Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quoted Id' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={bankTransactionB2PData.quoteId} 
          error={!bankTransactionB2PData.quoteId && true}
          />
          {!bankTransactionB2PData.quoteId && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.quoteId && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Country<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={bankTransactionB2PData.receivingCountry}  
          error={!bankTransactionB2PData.receivingCountry && true}
          />
          {!bankTransactionB2PData.receivingCountry && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.receivingCountry && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={bankTransactionB2PData.remittancePurpose} 
          error={!bankTransactionB2PData.remittancePurpose && true}
          />
          {!bankTransactionB2PData.remittancePurpose && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.remittancePurpose && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Source Of Fund<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Fund' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={bankTransactionB2PData.sourceOfFunds} 
          error={!bankTransactionB2PData.sourceOfFunds && true}
          />
          {!bankTransactionB2PData.sourceOfFunds && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2PData.sourceOfFunds && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
          <Typography color="#575757" fontWeight='500'>
          Relationship Of Sender
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Of Sender' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={bankTransactionB2PData.relationshipSender} /></FormControl>
      </Stack>





    </Stack>
    </>
  )
}

export default B2PTransactionBank