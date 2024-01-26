// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

contract NotificationContract {
    event NotificationSent(address indexed user, string message);

    function sendNotification(string memory message) external {
        emit NotificationSent(msg.sender, message);
    }
}