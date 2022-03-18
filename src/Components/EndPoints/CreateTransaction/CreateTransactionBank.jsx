import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

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
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionBankData.requestDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={createTransactionBankData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='currency'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={createTransactionBankData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='types'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionBankData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Free format Text Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionBankData.descriptionText} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionBankData.transRef} />
        </Stack>
        {/* Provider Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, provider:target.value}))} 
            value={createTransactionBankData.provider} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderMsisd:target.value}))} 
            value={createTransactionBankData.senderMsisd} />
        </Stack>
        {/* Beneficiary Mobile Number */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={createTransactionBankData.receiverMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Bank Account<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={createTransactionBankData.receiverBankaccountno} />
        </Stack>
        {/* Receive Bank Account */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accounttype'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={createTransactionBankData.receiverBankAccountType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={createTransactionBankData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={createTransactionBankData.receiverBankName} />
        </Stack>
        {/* Branch code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Branch code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, bankCode:target.value}))} 
            value={createTransactionBankData.bankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderNationality:target.value}))} 
            value={createTransactionBankData.senderNationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
        disabled={!allowUatAccess}
        onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderDateOfBirth:target.value}))} 
            value={createTransactionBankData.senderDateOfBirth} />
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
            <OutlinedInput sx={{ height: 40 }} placeholder='idType' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionBankData.idType}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionBankData.idNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionBankData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionBankData.expiryDate} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionBankData.issuerCountry} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionBankData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionBankData.addressLine2}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionBankData.addressLine3} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionBankData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionBankData.country} />
        </Stack>
        {/* Title (Sender) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='title' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={createTransactionBankData.senderTitle}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionBankData.firstName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Middle Name (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='middleName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionBankData.middleName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='lastName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionBankData.lastName} />
        </Stack>
        {/* Nationality (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverNationality:target.value}))} 
            value={createTransactionBankData.receiverNationality} />
        </Stack>
        {/* Date of Birth (Receiver)  */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverDOB:target.value}))} 
            value={createTransactionBankData.receiverDOB} />
        </Stack>
        {/* Id Document Type (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Type (Receiver) 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={createTransactionBankData.receiverIdType} />
        </Stack>
        {/*Id Number (Receiver)  */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={createTransactionBankData.receiverIdNumber} />
        </Stack>
        {/* Id Document Issue Date (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={createTransactionBankData.receiverIssueDate} />
        </Stack>
        {/* Id Document Expiry Date (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={createTransactionBankData.receiverExpiryDate} />
        </Stack>
        {/* Id Issuer Country (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={createTransactionBankData.receiverIssuerCountry} />
        </Stack>
        {/* Address Line1 (Receiver Address) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine1:target.value}))} 
            value={createTransactionBankData.receiverAddressLine1} />
        </Stack>
        {/*  Address Line2 (Receiver Address)*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine2:target.value}))} 
            value={createTransactionBankData.receiverAddressLine2} />
        </Stack>
        {/* Address Line3 (Receiver Address) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverAddressLine3:target.value}))} 
            value={createTransactionBankData.receiverAddressLine3} />
        </Stack>
          {/* City/Town (Receiver Address) */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Receiver Address) 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverCity:target.value}))} 
            value={createTransactionBankData.receiverCity} />
        </Stack>
          {/* State (Receiver Address) */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverState:target.value}))} 
            value={createTransactionBankData.receiverState} />
        </Stack>
            {/* Postal Code (Receiver Address) */}
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Receiver Address) 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverPostalCode:target.value}))} 
            value={createTransactionBankData.receiverPostalCode} />
        </Stack>
              {/* Country (Receiver Address) */}
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Receiver Address) 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverCountry:target.value}))} 
            value={createTransactionBankData.receiverCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionBankData.receiverFirstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='lastName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionBankData.receiverLastName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionBankData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionBankData.receivingCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Reason for Transfer<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionBankData.remittancePurpose}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source Of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionBankData.sourceOfFunds}   />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={createTransactionBankData.relationshipSender} />
        </Stack>
    </Stack>
    </>
  )
}

export default CreateTransactionBank