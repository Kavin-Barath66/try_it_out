import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import './tryitHeader.css'
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
import {requestBodyData, quotationRequestBodyData} from '../../Utils/FilterParams'
import { options } from 'joi';
const apiUrl = config.api.url;



const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 400,
        },
    },
};

/* function requestBodyData1 () {
  var data={
    "amount": "100000.01",
    "currency": "NGN",
    "type": "",
    "descriptionText": "Gift for my brother",
    "requestDate": "2017-03-20T06:19:36.969Z",
    "requestingOrganisationTransactionReference": "partnerRefId1234",
    "provider": "23401",
      "debitParty": [
     {
       "key": "msisdn",
       "value": ""
     } 
     ],
   "creditParty": [
     {
       "key": "msisdn",
       "value": "+23410706056"
     }
   ],
   "senderKyc": {
     "nationality": "",
     "dateOfBirth": "1986-06-28",
     "gender": "M",
     "idDocument": [
       {
         "idType": "",
         "idNumber": "123456789",
         "issueDate": "2003-09-26",
         "expiryDate": "2033-09-26",
         "issuerCountry": "FR"
       }
     ],
     "postalAddress": {
       "addressLine1": "",
       "addressLine2": "park street",
       "addressLine3": "walton's road",
       "city": "Lyon",
       "stateProvince": "Lyon",
       "postalCode": "",
       "country": "FR"
       },
     "subjectName": {
       "title": "Mr.",
       "firstName": "Einstein",
       "middleName": "",
       "lastName": "Bela",
       "fullName": "Einstien James Bela"
     }
   },
   "recipientKyc":{
     "nationality": "",
     "dateOfBirth": "1986-06-28",
     "idDocument": [
           {
         "idType": "",
         "idNumber": "123456789",
         "issueDate": "2003-09-26",
         "expiryDate": "2033-09-26",
         "issuerCountry": "FR"
           }
     ],
     "postalAddress": {
       "addressLine1": "49 ",
       "addressLine2": "park street",
       "addressLine3": "walton's road",
       "city": "Lyon",
       "stateProvince": "Lyon",
       "postalCode": "123456",
       "country": "FR"
     },
     "subjectName": {
       "title": "Mr.",
       "firstName": "Einstein",
       "middleName": "James",
       "lastName": "Bela",
       "fullName": "Einstien James Bela"
     }
   },
   "internationalTransferInformation": {
     "quoteId": "QT037fQXs3LGWXea4",
     "receivingCountry": "NG",
     "remittancePurpose": "Gift",
     "sourceOfFunds": "Salary",
     "relationshipSender": "Brother"
   }
 }
  var data1=[
        {
            "sendingCurrency": "USD",
            "receivingCurrency": "NPR"
        },
        {
          "sdsf": "USD",
          "adfadf": "NPR"
        }
    ]
  debugger
  for (var propName in data) {
    if (Array.isArray(data[propName])) {
      data[propName]&&data[propName].map((item)=>{
        for(var propName2 in item){
          let propSymb = Object.keys(item).length==2;
          if(propSymb && item.hasOwnProperty('key') && item.hasOwnProperty('value')){
            delete item['key'];
            delete item['value'];
          }
          if (!item[propName2]) {
            delete item[propName2];
          }
        }
      })
    } 
    if (!data[propName]) {
      delete data[propName];
    }
  }
  console.log("sdfdaf", data)
    return data
}
  requestBodyData1()
 */
























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
      var requestUrl = `${apiUrl}/v1/try-it/ledger-balance?`;
      var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.get(requestUrl 
          +(props.ledgerBalanceData.currency && `currency=${props.ledgerBalanceData.currency}`)
          , { headers: options.headers },
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
        .catch(function (error) {
            console.log(error);
            props.setApiResponseData(error.response.data)
            props.setResponseScreen(true)
            props.setApiResponseHeaderData(options.headers)
        })
    }


    const cancelTransactionApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        let requestBodyDataInfo = {
          "reason": `${props.cancelTransactionData.reason}`,
          "txnId": `${props.cancelTransactionData.txId}`,
        }
        const requestBody = requestBodyData(requestBodyDataInfo)
        axios.post(`${apiUrl}/v1/try-it/cancel-transaction`,
        requestBody,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setResponseScreen(true)
                props.setApiResponseHeaderData(options.headers)
            });
    }
    const reverseTransactionApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        let requestBodyDataInfo = {
          "reversalReason": `${props.reverseTransactionData.reason}`,
          "txnId": `${props.reverseTransactionData.txId}`,
        }
        const requestBody = requestBodyData(requestBodyDataInfo)
        axios.post(`${apiUrl}/v1/try-it/reverse-transaction`,
        requestBody,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setResponseScreen(true)
                props.setApiResponseHeaderData(options.headers)
            });
    }

    const getViewTransaction = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
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
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }

    const accountStatusBankApi = () => {
        var requestUrl=`${apiUrl}/v1/try-it/account-status?accountId=${props.bankAccountStatusData.accountId}&bnv=${props.bankAccountStatusData.bnv}&bankcode=${props.bankAccountStatusData.bankCode}&bankname=${encodeURIComponent(props.bankAccountStatusData.bankName)}&country=${props.bankAccountStatusData.country}`;
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD': `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.get(requestUrl 
          +(props.bankAccountStatusData.snv && `&senderName=${props.bankAccountStatusData.snv}`)
          +(props.bankAccountStatusData.msisdn && `&msisdn=${encodeURIComponent(props.bankAccountStatusData.msisdn)}`)
          +(props.bankAccountStatusData.provider && `&provider=${props.bankAccountStatusData.provider}`)
          +(props.bankAccountStatusData.bankSubCode && `&bankSubCode=${props.bankAccountStatusData.bankSubCode}`)
          ,{ headers: options.headers })
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const accountStatusMobileApi = () => {
      var requestUrl=`${apiUrl}/v1/try-it/account-status?msisdn=${encodeURIComponent(props.mobileAccountStatusData.msisdn)}&bnv=${encodeURIComponent(props.mobileAccountStatusData.bnv)}`;
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.get(requestUrl 
            +(props.mobileAccountStatusData.provider && `&provider=${props.mobileAccountStatusData.provider}`)
            +(props.mobileAccountStatusData.snv && `&senderName=${encodeURIComponent(props.mobileAccountStatusData.snv)}`)
            ,{ headers: options.headers})
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
          .catch(function (error) {
              props.setApiResponseData(error.response.data)
              props.setApiResponseHeaderData(options.headers)
              props.setResponseScreen(true)
          });
    }
    const getBankListApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.get(`${apiUrl}/v1/try-it/bank-list?countryCode=${props.getBankListData.country}`,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                console.log(error.data);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const corridorQuotationApi = () => {
      var requestUrl =`${apiUrl}/v1/try-it/quotation?`
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.get(requestUrl 
          +(props.corridorQuotationData.currency && `currency=${props.corridorQuotationData.currency}`)
        ,{ headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createQuotationBankApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        let requestBodyDataInfo ={
          "requestDate": `${props.createQuotationBank.requestDate}`,
          "debitParty": [
            {
              "key": "msisdn",
              "value": `${props.createQuotationBank.senderMsisdn}`,
            }
          ],
          "creditParty": [
            {
              "key": "msisdn",
              "value": `${props.createQuotationBank.receiverMsisdn}`
            },
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
      }
      const requestBody = quotationRequestBodyData(requestBodyDataInfo)
        axios.post(`${apiUrl}/v1/try-it/quotation`,
        requestBody,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createQuotationMobileApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        let requestBodyDataInfo = {
            "requestDate": `${props.createQuotationMobileData.requestDate}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value": `${props.createQuotationMobileData.senderMsisdn}`,
              }
            ],
            "creditParty": [
                {
                    "key": "msisdn",
                    "value": `${props.createQuotationMobileData.reciverMsisdn}`
                },
                {
                  "key": "bankaccountno",
                  "value": `${props.createQuotationMobileData.receiverBankaccountno}`
                },
                {
                  "key": "receivingCountry",
                  "value": `${props.createQuotationMobileData.receiverCountry}`
                },
            ],
            "requestAmount": `${props.createQuotationMobileData.requestAmount}`,
            "requestCurrency": `${props.createQuotationMobileData.requestCurrency}`,
            "quotes": [
                {
                    "sendingCurrency": `${props.createQuotationMobileData.sendingCurrency}`,
                    "receivingCurrency": `${props.createQuotationMobileData.receivingCurrency}`
                }
            ]
        }
        const requestBody = quotationRequestBodyData(requestBodyDataInfo)
        axios.post(`${apiUrl}/v1/try-it/quotation`,
        requestBody,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const viewTransactionBankApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction?transactionReference=${props.viewTransactionBankData.transRef}`,
        {},
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const viewTransactionMobileApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction?transactionReference=${props.viewTransactionMobileData.transRef}`,
        {},
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createTransactionBankApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        let requestBodyDataInfo={
        "amount": `${props.createTransactionBankData.amount}`,
        "currency": `${props.createTransactionBankData.currency}`,
        "type": `${props.createTransactionBankData.type}`,
        "descriptionText": `${props.createTransactionBankData.descriptionText}`,
        "requestDate": `${props.createTransactionBankData.requestDate}`,
        "requestingOrganisationTransactionReference": `${props.createTransactionBankData.transRef}`,
        /* "provider": `${props.createTransactionBankData.provider}`, */  
          "debitParty": [
         {
           "key": "msisdn",
           "value": `${encodeURIComponent(props.createTransactionBankData.senderMsisd)}`
         }
       ],
       "creditParty": [
        {
          "key": "bankaccountno",
          "value": `${props.createTransactionBankData.receiverBankaccountno}`
        },
        {
          "key": "organisationid",
          "value": `${props.createTransactionBankData.receiverBankName}`
        },
        {
          "key": "sortcode",
          "value":`${props.createTransactionBankData.receiverBankCode}`
        },
         /* {
           "key": "accounttype",
           "value": `${props.createTransactionBankData.receiverBankAccountType}`
         }, */
         {
           "key": "banksubcode",
           "value": `${props.createTransactionBankData.bankSubCode}`
         },
         {
           "key": "msisdn",
           "value": `${encodeURIComponent(props.createTransactionBankData.receiverMsisdn)}`
         }
       ],
       "senderKyc": {
         "nationality": `${props.createTransactionBankData.senderNationality}`,
         "dateOfBirth": `${props.createTransactionBankData.senderDateOfBirth}`,
         "gender": `${props.createTransactionBankData.senderGender}`,
         "idDocument": [
           {
             "idType": `${props.createTransactionBankData.idType}`,
             "idNumber":`${props.createTransactionBankData.idNumber}`,
             "issueDate": `${props.createTransactionBankData.issueDate}`,
             "expiryDate": `${props.createTransactionBankData.expiryDate}`,
             "issuerCountry":`${props.createTransactionBankData.issuerCountry}`
           }
         ],
         "postalAddress": {
           "addressLine1": `${props.createTransactionBankData.addressLine1}`,
           "addressLine2": `${props.createTransactionBankData.addressLine2}`,
           "addressLine3": `${props.createTransactionBankData.addressLine3}`,
           "city": `${props.createTransactionBankData.city}`,
           "stateProvince": `${props.createTransactionBankData.stateProvince}`,
           "postalCode": `${props.createTransactionBankData.postalCode}`,
           "country": `${props.createTransactionBankData.country}`
         },
         "subjectName": {
          /*  "title": `${props.createTransactionBankData.senderTitle}`, */
           "firstName": `${props.createTransactionBankData.firstName}`,
           "middleName": `${props.createTransactionBankData.middleName}`,
           "lastName": `${props.createTransactionBankData.lastName}`,
           "fullName":`${props.createTransactionBankData.firstName+" "+props.createTransactionBankData.lastName}`
         }
       },
       "recipientKyc": {
         "nationality": `${props.createTransactionBankData.receiverNationality}`,
         "dateOfBirth": `${props.createTransactionBankData.receiverDOB}`,
         "idDocument": [
           {
             "idType": `${props.createTransactionBankData.receiverIdType}`,
             "idNumber": `${props.createTransactionBankData.receiverIdNumber}`,
             "issueDate": `${props.createTransactionBankData.receiverIssueDate}`,
             "expiryDate": `${props.createTransactionBankData.receiverExpiryDate}`,
             "issuerCountry": `${props.createTransactionBankData.receiverIssuerCountry}`
           }
         ],
         "postalAddress": {
           "addressLine1": `${props.createTransactionBankData.receiverAddressLine1}`,
           "addressLine2": `${props.createTransactionBankData.receiverAddressLine2}`,
           "addressLine3": `${props.createTransactionBankData.receiverAddressLine3}`,
           "city": `${props.createTransactionBankData.receiverCity}`,
           "stateProvince": `${props.createTransactionBankData.receiverState}`,
           "postalCode": `${props.createTransactionBankData.receiverPostalCode}`,
           "country": `${props.createTransactionBankData.receiverCountry}`
         },
         "subjectName": {
           "firstName": `${props.createTransactionBankData.receiverFirstName}`,
           "lastName": `${props.createTransactionBankData.receiverLastName}`,
           "fullName": `${props.createTransactionBankData.receiverFirstName+" "+props.createTransactionBankData.receiverLastName}`
         }
       },
       "internationalTransferInformation": {
         "quoteId": `${props.createTransactionBankData.quoteId}`,
         "receivingCountry": `${props.createTransactionBankData.receivingCountry}`,
         "remittancePurpose": `${props.createTransactionBankData.remittancePurpose}`,
         "sourceOfFunds": `${props.createTransactionBankData.sourceOfFunds}`,
         "relationshipSender": `${props.createTransactionBankData.relationshipSender}`
       }
     }
     /* const requestBody = requestBodyData(requestBodyDataInfo) */
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        requestBodyDataInfo,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const createTransactionMobileApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        let requestBodyDataInfo={
          "amount": `${props.createTransactionMobileData.amount}`,
          "currency": `${props.createTransactionMobileData.currency}`,
          "type": `${props.createTransactionMobileData.type}`,
          "descriptionText": `${props.createTransactionMobileData.descriptionText}`,
          "requestDate": `${props.createTransactionMobileData.requestDate}`,
          "requestingOrganisationTransactionReference": `${props.createTransactionMobileData.transRef}`,
          "provider": `${props.createTransactionMobileData.providerCode}`,
          "debitParty": [
              {
                  "key": "msisdn",
                  "value": `${props.createTransactionMobileData.senderMsisdn}`
              }
          ],
          "creditParty": [
              {
                  "key": "msisdn",
                  "value":`${props.createTransactionMobileData.receiverMsisdn}`
              }
          ],
          "senderKyc": {
              "nationality": `${props.createTransactionMobileData.nationality}`,
              "dateOfBirth": `${props.createTransactionMobileData.dateOfBirth}`,
              "gender": `${props.createTransactionMobileData.gender}`,
              "idDocument": [
                  {
                      "idType": `${props.createTransactionMobileData.idType}`,
                      "idNumber": `${props.createTransactionMobileData.idNumber}`,
                      "issueDate": `${props.createTransactionMobileData.issueDate}`,
                      "expiryDate": `${props.createTransactionMobileData.expiryDate}`,
                      "issuerCountry": `${props.createTransactionMobileData.issuerCountry}`
                  }
              ],
              "postalAddress": {
                  "addressLine1": `${props.createTransactionMobileData.addressLine1}`,
                  "addressLine2": `${props.createTransactionMobileData.addressLine2}`,
                  "addressLine3": `${props.createTransactionMobileData.addressLine3}`,
                  "city":`${props.createTransactionMobileData.city}`,
                  "stateProvince": `${props.createTransactionMobileData.stateProvince}`,
                  "postalCode": `${props.createTransactionMobileData.postalCode}`,
                  "country": `${props.createTransactionMobileData.country}`
              },
              "subjectName": {
                  "title":  `${props.createTransactionMobileData.senderTitle}`,
                  "firstName":  `${props.createTransactionMobileData.firstName}`,
                  "middleName": `${props.createTransactionMobileData.middleName}`,
                  "lastName":  `${props.createTransactionMobileData.lastName}`,
                  "fullName":  `${!props.createTransactionMobileData.middleName?props.createTransactionMobileData.firstName+" "+props.createTransactionMobileData.lastName
                    :props.createTransactionMobileData.middleName? props.createTransactionMobileData.firstName+" "+props.createTransactionMobileData.middleName+" "+props.createTransactionMobileData.lastName:null}`,
              }
          },
          "recipientKyc": {
              "nationality": `${props.createTransactionMobileData.receiverNationality}`,
              "dateOfBirth": `${props.createTransactionMobileData.receiverDOB}`,
              "idDocument": [
                  {
                      "idType": `${props.createTransactionMobileData.receiverIdType}`,
                      "idNumber": `${props.createTransactionMobileData.receiverIdNumber}`,
                      "issueDate": `${props.createTransactionMobileData.receiverIssueDate}`,
                      "expiryDate": `${props.createTransactionMobileData.receiverExpiryDate}`,
                      "issuerCountry": `${props.createTransactionMobileData.receiverIssuerCountry}`
                  }
              ],
              "postalAddress": {
                  "addressLine1": `${props.createTransactionMobileData.receiverAddressLine1}`,
                  "addressLine2": `${props.createTransactionMobileData.receiverAddressLine2}`,
                  "addressLine3": `${props.createTransactionMobileData.receiverAddressLine3}`,
                  "city": `${props.createTransactionMobileData.receiverCity}`,
                  "stateProvince": `${props.createTransactionMobileData.receiverState}`,
                  "postalCode": `${props.createTransactionMobileData.receiverPostalCode}`,
                  "country": `${props.createTransactionMobileData.receiverCountry}`
              },
              "subjectName": {
                  "title": `${props.createTransactionMobileData.receiverTitle}`,
                  "firstName": `${props.createTransactionMobileData.receiverFirstName}`,
                  "middleName": `${props.createTransactionMobileData.receiverMiddleName}`,
                  "lastName": `${props.createTransactionMobileData.receiverLastName}`,
                  "fullName": `${!props.createTransactionMobileData.receiverMiddleName? props.createTransactionMobileData.receiverFirstName+" "+props.createTransactionMobileData.receiverLastName:
                                  props.createTransactionMobileData.receiverMiddleName? props.createTransactionMobileData.receiverFirstName+" "+props.createTransactionMobileData.receiverMiddleName+" "+props.createTransactionMobileData.receiverLastName:null}`,
              }
          },
          "internationalTransferInformation": {
              "quoteId": `${props.createTransactionMobileData.quoteId}`,
              "receivingCountry": `${props.createTransactionMobileData.receivingCountry}`,
              "remittancePurpose": `${props.createTransactionMobileData.remittancePurpose}`,
              "sourceOfFunds":`${props.createTransactionMobileData.sourceOfFunds}`,
              "relationshipSender": `${props.createTransactionMobileData.relationshipSender}`
          }
      }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        requestBodyDataInfo,
        { headers: options.headers }
        ).then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const bankTransactionB2BApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
         if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.bankTransactionB2BData.amount}`,
            "currency": `${props.bankTransactionB2BData.currency}`,
            "type": `${props.bankTransactionB2BData.type}`,
            "descriptionText": `${props.bankTransactionB2BData.descriptionText}`,
            "requestDate": `${props.bankTransactionB2BData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.bankTransactionB2BData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value": `${props.bankTransactionB2BData.senderMsisdn}`
              }
            ],
            "creditParty": [
              {
                "key": "bankaccountno",
                "value": `${props.bankTransactionB2BData.receiverBankaccountno}`
              },
              {
                "key": "organisationid",
                "value": `${props.bankTransactionB2BData.receiverBankName}`
              },
              {
                "key": "sortcode",
                "value": `${props.bankTransactionB2BData.receiverBankCode}`
              }
            ],
            "senderKyc": {},
            "recipientKyc": {},
            "sendingAmount": `${props.bankTransactionB2BData.sendingAmount}`,
            "payinCcyCode": `${props.bankTransactionB2BData.payinCcyCode}`,
            "paymentMode": `${props.bankTransactionB2BData.paymentMode}`,
            "authenticationPartnerCode": `${props.bankTransactionB2BData.authenticationPartnerCode}`,
            "paymentOption": `${props.bankTransactionB2BData.paymentOption}`,
            "sendingPartnerCode": `${props.bankTransactionB2BData.sendingPartnerCode}`,
            "receivingPartnerCode": `${props.bankTransactionB2BData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {
                "businessName": `${props.bankTransactionB2BData.senderBusinessName}`,
                "businessAddress1": `${props.bankTransactionB2BData.senderBusinessAddress1}`,
                "businessAddressCity": `${props.bankTransactionB2BData.senderBusinessAddressCity}`,
                "businessAddressCountryCode": `${props.bankTransactionB2BData.senderBusinessAddressCountryCode}`,
                "businessPrimaryContactCountryCode": `${props.bankTransactionB2BData.senderBusinessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.bankTransactionB2BData.senderBusinessPrimaryContactNo}`,
                "businessDescription": `${props.bankTransactionB2BData.senderBusinessDescription}`,
                "businessCountryCode": `${props.bankTransactionB2BData.senderBusinessCountryCode}`,
                "businessRegistrationType": `${props.bankTransactionB2BData.senderBusinessRegistrationType}`,
                "businessRegistrationNumber": `${props.bankTransactionB2BData.senderBusinessRegistrationNumber}`,
                "businessRegistrationIssueDate": `${props.bankTransactionB2BData.senderBusinessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.bankTransactionB2BData.senderBusinessIDValidThru}`,
                "businessEmail": `${props.bankTransactionB2BData.senderBusinessEmail}`
              },
              "recepientKyc": {
                "businessName": `${props.bankTransactionB2BData.recepientBusinessName}`,
                "businessPINCode": `${props.bankTransactionB2BData.recepientBusinessPINCode}`,
                "businessAddress1": `${props.bankTransactionB2BData.recepientBusinessAddress1}`,
                "businessAddress2": `${props.bankTransactionB2BData.recepientBusinessAddress2}`,
                "businessAddressCity": `${props.bankTransactionB2BData.recepientBusinessAddressCity}`,
                "businessAddressState": `${props.bankTransactionB2BData.recepientBusinessAddressState}`,
                "businessAddressCountryCode": `${props.bankTransactionB2BData.recepientBusinessAddressCountryCode}`,
                "businessAddressZip": `${props.bankTransactionB2BData.recepientBusinessAddressZip}`,
                "businessPrimaryContactCountryCode": `${props.bankTransactionB2BData.recepientBusinessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.bankTransactionB2BData.recepientBusinessPrimaryContactNo}`,
                "businessPrimaryContactNoType": `${props.bankTransactionB2BData.recepientBusinessPrimaryContactNoType}`,
                "businessDescription": `${props.bankTransactionB2BData.recepientBusinessDescription}`,
                "businessEmail": `${props.bankTransactionB2BData.recepientBusinessEmail}`,
                "businessCountryCode": `${props.bankTransactionB2BData.recepientBusinessCountryCode}`,
                "businessRegistrationType": `${props.bankTransactionB2BData.recepientBusinessRegistrationType}`,
                "businessRegistrationNumber": `${props.bankTransactionB2BData.recepientBusinessRegistrationNumber}`,
                "businessRegistrationIssuedBy": `${props.bankTransactionB2BData.recepientBusinessRegistrationIssuedBy}`,
                "businessRegistrationIssuedAt": `${props.bankTransactionB2BData.recepientBusinessRegistrationIssuedAt}`,
                "businessRegistrationIssueDate": `${props.bankTransactionB2BData.recepientBusinessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.bankTransactionB2BData.recepientBusinessIDValidThru}`,
                "typeofbusiness": `${props.bankTransactionB2BData.recepientBypeofbusiness}`,
                "businessPObox": `${props.bankTransactionB2BData.recepientBusinessPObox}`,
                "businessMobile": `${props.bankTransactionB2BData.recepientBusinessMobile}`
              }
            },
            "internationalTransferInformation": {
              "quoteId": `${props.bankTransactionB2BData.quoteId}`,
              "receivingCountry": `${props.bankTransactionB2BData.receivingCountry}`,
              "remittancePurpose": `${props.bankTransactionB2BData.remittancePurpose}`,
              "sourceOfFunds": `${props.bankTransactionB2BData.sourceOfFunds}`,
              "relationshipSender": `${props.bankTransactionB2BData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }


    const mobileTransactionB2BApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.mobileTransactionB2BData.amount}`,
            "currency": `${props.mobileTransactionB2BData.currency}`,
            "type": `${props.mobileTransactionB2BData.type}`,
            "descriptionText": `${props.mobileTransactionB2BData.descriptionText}`,
            "requestDate": `${props.mobileTransactionB2BData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.mobileTransactionB2BData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value": `${props.mobileTransactionB2BData.senderMsisdn}`
              }
            ],
            "creditParty": [
                {
                    "key": "msisdn",
                    "value": `${props.mobileTransactionB2BData.receiverMsisdn}`
                }
            ],
            "senderKyc": {},
            "recipientKyc": {},
            "sendingAmount": `${props.mobileTransactionB2BData.sendingAmount}`,
            "payinCcyCode": `${props.mobileTransactionB2BData.payinCcyCode}`,
            "paymentMode": `${props.mobileTransactionB2BData.paymentMode}`,
            "authenticationPartnerCode": `${props.mobileTransactionB2BData.authenticationPartnerCode}`,
            "paymentOption": `${props.mobileTransactionB2BData.paymentOption}`,
            "sendingPartnerCode": `${props.mobileTransactionB2BData.sendingPartnerCode}`,
            "receivingPartnerCode": `${props.mobileTransactionB2BData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {
                "businessName": `${props.mobileTransactionB2BData.senderBusinessName}`,
                "businessAddress1": `${props.mobileTransactionB2BData.senderBusinessAddress1}`,
                "businessAddressCity": `${props.mobileTransactionB2BData.senderBusinessAddressCity}`,
                "businessAddressCountryCode": `${props.mobileTransactionB2BData.senderBusinessAddressCountryCode}`,
                "businessPrimaryContactCountryCode": `${props.mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.mobileTransactionB2BData.senderBusinessPrimaryContactNo}`,
                "businessDescription": `${props.mobileTransactionB2BData.senderBusinessDescription}`,
                "businessCountryCode": `${props.mobileTransactionB2BData.senderBusinessCountryCode}`,
                "businessRegistrationType": `${props.mobileTransactionB2BData.senderBusinessRegistrationType}`,
                "businessRegistrationNumber": `${props.mobileTransactionB2BData.senderBusinessRegistrationNumber}`,
                "businessRegistrationIssueDate": `${props.mobileTransactionB2BData.senderBusinessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.mobileTransactionB2BData.senderBusinessIDValidThru}`,
                "businessEmail": `${props.mobileTransactionB2BData.senderBusinessEmail}`
              },
              "recepientKyc": {
                "businessName": `${props.mobileTransactionB2BData.recepientBusinessName}`,
                "businessPINCode": `${props.mobileTransactionB2BData.recepientBusinessPINCode}`,
                "businessAddress1": `${props.mobileTransactionB2BData.recepientBusinessAddress1}`,
                "businessAddress2": `${props.mobileTransactionB2BData.recepientBusinessAddress2}`,
                "businessAddressCity": `${props.mobileTransactionB2BData.recepientBusinessAddressCity}`,
                "businessAddressState": `${props.mobileTransactionB2BData.recepientBusinessAddressState}`,
                "businessAddressCountryCode": `${props.mobileTransactionB2BData.recepientBusinessAddressCountryCode}`,
                "businessAddressZip": `${props.mobileTransactionB2BData.recepientBusinessAddressZip}`,
                "businessPrimaryContactCountryCode": `${props.mobileTransactionB2BData.recepientBusinessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.mobileTransactionB2BData.recepientBusinessPrimaryContactNo}`,
                "businessPrimaryContactNoType": `${props.mobileTransactionB2BData.recepientBusinessPrimaryContactNoType}`,
                "businessDescription": `${props.mobileTransactionB2BData.recepientBusinessDescription}`,
                "businessEmail": `${props.mobileTransactionB2BData.recepientBusinessEmail}`,
                "businessCountryCode": `${props.mobileTransactionB2BData.recepientBusinessCountryCode}`,
                "businessRegistrationType": `${props.mobileTransactionB2BData.recepientBusinessRegistrationType}`,
                "businessRegistrationNumber": `${props.mobileTransactionB2BData.recepientBusinessRegistrationNumber}`,
                "businessRegistrationIssuedBy": `${props.mobileTransactionB2BData.recepientBusinessRegistrationIssuedBy}`,
                "businessRegistrationIssuedAt": `${props.mobileTransactionB2BData.recepientBusinessRegistrationIssuedAt}`,
                "businessRegistrationIssueDate": `${props.mobileTransactionB2BData.recepientBusinessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.mobileTransactionB2BData.recepientBusinessIDValidThru}`,
                "typeofbusiness": `${props.mobileTransactionB2BData.recepientBypeofbusiness}`,
                "businessPObox": `${props.mobileTransactionB2BData.recepientBusinessPObox}`,
                "businessMobile": `${props.mobileTransactionB2BData.recepientBusinessMobile}`
              }
            },
            "internationalTransferInformation": {
              "quoteId": `${props.mobileTransactionB2BData.quoteId}`,
              "receivingCountry": `${props.mobileTransactionB2BData.receivingCountry}`,
              "remittancePurpose": `${props.mobileTransactionB2BData.remittancePurpose}`,
              "sourceOfFunds": `${props.mobileTransactionB2BData.sourceOfFunds}`,
              "relationshipSender": `${props.mobileTransactionB2BData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const bankTransactionB2PApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.bankTransactionB2PData.amount}`,
            "currency": `${props.bankTransactionB2PData.currency}`,
            "type": `${props.bankTransactionB2PData.type}`,
            "descriptionText": `${props.bankTransactionB2PData.descriptionText}`,
            "requestDate": `${props.bankTransactionB2PData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.bankTransactionB2PData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value": `${props.bankTransactionB2PData.senderMsisd}`
              }
            ],
            "creditParty": [
              {
                "key": "bankaccountno",
                "value": `${props.bankTransactionB2PData.receiverBankaccountno}`
              },
              {
                "key": "organisationid",
                "value": `${props.bankTransactionB2PData.receiverBankName}`
              },
              {
                "key": "sortcode",
                "value": `${props.bankTransactionB2PData.receiverBankCode}`
              }
            ],
            "senderKyc": {},
            "recipientKyc": {
              "subjectName": {
                "firstName": `${props.bankTransactionB2PData.receiverFirstName}`,
                "lastName": `${props.bankTransactionB2PData.receiverLastName}`,
                "fullName": `${props.bankTransactionB2PData.receiverFirstName+props.bankTransactionB2PData.receiverLastName}`
              }
            },
            "sendingAmount": `${props.bankTransactionB2PData.sendingAmount}`,
            "payinCcyCode": `${props.bankTransactionB2PData.payinCcyCode}`,
            "paymentMode": `${props.bankTransactionB2PData.paymentMode}`,
            "authenticationPartnerCode": `${props.bankTransactionB2PData.authenticationPartnerCode}`,
            "paymentOption": `${props.bankTransactionB2PData.paymentOption}`,
            "sendingPartnerCode": `${props.bankTransactionB2PData.sendingPartnerCode}`,
            "receivingPartnerCode": `${props.bankTransactionB2PData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {
                "businessName": `${props.bankTransactionB2PData.businessName}`,
                "businessAddress1": `${props.bankTransactionB2PData.businessAddress1}`,
                "businessAddressCity": `${props.bankTransactionB2PData.businessAddressCity}`,
                "businessAddressCountryCode": `${props.bankTransactionB2PData.businessAddressCountryCode}`,
                "businessPrimaryContactCountryCode": `${props.bankTransactionB2PData.businessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.bankTransactionB2PData.businessPrimaryContactNo}`,
                "businessDescription": `${props.bankTransactionB2PData.businessDescription}`,
                "businessCountryCode": `${props.bankTransactionB2PData.businessCountryCode}`,
                "businessRegistrationType": `${props.bankTransactionB2PData.businessRegistrationType}`,
                "businessRegistrationNumber": `${props.bankTransactionB2PData.businessRegistrationNumber}`,
                "businessRegistrationIssueDate": `${props.bankTransactionB2PData.businessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.bankTransactionB2PData.businessIDValidThru}`,
                "businessEmail": `${props.bankTransactionB2PData.businessEmail}`
              },
              "recepientKyc": {}
            },
            "internationalTransferInformation": {
              "quoteId": `${props.bankTransactionB2PData.quoteId}`,
              "receivingCountry": `${props.bankTransactionB2PData.receivingCountry}`,
              "remittancePurpose": `${props.bankTransactionB2PData.remittancePurpose}`,
              "sourceOfFunds": `${props.bankTransactionB2PData.sourceOfFunds}`,
              "relationshipSender": `${props.bankTransactionB2PData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const mobileTransactionB2PApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.mobileTransactionB2PData.amount}`,
            "currency": `${props.mobileTransactionB2PData.currency}`,
            "type": `${props.mobileTransactionB2PData.type}`,
            "descriptionText": `${props.mobileTransactionB2PData.descriptionText}`,
            "requestDate": `${props.mobileTransactionB2PData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.mobileTransactionB2PData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value": `${props.mobileTransactionB2PData.senderMsisd}`
              }
            ],
            "creditParty": [
                {
                    "key": "msisdn",
                    "value": `${props.mobileTransactionB2PData.receiverMsisd}`
                }
            ],
            "senderKyc": {},
            "recipientKyc": {
              "subjectName": {
                "firstName": `${props.mobileTransactionB2PData.receiverFirstName}`,
                "lastName": `${props.mobileTransactionB2PData.receiverLastName}`,
                "fullName": `${props.mobileTransactionB2PData.receiverFirstName+props.mobileTransactionB2PData.receiverLastName}`
              }
            },
            "sendingAmount": `${props.mobileTransactionB2PData.sendingAmount}`,
            "payinCcyCode": `${props.mobileTransactionB2PData.payinCcyCode}`,
            "paymentMode": `${props.mobileTransactionB2PData.paymentMode}`,
            "authenticationPartnerCode": `${props.mobileTransactionB2PData.authenticationPartnerCode}`,
            "paymentOption": `${props.mobileTransactionB2PData.paymentOption}`,
            "sendingPartnerCode": `${props.mobileTransactionB2PData.sendingPartnerCode}`,
            "receivingPartnerCode": `${props.mobileTransactionB2PData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {
                "businessName": `${props.mobileTransactionB2PData.businessName}`,
                "businessAddress1": `${props.mobileTransactionB2PData.businessAddress1}`,
                "businessAddressCity": `${props.mobileTransactionB2PData.businessAddressCity}`,
                "businessAddressCountryCode": `${props.mobileTransactionB2PData.businessAddressCountryCode}`,
                "businessPrimaryContactCountryCode": `${props.mobileTransactionB2PData.businessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo": `${props.mobileTransactionB2PData.businessPrimaryContactNo}`,
                "businessDescription": `${props.mobileTransactionB2PData.businessDescription}`,
                "businessCountryCode": `${props.mobileTransactionB2PData.businessCountryCode}`,
                "businessRegistrationType": `${props.mobileTransactionB2PData.businessRegistrationType}`,
                "businessRegistrationNumber": `${props.mobileTransactionB2PData.businessRegistrationNumber}`,
                "businessRegistrationIssueDate": `${props.mobileTransactionB2PData.businessRegistrationIssueDate}`,
                "businessIDValidThru": `${props.mobileTransactionB2PData.businessIDValidThru}`,
                "businessEmail": `${props.mobileTransactionB2PData.businessEmail}`
              },
              "recepientKyc": {}
            },
            "internationalTransferInformation": {
              "quoteId": `${props.mobileTransactionB2PData.quoteId}`,
              "receivingCountry": `${props.mobileTransactionB2PData.receivingCountry}`,
              "remittancePurpose": `${props.mobileTransactionB2PData.remittancePurpose}`,
              "sourceOfFunds": `${props.mobileTransactionB2PData.sourceOfFunds}`,
              "relationshipSender": `${props.mobileTransactionB2PData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }

    const bankTransactionP2BApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.bankTransactionP2BData.amount}`,
            "currency": `${props.bankTransactionP2BData.currency}`,
            "type": `${props.bankTransactionP2BData.type}`,
            "descriptionText": `${props.bankTransactionP2BData.descriptionText}`,
            "requestDate": `${props.bankTransactionP2BData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.bankTransactionP2BData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value":`${props.bankTransactionP2BData.senderMsisdn}`
              }
            ],
            "creditParty": [
              {
                "key": "bankaccountno",
                "value": `${props.bankTransactionP2BData.receiverBankaccountno}`
              },
              {
                "key": "organisationid",
                "value": `${props.bankTransactionP2BData.receiverBankName}`
              },
              {
                "key": "sortcode",
                "value": `${props.bankTransactionP2BData.receiverBankCode}`
              }
            ],
            "senderKyc": {
              "nationality": `${props.bankTransactionP2BData.nationality}`,
              "dateOfBirth": `${props.bankTransactionP2BData.dateOfBirth}`,
              "gender": `${props.bankTransactionP2BData.gender}`,
              "idDocument": [
                {
                  "idType": `${props.bankTransactionP2BData.idType}`,
                  "idNumber": `${props.bankTransactionP2BData.idNumber}`,
                  "issueDate": `${props.bankTransactionP2BData.issueDate}`,
                  "expiryDate": `${props.bankTransactionP2BData.expiryDate}`,
                  "issuerCountry": `${props.bankTransactionP2BData.issuerCountry}`
                }
              ],
              "postalAddress": {
                "addressLine1": `${props.bankTransactionP2BData.addressLine1}`,
                "addressLine2": `${props.bankTransactionP2BData.addressLine2}`,
                "addressLine3": `${props.bankTransactionP2BData.addressLine3}`,
                "city": `${props.bankTransactionP2BData.city}`,
                "stateProvince": `${props.bankTransactionP2BData.stateProvince}`,
                "postalCode": `${props.bankTransactionP2BData.postalCode}`,
                "country": `${props.bankTransactionP2BData.country}`
              },
              "subjectName": {
                "firstName": `${props.bankTransactionP2BData.firstName}`,
                "middleName": `${props.bankTransactionP2BData.middleName}`,
                "lastName": `${props.bankTransactionP2BData.lastName}`,
                "fullName": `${props.bankTransactionP2BData.firstName+props.bankTransactionP2BData.middleName+props.bankTransactionP2BData.lastName}`
              }
            },
            "recipientKyc": {},
            "sendingAmount":  `${props.bankTransactionP2BData.sendingAmount}`,
            "payinCcyCode":  `${props.bankTransactionP2BData.payinCcyCode}`,
            "paymentMode":  `${props.bankTransactionP2BData.paymentMode}`,
            "authenticationPartnerCode":  `${props.bankTransactionP2BData.authenticationPartnerCode}`,
            "paymentOption":  `${props.bankTransactionP2BData.paymentOption}`,
            "sendingPartnerCode":  `${props.bankTransactionP2BData.sendingPartnerCode}`,
            "receivingPartnerCode":  `${props.bankTransactionP2BData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {},
              "recepientKyc": {
                "businessName":  `${props.bankTransactionP2BData.businessName}`,
                "businessPINCode":  `${props.bankTransactionP2BData.businessPINCode}`,
                "businessAddress1":  `${props.bankTransactionP2BData.businessAddress1}`,
                "businessAddress2": `${props.bankTransactionP2BData.businessAddress2}`,
                "businessAddressCity":  `${props.bankTransactionP2BData.businessAddressCity}`,
                "businessAddressState":  `${props.bankTransactionP2BData.businessAddressState}`,
                "businessAddressCountryCode": `${props.bankTransactionP2BData.businessAddressCountryCode}`,
                "businessAddressZip": `${props.bankTransactionP2BData.businessAddressZip}`,
                "businessPrimaryContactCountryCode":  `${props.bankTransactionP2BData.businessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo":  `${props.bankTransactionP2BData.businessPrimaryContactNo}`,
                "businessPrimaryContactNoType":  `${props.bankTransactionP2BData.businessPrimaryContactNoType}`,
                "businessDescription":  `${props.bankTransactionP2BData.businessDescription}`,
                "businessEmail":  `${props.bankTransactionP2BData.businessEmail}`,
                "businessCountryCode": `${props.bankTransactionP2BData.businessCountryCode}`,
                "businessRegistrationType": `${props.bankTransactionP2BData.businessRegistrationType}`,
                "businessRegistrationNumber":  `${props.bankTransactionP2BData.businessRegistrationNumber}`,
                "businessRegistrationIssuedBy":  `${props.bankTransactionP2BData.businessRegistrationIssuedBy}`,
                "businessRegistrationIssuedAt":  `${props.bankTransactionP2BData.businessRegistrationIssuedAt}`,
                "businessRegistrationIssueDate":  `${props.bankTransactionP2BData.businessRegistrationIssueDate}`,
                "businessIDValidThru":  `${props.bankTransactionP2BData.businessIDValidThru}`,
                "typeofbusiness":  `${props.bankTransactionP2BData.typeofbusiness}`,
                "businessPObox":  `${props.bankTransactionP2BData.businessPObox}`,
                "businessMobile":  `${props.bankTransactionP2BData.businessMobile}`
              }
            },
            "internationalTransferInformation": {
              "quoteId":  `${props.bankTransactionP2BData.quoteId}`,
              "receivingCountry":  `${props.bankTransactionP2BData.receivingCountry}`,
              "remittancePurpose":  `${props.bankTransactionP2BData.remittancePurpose}`,
              "sourceOfFunds":  `${props.bankTransactionP2BData.sourceOfFunds}`,
              "relationshipSender":  `${props.bankTransactionP2BData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
                props.setApiResponseHeaderData(options.headers)
                props.setResponseScreen(true)
            });
    }
    const mobileTransactionP2BApi = () => {
        var options = {
            headers: {
                'X-USERNAME': `${props.userName}`,
                'X-PASSWORD':  `${props.password}`,
                'X-DATE': '2018-04-04 09:27:16',
                'X-ORIGINCOUNTRY': 'US',
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        }
        if(props.environment==="uat") {
        options.headers['X-ENVIRONMENT'] = 'uat'
      }else if(props.environment==="sandbox"){
        options.headers['X-ENVIRONMENT'] = 'sandbox'
      }
        axios.post(`${apiUrl}/v1/try-it/transaction`,
        {
            "amount": `${props.mobileTransactionP2BData.amount}`,
            "currency": `${props.mobileTransactionP2BData.currency}`,
            "type": `${props.mobileTransactionP2BData.type}`,
            "descriptionText": `${props.mobileTransactionP2BData.descriptionText}`,
            "requestDate": `${props.mobileTransactionP2BData.requestDate}`,
            "requestingOrganisationTransactionReference": `${props.mobileTransactionP2BData.transRef}`,
            "debitParty": [
              {
                "key": "msisdn",
                "value":`${props.mobileTransactionP2BData.senderMsisdn}`
              }
            ],
            "creditParty": [
                {
                    "key": "msisdn",
                    "value":`${props.mobileTransactionP2BData.receiverMsisdn}`
                  }
            ],
            "senderKyc": {
              "nationality": `${props.mobileTransactionP2BData.nationality}`,
              "dateOfBirth": `${props.mobileTransactionP2BData.dateOfBirth}`,
              "gender": `${props.mobileTransactionP2BData.gender}`,
              "idDocument": [
                {
                  "idType": `${props.mobileTransactionP2BData.idType}`,
                  "idNumber": `${props.mobileTransactionP2BData.idNumber}`,
                  "issueDate": `${props.mobileTransactionP2BData.issueDate}`,
                  "expiryDate": `${props.mobileTransactionP2BData.expiryDate}`,
                  "issuerCountry": `${props.mobileTransactionP2BData.issuerCountry}`
                }
              ],
              "postalAddress": {
                "addressLine1": `${props.mobileTransactionP2BData.addressLine1}`,
                "addressLine2": `${props.mobileTransactionP2BData.addressLine2}`,
                "addressLine3": `${props.mobileTransactionP2BData.addressLine3}`,
                "city": `${props.mobileTransactionP2BData.city}`,
                "stateProvince": `${props.mobileTransactionP2BData.stateProvince}`,
                "postalCode": `${props.mobileTransactionP2BData.postalCode}`,
                "country": `${props.mobileTransactionP2BData.country}`
              },
              "subjectName": {
                "firstName": `${props.mobileTransactionP2BData.firstName}`,
                "middleName": `${props.mobileTransactionP2BData.middleName}`,
                "lastName": `${props.mobileTransactionP2BData.lastName}`,
                "fullName": `${props.mobileTransactionP2BData.firstName+props.mobileTransactionP2BData.middleName+props.mobileTransactionP2BData.lastName}`
              }
            },
            "recipientKyc": {},
            "sendingAmount":  `${props.mobileTransactionP2BData.sendingAmount}`,
            "payinCcyCode":  `${props.mobileTransactionP2BData.payinCcyCode}`,
            "paymentMode":  `${props.mobileTransactionP2BData.paymentMode}`,
            "authenticationPartnerCode":  `${props.mobileTransactionP2BData.authenticationPartnerCode}`,
            "paymentOption":  `${props.mobileTransactionP2BData.paymentOption}`,
            "sendingPartnerCode":  `${props.mobileTransactionP2BData.sendingPartnerCode}`,
            "receivingPartnerCode":  `${props.mobileTransactionP2BData.receivingPartnerCode}`,
            "business": {
              "senderKyc": {},
              "recepientKyc": {
                "businessName":  `${props.mobileTransactionP2BData.businessName}`,
                "businessPINCode":  `${props.mobileTransactionP2BData.businessPINCode}`,
                "businessAddress1":  `${props.mobileTransactionP2BData.businessAddress1}`,
                "businessAddress2": `${props.mobileTransactionP2BData.businessAddress2}`,
                "businessAddressCity":  `${props.mobileTransactionP2BData.businessAddressCity}`,
                "businessAddressState":  `${props.mobileTransactionP2BData.businessAddressState}`,
                "businessAddressCountryCode": `${props.mobileTransactionP2BData.businessAddressCountryCode}`,
                "businessAddressZip": `${props.mobileTransactionP2BData.businessAddressZip}`,
                "businessPrimaryContactCountryCode":  `${props.mobileTransactionP2BData.businessPrimaryContactCountryCode}`,
                "businessPrimaryContactNo":  `${props.mobileTransactionP2BData.businessPrimaryContactNo}`,
                "businessPrimaryContactNoType":  `${props.mobileTransactionP2BData.businessPrimaryContactNoType}`,
                "businessDescription":  `${props.mobileTransactionP2BData.businessDescription}`,
                "businessEmail":  `${props.mobileTransactionP2BData.businessEmail}`,
                "businessCountryCode": `${props.mobileTransactionP2BData.businessCountryCode}`,
                "businessRegistrationType": `${props.mobileTransactionP2BData.businessRegistrationType}`,
                "businessRegistrationNumber":  `${props.mobileTransactionP2BData.businessRegistrationNumber}`,
                "businessRegistrationIssuedBy":  `${props.mobileTransactionP2BData.businessRegistrationIssuedBy}`,
                "businessRegistrationIssuedAt":  `${props.mobileTransactionP2BData.businessRegistrationIssuedAt}`,
                "businessRegistrationIssueDate":  `${props.mobileTransactionP2BData.businessRegistrationIssueDate}`,
                "businessIDValidThru":  `${props.mobileTransactionP2BData.businessIDValidThru}`,
                "typeofbusiness":  `${props.mobileTransactionP2BData.typeofbusiness}`,
                "businessPObox":  `${props.mobileTransactionP2BData.businessPObox}`,
                "businessMobile":  `${props.mobileTransactionP2BData.businessMobile}`
              }
            },
            "internationalTransferInformation": {
              "quoteId":  `${props.mobileTransactionP2BData.quoteId}`,
              "receivingCountry":  `${props.mobileTransactionP2BData.receivingCountry}`,
              "remittancePurpose":  `${props.mobileTransactionP2BData.remittancePurpose}`,
              "sourceOfFunds":  `${props.mobileTransactionP2BData.sourceOfFunds}`,
              "relationshipSender":  `${props.mobileTransactionP2BData.relationshipSender}`
            }
          },
        { headers: options.headers }
        ).then(function (response) {
            console.log(response.data);
            props.setResponseScreen(true)
            props.setApiResponseData(response.data)
            props.setApiResponseHeaderData(options.headers)
        })
            .catch(function (error) {
                console.log(error);
                props.setApiResponseData(error.response.data)
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
        props.setApiResponseData("")
        props.setApiResponseHeaderData("")
        if(props.allowUatAccess){
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
            }else if (props.endPoint === "Create Quotation Mobile") {
                createQuotationMobileApi();
            }else if (props.endPoint === "View Transaction Bank") {
                viewTransactionBankApi();
            }else if (props.endPoint === "View Transaction Mobile") {
                viewTransactionMobileApi();
            }else if (props.endPoint === "Create Transaction Bank") {
                createTransactionBankApi();
            }else if (props.endPoint === "Create Transaction Mobile") {
                createTransactionMobileApi();
            }else if (props.endPoint === "B2B Transaction Bank") {
                bankTransactionB2BApi();
            }else if (props.endPoint === "B2B Transaction Mobile") {
                mobileTransactionB2BApi();
            }else if (props.endPoint === "B2P Transaction Bank") {
                bankTransactionB2PApi();
            }else if (props.endPoint === "B2P Transaction Mobile") {
                mobileTransactionB2PApi();
            }else if (props.endPoint === "P2B Transaction Bank") {
                bankTransactionP2BApi();
            }else if (props.endPoint === "P2B Transaction Mobile") {
                mobileTransactionP2BApi();
            }
        }
    }


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
    const allowTryingWithRealTime = () =>{
        props.setAllowUatAccess(true)
    }
    const allowStaticScreen = () =>{
        props.setResponseScreen(true)
    }

    return (
        <Box sx={{position:'fixed', width:'100%'}} className="tryit-header" >
        <Stack spacing={8} p={3} m={0} justifyContent='space-between' direction='row' /* sx={{ backgroundColor: '#223871' }} */>
            <Stack width="20%" sx={{ marginRight: '150px' }} direction="column" justifyContent="center">
                <img src={terrapayLogo} alt="terrapayLogo" />
            </Stack>
            <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
                <FormControl>
                    <InputLabel
                        sx={!props.endPoint?{
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                            marginTop:-0.7,
                        }:{
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
                            width: '100%',
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
                        size="small"
                        value={props.endPoint}
                        onChange={({ target }) => props.setEndPoint(target.value)}
                        input={<OutlinedInput label="API End Point"
                        />}
                        MenuProps={MenuProps}>
                        <MenuItem value='Account Status Mobile'>Account Status - Mobile</MenuItem>
                        <MenuItem value='Account Status Bank'>Account Status - Bank</MenuItem>
                        <MenuItem value='Create Quotation Mobile'>Create Quotation - Mobile</MenuItem>
                        <MenuItem value='Create Quotation Bank'>Create Quotation - Bank</MenuItem>
                        {/* <MenuItem value='View Transaction Mobile'>View Transaction Mobile</MenuItem> */}
                        <MenuItem value='Create Transaction Mobile'>Create Transaction - Mobile</MenuItem>
                        <MenuItem value='Create Transaction Bank'>Create Transaction - Bank</MenuItem>
                        <MenuItem value='P2B Transaction Mobile'>P2B Transaction - Mobile</MenuItem>
                        <MenuItem value='P2B Transaction Bank'>P2B Transaction - Bank</MenuItem>
                        <MenuItem value='B2P Transaction Mobile'>B2P Transaction - Mobile</MenuItem>
                        <MenuItem value='B2P Transaction Bank'>B2P Transaction - Bank</MenuItem>
                        <MenuItem value='B2B Transaction Mobile'>B2B Transaction - Mobile</MenuItem>
                        <MenuItem value='B2B Transaction Bank'>B2B Transaction - Bank</MenuItem>
                        <MenuItem value='View Transaction Bank'>View Transaction</MenuItem>
                        <MenuItem value='Ledger Balance'>Ledger Balance</MenuItem>
                        <MenuItem value='Corridor Quotation'>Corridor Quotation</MenuItem>
                        <MenuItem value='Cancel Transaction'>Cancel Transaction</MenuItem>
                        <MenuItem value='Reverse Transaction'>Reverse Transaction</MenuItem>
                        <MenuItem value='Get Bank List'>Get Bank List</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                        sx={{
                          '& label': {
                            color: 'white',
                          },
                          '& label.Mui-focused': {
                            color: 'white',
                          },
                          '& label.Mui-disabled': {
                            color: 'rgba(0, 0, 0, 0.38)',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: 'white',
                            color: 'white',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'white',
                              color: 'white',
                            },
                            '&:hover fieldset': {
                              borderColor: 'white',
                              color: 'white',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'white',
                              color: 'white',
                            },
                            "& .MuiOutlinedInput-input": {
                              color: 'white',
                          },
                          },
                          "& .MuiInputBase-input.Mui-disabled": {
                            color: "rgba(0, 0, 0, 0.38) !important",
                            "-webkit-text-fill-color": "rgba(0, 0, 0, 0.38) !important",
                            borderColor: "rgba(0, 0, 0, 0.38) !important"
                          },
                          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(0, 0, 0, 0.38) !important"
                          }
                        }}
                    id="Username"
                    size='small'
                    label="Username"
                    variant="outlined"
                    onChange={({ target }) => props.setuserName(target.value)} value={props.userName}
                    disabled={!props.allowUatAccess}
                />
                {/* <OutlinedInput
                    disabled={!props.allowUatAccess}
                    sx={{
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
                    }} 
                    placeholder='Username' onChange={({ target }) => props.setuserName(target.value)} value={props.userName}
                /> */}
            </Stack>
            <Stack width="30%" spacing={3} justifyContent='center' direction='column' >
                <FormControl>
                    <InputLabel id="demo-simple-select-autowidth-label" 
                    sx={!props.environment?{
                        color: 'white',
                        '&.Mui-focused': {
                            color: 'white',
                        },
                        marginTop:-0.7,
                    }:{
                      color: 'white',
                      '&.Mui-focused': {
                          color: 'white',
                      },
                  }} 
                    disabled={!props.allowUatAccess} >
                        Environment
                    </InputLabel>
                    <Select
                    sx={!props.allowUatAccess?{
                      width: '100%',
                      "& .MuiSvgIcon-root": {
                          color: "rgba(0, 0, 0, 0.38)",
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
                  }:{
                      width: '100%',
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
                        size="small"
                        value={props.environment}
                        onChange={({ target }) => props.setEnvironment(target.value)}
                        input={<OutlinedInput label="Environment" 
                        disabled={!props.allowUatAccess} />} >
                        <MenuItem value='sandbox'>Sandbox</MenuItem>
                        <MenuItem value='uat'>UAT</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                        sx={{
                          '& label': {
                            color: 'white',
                          },
                          '& label.Mui-focused': {
                            color: 'white',
                          },
                          '& label.Mui-disabled': {
                            color: 'rgba(0, 0, 0, 0.38)',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: 'white',
                            color: 'white',
                          },
                          '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'white',
                                color: 'white',
                              },
                              '&:hover fieldset': {
                                borderColor: 'white',
                                color: 'white',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                                color: 'white',
                              },
                              "& .MuiOutlinedInput-input": {
                                color: 'white',
                            },
                          },
                          "& .MuiInputBase-input.Mui-disabled": {
                            color: "rgba(0, 0, 0, 0.38) !important",
                            "-webkit-text-fill-color": "rgba(0, 0, 0, 0.38) !important",
                            borderColor: "rgba(0, 0, 0, 0.38) !important"
                          },
                          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(0, 0, 0, 0.38) !important"
                          }
                        }}
                    id="Password"
                    size='small'
                    label="Password"
                    variant="outlined"
                    onChange={({ target }) => props.setPassword(target.value)} 
                    value={props.password} 
                    disabled={!props.allowUatAccess}
                />
                {/* <OutlinedInput sx={{
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
                    "outlinedInputFocused": {
                        borderStyle: 'none',
                        borderColor: 'red',
                        outlineWidth: 0,
                        outline: 'none',
                        backgroundColor: 'green'
                    },
                }}
                placeholder='Password' onChange={({ target }) => props.setPassword(target.value)} value={props.password} 
                disabled={!props.allowUatAccess}
                />  */}
            </Stack>
            <Stack width="20%" spacing={3} direction='column' >
                {/* {(props.endPoint==="Account Status Mobile" && props.mobileAccountStatusData.instrument && props.mobileAccountStatusData.bnv && props.mobileAccountStatusData.msisdn)?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="View Transaction Mobile")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getViewTransaction} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="Ledger Balance")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>:
                (props.endPoint==="Get Bank List")?<CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={getAccountStatus} >TRY IT OUT</CustomButtom>: */}

                {/* <CustomButtom  sx={{textAlign:'center', minWidth:'180px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}} variant='contained' onClick={tryItOutHandler} >TRY IT OUT</CustomButtom> */}
                {props.allowUatAccess? <CustomButtom sx={{ textAlign: 'center', minWidth: '180px', alignSelf: 'center', letterSpacing: 1, backgroundColor: '#ea5c57' }} variant='contained' /* disabled={checkProperties(props.headerObject)} */ onClick={tryItOutHandler}>TRY IT OUT</CustomButtom>:
                <CustomButtom sx={{ textAlign: 'center', minWidth: '180px', alignSelf: 'center', letterSpacing: 1, backgroundColor: '#ea5c57' }} variant='contained' /* disabled={checkProperties(props.headerObject)} */ onClick={allowStaticScreen}>TRY IT OUT</CustomButtom>}
                {!props.allowUatAccess && <Typography sx={{textAlign: 'center', minWidth: '180px', alignSelf: 'center'}} color="white" fonstSize={12} height={40} fontWeight='500'>
                      Click here to <span style={{cursor:'pointer', color:'#ea5c57'}}onClick={allowTryingWithRealTime} > Login</span>
                </Typography>}
        </Stack>
        </Stack>
        </Box>
    )
}

export default TryitHeader