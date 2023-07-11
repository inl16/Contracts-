pragma solidity ^0.8.0;

contract BainVGillespie{
    struct Party{
        bytes32 name;
        bool isPrivyToContract;
    }

    Party[] public parties;


    function addParty(bytes32 name, bool isPrivyToContract) public{
        parties.push(Party(name, isPrivyToContract));
    }

    function isThirdPartyIncidentalBeneficiary(bytes32 partyName) public view returns (bool){
        for (uint i=0; i <parties.length; i++){
            if(parties[i].name==partyName && !parties[i].isPrivyToContract){
                return true;
            }
        }
        return false;
    }

    function isMaintainingACauseOfAction(bytes32 partyName) public view returns (bool){
        for(uint i =0; i <parties.length; i++){
            if(parties[i].name==partyName && !parties[i].isPrivyToContract){
                return false;
            }
        }
        return true;
    }
}