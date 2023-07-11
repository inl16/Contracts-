function isPainAndSufferingWithinContemplationOfParties(contract, damages){
    //chkec if the contract specially provides for dmages for pain and suffering
    if(!contract.hasDamagesClauseForPainAndSuffering(damages)){
        return false;
    }

    //check f teh damages were within the contemplation of the parties at the time of contracting 
    if(!contract.partiesContemplatedDamagesForPainAndSuffering(damages)){
        return false;
    }

    //chekc if the breach of contract was the proximatecause of the pain and suffering
    if(!contract.breachOfContratWasProximateCauseOfPainAndSuffering(damages)){
        return false;
    }

    return true;
}