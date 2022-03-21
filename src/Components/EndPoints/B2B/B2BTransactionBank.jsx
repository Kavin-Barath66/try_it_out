import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function B2BTransactionBank({allowUatAccess, bankTransactionB2BData, setBankTransactionB2BData}) {
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2B Transaction Bank</Typography>
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
        setBankTransactionB2BData( (prev) =>
      ({...prev, requestDate:target.value}))} 
      value={bankTransactionB2BData.requestDate}
      error={!bankTransactionB2BData.requestDate && true}
            />
            {!bankTransactionB2BData.requestDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionB2BData.requestDate && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={bankTransactionB2BData.amount} 
          error={!bankTransactionB2BData.amount && true}
            />
            {!bankTransactionB2BData.amount && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionB2BData.amount && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={bankTransactionB2BData.currency} 
          error={!bankTransactionB2BData.currency && true}
            />
            {!bankTransactionB2BData.currency && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionB2BData.currency && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, type:target.value}))} 
          value={bankTransactionB2BData.type}
          error={!bankTransactionB2BData.type && true}
            />
            {!bankTransactionB2BData.type && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionB2BData.type && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={bankTransactionB2BData.descriptionText}/>
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={bankTransactionB2BData.transRef} 
          error={!bankTransactionB2BData.transRef && true}
          />
          {!bankTransactionB2BData.transRef && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.transRef && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, providerCode:target.value}))} 
          value={bankTransactionB2BData.providerCode} />
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={bankTransactionB2BData.sendingAmount} 
          error={!bankTransactionB2BData.sendingAmount && true}
          />
          {!bankTransactionB2BData.sendingAmount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.sendingAmount && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={bankTransactionB2BData.payinCcyCode}  
          error={!bankTransactionB2BData.payinCcyCode && true}
          />
          {!bankTransactionB2BData.payinCcyCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.payinCcyCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Payment<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={bankTransactionB2BData.paymentMode} 
          error={!bankTransactionB2BData.paymentMode && true}
          />
          {!bankTransactionB2BData.paymentMode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.paymentMode && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={bankTransactionB2BData.authenticationPartnerCode} 
          error={!bankTransactionB2BData.authenticationPartnerCode && true}
          />
          {!bankTransactionB2BData.authenticationPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.authenticationPartnerCode && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={bankTransactionB2BData.paymentOption} 
          error={!bankTransactionB2BData.paymentOption && true}
          />
          {!bankTransactionB2BData.paymentOption && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.paymentOption && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={bankTransactionB2BData.sendingPartnerCode} 
          error={!bankTransactionB2BData.sendingPartnerCode && true}
          />
          {!bankTransactionB2BData.sendingPartnerCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.sendingPartnerCode && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={bankTransactionB2BData.receivingPartnerCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisd' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderMsisdn:target.value}))} 
          value={bankTransactionB2BData.senderMsisdn}
          error={!bankTransactionB2BData.senderMsisdn && true}
          />
          {!bankTransactionB2BData.senderMsisdn && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderMsisdn && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Beneficiary Mobile Number */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisd' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverMsisdn:target.value}))} 
          value={bankTransactionB2BData.receiverMsisdn}/></FormControl>
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, beneficiarySmsNotify:target.value}))} 
          value={bankTransactionB2BData.beneficiarySmsNotify}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={bankTransactionB2BData.receiverBankaccountno}
          error={!bankTransactionB2BData.receiverBankaccountno && true}
          />
          {!bankTransactionB2BData.receiverBankaccountno && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.receiverBankaccountno && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        {/* Receive Bank Account Type */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accounttype creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankAccountType:target.value}))} 
          value={bankTransactionB2BData.receiverBankAccountType}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankCode:target.value}))} 
          value={bankTransactionB2BData.receiverBankCode} 
          error={!bankTransactionB2BData.receiverBankCode && true}
          />
          {!bankTransactionB2BData.receiverBankCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.receiverBankCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}
          error={!bankTransactionB2BData.receiverBankName && true}
          />
          {!bankTransactionB2BData.receiverBankName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.receiverBankName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
      {/* Bank Sub Code */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
           Account Name
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountName' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, accountName:target.value}))} 
          value={bankTransactionB2BData.accountName}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
           Branch Name
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='branchName' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, accountBranchName:target.value}))} 
          value={bankTransactionB2BData.accountBranchName}/></FormControl>
        </Stack>
      {/* Receive Account IBAN Number */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Account IBAN Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}
          error={!bankTransactionB2BData.receiverBankName && true}
          />
          {!bankTransactionB2BData.receiverBankName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.receiverBankName && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
      {/* Account Number Additional field 1 */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1 creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/></FormControl>
        </Stack>
      {/* Account Number Additional field 2 */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2 creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/></FormControl>
        </Stack>



        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Company Name <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessName:target.value}))} 
          value={bankTransactionB2BData.senderBusinessName} 
          error={!bankTransactionB2BData.senderBusinessName && true}
          />
          {!bankTransactionB2BData.senderBusinessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessName && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPINCode} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address 1 <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddress1}
          error={!bankTransactionB2BData.senderBusinessAddress1 && true}
          />
          {!bankTransactionB2BData.senderBusinessAddress1 && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessAddress1 && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddress2}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCity} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCountryCode} /></FormControl>
        </Stack>
         <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address Zip Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Company Primary Contact Country Code <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactCountryCode} 
          error={!bankTransactionB2BData.senderBusinessPrimaryContactCountryCode && true}
          />
          {!bankTransactionB2BData.senderBusinessPrimaryContactCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessPrimaryContactCountryCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Primary Contact Number <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactNo} 
          error={!bankTransactionB2BData.senderBusinessPrimaryContactNo && true}
          />
          {!bankTransactionB2BData.senderBusinessPrimaryContactNo && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessPrimaryContactNo && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.senderBusinessDescription} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Email Id <span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'
          disabled={!allowUatAccess}  
          onChange={({ target }) =>
          setBankTransactionB2BData( (prev) =>
        ({...prev, senderBusinessEmail:target.value}))} 
        value={bankTransactionB2BData.senderBusinessEmail} 
        error={!bankTransactionB2BData.senderBusinessEmail && true}
          />
          {!bankTransactionB2BData.senderBusinessEmail && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessEmail && "Mandatory Field"}
            </FormHelperText>
          )}
        </FormControl>
      </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Country Code <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessCountryCode} 
          error={!bankTransactionB2BData.senderBusinessCountryCode && true}
          />
          {!bankTransactionB2BData.senderBusinessCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessCountryCode && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Registration <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationType} 
          error={!bankTransactionB2BData.senderBusinessRegistrationType && true}
          />
          {!bankTransactionB2BData.senderBusinessRegistrationType && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessRegistrationType && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationIssuedBy} /></FormControl>
        </Stack> 
         <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderbusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2BData.senderbusinessRegistrationIssuedAt} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Number <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationNumber}  
          error={!bankTransactionB2BData.senderBusinessRegistrationNumber && true}
          />
          {!bankTransactionB2BData.senderBusinessRegistrationNumber && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessRegistrationNumber && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationIssueDate} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Expiry Date <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.senderBusinessIDValidThru} 
          error={!bankTransactionB2BData.senderBusinessIDValidThru && true}
          />
          {!bankTransactionB2BData.senderBusinessIDValidThru && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.senderBusinessIDValidThru && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>


        
        {/* Receiver  Details*/}
        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040" >Recepient Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessName:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessName} 
          error={!bankTransactionB2BData.recepientBusinessName && true}
          />
          {!bankTransactionB2BData.recepientBusinessName && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.recepientBusinessName && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPINCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPINCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress2:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress2} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='BbusinessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCity} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered State
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressState:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressState} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCountryCode} 
          error={!bankTransactionB2BData.recepientBusinessAddressCountryCode && true}
          />
          {!bankTransactionB2BData.recepientBusinessAddressCountryCode && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.recepientBusinessAddressCountryCode && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressZip:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactCountryCode}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNo}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNoType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNoType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessDescription}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Email Id
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessEmail:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessEmail} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessCountryCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Registration
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationNumber} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued by
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedBy}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedAt} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssueDate}   /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessIDValidThru}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBypeofbusiness:target.value}))} 
          value={bankTransactionB2BData.recepientBypeofbusiness}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PO Box
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPObox:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPObox} /></FormControl>
        </Stack>
        {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Mobile
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessMobile:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessMobile} />
        </Stack> */}










































        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={bankTransactionB2BData.quoteId}
          error={!bankTransactionB2BData.quoteId && true}
          />
          {!bankTransactionB2BData.quoteId && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.quoteId && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={bankTransactionB2BData.receivingCountry}
          error={!bankTransactionB2BData.receivingCountry && true}
          />
          {!bankTransactionB2BData.receivingCountry && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.receivingCountry && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={bankTransactionB2BData.remittancePurpose} 
          error={!bankTransactionB2BData.remittancePurpose && true}
          />
          {!bankTransactionB2BData.remittancePurpose && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.remittancePurpose && "Mandatory Field"}
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
            setBankTransactionB2BData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={bankTransactionB2BData.sourceOfFunds} 
          error={!bankTransactionB2BData.sourceOfFunds && true}
          />
          {!bankTransactionB2BData.sourceOfFunds && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!bankTransactionB2BData.sourceOfFunds && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={bankTransactionB2BData.relationshipSender}  /></FormControl>
        </Stack>
    </Stack>
    </>
  )
}

export default B2BTransactionBank