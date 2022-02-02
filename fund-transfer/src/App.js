import {useEffect, useState} from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import "./App.css";

function App() {
  const [web3Api, setWeb3Api] = useState({
    web3: null,
    provider: null
  });

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getAccounts = async()=>{
      const accountList = await web3Api.web3.eth.getAccounts();
      setAccount(accountList && accountList[0]);
    }

    web3Api.web3 && getAccounts();
  }, [web3Api.web3]);

  useEffect(() => {
    if(account && web3Api.web3){
      const getBalance = async()=>{
        const accountBalance = await web3Api.web3.eth.getBalance(account);
        const balanceInEther = web3Api.web3.utils.fromWei(accountBalance, 'ether');
        setBalance(balanceInEther);
      }

      getBalance();
    }
  }, [account, web3Api.web3]);
  

  useEffect(() => {
    const loadProvider = async() => {
      const provider = await detectEthereumProvider();

      if(provider){
        await provider.request({method: "eth_requestAccounts"});
        setWeb3Api({
          provider,
          web3: new Web3(provider)
        });
      } else {
        console.error('Please install MetaMask!')
      }
      // if(window.ethereum){
      //   provider = window.ethereum;

      //   try {
      //     await provider.enable();
      //   } catch (error) {
      //     console.log("User not allowed ==> ", error.message);
      //   }
      // } else if(window.web3){
      //   provider = window.web3.currentProvider;
      // } else if(!process.env.production){
      //   provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      // }         
    }

    loadProvider();
  }, []);

  const connectToMetamask = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log(accounts);
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Funding</div>
        <div className="card-body">
          <h5 className="card-title">Balance: {balance} ETH </h5>
          <p className="card-text">My Account : {account ? account : "-"}</p>
          <button type="button" className="btn btn-warning " onClick={connectToMetamask}>
            Connect to MetaMask
          </button>
          &nbsp;
          <button type="button" className="btn btn-success ">
            Transfer
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary ">
            Withdraw
          </button>
        </div>
        <div className="card-footer text-muted">Chankapure Aarav :: DAPP</div>
      </div>
    </>
  );
}

export default App;
