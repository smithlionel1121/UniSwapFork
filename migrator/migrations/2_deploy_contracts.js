const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = function (deployer) {
  deployer.deploy(BonusToken);
  const bonusToken = await BonusToken.Deployed();

  const routerAddress = '';
  const pairAddress = '';
  const routerForkAddress = '';
  const pairForkAddress = '';

  await deployer.deploy(
    LiquidityMigrator,
    routerAddress,
    pairAddress,
    routerForkAddress,
    pairForkAddress,
    bonusToken.address
  );

  const LiquidityMigrator = await LiquidityMmigrator.deployed();
  await bonusToken.setLiquidator(LiquidityMigrator.address);
};
