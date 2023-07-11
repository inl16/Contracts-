function isBestEffortsCluaseEnforceable(clause, party, financialConsequences){
    //check fi th clause is amnigous 
    if(clause.isAmbiguous()){
        return false;
    }

    //check fi the  fincanil consequences are disastrous
    if(financialConsequences.isDisastrous()){
        return false;
    }

    //the claluse is enforcable 
    return true;
}

function bestEffortsCluaseRequiresHighLevelOfPerformance(){
    //the clause requries teh obligated party to amintaoina high level of performance
    return true;
}

function bestEffortsClauseNegativeFinancialConsequences(){
    //the clause allows the obligted party to incurnegative fincnail conseuqnecs 
    return true;
}


