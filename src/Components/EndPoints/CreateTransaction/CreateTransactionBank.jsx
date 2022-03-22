import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function CreateTransactionBank({allowUatAccess, createTransactionBankData, setCreateTransactionBankData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Transaction Bank</Typography>
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionBankData.requestDate} 
            error={!createTransactionBankData.requestDate && true}
          />
          {!createTransactionBankData.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createTransactionBankData.requestDate && "Mandatory Field"}
            </FormHelperText>
          )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={createTransactionBankData.amount}
            error={!createTransactionBankData.amount && true}
            />
            {!createTransactionBankData.amount && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.amount && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={createTransactionBankData.currency} 
              select
              disabled={!allowUatAccess}
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionBankData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
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
        <OutlinedInput sx={{ height: 40 }} placeholder='types'
            disabled={true}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionBankData.type} 
            error={!createTransactionBankData.type && true}
            />
            {!createTransactionBankData.type && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.type && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionBankData.descriptionText} 
            error={!createTransactionBankData.descriptionText && true}
            />
            {!createTransactionBankData.descriptionText && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.descriptionText && "Mandatory Field"}
              </FormHelperText>
            )}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionBankData.transRef}
            error={!createTransactionBankData.transRef && true}
            />
            {!createTransactionBankData.transRef && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.transRef && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        {/* Provider Code 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code 
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, provider:target.value}))} 
            value={createTransactionBankData.provider} />
            </FormControl>
        </Stack>*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderMsisd:target.value}))} 
            value={createTransactionBankData.senderMsisd}
            error={!createTransactionBankData.senderMsisd && true}
            />
            {!createTransactionBankData.senderMsisd && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.senderMsisd && "Mandatory Field"}
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
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={createTransactionBankData.receiverMsisdn} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Bank Account<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={createTransactionBankData.receiverBankaccountno}
            error={!createTransactionBankData.receiverBankaccountno && true}
            />
            {!createTransactionBankData.receiverBankaccountno && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receiverBankaccountno && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        {/* Receive Bank Account */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='accounttype'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={createTransactionBankData.receiverBankAccountType} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={createTransactionBankData.receiverBankCode} 
            error={!createTransactionBankData.receiverBankCode && true}
            />
            {!createTransactionBankData.receiverBankCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receiverBankCode && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='organisationid'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={createTransactionBankData.receiverBankName} 
            error={!createTransactionBankData.receiverBankName && true}
            />
            {!createTransactionBankData.receiverBankName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receiverBankName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        {/* Branch code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Branch code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={createTransactionBankData.bankSubCode}
            error={!createTransactionBankData.bankSubCode && true}
            />
            {!createTransactionBankData.bankSubCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.bankSubCode && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderNationality:target.value}))} 
            value={createTransactionBankData.senderNationality} 
            error={!createTransactionBankData.senderNationality && true}
            />
            {!createTransactionBankData.senderNationality && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.senderNationality && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderDateOfBirth:target.value}))} 
            value={createTransactionBankData.senderDateOfBirth} 
            error={!createTransactionBankData.senderDateOfBirth && true}
            />
            {!createTransactionBankData.senderDateOfBirth && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.senderDateOfBirth && "Mandatory Field"}
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
              label="gender"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
                setCreateTransactionBankData( (prev) =>
                ({...prev, senderGender:target.value}))} 
                value={createTransactionBankData.senderGender}
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
            Id Document Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idType' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionBankData.idType}
            error={!createTransactionBankData.idType && true}
            />
            {!createTransactionBankData.idType && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.idType && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionBankData.idNumber}
            error={!createTransactionBankData.idNumber && true}
            />
            {!createTransactionBankData.idNumber && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.idNumber && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionBankData.issueDate} />
            </FormControl>
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionBankData.expiryDate} 
            error={!createTransactionBankData.expiryDate && true}
            />
            {!createTransactionBankData.expiryDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.expiryDate && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionBankData.issuerCountry} />
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionBankData.addressLine1}
            error={!createTransactionBankData.addressLine1 && true}
            />
            {!createTransactionBankData.addressLine1 && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.addressLine1 && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionBankData.addressLine2}/>
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionBankData.addressLine3} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city} 
            error={!createTransactionBankData.city && true}
            />
            {!createTransactionBankData.city && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.city && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city}/>
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionBankData.postalCode} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionBankData.country}
            error={!createTransactionBankData.country && true}
            />
            {!createTransactionBankData.country && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.country && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        {/* Title (Sender) 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='title' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={createTransactionBankData.senderTitle}
            />
            </FormControl>
        </Stack>*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionBankData.firstName}
            error={!createTransactionBankData.firstName && true}
            />
            {!createTransactionBankData.firstName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.firstName && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionBankData.middleName} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='lastName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionBankData.lastName}
            error={!createTransactionBankData.lastName && true}
            />
            {!createTransactionBankData.lastName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.lastName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        {/* Nationality (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverNationality:target.value}))} 
            value={createTransactionBankData.receiverNationality} />
            </FormControl>
        </Stack>
        {/* Date of Birth (Receiver)  */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverDOB:target.value}))} 
            value={createTransactionBankData.receiverDOB} />
            </FormControl>
        </Stack>
        {/* Id Document Type (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Type (Receiver) 
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={createTransactionBankData.receiverIdType} />
            </FormControl>
        </Stack>
        {/*Id Number (Receiver)  */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={createTransactionBankData.receiverIdNumber} />
            </FormControl>
        </Stack>
        {/* Id Document Issue Date (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={createTransactionBankData.receiverIssueDate} />
            </FormControl>
        </Stack>
        {/* Id Document Expiry Date (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={createTransactionBankData.receiverExpiryDate} />
            </FormControl>
        </Stack>
        {/* Id Issuer Country (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={createTransactionBankData.receiverIssuerCountry} />
            </FormControl>
        </Stack>
        {/* Address Line1 (Receiver Address) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine1:target.value}))} 
            value={createTransactionBankData.receiverAddressLine1} />
            </FormControl>
        </Stack>
        {/*  Address Line2 (Receiver Address)*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine2:target.value}))} 
            value={createTransactionBankData.receiverAddressLine2} />
            </FormControl>
        </Stack>
        {/* Address Line3 (Receiver Address) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine3:target.value}))} 
            value={createTransactionBankData.receiverAddressLine3} />
            </FormControl>
        </Stack>
          {/* City/Town (Receiver Address) */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Receiver Address) 
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverCity:target.value}))} 
            value={createTransactionBankData.receiverCity} />
            </FormControl>
        </Stack>
          {/* State (Receiver Address) */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverState:target.value}))} 
            value={createTransactionBankData.receiverState} />
            </FormControl>
        </Stack>
            {/* Postal Code (Receiver Address) */}
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Receiver Address) 
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverPostalCode:target.value}))} 
            value={createTransactionBankData.receiverPostalCode} />
            </FormControl>
        </Stack>
              {/* Country (Receiver Address) */}
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Receiver Address) 
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverCountry:target.value}))} 
            value={createTransactionBankData.receiverCountry} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionBankData.receiverFirstName} 
            error={!createTransactionBankData.receiverFirstName && true}
            />
            {!createTransactionBankData.receiverFirstName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receiverFirstName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='lastName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionBankData.receiverLastName}
            error={!createTransactionBankData.receiverLastName && true}
            />
            {!createTransactionBankData.receiverLastName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receiverLastName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionBankData.quoteId} 
            error={!createTransactionBankData.quoteId && true}
            />
            {!createTransactionBankData.quoteId && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.quoteId && "Mandatory Field"}
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
            setCreateTransactionBankData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionBankData.receivingCountry} 
            error={!createTransactionBankData.receivingCountry && true}
            />
            {!createTransactionBankData.receivingCountry && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.receivingCountry && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Reason for Transfer<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionBankData.remittancePurpose}  
            error={!createTransactionBankData.remittancePurpose && true}
            />
            {!createTransactionBankData.remittancePurpose && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.remittancePurpose && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source Of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionBankData.sourceOfFunds}   
            error={!createTransactionBankData.sourceOfFunds && true}
            />
            {!createTransactionBankData.sourceOfFunds && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.sourceOfFunds && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={createTransactionBankData.relationshipSender} 
            error={!createTransactionBankData.relationshipSender && true}
            />
            {!createTransactionBankData.relationshipSender && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionBankData.relationshipSender && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
    </Stack>
    </>
  )
}

export default CreateTransactionBank