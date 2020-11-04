require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note spike proud gesture forest flower giggle'; 
let testAccounts = [
"0xab7c48b96359b4653d6e5dec60bdbfc966b969b90ce517194d7714f27428e4b5",
"0x926c20a69fe1593aec1480141932d0689c9c7bec894e29798b8b3170ba9d4081",
"0x465e8bf51924f4d8660a363c8ae62e9fd378455eceb220a5bc35673e850c6af5",
"0x21f694c489529b0fa2d42df79e697413bd6746a62ecdb9980b141d7d5c82d1cb",
"0x9b3062c003ca83513a4e7071a608483959720968da5c2c921038b51d34c4b5fb",
"0x5be926d8099d6916a2d060aff2e87bfe47dd0de881abfb3c09bd0e0e2e170929",
"0x99045ffeae29c9224273feb81862e0c5f31ea47430469e7ecacc46dc0fc0b6f9",
"0x6ffd67e64abeb9e9ae8127d3c5c937fc8e112feba7d7115307c07c556e300298",
"0x3ecac87facb7a9ec533fa2ead7c2c654f8dadbe7fc5f0d7b92711bd1eda38d32",
"0xa242bbbfd6f3d0deea8b3580926c963ef5685b90ce5b154196acb3bf77e9b289"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
