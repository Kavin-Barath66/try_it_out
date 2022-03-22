import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function P2BTransactionBank({allowUatAccess, bankTransactionP2BData, setBankTransactionP2BData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">P2B Transaction Bank</Typography>
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={bankTransactionP2BData.requestDate}
            error={!bankTransactionP2BData.requestDate && true}
            />
            {!bankTransactionP2BData.requestDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.requestDate && "Mandatory Field"}
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
            disabled={!allowUatAccess}     onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={bankTransactionP2BData.amount} 
            error={!bankTransactionP2BData.amount && true}
            />
            {!bankTransactionP2BData.amount && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.amount && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={bankTransactionP2BData.currency} 
            error={!bankTransactionP2BData.currency && true}
            />
            {!bankTransactionP2BData.currency && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.currency && "Mandatory Field"}
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
            disabled={true}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, type:target.value}))} 
            value={bankTransactionP2BData.type} 
            error={!bankTransactionP2BData.type && true}
            />
            {!bankTransactionP2BData.type && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.type && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={bankTransactionP2BData.descriptionText} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={bankTransactionP2BData.transRef}
            error={!bankTransactionP2BData.transRef && true}
            />
            {!bankTransactionP2BData.transRef && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.transRef && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, providerCode:target.value}))} 
            value={bankTransactionP2BData.providerCode}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingAmount:target.value}))} 
            value={bankTransactionP2BData.sendingAmount}
            error={!bankTransactionP2BData.sendingAmount && true}
            />
            {!bankTransactionP2BData.sendingAmount && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.sendingAmount && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='payinCcyCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, payinCcyCode:target.value}))} 
            value={bankTransactionP2BData.payinCcyCode} 
            error={!bankTransactionP2BData.payinCcyCode && true}
            />
            {!bankTransactionP2BData.payinCcyCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.payinCcyCode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentMode:target.value}))} 
            value={bankTransactionP2BData.paymentMode} 
            error={!bankTransactionP2BData.paymentMode && true}
            />
            {!bankTransactionP2BData.paymentMode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.paymentMode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, authenticationPartnerCode:target.value}))} 
            value={bankTransactionP2BData.authenticationPartnerCode}
            error={!bankTransactionP2BData.authenticationPartnerCode && true}
            />
            {!bankTransactionP2BData.authenticationPartnerCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.authenticationPartnerCode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentOption:target.value}))} 
            value={bankTransactionP2BData.paymentOption} 
            error={!bankTransactionP2BData.paymentOption && true}
            />
            {!bankTransactionP2BData.paymentOption && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.paymentOption && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.sendingPartnerCode}  
            error={!bankTransactionP2BData.sendingPartnerCode && true}
            />
            {!bankTransactionP2BData.sendingPartnerCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.sendingPartnerCode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.receivingPartnerCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={bankTransactionP2BData.senderMsisdn} 
            error={!bankTransactionP2BData.senderMsisdn && true}
            />
            {!bankTransactionP2BData.senderMsisdn && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.senderMsisdn && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={bankTransactionP2BData.receiverMsisdn} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            SMS Notification 
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, beneficiarySmsNotify:target.value}))} 
            value={bankTransactionP2BData.beneficiarySmsNotify} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={bankTransactionP2BData.receiverBankaccountno} 
            error={!bankTransactionP2BData.receiverBankaccountno && true}
            />
            {!bankTransactionP2BData.receiverBankaccountno && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.receiverBankaccountno && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={bankTransactionP2BData.receiverBankAccountType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={bankTransactionP2BData.receiverBankCode} 
            error={!bankTransactionP2BData.receiverBankCode && true}
            />
            {!bankTransactionP2BData.receiverBankCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.receiverBankCode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={bankTransactionP2BData.receiverBankName} 
            error={!bankTransactionP2BData.receiverBankName && true}
            />
            {!bankTransactionP2BData.receiverBankName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.receiverBankName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={bankTransactionP2BData.bankSubCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Name
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountName'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountName:target.value}))} 
            value={bankTransactionP2BData.accountName} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Branch Name
        </Typography>
        <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='branchName'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setBankTransactionP2BData( (prev) =>
        ({...prev, branchName:target.value}))} 
        value={bankTransactionP2BData.branchName} /></FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Account IBAN Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountIBAN:target.value}))} 
            value={bankTransactionP2BData.accountIBAN} 
            error={!bankTransactionP2BData.accountIBAN && true}
            />
            {!bankTransactionP2BData.accountIBAN && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.accountIBAN && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1 '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo1:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo2:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo2} /></FormControl>
        </Stack>




        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={bankTransactionP2BData.nationality} 
            error={!bankTransactionP2BData.nationality && true}
            />
            {!bankTransactionP2BData.nationality && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.nationality && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={bankTransactionP2BData.dateOfBirth} 
            error={!bankTransactionP2BData.dateOfBirth && true}
            />
            {!bankTransactionP2BData.dateOfBirth && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.dateOfBirth && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Gender (Sender)
            </Typography>
                <TextField
                sx={{ width: 205 }}
                label="Gender"
                disabled={!allowUatAccess}     
                onChange={({ target }) =>
                setBankTransactionP2BData( (prev) =>
                ({...prev, gender:target.value}))} 
                value={bankTransactionP2BData.gender}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactCountryCode} 
            error={!bankTransactionP2BData.senderBusinessPrimaryContactCountryCode && true}
            />
            {!bankTransactionP2BData.senderBusinessPrimaryContactCountryCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.senderBusinessPrimaryContactCountryCode && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Primary Contact Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNo'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactNo} 
            error={!bankTransactionP2BData.senderBusinessPrimaryContactNo && true}
            />
            {!bankTransactionP2BData.senderBusinessPrimaryContactNo && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.senderBusinessPrimaryContactNo && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Primary Contact Number Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactNoType} 
            error={!bankTransactionP2BData.senderBusinessPrimaryContactNoType && true}
            />
            {!bankTransactionP2BData.senderBusinessPrimaryContactNoType && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.senderBusinessPrimaryContactNoType && "Mandatory Field"}
              </FormHelperText>
            )}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={bankTransactionP2BData.idType} 
            error={!bankTransactionP2BData.idType && true}
            />
            {!bankTransactionP2BData.idType && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.idType && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={bankTransactionP2BData.idNumber} 
            error={!bankTransactionP2BData.idNumber && true}
            />
            {!bankTransactionP2BData.idNumber && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.idNumber && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={bankTransactionP2BData.issueDate} /></FormControl>
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={bankTransactionP2BData.expiryDate}  
            error={!bankTransactionP2BData.expiryDate && true}
            />
            {!bankTransactionP2BData.expiryDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.expiryDate && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={bankTransactionP2BData.issuerCountry}  /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={bankTransactionP2BData.addressLine1} 
            error={!bankTransactionP2BData.expiryDate && true}
            />
            {!bankTransactionP2BData.addressLine1 && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.addressLine1 && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={bankTransactionP2BData.addressLine2} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={bankTransactionP2BData.addressLine3}/></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='city' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, city:target.value}))} 
            value={bankTransactionP2BData.city}
            error={!bankTransactionP2BData.city && true}
            />
            {!bankTransactionP2BData.city && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.city && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince (senderKyc)' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={bankTransactionP2BData.stateProvince} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={bankTransactionP2BData.postalCode} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, country:target.value}))} 
            value={bankTransactionP2BData.country} 
            error={!bankTransactionP2BData.country && true}
            />
            {!bankTransactionP2BData.country && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.country && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={bankTransactionP2BData.senderTitle}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={bankTransactionP2BData.firstName}  
            error={!bankTransactionP2BData.firstName && true}
            />
            {!bankTransactionP2BData.firstName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.firstName && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={bankTransactionP2BData.middleName}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={bankTransactionP2BData.lastName}
            error={!bankTransactionP2BData.lastName && true}
            />
            {!bankTransactionP2BData.lastName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.lastName && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessName:target.value}))} 
            value={bankTransactionP2BData.businessName} 
            error={!bankTransactionP2BData.businessName && true}
            />
            {!bankTransactionP2BData.businessName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.businessName && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPINCode:target.value}))} 
            value={bankTransactionP2BData.businessPINCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress1:target.value}))} 
            value={bankTransactionP2BData.businessAddress1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress2:target.value}))} 
            value={bankTransactionP2BData.businessAddress2}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCity:target.value}))} 
            value={bankTransactionP2BData.businessAddressCity}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered State
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressState:target.value}))} 
            value={bankTransactionP2BData.businessAddressState}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessAddressCountryCode} 
            error={!bankTransactionP2BData.businessAddressCountryCode && true}
            />
            {!bankTransactionP2BData.businessAddressCountryCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.businessAddressCountryCode && "Mandatory Field"}
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
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressZip:target.value}))} 
            value={bankTransactionP2BData.businessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactCountryCode}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNo}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNoType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessDescription:target.value}))} 
            value={bankTransactionP2BData.businessDescription} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Email Id
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessEmail:target.value}))} 
            value={bankTransactionP2BData.businessEmail} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessCountryCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Registration
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationType:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationType}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationNumber:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationNumber} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued by
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedBy:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedBy} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedAt:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedAt} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssueDate:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssueDate} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessIDValidThru:target.value}))} 
            value={bankTransactionP2BData.businessIDValidThru} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, typeofbusiness:target.value}))} 
            value={bankTransactionP2BData.typeofbusiness} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PO Box
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox'
            disabled={!allowUatAccess}    
             onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPObox:target.value}))} 
            value={bankTransactionP2BData.businessPObox} /></FormControl>
        </Stack>






        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={bankTransactionP2BData.quoteId} 
            error={!bankTransactionP2BData.quoteId && true}
            />
            {!bankTransactionP2BData.quoteId && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.quoteId && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={bankTransactionP2BData.receivingCountry} 
            error={!bankTransactionP2BData.receivingCountry && true}
            />
            {!bankTransactionP2BData.receivingCountry && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.receivingCountry && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={bankTransactionP2BData.remittancePurpose} 
            error={!bankTransactionP2BData.remittancePurpose && true}
            />
            {!bankTransactionP2BData.remittancePurpose && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.remittancePurpose && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={bankTransactionP2BData.sourceOfFunds} 
            error={!bankTransactionP2BData.sourceOfFunds && true}
            />
            {!bankTransactionP2BData.sourceOfFunds && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.sourceOfFunds && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={bankTransactionP2BData.relationshipSender} /></FormControl>
        </Stack>
    </Stack>
    </>
  )
}

export default P2BTransactionBank