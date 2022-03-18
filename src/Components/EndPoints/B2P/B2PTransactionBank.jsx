import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function B2PTransactionBank({allowUatAccess, bankTransactionB2PData, setBankTransactionB2PData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2P Transaction Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setBankTransactionB2PData( (prev) =>
        ({...prev, requestDate:target.value}))} 
        value={bankTransactionB2PData.requestDate} />
    </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='amount'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={bankTransactionB2PData.amount} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Destination Currency<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='currency' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={bankTransactionB2PData.currency} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Transaction Type<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='type' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, type:target.value}))} 
          value={bankTransactionB2PData.type} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Free format Text Description
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={bankTransactionB2PData.descriptionText} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={bankTransactionB2PData.transRef} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Provider Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='provider' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, providerCode:target.value}))} 
          value={bankTransactionB2PData.providerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Payin Amount<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={bankTransactionB2PData.sendingAmount} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Payin Currency<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='payinCcyCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={bankTransactionB2PData.payinCcyCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Payment<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='paymentMode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, paymentMode:target.value}))} 
          value={bankTransactionB2PData.paymentMode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Authentication Partner Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='authenticationPartnerCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={bankTransactionB2PData.authenticationPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Payment Option<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='paymentOption' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={bankTransactionB2PData.paymentOption} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Send Partner Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='sendingPartnerCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, sendingPartnerCode:target.value}))} 
          value={bankTransactionB2PData.sendingPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='receivingPartnerCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={bankTransactionB2PData.receivingPartnerCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderMsisd:target.value}))} 
          value={bankTransactionB2PData.senderMsisd} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Beneficiary Mobile Number 
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverMsisdn:target.value}))} 
          value={bankTransactionB2PData.receiverMsisdn} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          SMS Notification
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, beneficiarySmsNotify:target.value}))} 
          value={bankTransactionB2PData.beneficiarySmsNotify} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={bankTransactionB2PData.receiverBankaccountno}  />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Bank Account Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='accounttype' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankAccountType:target.value}))} 
          value={bankTransactionB2PData.receiverBankAccountType}  />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Bank Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankCode:target.value}))} 
          value={bankTransactionB2PData.receiverBankCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2PData.receiverBankName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Bank Sub Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='sortcode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, bankSubCode:target.value}))} 
          value={bankTransactionB2PData.bankSubCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receive Account IBAN Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, accountIBAN:target.value}))} 
          value={bankTransactionB2PData.accountIBAN} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Account Number Additional field 1
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, accountAdditionalNo1:target.value}))} 
          value={bankTransactionB2PData.accountAdditionalNo1} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Account Number Additional field 2
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2' 
        disabled={!allowUatAccess}       
        onChange={({ target }) =>
        setBankTransactionB2PData( (prev) =>
        ({...prev, accountAdditionalNo2:target.value}))} 
        value={bankTransactionB2PData.accountAdditionalNo2} />
    </Stack>



    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040" >Sender Details:-</Typography>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessName:target.value}))} 
          value={bankTransactionB2PData.businessName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company PIN Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={bankTransactionB2PData.senderBusinessPINCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address 1<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddress1:target.value}))} 
          value={bankTransactionB2PData.businessAddress1} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address 2
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={bankTransactionB2PData.senderBusinessAddress2} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered City
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddressCity:target.value}))} 
          value={bankTransactionB2PData.businessAddressCity} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessAddressCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessAddressCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Registered Address Zip Code 
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={bankTransactionB2PData.senderBusinessAddressZip} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Primary Contact Country Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode'
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessPrimaryContactCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Primary Contact Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2PData.businessPrimaryContactNo} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Company
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessDescription:target.value}))} 
          value={bankTransactionB2PData.businessDescription} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Email Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessEmail:target.value}))} 
          value={bankTransactionB2PData.businessEmail} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Country Code<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessCountryCode:target.value}))} 
          value={bankTransactionB2PData.businessCountryCode} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Type of Registration<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationType:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationType} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued by 
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2PData.senderBusinessRegistrationIssuedBy} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued at  
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2PData.senderBusinessRegistrationIssuedAt} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Number<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationNumber:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Issued Date
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2PData.businessRegistrationIssueDate} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Incorporation Expiry Date<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, businessIDValidThru:target.value}))} 
          value={bankTransactionB2PData.businessIDValidThru} />
      </Stack>







    {/* Receiver */}
    <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Recipient Details:-</Typography>   
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Nationality
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='nationality' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverNationality:target.value}))} 
          value={bankTransactionB2PData.receiverNationality} />
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactCountryCode' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactCountryCode} />
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNo' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNo:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactNo} />
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Primary Contact Number Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='primaryContactNoType' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverPrimaryContactNoType:target.value}))} 
          value={bankTransactionB2PData.receiverPrimaryContactNoType} />
      </Stack>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient First Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverFirstName:target.value}))} 
          value={bankTransactionB2PData.receiverFirstName} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Recipient Last Name<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='firstName' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receiverLastName:target.value}))} 
          value={bankTransactionB2PData.receiverLastName} />
      </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Type 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={bankTransactionB2PData.receiverIdType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Number  
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={bankTransactionB2PData.receiverIdNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Issue Date  
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={bankTransactionB2PData.receiverIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Document Expiry Date  
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={bankTransactionB2PData.receiverExpiryDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Id Issuer Country 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry' 
            disabled={!allowUatAccess}       
            onChange={({ target }) =>
            setBankTransactionB2PData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={bankTransactionB2PData.receiverIssuerCountry} />
        </Stack>







      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Quoted Id<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Quoted Id' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={bankTransactionB2PData.quoteId} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Country<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={bankTransactionB2PData.receivingCountry}  />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={bankTransactionB2PData.remittancePurpose} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Source Of Fund<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Fund' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, sourceOfFunds:target.value}))} 
          value={bankTransactionB2PData.sourceOfFunds} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
          <Typography color="#575757" fontWeight='500'>
          Relationship Of Sender
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Of Sender' 
          disabled={!allowUatAccess}       
          onChange={({ target }) =>
          setBankTransactionB2PData( (prev) =>
          ({...prev, relationshipSender:target.value}))} 
          value={bankTransactionB2PData.relationshipSender} />
      </Stack>





    </Stack>
    </>
  )
}

export default B2PTransactionBank