import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import ReactJson from 'react-json-view'

function ResponseB2PTransactionBank(props) {
    const [headerTab, setHeaderTab] = useState(false)
    const [bodyTab, setBodyTab] = useState(true)

    const onHeaderButtonClick=()=>{
        setBodyTab(false)
        setHeaderTab(true)
    }
    const onBodyButtonClick=()=>{
        setHeaderTab(false)
        setBodyTab(true)
    }
    const StyledReactJsonContainer = styled('div')`
    .string-value {
        color:#E4302A !important;
        }
    .data-type-label{
        color:#E4302A !important;
    }
    .object-key{
        font-weight:550;
        color:#20336d !important;
    }
    .node-ellipsis{
        color:#E4302A !important;
    }`
    const CustomButtom = styled(Button)`
    &.Mui-disabled{
    opacity:0.5;
    color:white
    }&:hover {
        background-color: #E4302A;
    }`


  return (
    <>
    {!props.responseScreen?<Box sx={{ height:'100%' }} display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"#f8fcff", minHeight:'100%' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                        <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                            <StyledReactJsonContainer>
                            <ReactJson 
                            collapseStringsAfterLength={25}
                            name={false}
                            src={{
                                method: 'post',
                                url: 'https://uat-connect.terrapay.com:21211/eig/gsma/transactions',
                                headers: { 
                                    'X-USERNAME': 'OpenTurfDev', 
                                    'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                    'X-DATE': '2018-04-04 09:27:16', 
                                    'X-ORIGINCOUNTRY': 'US', 
                                    'Content-Type': 'text/plain'
                                },
                                data : {
                                    "amount": "500",
                                    "currency": "INR",
                                    "type": "b2p",
                                    "descriptionText": "Gift for my brother",
                                    "requestDate": "2021-05-23 08:19:36",
                                    "requestingOrganisationTransactionReference": "SrcTxnId003",
                                    "debitParty": [
                                      {
                                        "key": "msisdn",
                                        "value": "+971810456234"
                                      }
                                    ],
                                    "creditParty": [
                                      {
                                        "key": "bankaccountno",
                                        "value": "50100002965304"
                                      },
                                      {
                                        "key": "organisationid",
                                        "value": "HDFC Bank"
                                      },
                                      {
                                        "key": "sortcode",
                                        "value": "HDFC0001626"
                                      }
                                    ],
                                    "senderKyc": {},
                                    "recipientKyc": {
                                      "subjectName": {
                                        "firstName": "Deepa",
                                        "lastName": "Jain",
                                        "fullName": "Deepa Jain"
                                      }
                                    },
                                    "sendingAmount": "35500.00",
                                    "payinCcyCode": "USD",
                                    "paymentMode": "cash",
                                    "authenticationPartnerCode": "4534",
                                    "paymentOption": "Mobile Wallet",
                                    "sendingPartnerCode": "343432223",
                                    "receivingPartnerCode": "343432223",
                                    "business": {
                                      "senderKyc": {
                                        "businessName": "sample business",
                                        "businessAddress1": "alton's road",
                                        "businessAddressCity": "Lyon",
                                        "businessAddressCountryCode": "US",
                                        "businessPrimaryContactCountryCode": "US",
                                        "businessPrimaryContactNo": "3472034605",
                                        "businessDescription": "Electronics",
                                        "businessCountryCode": "US",
                                        "businessRegistrationType": "Private Limited Company",
                                        "businessRegistrationNumber": "23123456789",
                                        "businessRegistrationIssueDate": "2001-09-26",
                                        "businessIDValidThru": "2033-09-26",
                                        "businessEmail": "test@testemail.com"
                                      },
                                      "recepientKyc": {}
                                    },
                                    "internationalTransferInformation": {
                                      "quoteId": "QR037C1NZWQLJ42P1F",
                                      "receivingCountry": "IN",
                                      "remittancePurpose": "Business Travel",
                                      "sourceOfFunds": "Business Income",
                                      "relationshipSender": "Employer"
                                    }
                                  }}} 
                                />
                        </StyledReactJsonContainer>
                        </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>:<Box sx={{ height:'100%' }} display="flex" flexDirection="column" color="white">
    <Box flex={1}>
        <Stack p={3} m={0} justifyContent='space-between' direction='row' sx={{backgroundColor:"#22387198"}}>
            <Stack justifyContent='left'  direction='row' spacing={4}>
                <CustomButtom  sx={bodyTab?{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}:{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#eb5e5780'}} variant='contained' onClick={onBodyButtonClick} >BODY</CustomButtom>
                <CustomButtom  sx={headerTab?{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}:{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#eb5e5780'}} variant='contained' onClick={onHeaderButtonClick} >HEADERS</CustomButtom>
            </Stack>
            <Stack justifyContent='left'  direction='row'>
                <Typography variant='h6' fontFamily='Poppins' fontWeight='500' ></Typography>
            </Stack>
        </Stack>
        <Stack sx={{backgroundColor:"#f8fcff", minHeight:'100%' }}>
        {bodyTab?<Stack p={3} color="#20336d">
                <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >Response JSON</Typography>
                    <StyledReactJsonContainer>
                    <ReactJson 
                    collapseStringsAfterLength={25}
                    name={false}
                    src={props.apiResponseData} /></StyledReactJsonContainer>
            </Stack>:
            <Stack p={3} color="#20336d">
                <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >Headers</Typography>
                    <Typography fontSize={16} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    <StyledReactJsonContainer>
                    <ReactJson 
                    collapseStringsAfterLength={25}
                    name={false}
                    src={props.apiResponseHeaderData} /></StyledReactJsonContainer>
                    </Typography>
            </Stack>}
        </Stack>
    </Box>
</Box>}
    </>
  )
}

export default ResponseB2PTransactionBank