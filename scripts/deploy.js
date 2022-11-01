const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const CircularChain = await hre.ethers.getContractFactory("CircularChain");
  const circularchain = await CircularChain.deploy();
  await circularchain.deployed();
  console.log("CircularChain deployed to:", circularchain.address);

  fs.writeFileSync('./config.js', `
  export const circularchainAddress = "${circularchain.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });