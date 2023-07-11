//check if the contract falls under one of teh execceptionf

function isNotWithinStatuteOfFrauds(promisee, promisor, other){
    if(
        promisee.isObligeeOf(other)&&
        promisor.isSuretyFor(other)&&
        promisee.knowsOrHasReasonToKnowOfSuretyshipRelation(other)
    ){
        return false;
    }



    //check if the contract cna be performedwithout the promisor incurring any new debt or obligation
    if(
        promisee.isObligeeOf(other)&&
        promisor.isAlreadyOwingADutytoProisee(other)
    ){
        return true;
    }

    //chkec if the contract can be performed without the promisor incurring any new debt or obligation
    if(
        promisee,isObligeeOf(other)&&
        promisor.isAlreadyOwingADutytoThirdPerson(other)&&
        promisee.reasonablyBelievesthatPromisorIsOwingDutyToThirdPerson(other)
    ){
        return true;
    }
    return false;

    // if the contrct does not fall under any of these exceptions then it is within the stateu fo frauds 
}

