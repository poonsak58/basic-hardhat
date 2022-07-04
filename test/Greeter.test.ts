import { expect } from "./chai-setup";

import { ethers, deployments, getNamedAccounts } from "hardhat";

async function setup() {
  await deployments.fixture(["Greeter"]);
  const greeter = await ethers.getContract("Greeter");

  return { greeter };
}

describe("Greeter", async function () {
  it("Should return the new greeting once it's changed !!", async function () {
    const { greeter } = await setup();
    expect(await greeter.greet()).to.equal("Hello, World!");
  });

  it("Change to FUEYMC", async function () {
    const { greeter } = await setup();
    await greeter.setGreeting("FUEYMC");
    expect(await greeter.greet()).to.equal("FUEYMC");
  });
});
