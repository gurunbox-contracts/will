// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IOracle {
    event Judged(address trustee, bool TF);
    event WillCreated(address owner, address receiver, address will, uint256 willId);

    function oracleFactory() external view returns (address);

    function getWills(uint256 willId) external view returns (address will);
    function willNumber() external view returns (uint256);
    function getReceivers(uint256 willId) external view returns (address);

    function createWill(address receiver) external returns (address will);

    function condition() external view returns (bool);
    function name() external view returns (string memory);
    function conditionCounter() external view returns (uint256);
    function trustees(uint256) external view returns (address);
    function numerator() external view returns (uint256);
    function denominator() external view returns (uint256);
    function fulfillmentTime() external view returns (uint256);

    function getTrusteeIds(address _trustee) external view returns (uint256[] memory);
    function trusteeOpinion(uint256 trusteeId) external view returns (bool);

    function initialize(
        string memory name_, 
        address _owner, 
        address[] memory _trustees, 
        uint256 _numerator,
        address _receiver
    ) external;
    function setTrustees(address[] memory _trustees, uint256 _numerator) external;
    function judge(bool TF, uint256 trusteeId) external;   
}