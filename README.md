# On-Chain Receipt Generator

## Overview
The **On-Chain Receipt Generator** is a smart contract written in Solidity that allows users to generate and store transaction receipts directly on the blockchain. This ensures transparency, immutability, and easy access to transaction records.

## Features
- **Decentralized Receipt Management**: Users can generate receipts that are permanently stored on the blockchain.
- **Ether Transaction Logging**: Each receipt records the sender's address, amount sent, and timestamp.
- **Transparent & Secure**: No central authority is required; all receipts are publicly verifiable.
- **Easy Retrieval**: Users can retrieve individual receipts and check the total number of receipts issued.

## Deployed Address
The contract is deployed on the **Edu Chain** at the following address:

```
0x26E2e3dBecEA6b800c63160321dEed986e402B50
```

## How to Use
1. Send Ether to the contract using the `issueReceipt` function.
2. The contract will generate a receipt and store the details.
3. Use the `getReceipt` function to retrieve a specific receipt by index.
4. Use the `getTotalReceipts` function to check the total number of receipts issued.

## License
This project is open-source and available for use under the MIT License.

