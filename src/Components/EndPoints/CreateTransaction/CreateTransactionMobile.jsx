import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateTransactionMobile({allowUatAccess, createTransactionMobileData, setCreateTransactionMobileData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionMobileData.requestDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={createTransactionMobileData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='currency'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={createTransactionMobileData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='type'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionMobileData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Free format Text Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionMobileData.descriptionText}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionMobileData.transRef} />
        </Stack>

        {/* Provider */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, providerCode:target.value}))} 
            value={createTransactionMobileData.providerCode}
            />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={createTransactionMobileData.senderMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={createTransactionMobileData.receiverMsisdn} />
        </Stack>


        {/* Beneficary bank account */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Bank Account No
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderBankAccountno:target.value}))} 
            value={createTransactionMobileData.senderBankAccountno}
            />
        </Stack>
        {/* receiver bank account */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='accounttype creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={createTransactionMobileData.receiverBankAccountType}
            />
            </Stack>

        {/* bank code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankCode:target.value}))} 
            value={createTransactionMobileData.bankCode}
            />
        </Stack>
        {/* Full name of Beneficiary Bank */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankName:target.value}))} 
            value={createTransactionMobileData.bankName}
            />
        </Stack>
        {/* Branch code*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Branch code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={createTransactionMobileData.bankSubCode}
            />
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={createTransactionMobileData.nationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={createTransactionMobileData.dateOfBirth} />
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
            setCreateTransactionMobileData( (prev) =>
            ({...prev, gender:target.value}))} 
            value={createTransactionMobileData.gender}
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
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionMobileData.idType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionMobileData.idNumber}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionMobileData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionMobileData.expiryDate} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionMobileData.issuerCountry} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionMobileData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionMobileData.addressLine2} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionMobileData.addressLine3} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='city' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionMobileData.city} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={createTransactionMobileData.stateProvince} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionMobileData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='country' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionMobileData.country}/>
        </Stack>

        {/* Title (Sender) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='title'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={createTransactionMobileData.senderTitle}/>
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionMobileData.firstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Middle Name (Sender)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='middlename'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionMobileData.middleName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>	
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='lastName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionMobileData.lastName}/>
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverNationality:target.value}))} 
            value={createTransactionMobileData.receiverNationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverDOB:target.value}))} 
            value={createTransactionMobileData.receiverDOB}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Type (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={createTransactionMobileData.receiverIdType}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={createTransactionMobileData.receiverIdNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={createTransactionMobileData.receiverIssueDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={createTransactionMobileData.receiverExpiryDate}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Receiver)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='issuerCountry'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={createTransactionMobileData.receiverIssuerCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine1:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine1}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine2:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine2}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine3:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine3} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverCity:target.value}))} 
            value={createTransactionMobileData.receiverCity}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverState:target.value}))} 
            value={createTransactionMobileData.receiverState} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverPostalCode:target.value}))} 
            value={createTransactionMobileData.receiverPostalCode}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Receiver Address)
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='country'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverCountry:target.value}))} 
            value={createTransactionMobileData.receiverCountry}/>
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionMobileData.receiverFirstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='lastName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionMobileData.receiverLastName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionMobileData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='receivingCountry' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionMobileData.receivingCountry}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Reason for Transfer<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionMobileData.remittancePurpose}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionMobileData.sourceOfFunds} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}
        >
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={createTransactionMobileData.relationshipSender} />
        </Stack>
    </Stack>
    </>
  )
}

export default CreateTransactionMobile