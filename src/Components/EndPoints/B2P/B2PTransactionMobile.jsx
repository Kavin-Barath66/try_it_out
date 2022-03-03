import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function B2PTransactionMobile({allowUatAccess, mobileTransactionB2PData, setMobileTransactionB2PData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2P Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Amount
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={mobileTransactionB2PData.amount} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Currency' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={mobileTransactionB2PData.currency} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Type' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, type:target.value}))} 
          value={mobileTransactionB2PData.type} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Description Text
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Description Text' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={mobileTransactionB2PData.descriptionText} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Request Date
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, requestDate:target.value}))} 
          value={mobileTransactionB2PData.requestDate} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={mobileTransactionB2PData.transRef} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Sender MSISDN
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, senderMsisd:target.value}))} 
          value={mobileTransactionB2PData.senderMsisd} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Receiver MSISDN
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverMsisd:target.value}))} 
          value={mobileTransactionB2PData.receiverMsisd} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver FirstName
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverFirstName:target.value}))} 
          value={mobileTransactionB2PData.receiverFirstName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver LastName
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receiverLastName:target.value}))} 
          value={mobileTransactionB2PData.receiverLastName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Sending Amount
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sending Amount' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={mobileTransactionB2PData.sendingAmount} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Paying Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={mobileTransactionB2PData.payinCcyCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Payment Mode
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={mobileTransactionB2PData.paymentMode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={mobileTransactionB2PData.authenticationPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Payment Option
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder=' Payment Option' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={mobileTransactionB2PData.paymentOption} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Sending Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={mobileTransactionB2PData.sendingPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={mobileTransactionB2PData.receivingPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Business Name
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Name' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessName:target.value}))} 
          value={mobileTransactionB2PData.businessName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address1
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddress1:target.value}))} 
          value={mobileTransactionB2PData.businessAddress1} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address City
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddressCity:target.value}))} 
          value={mobileTransactionB2PData.businessAddressCity} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Primary Country Code'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessAddressCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessAddressCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address Primary Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Primary Country Code'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessPrimaryContactCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address Primary Contact Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Primary Contact Code' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactNo:target.value}))} 
          value={mobileTransactionB2PData.businessPrimaryContactNo} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Business Description
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessDescription:target.value}))} 
          value={mobileTransactionB2PData.businessDescription} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessCountryCode:target.value}))} 
          value={mobileTransactionB2PData.businessCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registeration Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Type' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationType:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationType} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registeration Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Number' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationNumber:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registration IssueDate
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration IssueDate' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationIssueDate:target.value}))} 
          value={mobileTransactionB2PData.businessRegistrationIssueDate} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business ID ValidThru
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business ID ValidThru' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessIDValidThru:target.value}))} 
          value={mobileTransactionB2PData.businessIDValidThru} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Email
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, businessEmail:target.value}))} 
          value={mobileTransactionB2PData.businessEmail} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Quoted Id
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Quoted Id' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={mobileTransactionB2PData.quoteId} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Country
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={mobileTransactionB2PData.receivingCountry}  />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Remittance Purpose
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={mobileTransactionB2PData.remittancePurpose} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Source Of Fund
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Fund' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={mobileTransactionB2PData.sourceOfFunds} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Relationship Of Sender
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Of Sender' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setMobileTransactionB2PData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={mobileTransactionB2PData.relationshipSender} />
      </Stack>





    </Stack>
    </>
  )
}

export default B2PTransactionMobile