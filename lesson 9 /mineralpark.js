function isCommerciallyImpracticable(contract, event){
    //check if teh event was unforseen 
    //if so return true
    //otherwise return false

    //get the event 
    const event=contract.event;

    //check if teh event was unfrseen 
    if(!contract.forseeableEvents.includes(event)){
        return true;
    }


    //check fi teh cost of performace the contract has increas significantly due to the event
    //if so return true
    //otherwise return false;


    //get the cost of performing the contract beforethe event 
    const costBeforeEvent=contract.costBeforeEvent;

    //get the cost of performing the contract after the event 
    const costAfterEvent=contract.costAfterEvent;

    //check i the cost of performing the contracthas increased significantly due to the event 
    if(costAfterEvent>costBeforeEvent*10){
        return true;
    }

    return false;
}
