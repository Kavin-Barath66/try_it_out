import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function P2BTransactionBank({allowUatAccess, bankTransactionP2BData, setBankTransactionP2BData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">P2B Transaction Bank</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213 }} placeholder='requestDate' 
            disabled={true}     
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }} placeholder='amount'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
              sx={{ width: 213 }}
              label="Currency" 
              onChange={({ target }) =>
              setBankTransactionP2BData( (prev) =>
              ({...prev, currency:target.value}))} 
              value={bankTransactionP2BData.currency} 
              select
              disabled={!allowUatAccess}
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='type'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Free format Text Description
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='descriptionText'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={bankTransactionP2BData.descriptionText} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='requestingOrganisationTransactionReference' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Provider Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='provider' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, providerCode:target.value}))} 
            value={bankTransactionP2BData.providerCode}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='sendingAmount' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Payin Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            sx={{ width: 213 }}
            label="Currency" 
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, payinCcyCode:target.value}))} 
            value={bankTransactionP2BData.payinCcyCode} 
            select
            disabled={!allowUatAccess}
            InputProps={{ style: { height: 40 } }}
            InputLabelProps={bankTransactionP2BData.payinCcyCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Type of Payment<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='paymentMode'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Authentication Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='authenticationPartnerCode' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Payment Option<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='paymentOption'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Send Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='sendingPartnerCode'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Receive Partner Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='receivingPartnerCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.receivingPartnerCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='msisdn debitParty'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Beneficiary Mobile Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='msisdn creditParty'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={bankTransactionP2BData.receiverMsisdn} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            SMS Notification 
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='beneficiarySmsNotify'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, beneficiarySmsNotify:target.value}))} 
            value={bankTransactionP2BData.beneficiarySmsNotify} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Receive Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='bankaccountno'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Receive Bank Account Type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='sortcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={bankTransactionP2BData.receiverBankAccountType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='sortcode'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='organisationid'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Bank Sub Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='banksubcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={bankTransactionP2BData.bankSubCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Account Name
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='accountName'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountName:target.value}))} 
            value={bankTransactionP2BData.accountName} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500' sx={{width:350}}>
        Branch Name
        </Typography>
        <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='branchName'
        disabled={!allowUatAccess}     
        onChange={({ target }) =>
        setBankTransactionP2BData( (prev) =>
        ({...prev, branchName:target.value}))} 
        value={bankTransactionP2BData.branchName} /></FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Receive Account IBAN Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='accountIBAN '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountIBAN:target.value}))} 
            value={bankTransactionP2BData.accountIBAN} 
            />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Account Number Additional field 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='accountAdditionalNo1 '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo1:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Account Number Additional field 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='accountAdditionalNo2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo2:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo2} /></FormControl>
        </Stack>




        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Nationality"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={bankTransactionP2BData.nationality} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.nationality?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='dateOfBirth'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Gender (Sender)
            </Typography>
                <TextField
                sx={{ width: 213 }}
                label="Gender"
                disabled={!allowUatAccess}     
                onChange={({ target }) =>
                setBankTransactionP2BData( (prev) =>
                ({...prev, gender:target.value}))} 
                value={bankTransactionP2BData.gender}
                select
                InputProps={{ style: { height: 40, width: 213 } }}
                InputLabelProps={{ style: { height: 40 } }}
                >
                    <MenuItem value='M'>Male</MenuItem>
                    <MenuItem value='F'>Female</MenuItem>
                </TextField>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Primary Contact Country Code (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setBankTransactionP2BData( (prev) =>
              ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
              value={bankTransactionP2BData.senderBusinessPrimaryContactCountryCode} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.senderBusinessPrimaryContactCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Primary Contact Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='primaryContactNo'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Primary Contact Number Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='primaryContactNoType'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Id Document Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='idType'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='idNumber'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Id Document Issue Date (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='issueDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={bankTransactionP2BData.issueDate} /></FormControl>
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='expiryDate'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Id Issuer Country (Sender)
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Issuer Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={bankTransactionP2BData.issuerCountry} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.issuerCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='addressLine1'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={bankTransactionP2BData.addressLine1} 
            error={!bankTransactionP2BData.addressLine1 && true}
            />
            {!bankTransactionP2BData.addressLine1 && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!bankTransactionP2BData.addressLine1 && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Address Line2 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='addressLine2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={bankTransactionP2BData.addressLine2} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Address Line3 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='addressLine3' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={bankTransactionP2BData.addressLine3}/></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='city' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            State (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='stateProvince (senderKyc)' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={bankTransactionP2BData.stateProvince} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Postal Code (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='postalCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={bankTransactionP2BData.postalCode} /></FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>


            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, country:target.value}))} 
            value={bankTransactionP2BData.country}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.country?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Title (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='title'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={bankTransactionP2BData.senderTitle}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='firstName'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Middle Name (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='middleName' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={bankTransactionP2BData.middleName}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='Last Name' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessName'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company PIN Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessPINCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPINCode:target.value}))} 
            value={bankTransactionP2BData.businessPINCode} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered Address 1
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessAddress1' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress1:target.value}))} 
            value={bankTransactionP2BData.businessAddress1} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered Address 2
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessAddress2' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress2:target.value}))} 
            value={bankTransactionP2BData.businessAddress2}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered City
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessAddressCity' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCity:target.value}))} 
            value={bankTransactionP2BData.businessAddressCity}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered State
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessAddressState' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressState:target.value}))} 
            value={bankTransactionP2BData.businessAddressState}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessAddressCountryCode} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.businessAddressCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Registered Address Zip Code
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessAddressZip' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressZip:target.value}))} 
            value={bankTransactionP2BData.businessAddressZip} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Primary Contact Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            
            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactCountryCode} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.businessPrimaryContactCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Primary Contact Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNo}/></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Primary Contact Number type
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessPrimaryContactNoType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNoType} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessDescription' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessDescription:target.value}))} 
            value={bankTransactionP2BData.businessDescription} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Email Id
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessEmail'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessEmail:target.value}))} 
            value={bankTransactionP2BData.businessEmail} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Country Code
            </Typography>
            <FormControl sx={{height:45}}>
            
            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessCountryCode}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.businessCountryCode?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Type of Registration
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessRegistrationType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationType:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationType}  /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Incorporation Number
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessRegistrationNumber' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationNumber:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationNumber} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Incorporation Issued by
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedBy:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedBy} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Incorporation Issued at
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessRegistrationIssuedAt'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedAt:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedAt} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Incorporation Issued Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssueDate:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssueDate} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessIDValidThru'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessIDValidThru:target.value}))} 
            value={bankTransactionP2BData.businessIDValidThru} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Type of Company
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='typeofbusiness' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, typeofbusiness:target.value}))} 
            value={bankTransactionP2BData.typeofbusiness} /></FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Recipient Company PO Box
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='businessPObox'
            disabled={!allowUatAccess}    
             onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPObox:target.value}))} 
            value={bankTransactionP2BData.businessPObox} /></FormControl>
        </Stack>






        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='quoteId'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={bankTransactionP2BData.receivingCountry} 
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={bankTransactionP2BData.receivingCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='remittancePurpose'
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Source of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='sourceOfFunds' 
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
            <Typography color="#575757" fontWeight='500' sx={{width:350}}>
            Relationship - Sender & Beneficiary
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40, width: 213  }}  placeholder='relationshipSender'
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