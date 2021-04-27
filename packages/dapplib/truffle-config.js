require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid problem oppose venture street raise magic essay injury light army genre'; 
let testAccounts = [
"0x419ec664904ab92ea85c5d5c475b417d617f3e1ed08f601926a24a77269a6e05",
"0x5775111b279080ed8e6f708dc2a622cc67c2ec4c627d218d3851d36ebccc5467",
"0xe94227c2ed207cae381ae69ba23bcf6bdc74135d501bb36f37d328fc35d9f65f",
"0x38b586f10abef7756a57ce7df568f91ecf698b0704f22ab1579df860a6092919",
"0x8a232a40e66d3482966cf3046e9901bb9ce34f4ee17430cce85839087791cf21",
"0x90cc8fcd8cdf0a901c1ec7eed200136b515ef707c5bdeb5b9a4c2174240b3a03",
"0x73468bfe59870af4dbb47ecca906f2139e00d8460d40ed6eaaa7f89a7cc0647c",
"0x01a1d4f5b645d39c33b8c41c0986582e27e8e74199f7382bdd2d207b59a91352",
"0xf0c98662ce8bf0562361ec728cae8ca96116a0132e32429d319985bcd2f97284",
"0x8364541df88163775f99771a818beec9a8105e057b82c80e57a629c447a401b3"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

