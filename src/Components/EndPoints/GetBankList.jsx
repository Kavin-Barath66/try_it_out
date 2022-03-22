import React from 'react'
import { countryList } from '../../Utils/country'
import MenuItem from '@mui/material/MenuItem';
import { Stack, Button, Box, Typography, TextField, OutlinedInput, FormControl, FormHelperText} from '@mui/material'

function GetBankList({allowUatAccess, setGetBankListData, getBankListData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Get Bank List</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}> 

          <TextField
            alignItems='center'
              sx={{ width: 213}}
              label="Country"
              onChange={({ target }) =>
              setGetBankListData( (prev) =>
                  ({...prev, country:target.value}))} 
              value={getBankListData.country} 
              error={!getBankListData.country && true}
              select
              InputProps={{ style: { height: 40 } }}
              InputLabelProps={getBankListData.country?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 }}} 
            >
              <MenuItem value="">Country</MenuItem>
              {countryList && countryList.length > 0 && countryList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.code}>{value.name}</MenuItem>
              )
            })}
            </TextField>


          {!getBankListData.country && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!getBankListData.country && "Mandatory Field"}
            </FormHelperText>
          )}
            </FormControl>
        </Stack>

       {/*  <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Updated Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}> 
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="lastUpdatedOn"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, lastUpdatedOn:target.value}))} 
            value={getBankListData.lastUpdatedOn} 
            error={!getBankListData.lastUpdatedOn && true}
            />
            {!getBankListData.lastUpdatedOn && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.lastUpdatedOn && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>    
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankName"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankName:target.value}))} 
            value={getBankListData.bankName} 
            error={!getBankListData.bankName && true}
            />
            {!getBankListData.bankName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.bankName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>  
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankCode:target.value}))} 
            value={getBankListData.bankCode} 
            error={!getBankListData.bankCode && true}
            />
            {!getBankListData.bankCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.bankCode && "Mandatory Field"}
              </FormHelperText>
            )}

            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="providerCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, providerCode:target.value}))} 
            value={getBankListData.providerCode} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Account Status<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>  
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="status"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, status:target.value}))} 
            value={getBankListData.status} 
            error={!getBankListData.status && true}
            />
            {!getBankListData.status && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.status && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> */}
    </Stack>
    </>
  )
}

export default GetBankList