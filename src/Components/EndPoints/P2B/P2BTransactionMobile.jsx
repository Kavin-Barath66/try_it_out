import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function P2BTransactionMobile({mobileTransactionP2BData, setMobileTransactionP2BData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">P2B Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Amount
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, amount:target.value}))} 
        value={mobileTransactionP2BData.amount} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Currency
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Currency'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, currency:target.value}))} 
        value={mobileTransactionP2BData.currency} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Type
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Type'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, type:target.value}))} 
        value={mobileTransactionP2BData.type} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Description Text
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Description Text'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, descriptionText:target.value}))} 
        value={mobileTransactionP2BData.descriptionText} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Request Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={mobileTransactionP2BData.requestDate}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Transaction Reference
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, transRef:target.value}))} 
        value={mobileTransactionP2BData.transRef}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender MSISDN
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, senderMsisdn:target.value}))} 
        value={mobileTransactionP2BData.senderMsisdn} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Receiver MSISDN
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receiverMsisdn:target.value}))} 
        value={mobileTransactionP2BData.receiverMsisdn} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Nationality
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Nationality'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, nationality:target.value}))} 
        value={mobileTransactionP2BData.nationality} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date Of Birth
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Date Of Birth'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, dateOfBirth:target.value}))} 
        value={mobileTransactionP2BData.dateOfBirth} />
    </Stack>
    
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Gender
        </Typography>
        <TextField
              sx={{ width: 205 }}
              label="Gender"
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
        ID Type
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='ID Type'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, idType:target.value}))} 
        value={mobileTransactionP2BData.idType} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        ID Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='ID Number'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, idNumber:target.value}))} 
        value={mobileTransactionP2BData.idNumber} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Issue Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Issue Date'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, issueDate:target.value}))} 
        value={mobileTransactionP2BData.issueDate} />
    </Stack>  
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Expiry Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, expiryDate:target.value}))} 
        value={mobileTransactionP2BData.expiryDate}  />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Issuer Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, issuerCountry:target.value}))} 
        value={mobileTransactionP2BData.issuerCountry}  />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Address Line 1
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 1'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine1:target.value}))} 
        value={mobileTransactionP2BData.addressLine1} />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Address Line 2
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 2'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine2:target.value}))} 
        value={mobileTransactionP2BData.addressLine2} />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Address Line 3
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 3' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, addressLine3:target.value}))} 
        value={mobileTransactionP2BData.addressLine3}/>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        City
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='City' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, city:target.value}))} 
        value={mobileTransactionP2BData.city}/>
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        State Province
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='State Province' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, stateProvince:target.value}))} 
        value={mobileTransactionP2BData.stateProvince} />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Postal Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, postalCode:target.value}))} 
        value={mobileTransactionP2BData.postalCode} />
    </Stack> 
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Country'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, country:target.value}))} 
        value={mobileTransactionP2BData.country} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Sender First Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sender First Name'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, firstName:target.value}))} 
        value={mobileTransactionP2BData.firstName}  />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Sender Middle Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, middleName:target.value}))} 
        value={mobileTransactionP2BData.middleName}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Sender Last Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, lastName:target.value}))} 
        value={mobileTransactionP2BData.lastName}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Sending Amount
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Full Name' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sendingAmount:target.value}))} 
        value={mobileTransactionP2BData.sendingAmount}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Paying Currency Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency Code'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, payinCcyCode:target.value}))} 
        value={mobileTransactionP2BData.payinCcyCode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Payment Mode
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, paymentMode:target.value}))} 
        value={mobileTransactionP2BData.paymentMode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Authentication Partner Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, authenticationPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.authenticationPartnerCode}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Payment Option
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Payment Option'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, paymentOption:target.value}))} 
        value={mobileTransactionP2BData.paymentOption} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Sending Partner Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sendingPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.sendingPartnerCode}  />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Receiving Partner Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receivingPartnerCode:target.value}))} 
        value={mobileTransactionP2BData.receivingPartnerCode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Name
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Name'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessName:target.value}))} 
        value={mobileTransactionP2BData.businessName} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business PINCODE
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business PINCODE'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPINCode:target.value}))} 
        value={mobileTransactionP2BData.businessPINCode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address 1
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 1' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddress1:target.value}))} 
        value={mobileTransactionP2BData.businessAddress1} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address 2
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 2' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddress2:target.value}))} 
        value={mobileTransactionP2BData.businessAddress2}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address City
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressCity:target.value}))} 
        value={mobileTransactionP2BData.businessAddressCity}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address State
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address State' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressState:target.value}))} 
        value={mobileTransactionP2BData.businessAddressState}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address Country Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Country Code' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressCountryCode:target.value}))} 
        value={mobileTransactionP2BData.businessAddressCountryCode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address Zip Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Zip Code' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessAddressZip:target.value}))} 
        value={mobileTransactionP2BData.businessAddressZip} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address Contact Country Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Country Code' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPrimaryContactCountryCode:target.value}))} 
        value={mobileTransactionP2BData.businessPrimaryContactCountryCode}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address Contact Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Number' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPrimaryContactNo:target.value}))} 
        value={mobileTransactionP2BData.businessPrimaryContactNo}/>
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Address Contact Number Type
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Number Type'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPrimaryContactNoType:target.value}))} 
        value={mobileTransactionP2BData.businessPrimaryContactNoType} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Description
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessDescription:target.value}))} 
        value={mobileTransactionP2BData.businessDescription} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Email
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessEmail:target.value}))} 
        value={mobileTransactionP2BData.businessEmail} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Country Code
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessCountryCode:target.value}))} 
        value={mobileTransactionP2BData.businessCountryCode} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Registration Type
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Type'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationType:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationType}  />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Registration Number
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Number' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationNumber:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationNumber} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Registration Issued By
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued By'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssuedBy:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssuedBy} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Registration Issued At
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued At'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssuedAt:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssuedAt} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Registration Issued Date
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued Date'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessRegistrationIssueDate:target.value}))} 
        value={mobileTransactionP2BData.businessRegistrationIssueDate} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business ID ValidThru
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business ID ValidThru'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessIDValidThru:target.value}))} 
        value={mobileTransactionP2BData.businessIDValidThru} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Type Of Business
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Type Of Business' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, typeofbusiness:target.value}))} 
        value={mobileTransactionP2BData.typeofbusiness} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business POBox
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business POBox'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessPObox:target.value}))} 
        value={mobileTransactionP2BData.businessPObox} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Business Mobile
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, businessMobile:target.value}))} 
        value={mobileTransactionP2BData.businessMobile} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Quote Id
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, quoteId:target.value}))} 
        value={mobileTransactionP2BData.quoteId} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Receiving Country
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, receivingCountry:target.value}))} 
        value={mobileTransactionP2BData.receivingCountry} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Remittance Purpose
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, remittancePurpose:target.value}))} 
        value={mobileTransactionP2BData.remittancePurpose} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Source Of Funds
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' 
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, sourceOfFunds:target.value}))} 
        value={mobileTransactionP2BData.sourceOfFunds} />
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
            Relationship Sender
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
        onChange={({ target }) =>
        setMobileTransactionP2BData( (prev) =>
        ({...prev, relationshipSender:target.value}))} 
        value={mobileTransactionP2BData.relationshipSender} />
    </Stack>
</Stack>
    </>
  )
}

export default P2BTransactionMobile