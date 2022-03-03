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
            Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={createTransactionMobileData.amount} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Currency'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={createTransactionMobileData.currency} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionMobileData.type} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Description Text
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Description Text'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionMobileData.descriptionText}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Request Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionMobileData.requestDate} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionMobileData.transRef} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender MobileNumber
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={createTransactionMobileData.senderMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver MobileNumber
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver MSISDN' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={createTransactionMobileData.receiverMsisdn} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Nationality
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Nationality'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, nationality:target.value}))} 
            value={createTransactionMobileData.nationality} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Sender Date Of Birth
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Date Of Birth' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={createTransactionMobileData.dateOfBirth} />
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
            Sender ID Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Type'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionMobileData.idType} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender ID Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionMobileData.idNumber}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Issue Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issue Date' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionMobileData.issueDate} />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionMobileData.expiryDate} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Issuer Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionMobileData.issuerCountry} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 1' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionMobileData.addressLine1} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 2' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionMobileData.addressLine2} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Address Line 3
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionMobileData.addressLine3} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='City' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionMobileData.city} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender State Province
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='State Province'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={createTransactionMobileData.stateProvince} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Postal Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionMobileData.postalCode} />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Country' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionMobileData.country}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender First Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender First Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionMobileData.firstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Middle Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Middle Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionMobileData.middleName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Last Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Last Name' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionMobileData.lastName}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver First Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver First Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionMobileData.receiverFirstName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Last Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Last Name'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionMobileData.receiverLastName} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionMobileData.quoteId} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionMobileData.receivingCountry}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionMobileData.remittancePurpose}/>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionMobileData.sourceOfFunds} />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender'
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