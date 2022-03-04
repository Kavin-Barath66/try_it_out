import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function P2BTransactionBank({allowUatAccess, bankTransactionP2BData, setBankTransactionP2BData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">P2B Transaction Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
            disabled={!allowUatAccess}     onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={bankTransactionP2BData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Currency'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={bankTransactionP2BData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, type:target.value}))} 
            value={bankTransactionP2BData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Description Text
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Description Text'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={bankTransactionP2BData.descriptionText} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Request Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={bankTransactionP2BData.requestDate}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={bankTransactionP2BData.transRef}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender MSISDN
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={bankTransactionP2BData.senderMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={bankTransactionP2BData.receiverBankaccountno} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder=' Bank Name'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={bankTransactionP2BData.receiverBankName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={bankTransactionP2BData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Nationality'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={bankTransactionP2BData.nationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date Of Birth
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Date Of Birth'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={bankTransactionP2BData.dateOfBirth} />
        </Stack>
        
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Gender
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
            ID Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Type'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={bankTransactionP2BData.idType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            ID Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Number'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={bankTransactionP2BData.idNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Issue Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issue Date'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={bankTransactionP2BData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={bankTransactionP2BData.expiryDate}  />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Issuer Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={bankTransactionP2BData.issuerCountry}  />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 1'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={bankTransactionP2BData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={bankTransactionP2BData.addressLine2} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 3
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 3' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={bankTransactionP2BData.addressLine3}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='City' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, city:target.value}))} 
            value={bankTransactionP2BData.city}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State Province
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='State Province' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={bankTransactionP2BData.stateProvince} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={bankTransactionP2BData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Country'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, country:target.value}))} 
            value={bankTransactionP2BData.country} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender First Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender First Name'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={bankTransactionP2BData.firstName}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Middle Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={bankTransactionP2BData.middleName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Last Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={bankTransactionP2BData.lastName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Full Name' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingAmount:target.value}))} 
            value={bankTransactionP2BData.sendingAmount}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Paying Currency Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency Code'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, payinCcyCode:target.value}))} 
            value={bankTransactionP2BData.payinCcyCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Mode
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentMode:target.value}))} 
            value={bankTransactionP2BData.paymentMode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, authenticationPartnerCode:target.value}))} 
            value={bankTransactionP2BData.authenticationPartnerCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Option
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Option'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentOption:target.value}))} 
            value={bankTransactionP2BData.paymentOption} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.sendingPartnerCode}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.receivingPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Name'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessName:target.value}))} 
            value={bankTransactionP2BData.businessName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business PINCODE
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business PINCODE'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPINCode:target.value}))} 
            value={bankTransactionP2BData.businessPINCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 1' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress1:target.value}))} 
            value={bankTransactionP2BData.businessAddress1} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 2' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress2:target.value}))} 
            value={bankTransactionP2BData.businessAddress2}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCity:target.value}))} 
            value={bankTransactionP2BData.businessAddressCity}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address State
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address State' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressState:target.value}))} 
            value={bankTransactionP2BData.businessAddressState}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Country Code' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Zip Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Zip Code' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressZip:target.value}))} 
            value={bankTransactionP2BData.businessAddressZip} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Country Code' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactCountryCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Number' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNo}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Contact Number Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Contact Number Type'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNoType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessDescription:target.value}))} 
            value={bankTransactionP2BData.businessDescription} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Email
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessEmail:target.value}))} 
            value={bankTransactionP2BData.businessEmail} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registration Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Type'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationType:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationType}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registration Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Number' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationNumber:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registration Issued By
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued By'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedBy:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedBy} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registration Issued At
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued At'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedAt:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedAt} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registration Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration Issued Date'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssueDate:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business ID ValidThru
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business ID ValidThru'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessIDValidThru:target.value}))} 
            value={bankTransactionP2BData.businessIDValidThru} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Type Of Business
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type Of Business' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, typeofbusiness:target.value}))} 
            value={bankTransactionP2BData.typeofbusiness} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business POBox
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business POBox'
            disabled={!allowUatAccess}    
             onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPObox:target.value}))} 
            value={bankTransactionP2BData.businessPObox} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Mobile
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessMobile:target.value}))} 
            value={bankTransactionP2BData.businessMobile} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={bankTransactionP2BData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={bankTransactionP2BData.receivingCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={bankTransactionP2BData.remittancePurpose} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={bankTransactionP2BData.sourceOfFunds} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={bankTransactionP2BData.relationshipSender} />
        </Stack>
    </Stack>
    </>
  )
}

export default P2BTransactionBank