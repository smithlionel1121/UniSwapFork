const { networks } = require("../truffle-config");

const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0x0d28C0672e4b3a323501f89E82425E17B5A4d792';

  if (network === 'mainnet') {
      weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
      await deployer.deploy(WETH);
      weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
  
};
