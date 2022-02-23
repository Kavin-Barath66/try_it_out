import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function B2BTransaction(props) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">B2B Transaction</Typography>
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
            Receiver Bank Account Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Account Number' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder=' Bank Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receiver Bank Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Bank Code   ' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Amount
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Full Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Paying Currency Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Mode
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Payment Option
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Payment Option' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sending Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code' />
        </Stack>







        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address 1' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Address City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address City' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Address Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Address Country Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Primary Contact Country Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Primary Contact Number' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Description' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Country Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Registeration Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Registeration Type' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Registeration Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Registeration Number' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Registeration IssueDate
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Registeration IssueDate' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business ID ValidThru
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business ID ValidThru' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Sender Business Email
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Sender Business Email' />
        </Stack>
        {/* Receiver */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Name
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Name' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business PIN code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business PIN code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address 1
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address 1' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address 2
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address 2' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address City
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address City' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address State
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address State' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address Country Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Address Zip
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Address Zip' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Primary Contact Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Primary Contact Country Code' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Primary Contact Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Primary Contact Number' />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Primary Contact Number Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Primary Contact Number Type'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Description
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Description'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Email
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Email'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Country Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Country Code'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Registeration Type
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Registeration Type'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Registeration Number
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Registeration Number'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Registeration Issued By
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Registeration Issued By'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Registeration Issued At
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Registeration Issued At'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Registeration Issued Date
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Registeration Issued Date'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Id ValidThru
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Id ValidThru'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Type Of Business
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Type Of Business'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business POBox
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business POBox'  />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
                Receiver Business Mobile
            </Typography>
            <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Business Mobile'  />
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

export default B2BTransaction