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
            Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={bankTransactionP2BData.requestDate}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}     onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={bankTransactionP2BData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='currency'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={bankTransactionP2BData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='type'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, type:target.value}))} 
            value={bankTransactionP2BData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Free format Text Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={bankTransactionP2BData.descriptionText} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={bankTransactionP2BData.transRef}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, providerCode:target.value}))} 
            value={bankTransactionP2BData.providerCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingAmount:target.value}))} 
            value={bankTransactionP2BData.sendingAmount}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='payinCcyCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, payinCcyCode:target.value}))} 
            value={bankTransactionP2BData.payinCcyCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Payment<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='paymentMode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentMode:target.value}))} 
            value={bankTransactionP2BData.paymentMode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Authentication Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='authenticationPartnerCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, authenticationPartnerCode:target.value}))} 
            value={bankTransactionP2BData.authenticationPartnerCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payment Option<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='paymentOption'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, paymentOption:target.value}))} 
            value={bankTransactionP2BData.paymentOption} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Send Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingPartnerCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sendingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.sendingPartnerCode}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingPartnerCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingPartnerCode:target.value}))} 
            value={bankTransactionP2BData.receivingPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={bankTransactionP2BData.senderMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={bankTransactionP2BData.receiverMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            SMS Notification 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, beneficiarySmsNotify:target.value}))} 
            value={bankTransactionP2BData.beneficiarySmsNotify} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={bankTransactionP2BData.receiverBankaccountno} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={bankTransactionP2BData.receiverBankAccountType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={bankTransactionP2BData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={bankTransactionP2BData.receiverBankName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={bankTransactionP2BData.bankSubCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Account IBAN Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountIBAN:target.value}))} 
            value={bankTransactionP2BData.accountIBAN} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1 '
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo1:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo1} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, accountAdditionalNo2:target.value}))} 
            value={bankTransactionP2BData.accountAdditionalNo2} />
        </Stack>




        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={bankTransactionP2BData.nationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={bankTransactionP2BData.dateOfBirth} />
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
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactCountryCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Primary Contact Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNo'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactNo} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Primary Contact Number Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderBusinessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.senderBusinessPrimaryContactNoType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Type (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={bankTransactionP2BData.idType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={bankTransactionP2BData.idNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={bankTransactionP2BData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={bankTransactionP2BData.expiryDate}  />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={bankTransactionP2BData.issuerCountry}  />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={bankTransactionP2BData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={bankTransactionP2BData.addressLine2} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={bankTransactionP2BData.addressLine3}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='city' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, city:target.value}))} 
            value={bankTransactionP2BData.city}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince (senderKyc)' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={bankTransactionP2BData.stateProvince} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={bankTransactionP2BData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, country:target.value}))} 
            value={bankTransactionP2BData.country} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='title'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={bankTransactionP2BData.senderTitle}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={bankTransactionP2BData.firstName}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Middle Name (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='middleName' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={bankTransactionP2BData.middleName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Last Name' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={bankTransactionP2BData.lastName}/>
        </Stack>
        

        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Receiver Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessName:target.value}))} 
            value={bankTransactionP2BData.businessName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PIN Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPINCode:target.value}))} 
            value={bankTransactionP2BData.businessPINCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress1:target.value}))} 
            value={bankTransactionP2BData.businessAddress1} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddress2:target.value}))} 
            value={bankTransactionP2BData.businessAddress2}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCity:target.value}))} 
            value={bankTransactionP2BData.businessAddressCity}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered State
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressState:target.value}))} 
            value={bankTransactionP2BData.businessAddressState}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address Zip Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessAddressZip:target.value}))} 
            value={bankTransactionP2BData.businessAddressZip} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactCountryCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNo:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNo}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPrimaryContactNoType:target.value}))} 
            value={bankTransactionP2BData.businessPrimaryContactNoType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessDescription:target.value}))} 
            value={bankTransactionP2BData.businessDescription} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Email Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessEmail:target.value}))} 
            value={bankTransactionP2BData.businessEmail} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessCountryCode:target.value}))} 
            value={bankTransactionP2BData.businessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Registration
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationType:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationType}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationNumber:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued by
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedBy:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedBy} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued at
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssuedAt:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssuedAt} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessRegistrationIssueDate:target.value}))} 
            value={bankTransactionP2BData.businessRegistrationIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessIDValidThru:target.value}))} 
            value={bankTransactionP2BData.businessIDValidThru} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, typeofbusiness:target.value}))} 
            value={bankTransactionP2BData.typeofbusiness} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PO Box
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox'
            disabled={!allowUatAccess}    
             onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, businessPObox:target.value}))} 
            value={bankTransactionP2BData.businessPObox} />
        </Stack>






        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={bankTransactionP2BData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={bankTransactionP2BData.receivingCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose'
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={bankTransactionP2BData.remittancePurpose} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds' 
            disabled={!allowUatAccess}     
            onChange={({ target }) =>
            setBankTransactionP2BData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={bankTransactionP2BData.sourceOfFunds} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender'
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