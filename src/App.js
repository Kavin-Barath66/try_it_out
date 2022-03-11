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
  const [environment, setEnvironment] = useState("")
  const [endPoint, setEndPoint] = useState("")
  const [userName, setuserName] = useState("OpenTurfDev")
  const [password, setPassword] = useState("85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56")

  const [transRef, setTransRef] = useState("SrcTxnId001")
  const [getBankListData, setGetBankListData] = useState({ 
    country: 'BD',
    lastUpdatedOn:'',
    bankName:'',
    bankCode:'',
    providerCode:'',
    status:''
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
    bnv: 'Deepa Jain',
    bankCode: 'HDFC0001626',
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
  const [corridorQuotationData, setCorridorQuotationData] = useState({ currency: 'USD' })
  const [reverseTransactionData, setReverseTransactionData] = useState({
    reason: 'reversing',
    txId: 'TPOT000000723616',
  })
  const [createQuotationBank, setCreateQuotationBank] = useState({
    requestDate: '2017-06-20 12:27:16',
    bankaccountno: '50100002965304',
    receivingCountry: 'IN',
    requestAmount: '500',
    requestCurrency: 'INR',
    sendingCurrency: 'USD',
    receivingCurrency: 'INR',
    senderMsisdn:'+9779840002320',
    receiverMsisdn:'+255897378383',
  })
  const [createQuotationMobileData, setCreateQuotationMobileData] = useState({
    requestDate: '2017-06-20 12:27:16',
    reciverMsisdn: '+9779840002320',
    requestAmount: '500',
    requestCurrency: 'INR',
    sendingCurrency: 'USD',
    receivingCurrency: 'INR',
    senderMsisdn:'+255897378383',
    receiverCountry:'IN',
    receiverBankaccountno:'50100002965304',
  })
  const [ledgerBalanceData, setLedgerBalanceData] = useState({ currency: 'USD' })
  const [viewTransactionMobileData, setViewTransactionMobileData] = useState({transRef:"SrcTxnId001"})
  const [viewTransactionBankData, setViewTransactionBankData] = useState({transRef:"SrcTxnId001"})
  const [createTransactionBankData, setCreateTransactionBankData] = useState({
    amount: "500",
    currency: "INR",
    type: "inttransfer",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "SrcTxnId002",
    senderMsisd: "+971810456234",
    receiverBankaccountno:"50100002965304",
    receiverBankName: "HDFC Bank",
    receiverBankCode: "HDFC0001626",
    senderNationality: "AE",
    senderDateOfBirth: "1967-05-28",
    senderGender: "M",
    idType: "VOT",
    idNumber: "13321115521",
    issueDate: "1967-05-28",
    expiryDate: "2067-05-28",
    issuerCountry: "AE",
    addressLine1: "49 park street",
    addressLine2: "12",
    addressLine3: "12",
    city: "12",
    stateProvince: "12",
    postalCode: "50000",
    country: "US",
    firstName: "Test",
    middleName: " ",
    lastName: "Sender2",
    receiverFirstName: "Deepa",
    receiverLastName: "Jain",
    quoteId: "QR037C1NA6ZXBSQ88B",
    receivingCountry: "IN",
    remittancePurpose: "Family Maintainance",
    sourceOfFunds: "Salary",
    relationshipSender: "Brother",
    /* optional Fields */
    provider:"",
    receiverMsisdn:"",
    receiverBankAccountType:"",
    bankCode:"",
    senderTitle:"",
    receiverNationality:"",
    receiverDOB:"",
    receiverIdType:"",
    receiverIdNumber:"",
    receiverIssueDate:"",
    receiverExpiryDate:"",
    receiverIssuerCountry:"",
    receiverAddressLine1:"",
    receiverAddressLine2:"",
    receiverAddressLine3:"",
    receiverCity:"",
    receiverState:"",
    receiverPostalCode:"",
    receiverCountry:"",
  })
  const [createTransactionMobileData, setCreateTransactionMobileData] = useState({
    amount: "500",
    currency: "NPR",
    type: "inttransfer",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "SrcTxnId001",
    senderMsisdn: "+971810456234",
    receiverMsisdn:"+9779840002320",
    nationality: "AE",
    dateOfBirth: "1967-05-28",
    gender: "M",
    idType: "VOTER_CARD",
    idNumber: "13321115521",
    issueDate: "1967-05-28",
    expiryDate: "2067-05-28",
    issuerCountry: "AE",
    addressLine1: "49 park street",
    addressLine2: "12",
    addressLine3: "12",
    city: "12",
    stateProvince: "12",
    postalCode: "50000",
    country: "US",
    firstName: "Test",
    middleName: " ",
    lastName: "Sender",
    receiverFirstName: "David",
    receiverLastName: "Robinson",
    quoteId: "QT037C1NQ6BHMV59A3",
    receivingCountry: "NP",
    remittancePurpose: "Family Maintainance",
    sourceOfFunds: "Salary",
    relationshipSender: "Brother",
    /*  */
    providerCode:'123',
    senderBankAccountno:'12312',
    receiverBankAccountType:'accountType',
    bankCode:'HDFC23',
    bankName:'HDFC',
    bankSubCode:'2343',
    senderTitle:'title',
    receiverNationality:'IN',
    receiverDOB:'Date',
    receiverIdType:'Id',
    receiverIdNumber:'Id',
    receiverIssueDate:'Date',
    receiverExpiryDate:'Date',
    receiverIssuerCountry:'IN',
    receiverAddressLine1: "49 park street",
    receiverAddressLine2: "12",
    receiverAddressLine3: "12",
    receiverCity:'city',
    receiverState:'state',
    receiverPostalCode:'postalcode',
    receiverCountry:'country',


})

const [bankTransactionB2BData, setBankTransactionB2BData] = useState({
  amount: "500",
  currency: "INR",
  type: "b2b",
  descriptionText: "Gift for my brother",
  requestDate: "2021-05-23 08:19:36",
  transRef: "SrcTxnId004",
  senderMsisdn: "+971810456234",
  receiverBankaccountno:"50100002965304",
  receiverBankName:"HDFC Bank",
  receiverBankCode:"HDFC0001626",
  sendingAmount: "35500.00",
  payinCcyCode: "USD",
  paymentMode: "cash",
  authenticationPartnerCode: "4534",
  paymentOption: "Mobile Wallet",
  sendingPartnerCode: "343432223",
  receivingPartnerCode: "343432223",
  senderBusinessName: "sample business",
  senderBusinessAddress1: "alton's road",
  senderBusinessAddressCity: "Lyon",
  senderBusinessAddressCountryCode: "US",
  senderBusinessPrimaryContactCountryCode: "US",
  senderBusinessPrimaryContactNo: "3472034605",
  senderBusinessDescription: "Electronics",
  senderBusinessCountryCode: "US",
  senderBusinessRegistrationType: "Private Limited Company",
  senderBusinessRegistrationNumber: "23123456789",
  senderBusinessRegistrationIssueDate: "2001-09-26",
  senderBusinessIDValidThru: "2033-09-26",
  senderBusinessEmail: "test@testemail.com",
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
  recepientBusinessMobile: "343234433",
  recepientBusinessPObox: "12345",
  quoteId: "QR037C1NA1XDKDL53E",
  receivingCountry: "IN",
  remittancePurpose: "Business Travel",
  sourceOfFunds: "Business Income",
  relationshipSender: "Employer",
  /* optional */
  providerCode:'',
  receiverMsisdn:'',
  beneficiarySmsNotify:'',
  receiverBankAccountType:'',
  banksubcode:'',
  accountIBAN:'',
  accountAdditionalNo1:"",
  accountAdditionalNo2:"",
})

const [mobileTransactionB2BData, setMobileTransactionB2BData] = useState({
  amount: "500",
  currency: "INR",
  type: "b2b",
  descriptionText: "Gift for my brother",
  requestDate: "2021-05-23 08:19:36",
  transRef: "SrcTxnId004",
  senderMsisdn: "+971810456234",
  receiverMsisdn:"+2349061114853",
  sendingAmount: "35500.00",
  payinCcyCode: "USD",
  paymentMode: "cash",
  authenticationPartnerCode: "4534",
  paymentOption: "Mobile Wallet",
  sendingPartnerCode: "343432223",
  receivingPartnerCode: "343432223",
  senderBusinessName: "sample business",
  senderBusinessAddress1: "alton's road",
  senderBusinessAddressCity: "Lyon",
  senderBusinessAddressCountryCode: "US",
  senderBusinessPrimaryContactCountryCode: "US",
  senderBusinessPrimaryContactNo: "3472034605",
  senderBusinessDescription: "Electronics",
  senderBusinessCountryCode: "US",
  senderBusinessRegistrationType: "Private Limited Company",
  senderBusinessRegistrationNumber: "23123456789",
  senderBusinessRegistrationIssueDate: "2001-09-26",
  senderBusinessIDValidThru: "2033-09-26",
  senderBusinessEmail: "test@testemail.com",
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
  recepientBusinessMobile: "343234433",
  recepientBusinessPObox: "12345",
  quoteId: "QR037C1NA1XDKDL53E",
  receivingCountry: "IN",
  remittancePurpose: "Business Travel",
  sourceOfFunds: "Business Income",
  relationshipSender: "Employer",
  /* Optinal */
  providerCode:'',
  beneficiarySmsNotify:'',
  receiverBankaccountno:'',
  receiverBankAccountType:'',
  bankCode:'',
  bankName:'',
  bankSubCode:'',
  accountIBAN:'',
  accountAdditionalNo1:'',
  accountAdditionalNo2:'',
  senderBusinessPINCode:'',
  senderBusinessAddress2: "",
  senderBusinessAddressZip:'',
  senderBusinessRegistrationIssuedBy:'',
  senderBusinessRegistrationIssuedAt:'',



})
{/* B2P */}
const [bankTransactionB2PData, setBankTransactionB2PData] = useState({
  amount: "500",
  currency: "INR",
  type: "b2p",
  descriptionText: "Gift for my brother",
  requestDate: "2021-05-23 08:19:36",
  transRef: "SrcTxnId003435435dygy",
  senderMsisd:"+9779840002320",
  receiverBankaccountno:"50100002965304",
  receiverBankName:"HDFC Bank",
  receiverBankCode:"HDFC0001626",
  receiverFirstName: "David",
  receiverLastName: "Robinson",
  sendingAmount: "35500.00",
  payinCcyCode: "USD",
  paymentMode: "cash",
  authenticationPartnerCode: "4534",
  paymentOption: "Mobile Wallet",
  sendingPartnerCode: "343432223",
  receivingPartnerCode: "343432223",
  businessName: "sample business",
  businessAddress1: "alton's road",
  businessAddressCity: "Lyon",
  businessAddressCountryCode: "US",
  businessPrimaryContactCountryCode: "US",
  businessPrimaryContactNo: "3472034605",
  businessDescription: "Electronics",
  businessCountryCode: "US",
  businessRegistrationType: "Private Limited Company",
  businessRegistrationNumber: "23123456789",
  businessRegistrationIssueDate: "2001-09-26",
  businessIDValidThru: "2033-09-26",
  businessEmail: "test@testemail.com",
  quoteId: "QR037C1NZWQLJ42P1F",
  receivingCountry: "IN",
  remittancePurpose: "Business Travel",
  sourceOfFunds: "Business Income",
  relationshipSender: "Employer",
})
const [mobileTransactionB2PData, setMobileTransactionB2PData] = useState({
  amount: "500",
  currency: "INR",
  type: "b2p",
  descriptionText: "Gift for my brother",
  requestDate: "2021-05-23 08:19:36",
  transRef: "SrcTxnId0098u3",
  senderMsisd:"+9779840002320",
  receiverMsisd:"+971810456234",
  receiverFirstName: "David",
  receiverLastName: "Robinson",
  sendingAmount: "35500.00",
  payinCcyCode: "USD",
  paymentMode: "cash",
  authenticationPartnerCode: "4534",
  paymentOption: "Mobile Wallet",
  sendingPartnerCode: "343432223",
  receivingPartnerCode: "343432223",
  businessName: "sample business",
  businessAddress1: "alton's road",
  businessAddressCity: "Lyon",
  businessAddressCountryCode: "US",
  businessPrimaryContactCountryCode: "US",
  businessPrimaryContactNo: "3472034605",
  businessDescription: "Electronics",
  businessCountryCode: "US",
  businessRegistrationType: "Private Limited Company",
  businessRegistrationNumber: "23123456789",
  businessRegistrationIssueDate: "2001-09-26",
  businessIDValidThru: "2033-09-26",
  businessEmail: "test@testemail.com",
  quoteId: "QR037C1NZWQLJ42P1F",
  receivingCountry: "IN",
  remittancePurpose: "Business Travel",
  sourceOfFunds: "Business Income",
  relationshipSender: "Employer",
})
  const [bankTransactionP2BData, setBankTransactionP2BData] = useState({
    amount: "500",
    currency: "INR",
    type: "p2b",
    descriptionText: "Gift for my brother",
    requestDate: "2021-05-23 08:19:36",
    transRef: "SrcTxnId005",
    senderMsisdn:"+971810456234",
    receiverBankaccountno:"50100002965304",
    receiverBankName:"HDFC Bank",
    receiverBankCode:"HDFC0001626",
    nationality: "AE",
    dateOfBirth: "1967-05-28",
    gender: "M",
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
    businessMobile: "343234433",
    quoteId: "QR037C1NA6ZXBSQ88B",
    receivingCountry: "IN",
    remittancePurpose: "Business Travel",
    sourceOfFunds: "Business Income",
    relationshipSender: "Employer",
})

const [mobileTransactionP2BData, setMobileTransactionP2BData] = useState({
  amount: "500",
  currency: "INR",
  type: "p2b",
  descriptionText: "Gift for my brother",
  requestDate: "2021-05-23 08:19:36",
  transRef: "SrcTxnId005",
  senderMsisdn:"+971810456234",
  receiverMsisdn:"+971810456234",
  nationality: "AE",
  dateOfBirth: "1967-05-28",
  gender: "M",
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
  businessMobile: "343234433",
  quoteId: "QR037C1NA6ZXBSQ88B",
  receivingCountry: "IN",
  remittancePurpose: "Business Travel",
  sourceOfFunds: "Business Income",
  relationshipSender: "Employer",
})

useEffect(() => {
  if (endPoint === 'Account Status Mobile') {
    setHeaderObject(mobileAccountStatusData)
  } else if(endPoint === "Account Status Bank"){
    setHeaderObject(bankAccountStatusData)
  }else if(endPoint === "Cancel Transaction"){
    setHeaderObject(cancelTransactionData)
  }else if (endPoint === "Get Bank List") {
    setHeaderObject(getBankListData);
  }else if (endPoint === "Corridor Quotation") {
    setHeaderObject(corridorQuotationData);
  }else if (endPoint === "Reverse Transaction") {
    setHeaderObject(reverseTransactionData);
  } else if (endPoint === "Create Quotation Bank") {
    setHeaderObject(createQuotationBank);
  } else if (endPoint === "Create Quotation Mobile") {
    setHeaderObject(createQuotationMobileData);
  } else if (endPoint === "View Transaction Bank") {
    setHeaderObject(viewTransactionBankData);
} else if (endPoint === "View Transaction Mobile") {
    setHeaderObject(viewTransactionMobileData);
}else if (endPoint === "Create Transaction Bank") {
  setHeaderObject(createTransactionBankData);
}else if (endPoint === "Create Transaction Mobile") {
  setHeaderObject(createTransactionMobileData);
} else if (endPoint === "B2B Transaction Bank") {
  setHeaderObject(bankTransactionB2BData);
}else if (endPoint === "B2B Transaction Mobile") {
  setHeaderObject(mobileTransactionB2BData);
}else if (endPoint === "B2P Transaction Bank") {
  setHeaderObject(bankTransactionB2PData);
}else if (endPoint === "B2P Transaction Mobile") {
  setHeaderObject(mobileTransactionB2PData);
}else if (endPoint === "P2B Transaction Bank") {
  setHeaderObject(bankTransactionP2BData);
}else if (endPoint === "P2B Transaction Mobile") {
  setHeaderObject(mobileTransactionP2BData);
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
