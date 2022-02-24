import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function B2PTransactionMobile(props) {
    
    
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
          <OutlinedInput sx={{ height: 40 }} placeholder='Amount' onChange={({ target }) => props.setAccountNumber(target.value)} value={props.accountNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Currency' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Type' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Description Text
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Description Text' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Sender MSISDN
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sender MSISDN' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver Bank Account Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Bank Account Number' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver Bank Account Name
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Bank Account Name' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver Bank Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Bank Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiver Fullname
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiver Fullname' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Sending Amount
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sending Amount' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Paying Currency
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Paying Currency' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Payment Mode
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Payment Mode' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Authentication Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Authentication Partner Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Payment Option
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder=' Payment Option' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Sending Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Sending Partner Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Receiving Partner Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Partner Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
                Business Name
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Name' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address1
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address1' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address City
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address City' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address Primary Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Primary Country Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Address Primary Contact Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Address Primary Contact Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Business Description
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Description' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Country Code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Country Code' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registeration Type
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Type' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registeration Number
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registeration Number' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Registration IssueDate
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Registration IssueDate' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business ID ValidThru
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business ID ValidThru' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Business Email
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Business Email' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Quoted Id
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Quoted Id' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Receiving Country
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Remittance Purpose
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Receiving Country' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Source Of Fund
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Source Of Fund' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Relationship Of Sender
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Relationship Of Sender' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>





    </Stack>
    </>
  )
}

export default B2PTransactionMobile