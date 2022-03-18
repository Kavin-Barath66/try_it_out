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
        Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestDate' 
        disabled={!allowUatAccess}  
        onChange={({ target }) =>
        setBankTransactionB2BData( (prev) =>
      ({...prev, requestDate:target.value}))} 
      value={bankTransactionB2BData.requestDate}/>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={bankTransactionB2BData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='currency'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={bankTransactionB2BData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='type' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, type:target.value}))} 
          value={bankTransactionB2BData.type}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Free format Text Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, descriptionText:target.value}))} 
          value={bankTransactionB2BData.descriptionText}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={bankTransactionB2BData.transRef} />
        </Stack>
        {/* Provider Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, providerCode:target.value}))} 
          value={bankTransactionB2BData.providerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Amount<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingAmount'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, sendingAmount:target.value}))} 
          value={bankTransactionB2BData.sendingAmount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payin Currency Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='payinCcyCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, payinCcyCode:target.value}))} 
          value={bankTransactionB2BData.payinCcyCode}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Payment<span style={{color:'#ea5c57'}}> *</span>
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
            Authentication Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='authenticationPartnerCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, authenticationPartnerCode:target.value}))} 
          value={bankTransactionB2BData.authenticationPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Payment Option<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='paymentOption' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, paymentOption:target.value}))} 
          value={bankTransactionB2BData.paymentOption} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Partner Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sendingPartnerCode'
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
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingPartnerCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingPartnerCode:target.value}))} 
          value={bankTransactionB2BData.receivingPartnerCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisd' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderMsisdn:target.value}))} 
          value={bankTransactionB2BData.senderMsisdn}/>
        </Stack>
        {/* Beneficiary Mobile Number */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisd' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverMsisdn:target.value}))} 
          value={bankTransactionB2BData.receiverMsisdn}/>
        </Stack>
        {/* SMS Notification */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            SMS Notification
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='beneficiarySmsNotify' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, beneficiarySmsNotify:target.value}))} 
          value={bankTransactionB2BData.beneficiarySmsNotify}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankaccountno:target.value}))} 
          value={bankTransactionB2BData.receiverBankaccountno}/>
        </Stack>
        {/* Receive Bank Account Type */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accounttype creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankAccountType:target.value}))} 
          value={bankTransactionB2BData.receiverBankAccountType}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankCode:target.value}))} 
          value={bankTransactionB2BData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full Name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>
      {/* Bank Sub Code */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>
      {/* Receive Account IBAN Number */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Account IBAN Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountIBAN creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>
      {/* Account Number Additional field 1 */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo1 creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>
      {/* Account Number Additional field 2 */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Account Number Additional field 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accountAdditionalNo2 creditParty' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receiverBankName:target.value}))} 
          value={bankTransactionB2BData.receiverBankName}/>
        </Stack>



        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040">Sender Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Company Name <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessName:target.value}))} 
          value={bankTransactionB2BData.senderBusinessName} />
        </Stack>
        {/* Company Pin Code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Pin Code 
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPINCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPINCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address 1 <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddress1}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddress2:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddress2}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCity} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Registered Address Zip Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessAddressZip:target.value}))} 
          value={bankTransactionB2BData.senderBusinessAddressZip} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
              Company Primary Contact Country Code <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Primary Contact Number <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.senderBusinessPrimaryContactNo} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Company
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.senderBusinessDescription} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Company Email Id <span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Email'
          disabled={!allowUatAccess}  
          onChange={({ target }) =>
          setBankTransactionB2BData( (prev) =>
        ({...prev, senderBusinessEmail:target.value}))} 
        value={bankTransactionB2BData.senderBusinessEmail} />
      </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Country Code <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.senderBusinessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type of Registration <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued by
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationIssuedBy} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued at
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderbusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2BData.senderbusinessRegistrationIssuedAt} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Number <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationNumber}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.senderBusinessRegistrationIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Company Incorporation Expiry Date <span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, senderBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.senderBusinessIDValidThru} />
        </Stack>


        
        {/* Receiver  Details*/}
        <Typography fontWeight={600} fontSize={20} variant='h6' color="#404040" >Recepient Details:-</Typography>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Name<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessName'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessName:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Pin Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPINCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPINCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPINCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress1'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress1:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress1} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddress2'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddress2:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddress2} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='BbusinessAddressCity'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCity:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCity} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered State
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressState'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressState:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressState} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressCountryCode'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Registered Address Zip Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessAddressZip'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessAddressZip:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessAddressZip} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactCountryCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNo' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNo:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNo}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Primary Contact Number type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPrimaryContactNoType'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPrimaryContactNoType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPrimaryContactNoType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessDescription'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessDescription:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessDescription}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Email Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessEmail'  
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessEmail:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessEmail} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessCountryCode' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessCountryCode:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessCountryCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Registration
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationType' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationType:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationNumber'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationNumber:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued by
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedBy'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedBy:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedBy}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued at
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssuedAt' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssuedAt:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssuedAt} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessRegistrationIssueDate'
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessRegistrationIssueDate:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessRegistrationIssueDate}   />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company Incorporation Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessIDValidThru' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessIDValidThru:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessIDValidThru}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Type of Company
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='typeofbusiness' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBypeofbusiness:target.value}))} 
          value={bankTransactionB2BData.recepientBypeofbusiness}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Recipient Company PO Box
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='businessPObox' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessPObox:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessPObox} />
        </Stack>
        {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Business Mobile
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Business Mobile' 
            disabled={!allowUatAccess}  
            onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, recepientBusinessMobile:target.value}))} 
          value={bankTransactionB2BData.recepientBusinessMobile} />
        </Stack> */}










































        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, quoteId:target.value}))} 
          value={bankTransactionB2BData.quoteId}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, receivingCountry:target.value}))} 
          value={bankTransactionB2BData.receivingCountry}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
            disabled={!allowUatAccess}  onChange={({ target }) =>
            setBankTransactionB2BData( (prev) =>
          ({...prev, remittancePurpose:target.value}))} 
          value={bankTransactionB2BData.remittancePurpose} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds<span style={{color:'#ea5c57'}}> *</span>
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