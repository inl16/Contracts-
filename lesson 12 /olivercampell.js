function restitutionDamage(contract, promisor, promisee){
    //check if the contract is express and written 
    if(!contract.isExpress||!contract.isWritten){
        return null;
    }

    //get consideration by owend by both parite s
    const considerationOwedByPromisor=contract.considerationOwedByPromisor;
    const considerationOwedByPromisee= contract.considerationOwedByPromisee;

    //check if the consideratoin owed by the promiseeis a liquidated debt 
    if(!considerationOwedByPromisee.isLiquidatedDebt){
        return null;


    }

    //check rif the promsior ahs fully performe don the contract 
    if(!promisor.hasFullyPerformedContract()){
        return null;
    }

    //check i t promisee has failed to pay the contract 
    if(promisee.hasFailedToPayConsideration()){
        //the performing party is only entilted ot theamount due to him under teh contractrovided theat the amount is a lquidauted debt 
        return considerationOwedByPromisee;
    }

    //the performing party is not entiled to any restitution damages '
    return null;
}