function isAssignmentValid(nexxus, best, sally){
    //chceck if nexxus has the authority to assign the distributor 
    if(!nexxus.hasAuthorityToAssign){
        return false;
    }

    //check if sally is a driect compettior f nexus 
    if(sally.isDirectCompetitorOfNexxus){
        return false;
    }

    //cehck if the bste is willing and able to perform the contract 
    if(!best.isWillingAndAbleToPerformDistributorshipDuties){
        return false;
    }

    //check if the parites are continuing to do their jobs 
    if(!nexxus.isContinuingToDoItsJob && !best.isContinuingToDoItsJob){
        return false;
    }

    //if all of the checks pass then the assingment is valid 
    return true;
}