import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TryIt from './Pages/TryIt';
import Home from './Pages/Home';
import TryitBody from './Components/TryIt/TryitBody';
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
  const [getBankListData, setGetBankListData] = useState({country:'BD'})

  const [headerObject, setHeaderObject] = useState({})

  const [mobileAccountStatusData, setMobileAccountStatusData] = useState({
    msisdn: '+9779840002320',
    bnv: 'David Robinson',
  })
  const [bankAccountStatusData, setBankAccountStatusData] = useState({
    accountId: '50100002965304',
    bnv: 'Deepa%20Jain',
    bankCode:'HDFC0001626',
    bankName:'HDFC%20Bank',
    country:'IN',
  })
  const [cancelTransactionData, setCancelTransactionData] = useState({
    reason: 'cancelling',
    txId:'SrcTxnId4561',
  })
  const [corridorQuotationData, setCorridorQuotationData] = useState({currency:'USD'})
  const [reverseTransactionData, setReverseTransactionData] = useState({
    reason: 'reversing',
    txId:'TPOT000000723616',})
  const [createQuotationBank, setCreateQuotationBank] = useState({
    requestDate: '2017-06-20 12:27:16',
    bankaccountno:'50100002965304',
    receivingCountry:'IN',
    requestAmount:'500',
    requestCurrency:'INR',
    sendingCurrency:'USD',
    receivingCurrency:'INR',})
    const [createQuotationMobileData, setCreateQuotationMobileData] = useState({
      requestDate: '2017-06-20 12:27:16',
      reciverMsisdn:'50100002965304',
      requestAmount:'500',
      requestCurrency:'INR',
      sendingCurrency:'USD',
      receivingCurrency:'INR',})
  

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
    }
  }, [endPoint, mobileAccountStatusData, cancelTransactionData, bankAccountStatusData,createQuotationMobileData,
    getBankListData, corridorQuotationData, reverseTransactionData, createQuotationBank])

  const [responseScreen, setResponseScreen] = useState(false)
  const [apiResponseData, setApiResponseData] = useState("")
  const [apiResponseHeaderData, setApiResponseHeaderData] = useState("")


  return (
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
        endPoint={endPoint}
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
          <Route path="/" exact element={<Home />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/ledger`} exact element={<Ledger responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/account-status-mobile`} exact element={<MobileAccountStatus responseScreen={responseScreen} mobileAccountStatusData={mobileAccountStatusData} setMobileAccountStatusData={setMobileAccountStatusData} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/account-status-bank`} exact element={<BankAccountStatus apiResponseHeaderData={apiResponseHeaderData} responseScreen={responseScreen} bankAccountStatusData={bankAccountStatusData} setBankAccountStatusData={setBankAccountStatusData} apiResponseData={apiResponseData}  />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/create-quotation-bank`} exact element={<BankCreateQuotation createQuotationBank={createQuotationBank} setCreateQuotationBank={setCreateQuotationBank} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/create-quotation-mobile`} exact element={<MobileCreateQuotation setCreateQuotationMobileData={setCreateQuotationMobileData} createQuotationMobileData={createQuotationMobileData} responseScreen={responseScreen} apiResponseData={apiResponseData} apiResponseHeaderData={apiResponseHeaderData} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/corridor-quotation`} exact element={<Corridor corridorQuotationData={corridorQuotationData} setCorridorQuotationData={setCorridorQuotationData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/get-bank-list`} exact element={<BankList responseScreen={responseScreen} setGetBankListData={setGetBankListData} getBankListData={getBankListData} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/cancel-transaction`} exact element={<TransactionCancel responseScreen={responseScreen} apiResponseData={apiResponseData} cancelTransactionData={cancelTransactionData} setCancelTransactionData={setCancelTransactionData} apiResponseHeaderData={apiResponseHeaderData} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/reverse-transaction`} exact element={<TransactionReverse reverseTransactionData={reverseTransactionData} setReverseTransactionData={setReverseTransactionData} responseScreen={responseScreen} apiResponseHeaderData={apiResponseHeaderData} apiResponseData={apiResponseData} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/view-transaction-bank`}  exact element={<BankViewTransaction apiResponseHeaderData={apiResponseHeaderData} transRef={transRef} setTransRef={setTransRef} />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/view-transaction-mobile`} exact element={<MobileViewTransaction apiResponseData={apiResponseData} transRef={transRef} setTransRef={setTransRef} responseScreen={responseScreen} />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/create-transaction-bank`} exact element={<BankCreateTransaction />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/create-transaction-mobile`} exact element={<MobileCreateTransaction />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/b2b-transaction-bank`} exact element={<BankTransactionB2B />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/b2b-transaction-mobile`} exact element={<MobileTransactionB2B />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/b2p-transaction-bank`} exact element={<BankTransactionB2P />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/b2p-transaction-mobile`} exact element={<MobileTransactionB2P />} />

          <Route path={`${process.env.REACT_APP_BASE_URL}/p2b-transaction-bank`} exact element={<BankTransactionP2B />} />
          <Route path={`${process.env.REACT_APP_BASE_URL}/p2b-transaction-mobile`} exact element={<MobileTransactionP2B />} />
          <Route path="*"  element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
