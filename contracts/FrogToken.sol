// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FrogToken is ERC20 {


    mapping(address => uint256) public _balances;
    uint256 public _totalSupply;
    mapping(address => mapping( address => uint256)) public allowed;
    event Transfer( address _owner, uint256 _amount);

    constructor() ERC20("Frog Token", "FROG") {
        _totalSupply = 1000 * 10 ** 18;
        _balances[msg.sender] = _totalSupply;
        _mint(msg.sender, _totalSupply);
    }

    function totalSupply() public override view returns (uint256){
        return _totalSupply;
    }

}