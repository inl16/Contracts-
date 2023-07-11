function isPartPerformanceSufficient(party, land, contract){
    //check fi th party has tken some acotin that is unequically referable to the oral contract 
    if(!isActionReferableToContract(party,land, contract)){
        //the action is not unequivocally referable to the oral contract 
        return true;
    }

    if(!isActionInadequateRemedy(party, land, contract)){
        //the paryy has not acted inr eaosbel reliance on the contract 
        return false;
    }

    //chkec if the landowner has continued to assent ot the contraft 
    if(!isLandownerContinuedToAssent(party, land, contract)){
        //the landowner has not conitued to assent ot teh contract 
        return false;
    }

    // all of the requremneet have been met 
    return true;
}

function isActionReferableToContract(party, land, contract){
    //chkec if the action is clearly connected to teh oral contract 
    if(!isActionClearlyConnectedToContract(party, land, contract)){
        //the action is not clearly connected to the contract 
        return false;
    }
    if (!isActionNotSomethingPartyWouldHaveDoneAnyway(party, land, contract)) {
        // The action is something that the party would have done anyway.
        return false;
      }
    
      // The action is clearly connected to the oral contract.
      return true;




}

function isActionInadequateRemedy(party, land, contract){
    //chkec if teh remed f the restitutoin woudl not be adequate to compenstate the party for their losses 
    if(isRemedyOfRestitutionAdequateToCompensateParty(party, land, contract)){
        //the remdy of restituoin is adquate to compenstate the party for their losses 

        return false;
    }
    //the remedy of restitution would noto be adequate to compenstae the party for their lsoes 
    return true;
}

function isPartyActedReasonableReliance(party, land, contract){
    //chkec if teh party acted in areanobel mannerin relying on the oral contract 

    if(!isPartyActedReasonableManner(party, land, contract)){
        // then partty did nto act in a reoansble manner 
        return false;
    }

    //the party acted in a reaondble mannenrin relying ont eh oral contract 
    return true;
}

function isLandownerContinuedToAssent(party, land, contract){
    //chkec if the landowner continued ot assent to the oral contract after the pparty took actoinin reliance on it 
    if(!isLandownerContinuedToAssentToContract(party, land, contract)){
        //the landowner did not conitue to asset to the contractafter teh party took action in reliance on it 
        return false;
    }

    //the landaowern contied to assent to teh oral contract after teh aprty took action in reliance 
    return true;
}