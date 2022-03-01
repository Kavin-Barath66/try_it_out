import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container } from '@mui/material'
import terrapayLogo from '../../assets/img/terrapay_logo.png'
import { config } from '../../assets/config/config';
const apiUrl = config.api.url;


const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 400,
        },
    },
};

function TryitHeader(props) {
    const navigate = useNavigate();

    const CustomButtom = styled(Button)`
        &.Mui-disabled{
        opacity:0.5;
        color:white
        }&:hover {
            background-color: #E4302A;
        }`

    const getLedgerBalanceApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/ledger-balance`, { headers: options.headers },
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
        .catch(function (error) {
            console.log(error);
            props.setApiResponseData(error)
            props.setResponseScreen(true)
            props.setApiResponseHeaderData(options.headers)
        })
    }


    const cancelTransactionApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${apiUrl}/v1/try-it/cancel-transaction`,
        {
            "reason": `${props.cancelTransactionData.reason}`,
            "txnId": `${props.cancelTransactionData.txId}`,
        },{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setResponseScreen(true)
                props.setApiResponseHeaderData(options.headers)
            });
    }
    const reverseTransactionApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${apiUrl}/v1/try-it/reverse-transaction`,
        {
            "reversalReason": `${props.reverseTransactionData.reason}`,
            "txnId": `${props.reverseTransactionData.txId}`,
        },{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setResponseScreen(true)
                props.setApiResponseHeaderData(options.headers)
            });
    }

    const getViewTransaction = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/transaction?transactionReference=${props.transRef}`,
            { headers: options.headers },
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseHeaderData(options.headers)
            props.setApiResponseData(response.data)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }

    const accountStatusBankApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/account-status?accountId=${props.bankAccountStatusData.accountId}&bnv=${props.bankAccountStatusData.bnv}&bankcode=${props.bankAccountStatusData.bankCode}&bankname=${props.bankAccountStatusData.bankName}&country=${props.bankAccountStatusData.country}`,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const accountStatusMobileApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/account-status?msisdn=${props.mobileAccountStatusData.msisdn}&bnv=${props.mobileAccountStatusData.bnv}`,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const getBankListApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/bank-list?countryCode=${props.getBankListData.country}`,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const corridorQuotationApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.get(`${apiUrl}/v1/try-it/quotation?currency=${props.corridorQuotationData.currency}`,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createQuotationBankApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${apiUrl}/v1/try-it/quotation`,
        {
            "requestDate": `${props.createQuotationBank.requestDate}`,
            "creditParty": [
              {
                "key": "bankaccountno",
                "value": `${props.createQuotationBank.bankaccountno}`
              },
              {
                "key": "receivingCountry",
                "value": `${props.createQuotationBank.receivingCountry}`
              }
            ],
            "requestAmount": `${props.createQuotationBank.requestAmount}`,
            "requestCurrency": `${props.createQuotationBank.requestCurrency}`,
            "quotes": [
              {
                "sendingCurrency":`${props.createQuotationBank.sendingCurrency}`,
                "receivingCurrency": `${props.createQuotationBank.receivingCurrency}`
              }
            ]
        },
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createQuotationMobileApi = () => {
        var options = {
            headers: {
                'X-USERNAME': 'OpenTurfDev',
                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56',
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${apiUrl}/v1/try-it/quotation`,
        {
            "requestDate": `${props.createQuotationMobileData.requestDate}`,
            "creditParty": [
              {
                "key": "msisdn",
                "value": `${props.createQuotationMobileData.reciverMsisdn}`
              }
            ],
            "requestAmount": `${props.createQuotationMobileData.requestAmount}`,
            "requestCurrency": `${props.createQuotationMobileData.requestCurrency}`,
            "quotes": [
              {
                "sendingCurrency": `${props.createQuotationMobileData.sendingCurrency}`,
                "receivingCurrency": `${props.createQuotationMobileData.receivingCurrency}`
              }
            ]
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }

    useEffect(() => {
        props.setResponseScreen(false)
        if (props.endPoint === "Account Status Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/account-status-mobile`)
        } else if (props.endPoint === "Account Status Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/account-status-bank`)
        } else if (props.endPoint === "Ledger Balance") {
            navigate(`${process.env.REACT_APP_BASE_URL}/ledger`)
        } else if (props.endPoint === "Corridor Quotation") {
            navigate(`${process.env.REACT_APP_BASE_URL}/corridor-quotation`)
        } else if (props.endPoint === "Get Bank List") {
            navigate(`${process.env.REACT_APP_BASE_URL}/get-bank-list`)
        } else if (props.endPoint === "Create Quotation Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/create-quotation-mobile`)
        } else if (props.endPoint === "Create Quotation Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/create-quotation-bank`)
        } else if (props.endPoint === "Cancel Transaction") {
            navigate(`${process.env.REACT_APP_BASE_URL}/cancel-transaction`)
        } else if (props.endPoint === "Reverse Transaction") {
            navigate(`${process.env.REACT_APP_BASE_URL}/reverse-transaction`)
        } else if (props.endPoint === "View Transaction Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/view-transaction-bank`)
        } else if (props.endPoint === "View Transaction Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/view-transaction-mobile`)
        } else if (props.endPoint === "Create Transaction Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/create-transaction-bank`)
        } else if (props.endPoint === "Create Transaction Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/create-transaction-mobile`)
        } else if (props.endPoint === "B2B Transaction Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/b2b-transaction-bank`)
        } else if (props.endPoint === "B2B Transaction Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/b2b-transaction-mobile`)
        } else if (props.endPoint === "P2B Transaction Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/p2b-transaction-bank`)
        } else if (props.endPoint === "P2B Transaction Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/p2b-transaction-mobile`)
        } else if (props.endPoint === "B2P Transaction Bank") {
            navigate(`${process.env.REACT_APP_BASE_URL}/b2p-transaction-bank`)
        } else if (props.endPoint === "B2P Transaction Mobile") {
            navigate(`${process.env.REACT_APP_BASE_URL}/b2p-transaction-mobile`)
        } else {
            navigate("/")
        }
    }, [props.endPoint])

    const tryItOutHandler = () => {
        if(props.endPoint === "Account Status Mobile") {
            accountStatusMobileApi()
        } else if(props.endPoint === "Account Status Bank"){
            accountStatusBankApi();
        } else if(props.endPoint === "Cancel Transaction"){
            cancelTransactionApi();
        } else if (props.endPoint === "Get Bank List") {
            getBankListApi();
        }else if (props.endPoint === "Corridor Quotation") {
            corridorQuotationApi();
        }else if (props.endPoint === "Reverse Transaction") {
            reverseTransactionApi();
        }else if (props.endPoint === "Ledger Balance") {
            getLedgerBalanceApi();
        }else if (props.endPoint === "Create Quotation Bank") {
            createQuotationBankApi();
        }else if (props.endPoint === "Create Quotation Bank") {
            createQuotationMobileApi();
        }
    }

    /* console.log("asfadf", props.bankAccountStatusData) */



    function checkProperties(obj) {
        let local;
        Object.entries(obj).map((key) => {
            if (key[1] === '') {
                local = true
            }
        })
        if (!local) {
            return false
        } else {
            return true
        }
    }


    return (
        <Stack spacing={8} p={3} m={0} justifyContent='space-between' direction='row' sx={{ backgroundColor: '#223871' }}>
            <Stack width="20%" sx={{ marginRight: '150px' }} direction="column" justifyContent="center">
                <img src={terrapayLogo} alt="terrapayLogo" />
            </Stack>
            <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
                <FormControl>
                    <InputLabel
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                        }}
                        id="demo-simple-select-autowidth-label">
                        API End Point
                    </InputLabel>
                    <Select
                        sx={{
                            width: '100%', height: '40px',
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: 'white',
                            },
                            "& .MuiSvgIcon-root": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-input": {
                                color: 'white',
                            },
                            "& .MuiSelect-nativeInput": {
                                '&.Mui-focused': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                        value={props.endPoint}
                        onChange={({ target }) => props.setEndPoint(target.value)}
                        input={<OutlinedInput label="API End Point" />}
                        MenuProps={MenuProps}>
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
                        <MenuItem value='B2B Transaction Bank'>B2B Transaction Bank</MenuItem>
                        <MenuItem value='B2B Transaction Mobile'>B2B Transaction Mobile</MenuItem>
                        <MenuItem value='P2B Transaction Bank'>P2B Transaction Bank</MenuItem>
                        <MenuItem value='P2B Transaction Mobile'>P2B Transaction Mobile</MenuItem>
                        <MenuItem value='B2P Transaction Bank'>B2P Transaction Bank</MenuItem>
                        <MenuItem value='B2P Transaction Mobile'>B2P Transaction Mobile</MenuItem>
                    </Select>
                </FormControl>
                <OutlinedInput sx={{
                    height: 40, width: '100%',
                    "& .MuiOutlinedInput-input": {
                        color: 'white',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'white',
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                }} placeholder='Username' onChange={({ target }) => props.setuserName(target.value)} value={props.userName}
                />
            </Stack>
            <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
                <FormControl>
                    <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: 'white' }} >
                        Environment
                    </InputLabel>
                    <Select
                        sx={{
                            width: '100%', height: '40px',
                            "& .MuiSvgIcon-root": {
                                color: "white",
                            },
                            "& .MuiOutlinedInput-input": {
                                color: 'white',
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: 'white',
                                '&.Mui-focused': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                        value={props.environment}
                        onChange={({ target }) => props.setEnvironment(target.value)}
                        input={<OutlinedInput label="Environment" />} >
                        <MenuItem value='Sandbox'>Sandbox</MenuItem>
                        <MenuItem value='Production'>Production</MenuItem>
                    </Select>
                </FormControl>
                <OutlinedInput sx={{
                    height: 40, width: '100%',
                    "& .MuiOutlinedInput-input": {
                        color: 'white',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'white',
                        '&.Mui-focused': {
                            borderColor: 'white',
                        },
                    },
                }} placeholder='Password' onChange={({ target }) => props.setPassword(target.value)} value={props.password} />
            </Stack>
            <Stack width="20%" direction='column' >
                {/* {(props.endPoint==="Account Status Mobile" && props.mobileAccountStatusData.instrument && props.mobileAccountStatusData.bnv && props.mobileAccountStatusData.msisdn)?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="View Transaction Mobile")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getViewTransaction} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="Ledger Balance")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="Get Bank List")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>: */}

                {/* <CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={tryItOutHandler} >TRY IT OUT</CustomButtom> */}

                <CustomButtom sx={{ textAlign: 'center', minWidth: '180px', alignSelf: 'center', letterSpacing: 1, backgroundColor: '#ea5c57' }} variant='contained' disabled={checkProperties(props.headerObject)} onClick={tryItOutHandler}>TRY IT OUT</CustomButtom>
            </Stack>
        </Stack>
    )
}

export default TryitHeader