import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './Pages/Home';
import TryitHeader from './Components/TryIt/TryitHeader';
import Ledger from './Pages/Ledger';
import { useState, useEffect } from "react";
import MobileAccountStatus from './Pages/MobileAccountStatus';
import BankAccountStatus from './Pages/BankAccountStatus';
import Corridor from './Pages/Corridor';
import BankList from './Pages/BankList';
import BankCreateQuotation from './Pages/BankCreateQuotation';
import MobileCreateQuotation from './Pages/MobileCreateQuotation';
import TransactionCancel from './Pages/TransactionCancel';
import TransactionReverse from './Pages/TransactionReverse';
import BankViewTransaction from './Pages/BankViewTransaction';
import MobileViewTransaction from './Pages/MobileViewTransaction';
import BankCreateTransaction from './Pages/BankCreateTransaction';
import MobileCreateTransaction from './Pages/MobileCreateTransaction';
import MobileTransactionB2B from './Pages/MobileTransactionB2B';
import BankTransactionB2B from './Pages/BankTransactionB2B';
import BankTransactionB2P from './Pages/BankTransactionB2P';
import MobileTransactionB2P from './Pages/MobileTransactionB2P';
import BankTransactionP2B from './Pages/BankTransactionP2B';
import MobileTransactionP2B from './Pages/MobileTransactionP2B';

