// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReceiptIssuer {
    struct Receipt {
        address sender;
        uint256 amount;
        uint256 timestamp;
    }
    
    Receipt[] public receipts;
    
    event ReceiptIssued(address indexed sender, uint256 amount, uint256 timestamp);
    
    function issueReceipt() external payable {
        require(msg.value > 0, "Must send some Ether");
        
        receipts.push(Receipt({
            sender: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp
        }));
        
        emit ReceiptIssued(msg.sender, msg.value, block.timestamp);
    }
    
    function getReceipt(uint256 index) external view returns (address, uint256, uint256) {
        require(index < receipts.length, "Invalid index");
        Receipt memory r = receipts[index];
        return (r.sender, r.amount, r.timestamp);
    }
    
    function getTotalReceipts() external view returns (uint256) {
        return receipts.length;
    }
}
