import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "hardhat-contract-sizer";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  contractSizer: {
    runOnCompile: true,
    strict: true,
  },
};

export default config;
