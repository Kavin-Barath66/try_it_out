import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'
import terrapayLogo from '../../assets/img/terrapay_logo.png'
import { config } from '../../assets/config/config';
const apiUrl = config.api.url;


function TryitHeader(props) {
    const navigate = useNavigate();

    const CustomButtom = styled(Button)`
        &.Mui-disabled{
        opacity:0.5;
        color:white
        }&:hover {
            background-color: #E4302A;
        }`

        const getLedgerBalance = () => {
            var options = {
              headers: { 
                'X-USERNAME': 'OpenTurfDev', 
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                'X-DATE': '2018-04-04 09:27:16', 
                'X-ORIGINCOUNTRY': 'US'
              }
            }
            axios.get(`${apiUrl}/accounts/all/balance`,{ headers: options.headers },
              ).then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              }); 
          }

          useEffect(()=>{
            if(props.endPoint === "Account Status Mobile"){
                navigate("/account-status-mobile")
            } else if(props.endPoint === "Account Status Bank"){
               navigate("/account-status-bank")
            } else if(props.endPoint === "Ledger Balance"){
                navigate("/ledger")
            } else if(props.endPoint === "Corridor Quotation"){
                navigate("/corridor-quotation")
            }else if(props.endPoint === "Get Bank List"){
                navigate("/get-bank-list")
            } else if(props.endPoint === "Create Quotation Mobile"){
                navigate("/create-quotation-mobile")
            }else if(props.endPoint === "Create Quotation Bank"){
                navigate("/create-quotation-bank")
            }else if(props.endPoint === "Cancel Transaction"){
                navigate('/cancel-transaction')
            }else if(props.endPoint === "Reverse Transaction"){
                navigate('/reverse-transaction')
            }else if(props.endPoint === "View Transaction Bank"){
                navigate('/view-transaction-bank')
            }else if(props.endPoint === "View Transaction Mobile"){
                navigate('/view-transaction-mobile')
            }else if(props.endPoint === "Create Transaction Bank"){
                navigate('/create-transaction-bank')
            }else if(props.endPoint === "Create Transaction Mobile"){
                navigate('/create-transaction-mobile')
            }else {
                navigate("/")
            }
      },[props.endPoint])
        
  return (
    <Stack spacing={8} p={3} m={0} justifyContent='space-between' direction='row' sx={{backgroundColor:'#223871'}}>
        <Stack width="20%" sx={{marginRight:'150px'}} direction="column" justifyContent="center">
            <img src={terrapayLogo} alt="terrapayLogo" />
        </Stack>
        <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
            <TextField
                sx={{width:'100%',
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                    '& label.Mui-focused': {
                        color:'white',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                    },
                    "& .MuiOutlinedInput-root": {
                        '& fieldset':{
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                }}
                label="API End Point"
                value={props.endPoint} 
                onChange={({ target }) => props.setEndPoint(target.value)}
                select
                InputProps={{ style: { height: 40, color:'white' } }}
                InputLabelProps={{ style: { height: 40,  color:'white' } }} >
                <MenuItem value='Account Status Mobile'>Account Status Mobile</MenuItem>
                <MenuItem value='Account Status Bank'>Account Status Bank</MenuItem>
                <MenuItem value='Create Quotation Mobile'>Create Quotation Mobile</MenuItem>
                <MenuItem value='Create Quotation Bank'>Create Quotation Bank</MenuItem>
                <MenuItem value='View Transaction Mobile'>View Transaction Mobile</MenuItem>
                <MenuItem value='View Transaction Bank'>View Transaction Bank</MenuItem>
                <MenuItem value='Create Transaction Bank'>Create Transaction Bank</MenuItem>
                <MenuItem value='Create Transaction Mobile'>Create Transaction Mobile</MenuItem>
                <MenuItem value='Ledger Balance'>Ledger Balance</MenuItem>
                <MenuItem value='Corridor Quotation'>Corridor Quotation</MenuItem>
                <MenuItem value='Get Bank List'>Get Bank List</MenuItem>
                <MenuItem value='Cancel Transaction'>Cancel Transaction</MenuItem>
                <MenuItem value='Reverse Transaction'>Reverse Transaction</MenuItem>

            </TextField>
            <OutlinedInput sx={{ height: 40, width:'100%',
                    "& .MuiOutlinedInput-root": {
                        '& fieldset':{
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
            }} placeholder='Username' onChange={({ target }) => props.setuserName(target.value)} value={props.userName} />
            </Stack>
            <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
                    <TextField
                    sx={{ width:'100%',
                        "& .MuiSvgIcon-root": {
                            color: "white",
                        },
                        '& label.Mui-focused': {
                            color:'white',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'white',
                        },
                        "& .MuiOutlinedInput-root": {
                            '& fieldset':{
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                    label="Environment"
                    value={props.environment}
                    onChange={({ target }) => props.setEnvironment(target.value)}
                    select
                    InputProps={{ style: { height: 40, color:'white' } }}
                    InputLabelProps={{ style: { height: 40,  color:'white' } }} >
                    <MenuItem value='Sandbox'>Sandbox</MenuItem>
                    <MenuItem value='Production'>Production</MenuItem>
                </TextField>
                <OutlinedInput sx={{ height: 40, width:'100%',
                    "& .MuiOutlinedInput-input": {
                        color:'white',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor:'white',
                        '&.Mui-focused': {
                            borderColor: 'white',
                        },
                    },
                
                    }} placeholder='Password' onChange={({ target }) => props.setPassword(target.value)} value={props.password} />
                </Stack>
                <Stack width="20%" direction='column' >
                <CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' >TRY IT OUT</CustomButtom>
                </Stack>
        </Stack>
    )
}

export default TryitHeader