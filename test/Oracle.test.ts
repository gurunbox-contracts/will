import { expect } from 'chai';
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Oracle deployed and set 3 of 5", function() {
    let Oracle: ContractFactory;
    let oracle: Contract;
    let owner: SignerWithAddress;
    let alice: SignerWithAddress;
    let trustee0: SignerWithAddress;
    let trustee1: SignerWithAddress;
    let trustee2: SignerWithAddress;
    let trustee3: SignerWithAddress;
    let trustee4: SignerWithAddress;
    let trustees: string[];

    beforeEach(async function() {
        [owner, alice, trustee0, trustee1, trustee2, trustee3] = await ethers.getSigners();
        trustee4 = trustee2;
        trustees = [
            trustee0.address,
            trustee1.address,
            trustee2.address,
            trustee3.address,
            trustee4.address,
        ];        
        Oracle = await ethers.getContractFactory("Oracle");
        oracle = await Oracle.deploy("Test", owner.address);
        await oracle.deployed();

        await oracle.connect(owner).setTrustees(trustees, 3);
    })

    it("Should return the name and owenr address", async function() {
        expect(await oracle.name()).to.equal("Test");
        expect(await oracle.owner()).to.equal(owner.address);
    });

    it("return 6 trustees, 3 numerator and false condition when initialized", async function() {
        expect(await oracle.trustees(0)).to.equal(trustee0.address);
        expect(await oracle.trustees(1)).to.equal(trustee1.address);
        expect(await oracle.trustees(2)).to.equal(trustee2.address);
        expect(await oracle.trustees(3)).to.equal(trustee3.address);
        expect(await oracle.trustees(4)).to.equal(trustee2.address);

        expect(await oracle.numerator()).to.equal(3);
        expect(await oracle.denominator()).to.equal(5);
        expect(await oracle.conditionCounter()).to.equal(0);
        expect(await oracle.condition()).to.equal(false);
    })

    it("return trusteeIds of each trustee address", async function() {
        // expect(await oracle.getTrusteeIds(trustee0.address)).to.equal(0);
    })
})