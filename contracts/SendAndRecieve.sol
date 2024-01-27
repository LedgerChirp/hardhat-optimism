// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract {
    address public owner;
    mapping(address => uint256) public balances;
    uint256 public transactionCount;

    event PaymentReceived(address indexed from, uint256 amount);
    event PaymentSent(address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function fundContract() external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        balances[owner] += msg.value;
        emit PaymentReceived(msg.sender, msg.value);
    }

    function sendPayment(address to, uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;
        transactionCount++;

        emit PaymentSent(to, amount);
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function transactionHistoryLength() external view returns (uint256) {
        return transactionCount;
    }
}