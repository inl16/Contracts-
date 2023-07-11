pragma solidity ^0.8.0;

contract SullivanVOConnor{
    //function to claculte the expectatoin damages 
    function calculateExpectancyDamages(
        uint256 expectedCostOfSurgery, 
        uint256 atulaCostOfSurgery, 
        uint256 lostWages, 
        uint256 emotionalDistress
    )public pure returns (uint256){
        return expectedCostOfSurgery - actualCostOfSurgery+lostWages+ emotionalDistress;

    }

    //funciton to calcualte reliance damegs 
    function calculateRelianceDamages(
        uint256 costOfSurgery, 
        uint256 lostWages, 
        uint256 emotionalDistress
    )public pure returns (uint256){
        return costOfSurgery+lostWages+emotionalDistress;
    }
    //funciotn ot calculate totla damages 
    function calculateTotalDamages(
        uint256 expectancyDamages, 
        uint256 relianceDamages
    )public pure returns (uint256){
        return expectancyDamages+relianceDamages;
    }
}