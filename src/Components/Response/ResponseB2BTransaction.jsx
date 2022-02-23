import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseB2BTransaction(props) {
  return (
    <>
    <Box height="100vh" display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"rgba(255, 255, 255, 1)", height:'100vh' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                    <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    curl --location --request POST  'https://uat-connect.terrapay.com:21211/eig/gsma/transactions'\
                    <br/>--header 'X-USERNAME:partneruat '\
                    <br/>--header 'X-PASSWORD: 101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b'\
                    <br/>--header 'X-DATE: 2018-03-12 09:00:00'\
                    <br/>--header 'X-ORIGINCOUNTRY:FR'\
                    <br/>--header 'Content-Type: application/json'\
                    <br/>--data--raw
                    {JSON.stringify({
                        "currency": "NGN",
                        "type": "b2b",
                        "requestDate": "2020-01-02 10:51:16",
                        "amount": "35500.00",
                        "descriptionText": "Gift for my brother",
                        "requestingOrganisationTransactionReference": "12345868378400387540",
                        "sendingAmount": "35500.00",
                        "payinCcyCode": "USD",
                        "provider": "23401",
                        "paymentMode": "cash",
                        "authenticationPartnerCode": "4534",
                        "paymentOption": "Mobile Wallet",
                        "sendingPartnerCode": "343432223",
                        "receivingPartnerCode": "343432223",
                        "debitParty": [
                        {
                            "key": "msisdn",
                            "value": "+4491509874561"
                        } 
                        ],
                            "creditParty": [
                        {
                            "key": "bankaccountno",
                            "value": "1976010126"
                        },
                        {
                            "key": "sortcode",
                            "value": "CITINGLA"
                        },
                        {
                            "key": "organisationid",
                            "value": "Citi Bank"
                        },
                        {
                            "key": "banksubcode",
                            "value": "0001"
                        },
                        {
                            "key": "bankBranchName",
                            "value": "Citi Bank"
                        },
                        {
                            "key": "accountName",
                            "value": "Rajesh"
                        },
                        {
                            "key": "accountIBAN",
                            "value": "GB29NWBK60161331926819"
                        },
                        {
                            "key": "accountAdditionalNo1",
                            "value": "2656915085434"
                        }
                        ],
                            "senderKyc": {
                    
                        },
                            "recipientKyc": {
                    
                        },
                            "internationalTransferInformation": {
                                "quoteId": "QT0FEO4OZZ28PLCA5",
                                "receivingCountry": "NG",
                                "remittancePurpose": "Advanced Goods Payments",
                                "sourceOfFunds": "Savings"
                        },
                        "business": {
                            "senderKyc": {
                                "businessName": "sample business",
                                "businessAddress1": "walton's road",
                                "businessAddressCity": "Lyon",
                                "businessAddressCountryCode": "US",
                                "businessPrimaryContactCountryCode": "US",
                                "businessPrimaryContactNo": "3472034605",
                                "businessDescription": "Electronics",
                                "businessCountryCode": "US",
                                "businessRegistrationType": "b2b",
                                "businessRegistrationNumber": "23123456789",
                                "businessRegistrationIssueDate": "2020-09-26",
                                "businessIDValidThru": "2033-09-26"
                            },
                            "recepientKyc": {
                                "businessName": "oyugi randy",
                                "businessPINCode": "123456",
                                "businessAddress1": "24",
                                "businessAddress2": "walton's road",
                                "businessAddressCity": "newyork",
                                "businessAddressState": "NYC",
                                "businessAddressCountryCode": "NG",
                                "businessAddressZip": "123456",
                                "businessPrimaryContactCountryCode": "NG",
                                "businessPrimaryContactNo": "232323212",
                                "businessPrimaryContactNoType": "Mobile",
                                "businessDescription": "Electronics wholesale",
                                "businessEmail": "rs.electronics@gmail.com",
                                "businessCountryCode": "NG",
                                "businessRegistrationType": "b2b",
                                "businessRegistrationNumber": "2312345678912",
                                "businessRegistrationIssuedBy": "NYC_TRADE",
                                "businessRegistrationIssuedAt": "NYC",
                                "businessRegistrationIssueDate": "2002-08-26",
                                "businessIDValidThru": "2036-09-26",
                                "typeofbusiness": "Electronics",
                                "businessPObox": "12345",
                                "businessMobile": "343234433"
                            }
                        }   
                    })}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseB2BTransaction