import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import ReactJson from 'react-json-view'
import { config } from '../../../assets/config/config'
const apiUrl = config.api.url;



function ResponseCreateTransactionBank(props) {
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
    {!props.responseScreen?<Box sx={{height:"100%"}} display="flex" flexDirection="column" color="white">
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
                            <StyledReactJsonContainer sx={{paddingBottom:"50px"}}>
                            <ReactJson 
                            collapseStringsAfterLength={25}
                            name={false}
                            src={{
                                method: 'post',
                                url: `${apiUrl}/transactions`,
                                headers: { 
                                    'X-USERNAME': 'OpenTurfDev', 
                                    'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                    'X-DATE': '2018-04-04 09:27:16', 
                                    'X-ORIGINCOUNTRY': 'US', 
                                    'Content-Type': 'text/plain'
                                },
                                data : {  "amount": "500",  "currency": "INR",  "type": "inttransfer",  "descriptionText": "Gift for my brother",  "requestDate": "2021-05-23 08:19:36",  "requestingOrganisationTransactionReference": "SrcTxnId002",  "debitParty": [    {      "key": "msisdn",      "value": "+971810456234"    }  ],  "creditParty": [    {      "key": "bankaccountno",      "value": "50100002965304"    },    {      "key": "organisationid",      "value": "HDFC Bank"    },    {      "key": "sortcode",      "value": "HDFC0001626"    }  ],  "senderKyc": {    "nationality": "AE",    "dateOfBirth": "1967-05-28",    "gender": "M",    "idDocument": [      {        "idType": "VOTER_CARD",        "idNumber": "13321115521",        "issueDate": "1967-05-28",        "expiryDate": "2067-05-28",        "issuerCountry": "AE"      }    ],    "postalAddress": {      "addressLine1": "49 , park street",      "addressLine2": "12",      "addressLine3": "12",      "city": "12",      "stateProvince": "12",      "postalCode": "50000",      "country": "US"    },    "subjectName": {      "firstName": "Test",      "middleName": "",      "lastName": "Sender2",      "fullName": "Test Sender2"    }  },    "recipientKyc": {    "subjectName": {      "firstName": "Deepa",      "lastName": "Jain",      "fullName": "Deepa Jain"    }  },  "internationalTransferInformation": {    "quoteId": "QR037C1NA6ZXBSQ88B",    "receivingCountry": "IN",    "remittancePurpose": "Family Maintainance",    "sourceOfFunds": "Salary",    "relationshipSender": "Brother"  }}
                                }} 
                                />
                        </StyledReactJsonContainer>
                        </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>:<Box sx={{height:"100%"}} display="flex" flexDirection="column" color="white">
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
                {!props.allowUatAccess?
                    <StyledReactJsonContainer sx={{paddingBottom:"50px"}}>
                        <ReactJson 
                            collapseStringsAfterLength={25}
                            name={false}
                            src={{
                              "amount": "100000.01",
                              "currency": "NGN",
                              "type": "inttransfer",
                              "requestDate": "2017-03-20T06:19:36.969Z",
                              "requestingOrganisationTransactionReference": "partnerRefId1234",
                              "debitParty": [
                                {
                                  "key": "msisdn",
                                  "value": "+33472034605"
                                }
                              ],
                              "creditParty": [
                                {
                                  "key": "msisdn",
                                  "value": "+23410706056"
                                }
                              ],
                              "transactionStatus": "3000:Remit Success",
                              "transactionReference": "TPKM000000056269"
                            }} />
                    </StyledReactJsonContainer>:
                    <StyledReactJsonContainer sx={{paddingBottom:"50px"}}>
                        {props.apiResponseData && 
                            <ReactJson 
                            collapseStringsAfterLength={25}
                            name={false}
                            src={props.apiResponseData} 
                        />}
                    </StyledReactJsonContainer>
                }
            </Stack>:
            <Stack p={3} color="#20336d">
                <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >Headers</Typography>
                    <Typography fontSize={16} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    {!props.allowUatAccess?
                        <StyledReactJsonContainer>
                            <ReactJson 
                                collapseStringsAfterLength={25}
                                name={false}
                                src={{ 
                                    'X-USERNAME': 'OpenTurfDev', 
                                    'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                    'X-DATE': '2018-04-04T09:27:16.000Z', 
                                    'X-ORIGINCOUNTRY': 'US', 
                                    'Accept': 'application/json'
                                    }} />
                        </StyledReactJsonContainer>:
                        <StyledReactJsonContainer>
                            {props.apiResponseHeaderData && <ReactJson 
                            collapseStringsAfterLength={25}
                            name={false}
                            src={props.apiResponseHeaderData} />}
                        </StyledReactJsonContainer>
                    }
                    </Typography>
            </Stack>}
        </Stack>
    </Box>
</Box>}
    </>
  )
}

export default ResponseCreateTransactionBank