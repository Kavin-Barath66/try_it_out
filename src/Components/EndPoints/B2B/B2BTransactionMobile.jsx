import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function B2BTransactionMobile({allowUatAccess, mobileTransactionB2BData, setMobileTransactionB2BData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2B Transaction Mobile</Typography>
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
          setMobileTransactionB2BData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={mobileTransactionB2BData.requestDate}
        error={!mobileTransactionB2BData.requestDate && true}
          />
          {!mobileTransactionB2BData.requestDates && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.requestDate && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={mobileTransactionB2BData.amount} 
          error={!mobileTransactionB2BData.amount && true}
          />
          {!mobileTransactionB2BData.amount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.amount && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='currency'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={mobileTransactionB2BData.currency} 
          error={!mobileTransactionB2BData.currency && true}
          />
          {!mobileTransactionB2BData.currency && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.currency && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='type' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, type:target.value}))} 
          value={mobileTransactionB2BData.type}
          error={!mobileTransactionB2BData.type && true}
          />
          {!mobileTransactionB2BData.type && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.type && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={mobileTransactionB2BData.descriptionText}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={mobileTransactionB2BData.transRef}
          error={!mobileTransactionB2BData.transRef && true}
          />
          {!mobileTransactionB2BData.transRef && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.transRef && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Provider Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, providerCode:target.value}))} 
          value={mobileTransactionB2BData.providerCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={mobileTransactionB2BData.sendingAmount} 
          error={!mobileTransactionB2BData.sendingAmount && true}
          />
          {!mobileTransactionB2BData.sendingAmount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.sendingAmount && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payin Currency Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='payinCcyCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={mobileTransactionB2BData.payinCcyCode}  
          error={!mobileTransactionB2BData.payinCcyCode && true}
          />
          {!mobileTransactionB2BData.payinCcyCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.payinCcyCode && "Mandatory Field"}
            </FormHelperText>
          )}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={mobileTransactionB2BData.paymentMode} 
          error={!mobileTransactionB2BData.paymentMode && true}
          />
          {!mobileTransactionB2BData.paymentMode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.paymentMode && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={mobileTransactionB2BData.authenticationPartnerCode}
          error={!mobileTransactionB2BData.authenticationPartnerCode && true}
          />
          {!mobileTransactionB2BData.authenticationPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.authenticationPartnerCode && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={mobileTransactionB2BData.paymentOption} 
          error={!mobileTransactionB2BData.paymentOption && true}
          />
          {!mobileTransactionB2BData.paymentOption && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.paymentOption && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingPartnerCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={mobileTransactionB2BData.sendingPartnerCode} 
          error={!mobileTransactionB2BData.sendingPartnerCode && true}
          />
          {!mobileTransactionB2BData.sendingPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.sendingPartnerCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingPartnerCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={mobileTransactionB2BData.receivingPartnerCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderMsisdn:target.value}))} 
          value={mobileTransactionB2BData.senderMsisdn}
          error={!mobileTransactionB2BData.senderMsisdn && true}
          />
          {!mobileTransactionB2BData.senderMsisdn && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderMsisdn && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, receiverMsisdn:target.value}))} 
          value={mobileTransactionB2BData.receiverMsisdn}
          error={!mobileTransactionB2BData.receiverMsisdn && true}
          />
          {!mobileTransactionB2BData.receiverMsisdn && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.receiverMsisdn && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* SMS Notification */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            SMS Notification
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, beneficiarySmsNotify:target.value}))} 
          value={mobileTransactionB2BData.beneficiarySmsNotify}/></FormControl>
        </Stack>
        {/* Receive Bank Account Number */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={mobileTransactionB2BData.receiverBankaccountno}/></FormControl>
        </Stack>
        {/* Receive Bank Account Type 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, receiverBankAccountType:target.value}))} 
          value={mobileTransactionB2BData.receiverBankAccountType}/>
        </Stack>*/}
         {/* Bank Code*/}
         <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, bankCode:target.value}))} 
          value={mobileTransactionB2BData.bankCode}/></FormControl>
        </Stack>
        {/* Full Name of Beneficiary Bank*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full Name of Beneficiary Bank
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, bankName:target.value}))} 
          value={mobileTransactionB2BData.bankName}/></FormControl>
        </Stack>
        {/* Bank Sub Code*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, bankSubCode:target.value}))} 
          value={mobileTransactionB2BData.bankSubCode}/></FormControl>
        </Stack>
        {/* Receive Account IBAN Number*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Account IBAN Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, accountIBAN:target.value}))} 
          value={mobileTransactionB2BData.accountIBAN}/></FormControl>
        </Stack>
        {/* Account Number Additional field 1 */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, accountAdditionalNo1:target.value}))} 
          value={mobileTransactionB2BData.accountAdditionalNo1}/></FormControl>
        </Stack>
        {/* Account Number Additional field 2 */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, accountAdditionalNo2:target.value}))} 
          value={mobileTransactionB2BData.accountAdditionalNo2}/></FormControl>
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessName:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessName}
          error={!mobileTransactionB2BData.senderBusinessName && true}
          />
          {!mobileTransactionB2BData.senderBusinessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Company Pin Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Pin Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessPINCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address 1<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress1:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessAddress1}
          error={!mobileTransactionB2BData.senderBusinessAddress1 && true}
          />
          {!mobileTransactionB2BData.senderBusinessAddress1 && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessAddress1 && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Registered Address 2 */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessAddress2}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCity:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessAddressCity} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Registered Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCountryCode:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessAddressCountryCode} /></FormControl>
        </Stack>
        {/* Registered Address Zip Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address Zip Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Primary Contact Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode} 
          error={!mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode && true}
          />
          {!mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessPrimaryContactNo} 
          error={!mobileTransactionB2BData.senderBusinessPrimaryContactNo && true}
          />
          {!mobileTransactionB2BData.senderBusinessPrimaryContactNo && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessPrimaryContactNo && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessDescription:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessDescription} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Email Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessEmail:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessEmail} 
          error={!mobileTransactionB2BData.senderBusinessEmail && true}
          />
          {!mobileTransactionB2BData.senderBusinessEmail && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessEmail && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessCountryCode:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessCountryCode} 
          error={!mobileTransactionB2BData.senderBusinessCountryCode && true}
          />
          {!mobileTransactionB2BData.senderBusinessCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessCountryCode && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationType:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessRegistrationType} 
          error={!mobileTransactionB2BData.senderBusinessRegistrationType && true}
          />
          {!mobileTransactionB2BData.senderBusinessRegistrationType && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessRegistrationType && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Company Incorporation Issued by */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued by
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessRegistrationIssuedBy}  /></FormControl>
        </Stack>
        {/* Company Incorporation Issued at */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedAt:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessRegistrationIssuedAt}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationNumber:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessRegistrationNumber}  
          error={!mobileTransactionB2BData.senderBusinessRegistrationNumber && true}
          />
          {!mobileTransactionB2BData.senderBusinessRegistrationNumber && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessRegistrationNumber && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssueDate:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessRegistrationIssueDate} /></FormControl>
        </Stack>
        {/* Company Incorporation Expiry Date */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Expiry Date<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, senderBusinessIDValidThru:target.value}))} 
          value={mobileTransactionB2BData.senderBusinessIDValidThru} 
          error={!mobileTransactionB2BData.senderBusinessIDValidThru && true}
          />
          {!mobileTransactionB2BData.senderBusinessIDValidThru && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.senderBusinessIDValidThru && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>

        {/* Receiver */}
        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Recipient Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessName:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessName} 
          error={!mobileTransactionB2BData.recepientBusinessName && true}
          />
          {!mobileTransactionB2BData.recepientBusinessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.recepientBusinessName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Pin Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPINCode:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessPINCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress1:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddress1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress2:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddress2} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCity:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddressCity} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered State
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressState:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddressState} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCountryCode:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddressCountryCode} 
          error={!mobileTransactionB2BData.recepientBusinessAddressCountryCode && true}
          />
          {!mobileTransactionB2BData.recepientBusinessAddressCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.recepientBusinessAddressCountryCode && "Mandatory Field"}
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
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressZip:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactCountryCode:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessPrimaryContactCountryCode}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNo:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessPrimaryContactNo}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNoType:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessPrimaryContactNoType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessDescription:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessDescription}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Email Id
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessEmail:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessEmail} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessCountryCode:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessCountryCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Registration
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationType:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessRegistrationType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationNumber:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessRegistrationNumber} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued by
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedBy:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessRegistrationIssuedBy}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedAt:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessRegistrationIssuedAt} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssueDate:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessRegistrationIssueDate}   /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessIDValidThru:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessIDValidThru}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBypeofbusiness:target.value}))} 
          value={mobileTransactionB2BData.recepientBypeofbusiness}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PO Box
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPObox:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessPObox} /></FormControl>
        </Stack>
        {/*  <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Mobile
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessMobile:target.value}))} 
          value={mobileTransactionB2BData.recepientBusinessMobile} />
        </Stack> */}










































        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={mobileTransactionB2BData.quoteId}
          error={!mobileTransactionB2BData.quoteId && true}
          />
          {!mobileTransactionB2BData.quoteId && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.quoteId && "Mandatory Field"}
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
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={mobileTransactionB2BData.receivingCountry}
          error={!mobileTransactionB2BData.receivingCountry && true}
          />
          {!mobileTransactionB2BData.receivingCountry && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.receivingCountry && "Mandatory Field"}
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
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={mobileTransactionB2BData.remittancePurpose} 
          error={!mobileTransactionB2BData.remittancePurpose && true}
          />
          {!mobileTransactionB2BData.remittancePurpose && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.remittancePurpose && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={mobileTransactionB2BData.sourceOfFunds} 
          error={!mobileTransactionB2BData.sourceOfFunds && true}
          />
          {!mobileTransactionB2BData.sourceOfFunds && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileTransactionB2BData.sourceOfFunds && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'  pb={30}>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setMobileTransactionB2BData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={mobileTransactionB2BData.relationshipSender}  /></FormControl>
        </Stack>
    </Stack>
    </>
  )
}

export default B2BTransactionMobile