const ethers = require('ethers');

// プロバイダを設定（ここではRopstenテストネットを使用）
const provider = new ethers.providers.InfuraProvider('ropsten');

// jenesis.jsonのデータ
const jenesisData = {
  "config": {
    "chainId": 15,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "berlinBlock": 0
  },
  "nonce": "0x0000000000000042",
  "timestamp": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "",
  "gasLimit": "0x8000000",
  "difficulty": "0x400",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {}
};

// マイニングの処理
async function mine(walletAddress) {
  console.log('Mining...');
  
  // jenesisDataを使用することができます
  console.log(jenesisData);

  // マイニングされたテストイーサを指定したアドレスに送信（ダミー）
  const transaction = {
    to: walletAddress,
    value: ethers.utils.parseEther("1.0") // 送信するイーサの量
  };

  // トランザクションを送信（ダミー）
  let tx = await wallet.sendTransaction(transaction);
  console.log(tx);
}

// ボタンがクリックされたときの処理
function onButtonClick() {
  const walletAddress = document.getElementById('walletAddress').value;
  mine(walletAddress);
}
