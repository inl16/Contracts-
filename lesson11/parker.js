function calculateDamagesForBreachOfContract(actor, studio, damages){
    //chekc if the studio breached the contract 
    if(!studio.breachedContract){
        return 0;
    }

    //check if the actor mitigated their damages 
    if(!actor.mitigatedDamages){
        return 0;
    }

    //determine teh amoutn of damages 
    let amount =0;

    //the actor can revoer teh difference between their guranteed compenstation and the aountthey would have eearne if they have been able to fid other employment 
    amount+=actor.guaranteedCompensation-actor.earningsFromOtherEmployment;


    //teh actor can also recover any expenses that they incurred as a reuslt of teh breach of teh contract 
    amount+=actor.expensesIncurredDueToBreach

    return amount;
}