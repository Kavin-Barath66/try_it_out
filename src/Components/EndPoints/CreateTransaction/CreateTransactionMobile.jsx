import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { currencyList } from '../../../Utils/currency'
import { countryList } from '../../../Utils/country'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function CreateTransactionMobile({allowUatAccess, createTransactionMobileData, setCreateTransactionMobileData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Create Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Creation Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, requestDate:target.value}))} 
            value={createTransactionMobileData.requestDate} 
            error={!createTransactionMobileData.requestDate && true}
          />
          {!createTransactionMobileData.requestDate && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createTransactionMobileData.requestDate && "Mandatory Field"}
            </FormHelperText>
          )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Amount Payable<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='amount'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, amount:target.value}))} 
          value={createTransactionMobileData.amount} 
          error={!createTransactionMobileData.amount && true}
          />
          {!createTransactionMobileData.amount && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!createTransactionMobileData.amount && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Currency<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

          <TextField
              sx={{ width: 213 }}
              label="Currency" 
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
          ({...prev, currency:target.value}))} 
          value={createTransactionMobileData.currency}
              select
              disabled={!allowUatAccess}
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
            >
            {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
              )
            })}
          </TextField>
          </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='type'
            disabled={true}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, type:target.value}))} 
            value={createTransactionMobileData.type}
            error={!createTransactionMobileData.type && true}
            />
            {!createTransactionMobileData.type && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.type && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Free format Text Description
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='descriptionText'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, descriptionText:target.value}))} 
            value={createTransactionMobileData.descriptionText}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Transaction Reference<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='requestingOrganisationTransactionReference'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, transRef:target.value}))} 
            value={createTransactionMobileData.transRef} 
            error={!createTransactionMobileData.transRef && true}
            />
            {!createTransactionMobileData.transRef && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.transRef && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>

        {/* Provider */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='provider'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, providerCode:target.value}))} 
            value={createTransactionMobileData.providerCode}
            />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Sender Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn debitParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderMsisdn:target.value}))} 
            value={createTransactionMobileData.senderMsisdn} 
            error={!createTransactionMobileData.senderMsisdn && true}
            />
            {!createTransactionMobileData.senderMsisdn && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.senderMsisdn && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Mobile Number<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='msisdn creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverMsisdn:target.value}))} 
            value={createTransactionMobileData.receiverMsisdn} 
            error={!createTransactionMobileData.receiverMsisdn && true}
            />
            {!createTransactionMobileData.receiverMsisdn && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.receiverMsisdn && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>


        {/* Beneficary bank account */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Beneficiary Bank Account No
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='bankaccountno creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverBankAccountno:target.value}))} 
            value={createTransactionMobileData.receiverBankAccountno}
            />
            </FormControl>
        </Stack>
        {/* receiver bank account
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Receive Bank Account Type<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='accounttype creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverBankAccountType:target.value}))} 
            value={createTransactionMobileData.receiverBankAccountType}
            error={!createTransactionMobileData.receiverBankAccountType && true}
            />
            {!createTransactionMobileData.receiverBankAccountType && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.receiverBankAccountType && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
            </Stack> */}

        {/* bank code */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='sortcode creditParty' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankCode:target.value}))} 
            value={createTransactionMobileData.bankCode}
            />
            </FormControl>
        </Stack>
        {/* Full name of Beneficiary Bank*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='organisationid' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankName:target.value}))} 
            value={createTransactionMobileData.bankName}
            />
            </FormControl>
        </Stack> 
        {/* Branch code*/}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Sub code
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='banksubcode' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, bankSubCode:target.value}))} 
            value={createTransactionMobileData.bankSubCode}
            />
            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Nationality"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
              setCreateTransactionMobileData( (prev) =>
              ({...prev, nationality:target.value}))} 
              value={createTransactionMobileData.nationality}  
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.nationality?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Date of Birth (Sender)<span style={{color:'#ea5c57'}}> *</span>
        </Typography>
        <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth' 
        disabled={!allowUatAccess}
        onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, dateOfBirth:target.value}))} 
            value={createTransactionMobileData.dateOfBirth} 
            error={!createTransactionMobileData.dateOfBirth && true}
            />
            {!createTransactionMobileData.dateOfBirth && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.dateOfBirth && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Gender (Sender)
            </Typography>
            <TextField
            sx={{ width: 213 }}
            label="Gender"
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
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idType:target.value}))} 
            value={createTransactionMobileData.idType} 
            error={!createTransactionMobileData.idType && true}
            />
            {!createTransactionMobileData.idType && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.idType && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idNumber' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, idNumber:target.value}))} 
            value={createTransactionMobileData.idNumber}
            error={!createTransactionMobileData.idNumber && true}
            />
            {!createTransactionMobileData.idNumber && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.idNumber && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='issueDate' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issueDate:target.value}))} 
            value={createTransactionMobileData.issueDate} 
            />
            </FormControl>
        </Stack>  
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, expiryDate:target.value}))} 
            value={createTransactionMobileData.expiryDate}
            error={!createTransactionMobileData.expiryDate && true}
            />
            {!createTransactionMobileData.expiryDate && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.expiryDate && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Sender)
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Issuer Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, issuerCountry:target.value}))} 
            value={createTransactionMobileData.issuerCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.issuerCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine1:target.value}))} 
            value={createTransactionMobileData.addressLine1}
            error={!createTransactionMobileData.addressLine1 && true}
            />
            {!createTransactionMobileData.addressLine1 && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.addressLine1 && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine2:target.value}))} 
            value={createTransactionMobileData.addressLine2} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, addressLine3:target.value}))} 
            value={createTransactionMobileData.addressLine3} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='city' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, city:target.value}))} 
            value={createTransactionMobileData.city} 
            error={!createTransactionMobileData.city && true}
            />
            {!createTransactionMobileData.city && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.city && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, stateProvince:target.value}))} 
            value={createTransactionMobileData.stateProvince} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Sender Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, postalCode:target.value}))} 
            value={createTransactionMobileData.postalCode} />
            </FormControl>
        </Stack> 
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Sender Address)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, country:target.value}))} 
            value={createTransactionMobileData.country}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.country?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>

        {/* Title (Sender) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='title'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, senderTitle:target.value}))} 
            value={createTransactionMobileData.senderTitle}/>
            </FormControl>
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Sender)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, firstName:target.value}))} 
            value={createTransactionMobileData.firstName} 
            error={!createTransactionMobileData.firstName && true}
            />
            {!createTransactionMobileData.firstName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.firstName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Middle Name (Sender)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='middlename'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, middleName:target.value}))} 
            value={createTransactionMobileData.middleName} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Sender)<span style={{color:'#ea5c57'}}> *</span>	
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='lastName' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, lastName:target.value}))} 
            value={createTransactionMobileData.lastName}
            error={!createTransactionMobileData.lastName && true}
            />
            {!createTransactionMobileData.lastName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.lastName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>


        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Nationality (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Nationality"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverNationality:target.value}))} 
            value={createTransactionMobileData.receiverNationality}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.receiverNationality?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Date of Birth (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='dateOfBirth'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverDOB:target.value}))} 
            value={createTransactionMobileData.receiverDOB}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Type (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idType'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIdType:target.value}))} 
            value={createTransactionMobileData.receiverIdType}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Number (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='idNumber'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIdNumber:target.value}))} 
            value={createTransactionMobileData.receiverIdNumber} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Issue Date (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='issueDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIssueDate:target.value}))} 
            value={createTransactionMobileData.receiverIssueDate} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Document Expiry Date (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='expiryDate'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverExpiryDate:target.value}))} 
            value={createTransactionMobileData.receiverExpiryDate}  />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Id Issuer Country (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Issuer Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverIssuerCountry:target.value}))} 
            value={createTransactionMobileData.receiverIssuerCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.receiverIssuerCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line1 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine1'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine1:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine1}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line2 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine2'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine2:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine2}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Address Line3 (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='addressLine3'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverAddressLine3:target.value}))} 
            value={createTransactionMobileData.receiverAddressLine3} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            City/Town (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='city'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverCity:target.value}))} 
            value={createTransactionMobileData.receiverCity}  />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            State (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='stateProvince'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverState:target.value}))} 
            value={createTransactionMobileData.receiverState} />
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Postal Code (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='postalCode'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverPostalCode:target.value}))} 
            value={createTransactionMobileData.receiverPostalCode}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Country (Receiver Address)
            </Typography>
            <FormControl sx={{height:45}}>

            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverCountry:target.value}))} 
            value={createTransactionMobileData.receiverCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.receiverCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>

        {/* Title (Receiver) */}
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Title (Receiver)
            </Typography>
            <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='title'
            disabled={!allowUatAccess} 
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverTitle:target.value}))} 
            value={createTransactionMobileData.receiverTitle}/>
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            First Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverFirstName:target.value}))} 
            value={createTransactionMobileData.receiverFirstName} 
            error={!createTransactionMobileData.receiverFirstName && true}
            />
            {!createTransactionMobileData.receiverFirstName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.receiverFirstName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography color="#575757" fontWeight='500'>
        Middlename Name (Receiver)
        </Typography>
        <FormControl sx={{height:45}}>
    <OutlinedInput sx={{ height: 40 }} placeholder='firstName'
        disabled={!allowUatAccess}
        onChange={({ target }) =>
        setCreateTransactionMobileData( (prev) =>
        ({...prev, receiverMiddleName:target.value}))} 
        value={createTransactionMobileData.receiverMiddleName} 
        />
        </FormControl>
    </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Name (Receiver)<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='lastName'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receiverLastName:target.value}))} 
            value={createTransactionMobileData.receiverLastName} 
            error={!createTransactionMobileData.receiverLastName && true}
            />
            {!createTransactionMobileData.receiverLastName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.receiverLastName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Quote Id<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='quoteId'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, quoteId:target.value}))} 
            value={createTransactionMobileData.quoteId} 
            error={!createTransactionMobileData.quoteId && true}
            />
            {!createTransactionMobileData.quoteId && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.quoteId && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
            
            <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              disabled={!allowUatAccess}
              onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, receivingCountry:target.value}))} 
            value={createTransactionMobileData.receivingCountry}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={createTransactionMobileData.receivingCountry?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>

            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Reason for Transfer<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='remittancePurpose' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, remittancePurpose:target.value}))} 
            value={createTransactionMobileData.remittancePurpose}
            error={!createTransactionMobileData.remittancePurpose && true}
            />
            {!createTransactionMobileData.remittancePurpose && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.remittancePurpose && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Source of Funds<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='sourceOfFunds'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, sourceOfFunds:target.value}))} 
            value={createTransactionMobileData.sourceOfFunds} 
            error={!createTransactionMobileData.sourceOfFunds && true}
            />
            {!createTransactionMobileData.sourceOfFunds && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.sourceOfFunds && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}
        >
            <Typography color="#575757" fontWeight='500'>
            Relationship - Sender & Beneficiary<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>
        <OutlinedInput sx={{ height: 40 }} placeholder='relationshipSender'
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setCreateTransactionMobileData( (prev) =>
            ({...prev, relationshipSender:target.value}))} 
            value={createTransactionMobileData.relationshipSender} 
            error={!createTransactionMobileData.relationshipSender && true}
            />
            {!createTransactionMobileData.relationshipSender && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!createTransactionMobileData.relationshipSender && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>
    </Stack>
    </>
  )
}

export default CreateTransactionMobile