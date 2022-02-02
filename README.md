# My first dapp - decentralised application

**PreRequisite:**
1. Solidity
2. ReactJS
3. Ganache [https://trufflesuite.com/ganache/]
4. Truffle [https://trufflesuite.com/docs/truffle/getting-started/installation]
5. Meta Mask account

===================================================<br/><br/>
**REACT APP**<br/><br/>
create new folder 'fund-transfer' <br/>
run below command<br/>
> **npm install create-react-app**<br/>
> **npx create-react-app funding-project**<br/>
> **npm install @metamask/detect-provider**<br/>
> **npm install --save react-scrpts@4.0.3**<br/>

used bootstrap for frontend design.<br/>
Added 'Connect', 'Transfer' & 'WIthdraw' actions.<br/><br/>

**TRUFFLE**<br/><br/>
Go to Root Folder i.e dapp<br/>
run below command<br/>
> **truffle init**
<br />

**GANACHE** <br />
Go to Ganache App ==> New WorkSpace ==> Give Name ==> Add truffle-config.js file to the workspace, which is generated by truffle.

Test the app using below command<br/>
> **truffle migrate --reset**

Verify migration by checking transactions in ganache.<br/><br/>

**SOLIDITY**

File: **contracts/dapp.sol** <br/>
1. transfer() - Transfer funds to receipient account.<br/>
2. withdraw() - withdraw funds from account.<br/>
3. receive() - receive funds.<br/><br/>


**META MASK PLUGIN**<br/><br/>
Go to metamask plugin in chrome browser.<br/>
Connect to local ganache using local ip address. i.e, http://127.0.0.1:7545<br/>
Import any one account from ganache to metamask account.<br/><br/>

