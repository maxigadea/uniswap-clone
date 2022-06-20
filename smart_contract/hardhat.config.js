require("@nomiclabs/hardhat-waffle");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/z3P6V86N-Q3dG8MeoOtCSw6f1sP10xCO',
      accounts: [
        "2c17cf40972430ee2dce43bf86431b8ca6950e6baa2228e8c4ed39f5fc14e55f"
      ]
    }
  },
};
