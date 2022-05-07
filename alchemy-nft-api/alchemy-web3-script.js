import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const apiKey = "8zA5Mx0UaV98Heen7pfd7cJ9fYsYAm3w";

// Initialize Alchemy Web3 
const alchemyWeb3 = createAlchemyWeb3(`https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`);

const ownerAddr = "0xC33881b8FD07d71098b440fA8A3797886D831061";


const data = await alchemyWeb3.alchemy.getAssetTransfers({
    fromBlock: "0x0",
    toBlock: "latest",
    category:  ["external",  "erc721", " erc1155"],
    fromAddress: "0x0000000000000000000000000000000000000000",
    toAddress: "0x233b2417fC9d781F1739ec175BD728faf7848EF5",

})


// Print response  ngrok 27Olp18ZUiZn0NThbnJXzhRnCfq_5HyL5MSEyq6iVZjctget1

console.log(data)
