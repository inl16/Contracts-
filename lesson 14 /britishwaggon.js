function isAssignment(parkgate, lea, bw){
    //check if the parkgate has the authority to assing the lease agrement
    if(!parkgate.hasAuthority){
        return false;
    }

    //check i the bw is willing and able to perform the service repairs 
    if(!bw.isWillingAndAbleToPerformServiceRepairs){
        return false;
    }

    //check if the wrok to be performed can only beexecuted by subctonractos 
    if(!bw.canOnlyBeExecutedByContractors){
        return false;
    }

    //check if the apries are contniuing to do theirn jobs 
    if(!parkgate.isContinuingtoDoItsJob && lea.isContinuingtoDoItsJob){
        return false;
    }

    //if all of ht cechsk pass then the assignment is valid 
    return true;
}