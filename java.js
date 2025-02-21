let web3;
        let contract;
        const contractAddress = "0xcda758a9C0Aa8c5d71fC298D9a4230F8046b13fc"; // Replace this
        const contractABI = [
            {
                "inputs": [],
                "name": "issueReceipt",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "ReceiptIssued",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "getReceipt",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getTotalReceipts",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "receipts",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        
        ];

        async function connectWallet() {
            if (window.ethereum) {
                try {
                    web3 = new Web3(window.ethereum);
                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    contract = new web3.eth.Contract(contractABI, contractAddress);
                    document.getElementById("walletStatus").innerText = "Wallet Connected!";
                    alert("Wallet Connected Successfully!");
                } catch (error) {
                    console.error("Wallet connection failed:", error);
                    alert("Wallet connection failed. Check the console for details.");
                }
            } else {
                alert("Please install MetaMask to interact with this application.");
            }
        }

        async function issueReceipt() {
            if (!contract) return alert("Please connect your wallet first.");

            const amount = document.getElementById("ethAmount").value;
            if (!amount || amount <= 0) return alert("Enter a valid amount.");

            try {
                const accounts = await web3.eth.getAccounts();
                await contract.methods.issueReceipt().send({ 
                    from: accounts[0], 
                    value: web3.utils.toWei(amount, "ether") 
                });
                alert("Receipt Issued Successfully!");
            } catch (error) {
                console.error("Transaction failed:", error);
                alert("Failed to issue receipt. Check console for details.");
            }
        }

        async function getTotalReceipts() {
            if (!contract) return alert("Please connect your wallet first.");

            try {
                const total = await contract.methods.getTotalReceipts().call();
                document.getElementById("totalReceipts").innerText = "Total Receipts: " + total;
            } catch (error) {
                console.error("Failed to fetch total receipts:", error);
                alert("Error fetching total receipts. See console for details.");
            }
        }

        async function getReceipt() {
            if (!contract) return alert("Please connect your wallet first.");

            const index = document.getElementById("receiptIndex").value;
            if (index === "" || index < 0) return alert("Enter a valid receipt index.");

            try {
                const receipt = await contract.methods.getReceipt(index).call();
                document.getElementById("receiptDetails").innerText = 
                    `Sender: ${receipt[0]}, Amount: ${web3.utils.fromWei(receipt[1], "ether")} ETH, Timestamp: ${new Date(receipt[2] * 1000)}`;
            } catch (error) {
                console.error("Failed to fetch receipt:", error);
                alert("Error fetching receipt. See console for details.");
            }
            async function connectWallet() {
                if (window.ethereum) {
                    try {
                        web3 = new Web3(window.ethereum);
                        await window.ethereum.request({ method: "eth_requestAccounts" });
                        contract = new web3.eth.Contract(contractABI, contractAddress);
                        const accounts = await web3.eth.getAccounts();
                        
                        let walletStatus = document.getElementById("walletStatus");
                        if (walletStatus) {
                            walletStatus.innerText = "Connected: " + accounts[0];
                        } else {
                            console.error("Element with ID 'walletStatus' not found.");
                        }
            
                        alert("Wallet Connected Successfully!");
                    } catch (error) {
                        console.error("Wallet connection failed:", error);
                        alert("Wallet connection failed. Check console for details.");
                    }
                } else {
                    alert("Please install MetaMask to interact with this application.");
                }
            }
            window.onload = function() {
                console.log("JavaScript loaded after DOM is ready!");
            };
            
        }