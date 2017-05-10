module.exports = {
  build: "./node_modules/.bin/webpack",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    net42: {
      host: "localhost",
      port: 8545,
      network_id: 42
    },
    ropsten: {
      host: "locahost",
      port: 8545,
      network_id: 3
    }
  }
};