function App() {
  /* header */
  const [environment, setEnvironment] = useState("sandbox")
  const [country, setCountry] = useState("US")
  const [endPoint, setEndPoint] = useState("")
  const [userName, setuserName] = useState("")
  const [password, setPassword] = useState("")

  const [transRef, setTransRef] = useState("SrcTxnId001")
  const [getBankListData, setGetBankListData] = useState({ 
    country: 'BD',
    /*  lastUpdatedOn:'',
    bankName:'',
    bankCode:'',
    providerCode:'',
    status:'' */
    })
  
  const [allowUatAccess, setAllowUatAccess] = useState(false)

  const [headerObject, setHeaderObject] = useState({})

  const [mobileAccountStatusData, setMobileAccountStatusData] = useState({
    msisdn: '+9779840002320',
    bnv: 'David Robinson',
    snv:'',
    provider:'',
  })

  const [bankAccountStatusData, setBankAccountStatusData] = useState({
    accountId: '50100002965304',
    bnv: 'David Robinson',
    bankCode: '12345',
    bankName: 'HDFC Bank',
    country: 'IN',
    snv:'',
    msisdn:'',
    provider:'',
    bankSubCode:'',
  })

  const [cancelTransactionData, setCancelTransactionData] = useState({
    reason: 'cancelling',
    txId: 'SrcTxnId4561',
  })

  const [reverseTransactionData, setReverseTransactionData] = useState({
    reason: 'reversing',
    txId: 'TPOT000000723616',
  })

  const [corridorQuotationData, setCorridorQuotationData] = useState({ currency: 'USD' })

  const [createQuotationBank, setCreateQuotationBank] = useState({
    requestDate: '2017-06-20 12:27:16',
    bankaccountno: '50100002965304',
    receivingCountry: 'IN',
    requestAmount: '500',
    requestCurrency: 'INR',
    sendingCurrency: 'USD',
    receivingCurrency: 'INR',
    senderMsisdn:'+9779840002444',
    receiverMsisdn:'+9779840002320',
  })

  const [createQuotationMobileData, setCreateQuotationMobileData] = useState({
    requestDate: '2017-06-20 12:27:16',
    reciverMsisdn: '+9779840002320',
    requestAmount: '500',
    requestCurrency: 'NPR',
    sendingCurrency: 'USD',
    receivingCurrency: 'NPR',
    senderMsisdn:'+4491509874561',
    receiverCountry:'',
    receiverBankaccountno:'',
  })

  const [ledgerBalanceData, setLedgerBalanceData] = useState({ currency: '' })

  const [viewTransactionMobileData, setViewTransactionMobileData] = useState({transRef:"SrcTxnId001"})

  const [viewTransactionBankData, setViewTransactionBankData] = useState({transRef:"SrcTxnId001"})
  
  const [createTransactionBankData, setCreateTransactionBankData] = useState({
    requestDate: "2022-03-19 11:40:48",
    amount: "500",
    currency: "INR",
    type: "inttransfer",
    descriptionText: "Gift for my brother",
    transRef: "SrcTxnId009232898",
    provider:"",

    senderMsisd: "+9779840002444",

    receiverBankaccountno:"50100002965304",
    receiverBankName: "HDFC Bank",
    receiverBankAccountType:"",
    receiverBankCode: "HDFC0001626",
    bankSubCode:"HDFC0001626",
    receiverMsisdn:"+9779840002320",

    senderNationality: "AE",
    senderDateOfBirth: "1967-05-28",
    senderGender: "M",

    idType: "VOTER_CARD",
    idNumber: "13321115521",
    issueDate: "1967-05-28",
    expiryDate: "2067-05-28",
    issuerCountry: "AE",

    addressLine1: "49, park street",
    addressLine2: "12sdfgsdfg",
    addressLine3: "12 sdfgsdfgsdfg",
    city: "Florida",
    stateProvince: "154652",
    postalCode: "507000",
    country: "US",

    senderTitle:"",
    firstName: "Test",
    middleName: "",
    lastName: "Sender2",

    receiverNationality:"AE",
    receiverDOB:"",

    receiverIdType:"",
    receiverIdNumber:"",
    receiverIssueDate:"",
    receiverExpiryDate:"",
    receiverIssuerCountry:"AE",

    receiverAddressLine1:"",
    receiverAddressLine2:"",
    receiverAddressLine3:"",
    receiverCity:"",
    receiverState:"",
    receiverPostalCode:"",
    receiverCountry:"",

    receiverFirstName: "David",
    receiverLastName: "Robinson",

    quoteId: "QR037CSGW6PEQ8K3B",
    receivingCountry: "IN",
    remittancePurpose: "Family Maintainance",
    sourceOfFunds: "Salary",
    relationshipSender: "Brother",
  })

  const [createTransactionMobileData, setCreateTransactionMobileData] = useState({
    amount: "500.00",
    currency: "NPR",
    type: "inttransfer",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "SrcTxnId089898",
    providerCode:'',

    senderMsisdn: "+4491509874561",
    
    receiverMsisdn:"+9779840002320",
    receiverBankAccountno:'',
    bankCode:'',
    bankName:'',
    bankSubCode:'',


    nationality: "FR",
    dateOfBirth: "1986-06-28",
    gender: "M",
    idType: "nationalidcard",
    idNumber: "13321115521",
    issueDate: "2003-09-26",
    expiryDate: "2033-09-26",
    issuerCountry: "FR",

    addressLine1: "49 , park street",
    addressLine2: "park street",
    addressLine3: "waltons road",
    city: "Lyon",
    stateProvince: "Lyon",
    postalCode: "123456",
    country: "FR",

    senderTitle:'',
    firstName: "Einstein",
    middleName: "James",
    lastName: "Bela",

    receiverNationality:'FR',
    receiverDOB:'1967-05-28',
    receiverIdType:'nationalidcard',
    receiverIdNumber:'123456789',
    receiverIssueDate:'2003-09-26',
    receiverExpiryDate:'2033-09-26',
    receiverIssuerCountry:'AE',

    receiverAddressLine1: "49",
    receiverAddressLine2: "park street",
    receiverAddressLine3: "walton`s road",
    receiverCity:'Lyon',
    receiverState:'Lyon',
    receiverPostalCode:'123456',
    receiverCountry:'FR',

    receiverTitle:"Mr.",
    receiverFirstName: "David",
    receiverMiddleName: "",
    receiverLastName: "Robinson",

    quoteId: "QT037C1NQ6BHMV59A3",
    receivingCountry: "NP",
    remittancePurpose: "Gift",
    sourceOfFunds: "Salary",
    relationshipSender: "Brother",

    /* these are not in request body & docs*/
    receiverBankAccountType:'',
    
})

  
  const [bankTransactionB2BData, setBankTransactionB2BData] = useState({
    requestDate: "2021-05-23 08:19:36",
    currency: "INR",
    type: "b2b",
    amount: "2050.00",
    descriptionText: "Gift for my brother",
    transRef: "SrcTxnId004",
    sendingAmount: "2050.00",
    payinCcyCode: "AED",
    providerCode:'',
    paymentMode: "cash",
    authenticationPartnerCode: "4534",
    paymentOption: "Mobile Wallet",
    sendingPartnerCode: "343432223",
    receivingPartnerCode: "343432223",

    senderMsisdn: "+4491509874561",

    receiverMsisdn:'',
    beneficiarySmsNotify:'',
    accountAdditionalNo2:"",
    receiverBankaccountno:"232201001600",
    receiverBankAccountType:'',
    receiverBankCode:"CNRB0000232",
    receiverBankName:"Canara Bank",
    banksubcode:'',
    accountBranchName:'',
    accountName:'',
    accountIBAN:'',
    accountAdditionalNo1:"",

    quoteId: "QR037C1NA1XDKDL53E",
    receivingCountry: "IN",
    remittancePurpose: "Advanced Goods Payments",
    relationshipSender: "",
    sourceOfFunds: "Savings",

    senderBusinessName: "sample business",
    senderBusinessPINCode:"",
    senderBusinessAddress1: "walton's road",
    senderBusinessAddress2:"",
    senderBusinessAddressCity: "Lyon",
    senderBusinessAddressCountryCode: "US",
    senderBusinessAddressZip:"",
    senderBusinessPrimaryContactCountryCode: "US",
    senderBusinessPrimaryContactNo: "3472034605",
    senderBusinessDescription: "Electronics",
    senderBusinessEmail: "test@testemail.com",
    senderBusinessCountryCode: "US",
    senderBusinessRegistrationType: "Private Limited Company",
    senderBusinessRegistrationNumber: "23123456789",
    senderBusinessRegistrationIssuedBy:"",
    senderbusinessRegistrationIssuedAt:"",
    senderBusinessRegistrationIssueDate: "2001-09-26",
    senderBusinessIDValidThru: "2033-09-26",

    recepientBusinessName: "Devki Luggage Center",
    recepientBusinessPINCode: "123456",
    recepientBusinessAddress1: "24",
    recepientBusinessAddress2: "walton's road",
    recepientBusinessAddressCity: "newyork",
    recepientBusinessAddressState: "NYC",
    recepientBusinessAddressCountryCode: "GH",
    recepientBusinessAddressZip: "123456",
    recepientBusinessPrimaryContactCountryCode: "NG",
    recepientBusinessPrimaryContactNo: "232323212",
    recepientBusinessPrimaryContactNoType: "Mobile",
    recepientBusinessDescription: "Electronics wholesale",
    recepientBusinessEmail: "rs.electronics@gmail.com",
    recepientBusinessCountryCode: "GH",
    recepientBusinessRegistrationType: "Private Limited Company",
    recepientBusinessRegistrationNumber: "2312345678912",
    recepientBusinessRegistrationIssuedBy: "NYC_TRADE",
    recepientBusinessRegistrationIssuedAt: "NYC",
    recepientBusinessRegistrationIssueDate: "2002-08-26",
    recepientBusinessIDValidThru: "2036-09-26",
    recepientBypeofbusiness: "Electronics",
    recepientBusinessPObox: "12345",
    recepientBusinessMobile: "343234433",
  })

  const [mobileTransactionB2BData, setMobileTransactionB2BData] = useState({
    currency: "INR",
    type: "b2b",
    requestDate: "2021-05-23 08:19:36",
    amount: "500",
    descriptionText: "Gift for my brother",
    transRef: "SrcTxnId004",
    sendingAmount: "35500.00",
    payinCcyCode: "USD",
    providerCode:'',
    paymentMode: "cash",
    authenticationPartnerCode: "4534",
    paymentOption: "Mobile Wallet",
    sendingPartnerCode: "343432223",
    receivingPartnerCode: "343432223",

    senderMsisdn: "+971810456234",

    receiverMsisdn:"+2349061114853",
    beneficiarySmsNotify:'',
    receiverBankaccountno:'',
    receiverBankAccountType:'',
    bankCode:'',
    bankName:'',
    bankSubCode:'',
    accountIBAN:'',
    accountAdditionalNo1:'',
    accountAdditionalNo2:'',

    quoteId: "QR037C1NA1XDKDL53E",
    receivingCountry: "IN",
    remittancePurpose: "Business Travel",
    sourceOfFunds: "Business Income",
    relationshipSender: "Employer",

    senderBusinessName: "sample business",
    senderBusinessPINCode:'',
    senderBusinessAddress1: "alton's road",
    senderBusinessAddress2: "",
    senderBusinessAddressCity: "Lyon",
    senderBusinessAddressCountryCode: "US",
    senderBusinessAddressZip:'',
    senderBusinessPrimaryContactCountryCode: "US",
    senderBusinessPrimaryContactNo: "3472034605",
    senderBusinessDescription: "Electronics",
    senderBusinessEmail: "test@testemail.com",
    senderBusinessCountryCode: "US",
    senderBusinessRegistrationType: "Private Limited Company",
    senderBusinessRegistrationNumber: "23123456789",
    senderBusinessRegistrationIssuedBy:'',
    senderBusinessRegistrationIssuedAt:'',
    senderBusinessRegistrationIssueDate: "2001-09-26",
    senderBusinessIDValidThru: "2033-09-26",
  
    recepientBusinessName: "Oyugi Randy Electric Sale Pvt. Ltd.",
    recepientBusinessPINCode: "123456",
    recepientBusinessAddress1: "24",
    recepientBusinessAddress2: "walton's road",
    recepientBusinessAddressCity: "newyork",
    recepientBusinessAddressState: "NYC",
    recepientBusinessAddressCountryCode: "NG",
    recepientBusinessAddressZip: "123456",
    recepientBusinessPrimaryContactCountryCode: "NG",
    recepientBusinessPrimaryContactNo: "232323212",
    recepientBusinessPrimaryContactNoType: "Mobile",
    recepientBusinessDescription: "Electronics wholesale",
    recepientBusinessEmail: "rs.electronics@gmail.com",
    recepientBusinessCountryCode: "NG",
    recepientBusinessRegistrationType: "Private Limited Company",
    recepientBusinessRegistrationNumber: "2312345678912",
    recepientBusinessRegistrationIssuedBy: "NYC_TRADE",
    recepientBusinessRegistrationIssuedAt: "NYC",
    recepientBusinessRegistrationIssueDate: "2002-08-26",
    recepientBusinessIDValidThru: "2036-09-26",
    recepientBypeofbusiness: "Electronics",
    recepientBusinessPObox: "12345",
  })

  {/* B2P */}
  const [bankTransactionB2PData, setBankTransactionB2PData] = useState({
    amount: "500",
    currency: "INR",
    type: "b2p",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "21003b6f-8899-4dd5-815a-9efb445491ee",
    providerCode:"",

    senderMsisd:"+971810456234",

    receiverMsisdn:"",
    beneficiarySmsNotify:"",
    receiverBankaccountno:"50100002965304",
    receiverBankAccountType:"",
    receiverBankCode:"HDFC0001626",
    receiverBankName:"HDFC Bank",
    bankSubCode:"",
    accountName:"",
    branchName:"HDFC Bank",
    accountIBAN:"",
    accountAdditionalNo1:"",
    accountAdditionalNo2:"",


    receiverPrimaryContactCountryCode:"",
    receiverPrimaryContactNo:"",
    receiverPrimaryContactNoType:"",
    receiverFirstName: "Deepa",
    receiverLastName: "Jain",
    receiverNationality:"",
    receiverIdType:"",
    receiverIdNumber:"",
    receiverIssueDate:"",
    receiverExpiryDate:"",
    receiverIssuerCountry:"",

    sendingAmount: "35500.00",
    payinCcyCode: "USD",
    paymentMode: "cash",
    authenticationPartnerCode: "4534",
    paymentOption: "Mobile Wallet",
    sendingPartnerCode: "343432223",
    receivingPartnerCode: "343432223",

    businessName: "sample business",
    senderBusinessPINCode:"",
    businessAddress1: "alton's road",
    senderBusinessAddress2:"",
    businessAddressCity: "Lyon",
    businessAddressCountryCode: "NG",
    senderBusinessAddressZip:"",
    businessPrimaryContactCountryCode: "US",
    businessPrimaryContactNo: "3472034605",
    businessDescription: "Electronics",
    businessEmail: "test@testemail.com",
    businessCountryCode: "US",
    businessRegistrationType: "Private Limited Company",
    senderBusinessRegistrationIssuedBy:"",
    senderBusinessRegistrationIssuedAt:"",
    businessRegistrationNumber: "23123456789",
    businessRegistrationIssueDate: "2001-09-26",
    businessIDValidThru: "2033-09-26",

    
    quoteId: "QR037C1NZWQLJ42P1F",
    receivingCountry: "IN",
    remittancePurpose: "Business Travel",
    sourceOfFunds: "Business Income",
    relationshipSender: "Employer",

  })

  const [mobileTransactionB2PData, setMobileTransactionB2PData] = useState({
    currency: "INR",
    type: "b2p",
    requestDate: "2021-05-23 08:19:36",
    amount: "500",
    descriptionText: "Gift for my brother",
    transRef: "SrcTxnId0098u3",
    sendingAmount: "35500.00",
    payinCcyCode: "USD",
    paymentMode: "cash",
    authenticationPartnerCode: "4534",
    paymentOption: "Mobile Wallet",
    sendingPartnerCode: "343432223",
    receivingPartnerCode: "343432223",
    providerCode:'',  
    
    senderMsisd:"+9779840002320",

    receiverMsisd:"+971810456234",
    beneficiarySmsNotify:'',
    bankaccountno:'', 
    bankSubCode:'',
    bankName:'',
    bankCode:'',
    accountIBAN:'',
    accountAdditionalNo1:'',
    accountAdditionalNo2:'',

    receiverNationality:'',
    receiverPrimaryContactCountryCode:"",
    receiverPrimaryContactNo:'',
    receiverPrimaryContactNoType:'',
    receiverFirstName: "David",
    receiverLastName: "Robinson",
    receiverIdType:'',
    receiverIdNumber:'',
    receiverIssueDate:'',
    receiverExpiryDate:'',
    receiverIssuerCountry:'',
  
    businessName: "sample business",
    senderBusinessPINCode:'',
    businessAddress1: "alton's road",
    senderBusinessAddress2:'',
    businessAddressCity: "Lyon",
    businessAddressCountryCode: "US",
    businessPrimaryContactCountryCode: "US",
    businessPrimaryContactNo: "3472034605",
    businessDescription: "Electronics",
    businessEmail: "test@testemail.com",
    businessCountryCode: "US",
    businessRegistrationType: "Private Limited Company",
    senderBusinessRegistrationIssuedBy:'',
    senderBusinessRegistrationIssuedAt:'',
    businessRegistrationNumber: "23123456789",
    businessRegistrationIssueDate: "2001-09-26",
    businessIDValidThru: "2033-09-26",
    senderBusinessAddressZip:'',


    quoteId: "QR037C1NZWQLJ42P1F",
    receivingCountry: "IN",
    remittancePurpose: "Business Travel",
    sourceOfFunds: "Business Income",
    relationshipSender: "Employer",

  })

    const [bankTransactionP2BData, setBankTransactionP2BData] = useState({
      currency: "GHS",
      type: "p2b",
      requestDate: "2021-05-23 08:19:36",
      amount: "765.00",
      descriptionText: "Gift for my brother",
      transRef: "1f4bd226-b86b-48c1-a434-ac9ff59d2f14",
      sendingAmount: "765.00",
      payinCcyCode: "USD",
      providerCode:"",
      paymentMode: "cash",
      authenticationPartnerCode: "4534",
      paymentOption: "Mobile Wallet",
      sendingPartnerCode: "343432223",
      receivingPartnerCode: "343432223",

      senderMsisdn:"+4491509874561",

      receiverMsisdn:"",
      beneficiarySmsNotify:"",
      receiverBankaccountno:"1441001378741",
      receiverBankAccountType:"",
      receiverBankCode:"STBGGHAC",
      receiverBankName:"Bank of Ghana",
      bankSubCode:"",
      branchName:"",
      accountName:"",
      accountIBAN:"",
      accountAdditionalNo1:"",
      accountAdditionalNo2:"",

      nationality: "KE",
      dateOfBirth: "1967-05-28",
      gender: "M",
      senderBusinessPrimaryContactCountryCode:"KE",
      senderBusinessPrimaryContactNo:"2349061114853",
      senderBusinessPrimaryContactNoType:"personal",
      idType: "nationalidcard",
      idNumber: "13321115521",
      issueDate: "",
      expiryDate: "2067-05-28",
      issuerCountry: "",

      addressLine1: "49  park street",
      addressLine2: "park street",
      addressLine3: "12",
      city: "Lyon",
      stateProvince: "",
      postalCode: "",
      country: "KE",

      senderTitle:"",
      firstName: "Einstein",
      middleName: "James",
      lastName: "Bela",
      
      quoteId: "QT037CTYFDSF1EY5A",
      receivingCountry: "GH",
      remittancePurpose: "Business Travel",
      sourceOfFunds: "Business Income",
      relationshipSender: "Employer",

      businessName: "Tilly Tires Ltd",
      businessPINCode: "123456",
      businessAddress1: "24",
      businessAddress2: "walton's road",
      businessAddressCity: "newyork",
      businessAddressState: "NYC",
      businessAddressCountryCode: "NG",
      businessAddressZip: "123456",
      businessPrimaryContactCountryCode: "NG",
      businessPrimaryContactNo: "232323212",
      businessPrimaryContactNoType: "Mobile",
      businessDescription: "Electronics wholesale",
      businessEmail: "rs.electronics@gmail.com",
      businessCountryCode: "NG",
      businessRegistrationType: "Private Limited Company",
      businessRegistrationNumber: "2312345678912",
      businessRegistrationIssuedBy: "NYC_TRADE",
      businessRegistrationIssuedAt: "NYC",
      businessRegistrationIssueDate: "2002-08-26",
      businessIDValidThru: "2036-09-26",
      typeofbusiness: "Electronics",
      businessPObox: "12345",
      businessMobile: "343234432",
  })
  const [mobileTransactionP2BData, setMobileTransactionP2BData] = useState({
    amount: "500",
    currency: "INR",
    type: "p2b",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "SrcTxnId005",
    providerCode:"",
    
    senderMsisdn:"+971810456234",

    receiverMsisdn:"+971810456234",
    beneficiarySmsNotify:"",
    receiverBankaccountno:"",
    bankSubCode:"",
    bankName:"",
    bankCode:"",
    accountIBAN:"",
    accountAdditionalNo1:"",
    accountAdditionalNo2:"",

    nationality: "AE",
    dateOfBirth: "1967-05-28",
    gender: "M",
    senderBusinessPrimaryContactCountryCode:"US",
    senderBusinessPrimaryContactNo:"24234",
    senderPrimaryContactNoType:"na",
    idType: "VOTER_CARD",
    idNumber: "13321115521",
    issueDate: "1967-05-28",
    expiryDate: "2067-05-28",
    issuerCountry: "AE",
    addressLine1: "49  park street",
    addressLine2: "12",
    addressLine3: "12",
    city: "12",
    stateProvince: "12",
    postalCode: "50000",
    country: "US",
    senderTitle:"",
    firstName: "Test",
    middleName: " ",
    lastName: "Sender2",

    sendingAmount: "35500.00",
    payinCcyCode: "USD",
    paymentMode: "cash",
    authenticationPartnerCode: "4534",
    paymentOption: "Mobile Wallet",
    sendingPartnerCode: "343432223",
    receivingPartnerCode: "343432223",

    businessName: "Oyugi Randy Electric Sale Pvt. Ltd.",
    businessPINCode: "123456",
    businessAddress1: "24",
    businessAddress2: "walton's road",
    businessAddressCity: "newyork",
    businessAddressState: "NYC",
    businessAddressCountryCode: "NG",
    businessAddressZip: "123456",
    businessPrimaryContactCountryCode: "NG",
    businessPrimaryContactNo: "232323212",
    businessPrimaryContactNoType: "Mobile",
    businessDescription: "Electronics wholesale",
    businessEmail: "rs.electronics@gmail.com",
    businessCountryCode: "NG",
    businessRegistrationType: "Private Limited Company",
    businessRegistrationNumber: "2312345678912",
    businessRegistrationIssuedBy: "NYC_TRADE",
    businessRegistrationIssuedAt: "NYC",
    businessRegistrationIssueDate: "2002-08-26",
    businessIDValidThru: "2036-09-26",
    typeofbusiness: "Electronics",
    businessPObox: "12345",

    quoteId: "QR037C1NA6ZXBSQ88B",
    receivingCountry: "IN",
    remittancePurpose: "Business Travel",
    sourceOfFunds: "Business Income",
    relationshipSender: "Employer",
    
  })
  const MandatoryMobileAccountFields={
    msisdn: `${mobileAccountStatusData.msisdn}`,
    bnv:  `${mobileAccountStatusData.bnv}`,
  }
  const MandatoryBankAccountFields={
    accountId: `${bankAccountStatusData.accountId}`,
    bnv:  `${bankAccountStatusData.bnv}`,
    bankName:`${bankAccountStatusData.bankName}`,
    country: `${bankAccountStatusData.country}`,
  }
  const MandatoryBankQuotationFields = {
    requestAmount:  `${createQuotationBank.requestAmount}`,
    requestCurrency:`${createQuotationBank.requestCurrency}`,
    sendingCurrency: `${createQuotationBank.sendingCurrency}`,
    receivingCurrency: `${createQuotationBank.receivingCurrency}`,
    bankaccountno: `${createQuotationBank.bankaccountno}`,
    receivingCountry: `${createQuotationBank.receivingCountry}`
  }
  const MandatoryMobileQuotationFields = {
    requestAmount:  `${createQuotationMobileData.requestAmount}`,
    requestCurrency:`${createQuotationMobileData.requestCurrency}`,
    reciverMsisdn: `${createQuotationMobileData.reciverMsisdn}`,
    sendingCurrency: `${createQuotationMobileData.sendingCurrency}`,
    receivingCurrency: `${createQuotationMobileData.receivingCurrency}`
  } 
  const MandatoryCancelTransFields = {
    txId: `${cancelTransactionData.txId}`,
  }
  const MandatoryReverseTransFields = {
    txId: `${reverseTransactionData.txId}`,
  }
  const MandatoryLedgerBalanceFields = {
    
    }
  const MandatoryMobileCreateTransFields = {
    amount: `${createTransactionMobileData.amount}`,
    currency: `${createTransactionMobileData.currency}`,
    type: `${createTransactionMobileData.type}`,
    transRef: `${createTransactionMobileData.transRef}`,
    senderMsisdn: `${createTransactionMobileData.senderMsisdn}`,
    receiverMsisdn: `${createTransactionMobileData.receiverMsisdn}`,
    nationality: `${createTransactionMobileData.nationality}`,
    dateOfBirth: `${createTransactionMobileData.dateOfBirth}`,
    idType: `${createTransactionMobileData.idType}`,
    idNumber: `${createTransactionMobileData.idNumber}`,
    expiryDate: `${createTransactionMobileData.expiryDate}`,
    addressLine1: `${createTransactionMobileData.addressLine1}`,
    city: `${createTransactionMobileData.city}`,
    country: `${createTransactionMobileData.country}`,
    firstName: `${createTransactionMobileData.firstName}`,
    lastName: `${createTransactionMobileData.lastName}`,
    receiverFirstName: `${createTransactionMobileData.receiverFirstName}`,
    receiverLastName: `${createTransactionMobileData.receiverLastName}`,
    quoteId: `${createTransactionMobileData.quoteId}`,
    receivingCountry: `${createTransactionMobileData.receivingCountry}`,
    remittancePurpose: `${createTransactionMobileData.remittancePurpose}`,
    sourceOfFunds: `${createTransactionMobileData.sourceOfFunds}`,
    relationshipSender: `${createTransactionMobileData.relationshipSender}`,
  }
  const MandatoryBankCreateTransFields = {
    amount: `${createTransactionBankData.amount}`,
    currency: `${createTransactionBankData.currency}`,
    type: `${createTransactionBankData.type}`,
    transRef: `${createTransactionBankData.transRef}`,
    senderMsisd: `${createTransactionBankData.senderMsisd}`,
    receiverBankaccountno: `${createTransactionBankData.receiverBankaccountno}`,
    receiverBankCode: `${createTransactionBankData.receiverBankCode}`,
    receiverBankName: `${createTransactionBankData.receiverBankName}`,
    bankSubCode: `${createTransactionBankData.bankSubCode}`,
    senderNationality: `${createTransactionBankData.senderNationality}`,
    senderDateOfBirth: `${createTransactionBankData.senderDateOfBirth}`,
    idType: `${createTransactionBankData.idType}`,
    idNumber: `${createTransactionBankData.idNumber}`,
    expiryDate: `${createTransactionBankData.expiryDate}`,
    addressLine1: `${createTransactionBankData.addressLine1}`,
    city: `${createTransactionBankData.city}`,
    country: `${createTransactionBankData.country}`,
    firstName: `${createTransactionBankData.firstName}`,
    lastName: `${createTransactionBankData.lastName}`,
    receiverFirstName: `${createTransactionBankData.receiverFirstName}`,
    receiverLastName: `${createTransactionBankData.receiverLastName}`,
    quoteId: `${createTransactionBankData.quoteId}`,
    receivingCountry: `${createTransactionBankData.receivingCountry}`,
    remittancePurpose: `${createTransactionBankData.remittancePurpose}`,
    sourceOfFunds: `${createTransactionBankData.sourceOfFunds}`,
    relationshipSender: `${createTransactionBankData.relationshipSender}`,
  }
  const MandatoryBankB2BFields = {
    amount: `${bankTransactionB2BData.amount}`,
    currency: `${bankTransactionB2BData.currency}`,
    transRef: `${bankTransactionB2BData.transRef}`,
    sendingAmount: `${bankTransactionB2BData.sendingAmount}`,
    payinCcyCode: `${bankTransactionB2BData.payinCcyCode}`,
    paymentMode: `${bankTransactionB2BData.paymentMode}`,
    authenticationPartnerCode: `${bankTransactionB2BData.authenticationPartnerCode}`,
    paymentOption: `${bankTransactionB2BData.paymentOption}`,
    sendingPartnerCode: `${bankTransactionB2BData.sendingPartnerCode}`,
    senderMsisdn: `${bankTransactionB2BData.senderMsisdn}`,
    receiverBankaccountno: `${bankTransactionB2BData.receiverBankaccountno}`,
    receiverBankCode: `${bankTransactionB2BData.receiverBankCode}`,
    receiverBankName: `${bankTransactionB2BData.receiverBankName}`,
    senderBusinessName: `${bankTransactionB2BData.senderBusinessName}`,
    senderBusinessAddress1: `${bankTransactionB2BData.senderBusinessAddress1}`,
    senderBusinessPrimaryContactCountryCode: `${bankTransactionB2BData.senderBusinessPrimaryContactCountryCode}`,
    senderBusinessPrimaryContactNo: `${bankTransactionB2BData.senderBusinessPrimaryContactNo}`,
    senderBusinessEmail: `${bankTransactionB2BData.senderBusinessEmail}`,
    senderBusinessCountryCode: `${bankTransactionB2BData.senderBusinessCountryCode}`,
    senderBusinessRegistrationType: `${bankTransactionB2BData.senderBusinessRegistrationType}`,
    senderBusinessRegistrationNumber: `${bankTransactionB2BData.senderBusinessRegistrationNumber}`,
    senderBusinessIDValidThru: `${bankTransactionB2BData.senderBusinessIDValidThru}`,
    recepientBusinessName: `${bankTransactionB2BData.recepientBusinessName}`,
    recepientBusinessAddressCountryCode: `${bankTransactionB2BData.recepientBusinessAddressCountryCode}`,
    quoteId: `${bankTransactionB2BData.quoteId}`,
    receivingCountry: `${bankTransactionB2BData.receivingCountry}`,
    remittancePurpose: `${bankTransactionB2BData.remittancePurpose}`, 
    sourceOfFunds: `${bankTransactionB2BData.sourceOfFunds}`, 
  }

  const MandatoryMobileB2BFields = {
    amount: `${mobileTransactionB2BData.amount}`,
    currency: `${mobileTransactionB2BData.currency}`,
    transRef: `${mobileTransactionB2BData.transRef}`,
    sendingAmount: `${mobileTransactionB2BData.sendingAmount}`,
    payinCcyCode: `${mobileTransactionB2BData.payinCcyCode}`,
    paymentMode: `${mobileTransactionB2BData.paymentMode}`,
    authenticationPartnerCode: `${mobileTransactionB2BData.authenticationPartnerCode}`,
    paymentOption: `${mobileTransactionB2BData.paymentOption}`,
    sendingPartnerCode: `${mobileTransactionB2BData.sendingPartnerCode}`,
    senderMsisdn: `${mobileTransactionB2BData.senderMsisdn}`,
    receiverMsisdn: `${mobileTransactionB2BData.receiverMsisdn}`,
    senderBusinessName: `${mobileTransactionB2BData.senderBusinessName}`,
    senderBusinessAddress1: `${mobileTransactionB2BData.senderBusinessAddress1}`,
    senderBusinessPrimaryContactCountryCode: `${mobileTransactionB2BData.senderBusinessPrimaryContactCountryCode}`,
    senderBusinessPrimaryContactNo: `${mobileTransactionB2BData.senderBusinessPrimaryContactNo}`,
    senderBusinessEmail: `${mobileTransactionB2BData.senderBusinessEmail}`,
    senderBusinessCountryCode: `${mobileTransactionB2BData.senderBusinessCountryCode}`,
    senderBusinessRegistrationType: `${mobileTransactionB2BData.senderBusinessRegistrationType}`,
    senderBusinessRegistrationNumber: `${mobileTransactionB2BData.senderBusinessRegistrationNumber}`,
    senderBusinessIDValidThru: `${mobileTransactionB2BData.senderBusinessIDValidThru}`,
    recepientBusinessName: `${mobileTransactionB2BData.recepientBusinessName}`,
    recepientBusinessAddressCountryCode: `${mobileTransactionB2BData.recepientBusinessAddressCountryCode}`,
    quoteId: `${mobileTransactionB2BData.quoteId}`,
    receivingCountry: `${mobileTransactionB2BData.receivingCountry}`,
    remittancePurpose: `${mobileTransactionB2BData.remittancePurpose}`,
    sourceOfFunds: `${mobileTransactionB2BData.sourceOfFunds}`,
    }
  const MandatoryBankB2PFields = {
    senderMsisd: `${bankTransactionB2PData.senderMsisd}`,
    amount: `${bankTransactionB2PData.amount}`,
    currency: `${bankTransactionB2PData.currency}`,
    type: `${bankTransactionB2PData.type}`,
    transRef: `${bankTransactionB2PData.transRef}`,
    sendingAmount: `${bankTransactionB2PData.sendingAmount}`,
    payinCcyCode: `${bankTransactionB2PData.payinCcyCode}`,
    paymentMode: `${bankTransactionB2PData.paymentMode}`,
    authenticationPartnerCode: `${bankTransactionB2PData.authenticationPartnerCode}`,
    paymentOption: `${bankTransactionB2PData.paymentOption}`,
    sendingPartnerCode: `${bankTransactionB2PData.sendingPartnerCode}`,
    receiverBankaccountno: `${bankTransactionB2PData.receiverBankaccountno}`,
    receiverBankCode: `${bankTransactionB2PData.receiverBankCode}`,
    receiverBankName: `${bankTransactionB2PData.receiverBankName}`,
    businessName: `${bankTransactionB2PData.businessName}`,
    businessAddress1: `${bankTransactionB2PData.businessAddress1}`,
    businessPrimaryContactCountryCode: `${bankTransactionB2PData.businessPrimaryContactCountryCode}`,
    businessPrimaryContactNo: `${bankTransactionB2PData.businessPrimaryContactNo}`,
    businessEmail: `${bankTransactionB2PData.businessEmail}`,
    businessCountryCode: `${bankTransactionB2PData.businessCountryCode}`,
    businessRegistrationType: `${bankTransactionB2PData.businessRegistrationType}`,
    businessRegistrationNumber: `${bankTransactionB2PData.businessRegistrationNumber}`,
    businessIDValidThru: `${bankTransactionB2PData.businessIDValidThru}`,
    quoteId: `${bankTransactionB2PData.quoteId}`,
    receivingCountry: `${bankTransactionB2PData.receivingCountry}`,
    remittancePurpose: `${bankTransactionB2PData.remittancePurpose}`,
    sourceOfFunds: `${bankTransactionB2PData.sourceOfFunds}`,
    relationshipSender: `${bankTransactionB2PData.relationshipSender}`,
    receiverFirstName: `${bankTransactionB2PData.receiverFirstName}`,
    receiverLastName: `${bankTransactionB2PData.receiverLastName}`,
    }
  const MandatoryMobileB2PFields = {
    amount: `${mobileTransactionB2PData.amount}`,
    currency: `${mobileTransactionB2PData.currency}`,
    transRef: `${mobileTransactionB2PData.transRef}`,
    sendingAmount: `${mobileTransactionB2PData.sendingAmount}`,
    payinCcyCode: `${mobileTransactionB2PData.payinCcyCode}`,
    paymentMode: `${mobileTransactionB2PData.paymentMode}`,
    authenticationPartnerCode: `${mobileTransactionB2PData.authenticationPartnerCode}`,
    paymentOption: `${mobileTransactionB2PData.paymentOption}`,
    sendingPartnerCode: `${mobileTransactionB2PData.sendingPartnerCode}`,
    senderMsisd: `${mobileTransactionB2PData.senderMsisd}`,
    receiverMsisd: `${mobileTransactionB2PData.receiverMsisd}`,
    businessName: `${mobileTransactionB2PData.businessName}`,
    businessAddress1: `${mobileTransactionB2PData.businessAddress1}`,
    businessEmail: `${mobileTransactionB2PData.businessEmail}`,
    businessCountryCode: `${mobileTransactionB2PData.businessCountryCode}`,
    businessRegistrationType: `${mobileTransactionB2PData.businessRegistrationType}`,
    businessRegistrationNumber: `${mobileTransactionB2PData.businessRegistrationNumber}`,
    businessIDValidThru: `${mobileTransactionB2PData.businessIDValidThru}`,
    receiverFirstName: `${mobileTransactionB2PData.receiverFirstName}`,
    receiverLastName: `${mobileTransactionB2PData.receiverLastName}`,
    quoteId: `${mobileTransactionB2PData.quoteId}`,
    receivingCountry: `${mobileTransactionB2PData.receivingCountry}`,
    remittancePurpose: `${mobileTransactionB2PData.remittancePurpose}`,
    sourceOfFunds: `${mobileTransactionB2PData.sourceOfFunds}`,
    relationshipSender: `${mobileTransactionB2PData.relationshipSender}`,
    }
  const MandatoryBankP2BFields = {
    amount: `${bankTransactionP2BData.amount}`,
    currency: `${bankTransactionP2BData.currency}`,
    transRef: `${bankTransactionP2BData.transRef}`,
    sendingAmount: `${bankTransactionP2BData.sendingAmount}`,
    payinCcyCode: `${bankTransactionP2BData.payinCcyCode}`,
    paymentMode: `${bankTransactionP2BData.paymentMode}`,
    authenticationPartnerCode: `${bankTransactionP2BData.authenticationPartnerCode}`,
    paymentOption: `${bankTransactionP2BData.paymentOption}`,
    sendingPartnerCode: `${bankTransactionP2BData.sendingPartnerCode}`,
    senderMsisdn: `${bankTransactionP2BData.senderMsisdn}`,
    receiverBankaccountno: `${bankTransactionP2BData.receiverBankaccountno}`,
    receiverBankCode: `${bankTransactionP2BData.receiverBankCode}`,
    receiverBankName: `${bankTransactionP2BData.receiverBankName}`,
    senderBusinessPrimaryContactCountryCode: `${bankTransactionP2BData.senderBusinessPrimaryContactCountryCode}`,
    senderBusinessPrimaryContactNo: `${bankTransactionP2BData.senderBusinessPrimaryContactNo}`,
    senderBusinessPrimaryContactNoType: `${bankTransactionP2BData.senderBusinessPrimaryContactNoType}`,
    idType: `${bankTransactionP2BData.idType}`,
    idNumber: `${bankTransactionP2BData.idNumber}`,
    expiryDate: `${bankTransactionP2BData.expiryDate}`,
    addressLine1: `${bankTransactionP2BData.addressLine1}`,
    city: `${bankTransactionP2BData.city}`,
    firstName: `${bankTransactionP2BData.firstName}`,
    lastName: `${bankTransactionP2BData.lastName}`,
    businessName: `${bankTransactionP2BData.businessName}`,
    businessAddressCountryCode: `${bankTransactionP2BData.businessAddressCountryCode}`,
    quoteId: `${bankTransactionP2BData.quoteId}`,
    receivingCountry: `${bankTransactionP2BData.receivingCountry}`,
    remittancePurpose: `${bankTransactionP2BData.remittancePurpose}`,
    sourceOfFunds: `${bankTransactionP2BData.sourceOfFunds}`,
    }
  const MandatoryMobileP2BFields = {
    amount: `${mobileTransactionP2BData.amount}`,
    currency: `${mobileTransactionP2BData.currency}`,
    transRef: `${mobileTransactionP2BData.transRef}`,
    sendingAmount: `${mobileTransactionP2BData.sendingAmount}`,
    payinCcyCode: `${mobileTransactionP2BData.payinCcyCode}`,
    paymentMode: `${mobileTransactionP2BData.paymentMode}`,
    authenticationPartnerCode: `${mobileTransactionP2BData.authenticationPartnerCode}`,
    paymentOption: `${mobileTransactionP2BData.paymentOption}`,
    sendingPartnerCode: `${mobileTransactionP2BData.sendingPartnerCode}`,
    senderMsisdn: `${mobileTransactionP2BData.senderMsisdn}`,
    receiverMsisdn: `${mobileTransactionP2BData.receiverMsisdn}`,
    nationality: `${mobileTransactionP2BData.nationality}`,
    dateOfBirth: `${mobileTransactionP2BData.dateOfBirth}`,
    senderBusinessPrimaryContactCountryCode: `${mobileTransactionP2BData.senderBusinessPrimaryContactCountryCode}`,
    senderBusinessPrimaryContactNo: `${mobileTransactionP2BData.senderBusinessPrimaryContactNo}`,
    senderPrimaryContactNoType: `${mobileTransactionP2BData.senderPrimaryContactNoType}`,
    idType: `${mobileTransactionP2BData.idType}`,
    idNumber: `${mobileTransactionP2BData.idNumber}`,
    addressLine1: `${mobileTransactionP2BData.addressLine1}`,
    city: `${mobileTransactionP2BData.city}`,
    country: `${mobileTransactionP2BData.country}`,
    firstName: `${mobileTransactionP2BData.firstName}`,
    lastName: `${mobileTransactionP2BData.lastName}`,
    businessName: `${mobileTransactionP2BData.businessName}`,
    businessAddressCountryCode: `${mobileTransactionP2BData.businessAddressCountryCode}`,
    quoteId: `${mobileTransactionP2BData.quoteId}`,
    receivingCountry: `${mobileTransactionP2BData.receivingCountry}`,
    remittancePurpose: `${mobileTransactionP2BData.remittancePurpose}`,
    sourceOfFunds: `${mobileTransactionP2BData.sourceOfFunds}`,
    expiryDate: `${mobileTransactionP2BData.expiryDate}`,
    }
  useEffect(() => {
    if (endPoint === 'Account Status Mobile') {
      setHeaderObject(MandatoryMobileAccountFields)
    } else if(endPoint === "Account Status Bank"){
      setHeaderObject(MandatoryBankAccountFields)
    }else if(endPoint === "Cancel Transaction"){
      setHeaderObject(MandatoryCancelTransFields)
    }else if (endPoint === "Get Bank List") {
      setHeaderObject(getBankListData);
    }else if (endPoint === "Corridor Quotation") {
      setHeaderObject(corridorQuotationData);
    }else if (endPoint === "Reverse Transaction") {
      setHeaderObject(MandatoryReverseTransFields);
    } else if (endPoint === "Create Quotation Bank") {
      setHeaderObject(MandatoryBankQuotationFields);
    } else if (endPoint === "Create Quotation Mobile") {
      setHeaderObject(MandatoryMobileQuotationFields);
    } else if (endPoint === "View Transaction Bank") {
      setHeaderObject(viewTransactionBankData);
  } else if (endPoint === "View Transaction Mobile") {
      setHeaderObject(viewTransactionMobileData);
  }else if (endPoint === "Create Transaction Bank") {
    setHeaderObject(MandatoryBankCreateTransFields);
  }else if (endPoint === "Create Transaction Mobile") {
    setHeaderObject(MandatoryMobileCreateTransFields);
  } else if (endPoint === "B2B Transaction Bank") {
    setHeaderObject(MandatoryBankB2BFields);
  }else if (endPoint === "B2B Transaction Mobile") {
    setHeaderObject(MandatoryMobileB2BFields);
  }else if (endPoint === "B2P Transaction Bank") {
    setHeaderObject(MandatoryBankB2PFields);
  }else if (endPoint === "B2P Transaction Mobile") {
    setHeaderObject(MandatoryMobileB2PFields);
  }else if (endPoint === "P2B Transaction Bank") {
    setHeaderObject(MandatoryBankP2BFields);
  }else if (endPoint === "P2B Transaction Mobile") {
    setHeaderObject(MandatoryMobileP2BFields);
  }else if (endPoint === "P2B Transaction Mobile") {
    setHeaderObject(MandatoryMobileP2BFields);
  }else if (endPoint === "Ledger Balance") {
    setHeaderObject(MandatoryLedgerBalanceFields);
  }
  }, [endPoint, mobileAccountStatusData, cancelTransactionData, bankAccountStatusData,createQuotationMobileData,createTransactionBankData,
    viewTransactionMobileData, getBankListData, corridorQuotationData, reverseTransactionData, createQuotationBank, viewTransactionBankData,
    createTransactionMobileData, bankTransactionB2BData, mobileTransactionB2BData, bankTransactionB2PData, mobileTransactionB2PData,
    bankTransactionP2BData, mobileTransactionP2BData])

  const [responseScreen, setResponseScreen] = useState(false)
  const [apiResponseData, setApiResponseData] = useState("")
  const [apiResponseHeaderData, setApiResponseHeaderData] = useState("")


  return (
    <Box height="100vh" position="fixed" width="100%">
    <BrowserRouter>
      <TryitHeader
        bankAccountStatusData={bankAccountStatusData}
        mobileAccountStatusData={mobileAccountStatusData}
        cancelTransactionData={cancelTransactionData}
        getBankListData={getBankListData}
        corridorQuotationData={corridorQuotationData}
        reverseTransactionData={reverseTransactionData}
        createQuotationBank={createQuotationBank}
        createQuotationMobileData={createQuotationMobileData}
        viewTransactionMobileData={viewTransactionMobileData}
        viewTransactionBankData={viewTransactionBankData}
        createTransactionBankData={createTransactionBankData}
        createTransactionMobileData={createTransactionMobileData}
        bankTransactionB2BData={bankTransactionB2BData}
        mobileTransactionB2BData={mobileTransactionB2BData}
        bankTransactionB2PData={bankTransactionB2PData}
        mobileTransactionB2PData={mobileTransactionB2PData}
        bankTransactionP2BData={bankTransactionP2BData}
        mobileTransactionP2BData={mobileTransactionP2BData}
        ledgerBalanceData={ledgerBalanceData}
        endPoint={endPoint}
        allowUatAccess={allowUatAccess}
        setAllowUatAccess={setAllowUatAccess}
        setEndPoint={setEndPoint}
        environment={environment}
        setEnvironment={setEnvironment}
        country={country}
        setCountry={setCountry}
        userName={userName}
        setuserName={setuserName}
        password={password}
        setPassword={setPassword}
        setResponseScreen={setResponseScreen}
        transRef={transRef}
        setApiResponseData={setApiResponseData}
        setApiResponseHeaderData={setApiResponseHeaderData}
        headerObject={headerObject}
      />
      <div>
        <Routes basename={process.env.REACT_APP_BASE_URL}>
          <Route path="/" element={<Home />} />
          <Route path={`/${process.env.REACT_APP_BASE_URL}`} element={<Home />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/ledger`} element={<Ledger ledgerBalanceData={ledgerBalanceData} setLedgerBalanceData={setLedgerBalanceData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/account-status-mobile`} element={<MobileAccountStatus responseScreen={responseScreen} mobileAccountStatusData={mobileAccountStatusData} setMobileAccountStatusData={setMobileAccountStatusData} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/account-status-bank`} element={<BankAccountStatus apiResponseHeaderData={apiResponseHeaderData} responseScreen={responseScreen} bankAccountStatusData={bankAccountStatusData} setBankAccountStatusData={setBankAccountStatusData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/create-quotation-bank`} element={<BankCreateQuotation createQuotationBank={createQuotationBank} setCreateQuotationBank={setCreateQuotationBank} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/create-quotation-mobile`} element={<MobileCreateQuotation setCreateQuotationMobileData={setCreateQuotationMobileData} createQuotationMobileData={createQuotationMobileData} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/corridor-quotation`} element={<Corridor corridorQuotationData={corridorQuotationData} setCorridorQuotationData={setCorridorQuotationData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/get-bank-list`} element={<BankList responseScreen={responseScreen} setGetBankListData={setGetBankListData} getBankListData={getBankListData} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/cancel-transaction`} element={<TransactionCancel responseScreen={responseScreen} apiResponseData={apiResponseData} cancelTransactionData={cancelTransactionData} setCancelTransactionData={setCancelTransactionData} apiResponseHeaderData={apiResponseHeaderData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/reverse-transaction`} element={<TransactionReverse reverseTransactionData={reverseTransactionData} setReverseTransactionData={setReverseTransactionData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/view-transaction-bank`} element={<BankViewTransaction responseScreen={responseScreen} viewTransactionBankData={viewTransactionBankData} setViewTransactionBankData={setViewTransactionBankData} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/view-transaction-mobile`} element={<MobileViewTransaction viewTransactionMobileData={viewTransactionMobileData} setViewTransactionMobileData={setViewTransactionMobileData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/create-transaction-bank`} element={<BankCreateTransaction createTransactionBankData={createTransactionBankData} setCreateTransactionBankData={setCreateTransactionBankData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/create-transaction-mobile`} element={<MobileCreateTransaction createTransactionMobileData={createTransactionMobileData} setCreateTransactionMobileData={setCreateTransactionMobileData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/b2b-transaction-bank`} element={<BankTransactionB2B bankTransactionB2BData={bankTransactionB2BData} setBankTransactionB2BData={setBankTransactionB2BData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/b2b-transaction-mobile`} element={<MobileTransactionB2B mobileTransactionB2BData={mobileTransactionB2BData} setMobileTransactionB2BData={setMobileTransactionB2BData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/b2p-transaction-bank`} element={<BankTransactionB2P bankTransactionB2PData={bankTransactionB2PData} setBankTransactionB2PData={setBankTransactionB2PData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/b2p-transaction-mobile`} element={<MobileTransactionB2P  mobileTransactionB2PData={mobileTransactionB2PData} setMobileTransactionB2PData={setMobileTransactionB2PData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/p2b-transaction-bank`} element={<BankTransactionP2B  bankTransactionP2BData={bankTransactionP2BData} setBankTransactionP2BData={setBankTransactionP2BData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/p2b-transaction-mobile`} element={<MobileTransactionP2B  mobileTransactionP2BData={mobileTransactionP2BData} setMobileTransactionP2BData={setMobileTransactionP2BData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} allowUatAccess={allowUatAccess} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Box>
  );
}

export default App;
