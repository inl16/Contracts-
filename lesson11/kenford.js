function isDamagesWithinContemplationOfParties(contract, damages){
    //check fi teh dmages are speculative and unceratinty
    if(damages.isSpeculative){
        return false;
    }

    //check if teh contract specifually provdies for the dagmes 
    if(!contract.hasDamagesClause(damages)){
        return false;
    }

    //check if teh damges wre within the contemplatio of the parties at the time of conractig 
    if(!contract.partiesContemplatedDamags(damages)){
        return false;
    }

    return true;
}