import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function B2BTransactionBank({allowUatAccess, bankTransactionB2BData, setBankTransactionB2BData}) {
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2B Transaction Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={bankTransactionB2BData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Currency'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={bankTransactionB2BData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, type:target.value}))} 
          value={bankTransactionB2BData.type}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Description Text
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Description Text' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={bankTransactionB2BData.descriptionText}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Request Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Request Date' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, requestDate:target.value}))} 
          value={bankTransactionB2BData.requestDate}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={bankTransactionB2BData.transRef} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender MSISDN
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderMsisdn:target.value}))} 
          value={bankTransactionB2BData.senderMsisdn}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={bankTransactionB2BData.receiverBankaccountno}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder=' Bank Name' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankCode:target.value}))} 
          value={bankTransactionB2BData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sending Amount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={bankTransactionB2BData.sendingAmount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Paying Currency Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={bankTransactionB2BData.payinCcyCode}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Mode
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={bankTransactionB2BData.paymentMode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={bankTransactionB2BData.authenticationPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Option
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Option' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={bankTransactionB2BData.paymentOption} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={bankTransactionB2BData.sendingPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={bankTransactionB2BData.receivingPartnerCode} />
        </Stack>






        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Name' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessName:target.value}))} 
          value={bankTransactionB2BData.senderBusinessName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address 1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddress1}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address City'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCity} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address Country Code' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Primary Contact Country Code' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Primary Contact Number' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactNo} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Description'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.senderBusinessDescription} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Country Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Type'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Number'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationNumber}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration IssueDate
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration IssueDate'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business ID ValidThru
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business ID ValidThru'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.senderBusinessIDValidThru} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Email
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessEmail:target.value}))} 
          value={bankTransactionB2BData.senderBusinessEmail} />
        </Stack>
        {/* Receiver */}
        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040" >Recepient Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Name'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessName:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business PIN code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business PIN code' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPINCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPINCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 1'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress1} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address 2'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress2:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress2} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCity} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address State
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address State'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressState:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressState} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Country Code'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Address Zip
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Zip'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressZip:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressZip} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Primary Contact Country Code' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactCountryCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Primary Contact Number' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNo}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Primary Contact Number Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Primary Contact Number Type'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNoType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNoType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Description'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessDescription}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Email
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessEmail:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessEmail} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Type' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Number'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Issued By
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Issued By'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedBy}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Issued At
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Issued At' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedAt} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Registeration Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Issued Date'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssueDate}   />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Id ValidThru
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Id ValidThru' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessIDValidThru}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Type Of Business
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type Of Business' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBypeofbusiness:target.value}))} 
          value={bankTransactionB2BData.recepientBypeofbusiness}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business POBox
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business POBox' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPObox:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPObox} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Mobile
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessMobile:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessMobile} />
        </Stack>










































        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={bankTransactionB2BData.quoteId}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={bankTransactionB2BData.receivingCountry}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={bankTransactionB2BData.remittancePurpose} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={bankTransactionB2BData.sourceOfFunds} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={bankTransactionB2BData.relationshipSender}  />
        </Stack>
    </Stack>
    </>
  )
}

export default B2BTransactionBank