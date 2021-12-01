import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from "ethers/lib/utils";


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());

    let tokenAddress;
    if (network.name == 'localhost') {
        const mockToken = await deploy('MockToken',{
            from: owner,
            args: ['mToken','mToken',parseEther("1000000")],
            log: true,
        });
        tokenAddress = mockToken.address;
    } else if (network.name == 'kovan') {
        tokenAddress = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa';
    }

    console.log(`tokenAddress: ${tokenAddress}`);

    // const tokenAddress =
    //
    // await deploy('MyDefiProject', {
    //     from: owner,
    //     args: [tokenAddress],
    //     log: true,
    // });

};
export default func;
func.tags = ['Greeter'];
