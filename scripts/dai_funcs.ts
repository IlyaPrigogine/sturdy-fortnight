import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {Greeter, MockToken, MyDefiProject} from "../typechain";
import {formatEther, parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {
    const {owner,user1} = await getNamedAccounts();

    const MockToken = await ethers.getContract<MockToken>('MockToken');
    const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');

    await MockToken.approve(MyDefiProject.address, parseEther("10000"));
    // console.log(`Before: MockToken.balanceOf(user1): ${formatEther(await MockToken.balanceOf(user1))}`);
    // await MyDefiProject.foo(user1,parseEther("1.35"));
    // console.log(`After: MockToken.balanceOf(user1): ${formatEther(await MockToken.balanceOf(user1))}`);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
