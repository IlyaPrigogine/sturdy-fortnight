pragma solidity ^0.8.4;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract MyDefiProject {
    IERC20 token;
    constructor (address _token) public {
        token = IERC20(_token);
    }

    function foo(address recipient, uint amount) external {
        token.transferFrom(msg.sender,recipient,amount);
    }
}
