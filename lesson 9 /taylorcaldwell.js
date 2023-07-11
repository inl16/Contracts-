function isImpracticable(contract, event){
    //chkec fi the contract depends ont eh continued existeencef a given preson or thing 
    if(contract.dependsOn(event)){
        //check fi teh evnt has made performacne impossible 
        if(event.hasMadePerformanceImpossible(contract)){
            //performance is excused 
            return true;
        }
    }

    //perrmance is not excused 
    return false;
}