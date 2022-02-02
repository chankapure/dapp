// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.9;

contract Dapp{
    uint public noOfFundUsers;
    uint private withdrawLimit = 2000000000000000000;
    address public owner = msg.sender;

    mapping(uint => address) private fundUsers;

    receive() external payable{}

    function transfer() external payable{
        fundUsers[noOfFundUsers] = owner;
    }

    function withdraw(uint amount) external{
        require(amount > withdrawLimit, "Cannot send >2 Ethers");
        payable(owner).transfer(amount);
    }
}