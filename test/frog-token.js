const { expect } = require("chai");
const { ethers } = require("hardhat");

let FrogToken;
let frogToken;
let deployer;
let addr1;

describe("Test FrogToken Contract", function () {


  it("Should return the new greeting once it's changed", async function () {
    FrogToken = await ethers.getContractFactory("FrogToken");

    frogToken = await FrogToken.deploy();
    await frogToken.deployed();
    console.log('frogToken.address: ', frogToken.address);
    console.log(await frogToken.totalSupply());
    console.log(await frogToken.name());
    console.log(await frogToken);
    // console.log(await frogToken.address().transfer(1000));

    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

 

});
