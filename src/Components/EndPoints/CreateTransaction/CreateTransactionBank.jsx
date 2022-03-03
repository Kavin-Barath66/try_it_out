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
            Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, amount:target.value}))} 
            value={createTransactionBankData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Currency'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, currency:target.value}))} 
            value={createTransactionBankData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionBankData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Description Text
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Description Text' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionBankData.descriptionText} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Reques Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionBankData.requestDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionBankData.transRef} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderMsisd:target.value}))} 
            value={createTransactionBankData.senderMsisd} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Account Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankaccountno:target.value}))} 
            value={createTransactionBankData.receiverBankaccountno} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder=' Bank Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankName:target.value}))} 
            value={createTransactionBankData.receiverBankName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverBankCode:target.value}))} 
            value={createTransactionBankData.receiverBankCode} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Nationality
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderNationality:target.value}))} 
            value={createTransactionBankData.senderNationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Date Of Birth
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Date Of Birth'
        disabled={!allowUatAccess}
        onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, senderDateOfBirth:target.value}))} 
            value={createTransactionBankData.senderDateOfBirth} />
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Gender
            </Typography>
            <TextField
              sx={{ width: 205 }}
              label="Sender Gender"
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
            Sender ID Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionBankData.idType}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender ID Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Number'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionBankData.idNumber} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Issue Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issue Date'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionBankData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionBankData.expiryDate} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Issuer Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionBankData.issuerCountry} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 1'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionBankData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 2' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionBankData.addressLine2}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 3
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 3' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionBankData.addressLine3} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='City'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender State Province
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='State Province' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionBankData.city}/>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Postal Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionBankData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionBankData.country} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender First Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender First Name' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionBankData.firstName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Middle Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Middle Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionBankData.middleName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Last Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionBankData.lastName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver First Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender First Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionBankData.receiverFirstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Last Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionBankData.receiverLastName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionBankData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionBankData.receivingCountry} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionBankData.remittancePurpose}  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionBankData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionBankData.sourceOfFunds}   />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender' 
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