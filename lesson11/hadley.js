function isDamagesWithinContemplationOfParties(contract, damages){
    //check if the dmages are specualtrive and uncertain 
    if(damages.isSpeculative){
        return false;
    }

    //check if the contract specifiacally provides for the damage 
    if(!contract.hasDamages(damages)){
        return false;
    }

    //check fi teh damages were within the contemplation of the parties at the time of contracting 
    if(!contract.partiesContemplatedDamages(damages)){
        return false;
    }

    return true;
}