const EthCrypto = require('eth-crypto');

// The client that end-users will use to interact with our central payment processor
class Client {
  // The constructor will initialize a public/private key pair for the user
  // - the public key is like an username or address that people can send stuff to
  // - the private key is like a password or key that allows someone to access the stuff in the account and send transactions/messages from that account
  constructor() {
    // TODO
    // create a new Ethereum-identity with EthCrypto.createIdentity()
    // - should create a Javascript object with a privateKey, publicKey and address
    this.wallet = EthCrypto.createIdentity();
  }

  // Creates a keccak256/SHA3 hash of some data
  hash(data) {
    // TODO
    return EthCrypto.hash.keccak256(data);
  }

  // Signs a hash of data with the client's private key
  sign(data) {
    // TODO
    data = this.hash(data)
    return EthCrypto.sign(this.wallet.privateKey, data);
  }

  // Verifies that a messageHash is signed by a certain address
  verify(signature, messageHash, address) {
    // TODO
    const signer = EthCrypto.recover(signature, messageHash)
    return signer === address;
  }
}

module.exports = Client;
