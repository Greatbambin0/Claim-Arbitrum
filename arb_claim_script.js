const ethers = require('ethers');

////////////////// Change data here

const mnemonic = '' //wallet mnemonic to sign transactions. In this format -    cloud knee beach ball flag strike


const Limit = "500000" // This is good
const Price = "1000000000" // Example is 1 GWEI

const WSS = " " // Arbitrum wss node, can use alchemy or quicknode.


const addresses = {
  router: '0x67a24CE4321aB3aF51c2D0a4801c3E111D88C9d9', //Arbitrum claim contract
}

const provider = new ethers.providers.WebSocketProvider(WSS)

const wallet = ethers.Wallet.fromMnemonic(mnemonic)
const account = wallet.connect(provider)


//////////////// Claim arb tokens ////////////


const router = new ethers.Contract(
  addresses.router,
  [
    
    'function claim() public'

  ],
  account
)
console.log(`Sending mint transaction`);


router.claim(
  { gasLimit: Limit, gasPrice: Price }
  ),

setTimeout(function () {console.log('Tx sent')}, 2000);

return;