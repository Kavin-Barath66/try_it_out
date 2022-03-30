import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function B2PTransactionMobile({allowUatAccess, mobileTransactionB2PData, setMobileTransactionB2PData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2P Transaction Mobile</Typography>
    </Stack>

    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}   >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={mobileTransactionB2PData.requestDate} 
        error={!mobileTransactionB2PData.requestDate && true}
          />
          {!mobileTransactionB2PData.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.requestDate && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={mobileTransactionB2PData.amount} 
          error={!mobileTransactionB2PData.amount && true}
          />
          {!mobileTransactionB2PData.amount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.amount && "Mandatory Field"}
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
                setMobileTransactionB2PData( (prev) =>
                ({...prev, currency:target.value}))} 
                value={mobileTransactionB2PData.currency} 
                select
                disabled={!allowUatAccess}
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={mobileTransactionB2PData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, type:target.value}))} 
          value={mobileTransactionB2PData.type} 
          error={!mobileTransactionB2PData.type && true}
          />
          {!mobileTransactionB2PData.type && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.type && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={mobileTransactionB2PData.descriptionText} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={mobileTransactionB2PData.transRef} 
          error={!mobileTransactionB2PData.transRef && true}
          />
          {!mobileTransactionB2PData.transRef && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.transRef && "Mandatory Field"}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, providerCode:target.value}))} 
        value={mobileTransactionB2PData.providerCode} /></FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Payin Amount<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, sendingAmount:target.value}))} 
        value={mobileTransactionB2PData.sendingAmount} 
        error={!mobileTransactionB2PData.sendingAmount && true}
          />
          {!mobileTransactionB2PData.sendingAmount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.sendingAmount && "Mandatory Field"}
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
                setMobileTransactionB2PData( (prev) =>
                ({...prev, payinCcyCode:target.value}))} 
                value={mobileTransactionB2PData.payinCcyCode}
                select
                disabled={!allowUatAccess}
                InputProps={{ style: { height: 40 } }}
                InputLabelProps={mobileTransactionB2PData.payinCcyCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, paymentMode:target.value}))} 
        value={mobileTransactionB2PData.paymentMode} 
        error={!mobileTransactionB2PData.paymentMode && true}
          />
          {!mobileTransactionB2PData.paymentMode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.paymentMode && "Mandatory Field"}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, authenticationPartnerCode:target.value}))} 
        value={mobileTransactionB2PData.authenticationPartnerCode} 
        error={!mobileTransactionB2PData.authenticationPartnerCode && true}
        />
        {!mobileTransactionB2PData.authenticationPartnerCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionB2PData.authenticationPartnerCode && "Mandatory Field"}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, paymentOption:target.value}))} 
        value={mobileTransactionB2PData.paymentOption} 
        error={!mobileTransactionB2PData.paymentOption && true}
        />
        {!mobileTransactionB2PData.paymentOption && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionB2PData.paymentOption && "Mandatory Field"}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, sendingPartnerCode:target.value}))} 
        value={mobileTransactionB2PData.sendingPartnerCode} 
        error={!mobileTransactionB2PData.sendingPartnerCode && true}
        />
        {!mobileTransactionB2PData.sendingPartnerCode && (
          <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
            {!mobileTransactionB2PData.sendingPartnerCode && "Mandatory Field"}
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
        setMobileTransactionB2PData( (prev) =>
        ({...prev, receivingPartnerCode:target.value}))} 
        value={mobileTransactionB2PData.receivingPartnerCode} /></FormControl>
  </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderMsisd:target.value}))} 
          value={mobileTransactionB2PData.senderMsisd} 
          error={!mobileTransactionB2PData.senderMsisd && true}
          />
          {!mobileTransactionB2PData.senderMsisd && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.senderMsisd && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverMsisd:target.value}))} 
          value={mobileTransactionB2PData.receiverMsisd} 
          error={!mobileTransactionB2PData.receiverMsisd && true}
          />
          {!mobileTransactionB2PData.receiverMsisd && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.receiverMsisd && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        SMS Notification 
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, beneficiarySmsNotify:target.value}))} 
        value={mobileTransactionB2PData.beneficiarySmsNotify} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Bank Account Number
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, bankaccountno:target.value}))} 
        value={mobileTransactionB2PData.bankaccountno} /></FormControl>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, bankCode:target.value}))} 
        value={mobileTransactionB2PData.bankCode} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Full Name of Beneficiary Bank
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, bankName:target.value}))} 
        value={mobileTransactionB2PData.bankName} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Bank Sub Code
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, bankSubCode:target.value}))} 
        value={mobileTransactionB2PData.bankSubCode} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receive Account IBAN Number 
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, accountIBAN:target.value}))} 
        value={mobileTransactionB2PData.accountIBAN} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 1
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, accountAdditionalNo1:target.value}))} 
        value={mobileTransactionB2PData.accountAdditionalNo1} /></FormControl>
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 2
        </Typography>
        <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setMobileTransactionB2PData( (prev) =>
        ({...prev, accountAdditionalNo2:target.value}))} 
        value={mobileTransactionB2PData.accountAdditionalNo2} /></FormControl>
    </Stack>




      <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessName:target.value}))} 
          value={mobileTransactionB2PData.businessName} 
          error={!mobileTransactionB2PData.businessName && true}
          />
          {!mobileTransactionB2PData.businessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessName && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={mobileTransactionB2PData.senderBusinessPINCode} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address 1<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddress1:target.value}))} 
          value={mobileTransactionB2PData.businessAddress1} 
          error={!mobileTransactionB2PData.businessAddress1 && true}
          />
          {!mobileTransactionB2PData.businessAddress1 && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessAddress1 && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={mobileTransactionB2PData.senderBusinessAddress2} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered City
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity (businesssenderKyc)' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddressCity:target.value}))} 
          value={mobileTransactionB2PData.businessAddressCity} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Country Code
          </Typography>
          <FormControl sx={{height:45}}>
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddressCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessAddressCountryCode}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.businessAddressCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
          Registered Address Zip Code 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={mobileTransactionB2PData.senderBusinessAddressZip} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Primary Contact Country Code
          </Typography>
          <FormControl sx={{height:45}}>
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessPrimaryContactCountryCode}  
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.businessPrimaryContactCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
          Company Primary Contact Number
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactNo:target.value}))} 
          value={mobileTransactionB2PData.businessPrimaryContactNo} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Company
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessDescription:target.value}))} 
          value={mobileTransactionB2PData.businessDescription} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Email Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessEmail:target.value}))} 
          value={mobileTransactionB2PData.businessEmail} 
          error={!mobileTransactionB2PData.businessEmail && true}
          />
          {!mobileTransactionB2PData.businessEmail && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessEmail && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Country Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessCountryCode} 
          error={!mobileTransactionB2PData.businessCountryCode && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.businessCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>
          {!mobileTransactionB2PData.businessCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessCountryCode && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationType:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationType} 
          error={!mobileTransactionB2PData.businessRegistrationType && true}
          />
          {!mobileTransactionB2PData.businessRegistrationType && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessRegistrationType && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={mobileTransactionB2PData.senderBusinessRegistrationIssuedBy} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued at
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedAt:target.value}))} 
          value={mobileTransactionB2PData.senderBusinessRegistrationIssuedAt} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationNumber:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationNumber} 
          error={!mobileTransactionB2PData.businessRegistrationNumber && true}
          />
          {!mobileTransactionB2PData.businessRegistrationNumber && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessRegistrationNumber && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationIssueDate:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationIssueDate} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Expiry Date<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessIDValidThru:target.value}))} 
          value={mobileTransactionB2PData.businessIDValidThru} 
          error={!mobileTransactionB2PData.businessIDValidThru && true}
          />
          {!mobileTransactionB2PData.businessIDValidThru && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.businessIDValidThru && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>


      <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Receiver Details:-</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Nationality 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverNationality:target.value}))} 
          value={mobileTransactionB2PData.receiverNationality} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Country Code 
          </Typography>
          <FormControl sx={{height:45}}>
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactCountryCode:target.value}))} 
          value={mobileTransactionB2PData.receiverPrimaryContactCountryCode} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.receiverPrimaryContactCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
          Recipient Primary Contact Number 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNo:target.value}))} 
          value={mobileTransactionB2PData.receiverPrimaryContactNo} /></FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Number Type 
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNoType:target.value}))} 
          value={mobileTransactionB2PData.receiverPrimaryContactNoType} /></FormControl>
      </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver FirstName<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverFirstName:target.value}))} 
          value={mobileTransactionB2PData.receiverFirstName} 
          error={!mobileTransactionB2PData.receiverFirstName && true}
          />
          {!mobileTransactionB2PData.receiverFirstName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.receiverFirstName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver LastName<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverLastName:target.value}))} 
          value={mobileTransactionB2PData.receiverLastName} 
          error={!mobileTransactionB2PData.receiverLastName && true}
          />
          {!mobileTransactionB2PData.receiverLastName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.receiverLastName && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverIdType:target.value}))} 
          value={mobileTransactionB2PData.receiverIdType} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Id Number
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverIdNumber:target.value}))} 
          value={mobileTransactionB2PData.receiverIdNumber} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Id Document Issue Date
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverIssueDate:target.value}))} 
          value={mobileTransactionB2PData.receiverIssueDate} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Id Document Expiry Date
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverExpiryDate:target.value}))} 
          value={mobileTransactionB2PData.receiverExpiryDate} /></FormControl>
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Id Issuer Country
          </Typography>
          <FormControl sx={{height:45}}>
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setMobileTransactionB2PData( (prev) =>
              ({...prev, receiverIssuerCountry:target.value}))} 
              value={mobileTransactionB2PData.receiverIssuerCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.receiverIssuerCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
          Quoted Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quoted Id' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={mobileTransactionB2PData.quoteId} 
          error={!mobileTransactionB2PData.quoteId && true}
          />
          {!mobileTransactionB2PData.quoteId && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.quoteId && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Country<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
          
          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={mobileTransactionB2PData.receivingCountry}  
          error={!mobileTransactionB2PData.receivingCountry && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={mobileTransactionB2PData.receivingCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

          {!mobileTransactionB2PData.receivingCountry && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.receivingCountry && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={mobileTransactionB2PData.remittancePurpose} 
          error={!mobileTransactionB2PData.remittancePurpose && true}
          />
          {!mobileTransactionB2PData.remittancePurpose && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.remittancePurpose && "Mandatory Field"}
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
          setMobileTransactionB2PData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={mobileTransactionB2PData.sourceOfFunds} 
          error={!mobileTransactionB2PData.sourceOfFunds && true}
          />
          {!mobileTransactionB2PData.sourceOfFunds && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.sourceOfFunds && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
          <Typography color="#575757" fontWeight='500'>
          Relationship Of Sender<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Of Sender' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={mobileTransactionB2PData.relationshipSender}
          error={!mobileTransactionB2PData.relationshipSender && true}
          />
          {!mobileTransactionB2PData.relationshipSender && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2PData.relationshipSender && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>





    </Stack>
    </>
  )
}

export default B2PTransactionMobile