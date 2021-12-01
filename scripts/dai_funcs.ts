import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {Greeter, MockToken, MyDefiProject} from "../typechain";
import {formatEther, parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {
    const {owner} = await getNamedAccounts();

    // const MockToken = await ethers.getContract<MockToken>('MockToken');  -- localhost
    const MockToken = await ethers.getContractAt(
        'IERC20',
        '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'
    );//kovan dai address

    const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    console.log(`${formatEther(await MockToken.balanceOf(owner))}`);
    // await MockToken.approve(MyDefiProject.address, parseEther("10000"));
    await MyDefiProject.foo(ethers.constants.AddressZero,parseEther("1.123456789"));
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
