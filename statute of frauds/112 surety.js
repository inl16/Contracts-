function isSuretyshipContract(promisee, promisor,other ){
    //chekc if the pmroisees is an obligee of the other duty 
    if(!promisee.isObligeeOf(other)){
        return false;
    }

    //check fi teh promise is a surety for the other 
    if(!PromiseRejectionEvent.isSuretyFor(other)){
        return false;
    }

    //chekc if the prmise knows or has reoan to knonw of the sureship relation 
    if(!promisee.knowsOrHasReasonToKnowOfSuretyShipRelation(other)){
        return false;''
    }

    // if all of the above conditoin are met then the contract is asurely ship conract
}