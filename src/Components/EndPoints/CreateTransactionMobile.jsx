import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CreateTransactionMobile(props) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Quotation Bank</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Amount' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Currency
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Currency' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Type' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Description Text
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Description Text' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender MSISDN
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver MSISDN
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver MSISDN' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Nationality' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date Of Birth
        </Typography>
        <OutlinedInput sx={{ height: 40 }} placeholder='Date Of Birth' />
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Gender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Gender' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            ID Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Type' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            ID Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='ID Number' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Issue Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issue Date' />
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Expiry Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Expiry Date' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Issuer Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Issuer Country' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 1' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 2' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line 3
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Address Line 3' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='City' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State Province
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='State Province' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Postal Code' />
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Country' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Full Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Full Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Full Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Full Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Quote Id
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Quote Id' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Country
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Country' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Remittance Purpose
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Remittance Purpose' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Source Of Funds
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Funds' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Relationship Sender
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Sender' />
        </Stack>
    </Stack>
    </>
  )
}

export default CreateTransactionMobile