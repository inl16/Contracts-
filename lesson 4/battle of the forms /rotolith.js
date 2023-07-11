function rotoLithLogic(offer, acceptance) {
    // Check if the offer and acceptance are compatible.
    if (isCompatible(offer, acceptance)) {
      // Create a new contract with the terms from the offer and acceptance.
      return new Contract(offer.terms, acceptance.terms);
    } else {
        //check if teh seller has aded new term to the contract
        if(hasNewTerms(acceptance)){
            // if the buyer does not object to teh enw terms withina reasonable time
            //then the new term becom part of the contract 
            if(!buyerobjectedToNewTerms(accepatance)){
                //check fi teh sellers new terms are metrail 
                if(isMaterial(acceptance.newTerms)){
                    //if the esller new terms are material thenteh buyer must boject ot them iwthin  areoanb le time
                    if(buyerDidNotObjecToNewTermsWithinReasonableTime(accepatance)){
                        return null;
                    }
                }else{
                    //if the seller new terms are not matieral, . then they beocme part of of the contract 
                    return new Contract(offer.terms, acceptance.terms.contract(acceptance.newTerms)){

                    }
                }else{
                    //if the buyer objects to teh new terms then there is no contrat 
                    return null;

                }
            }else{
                //if the seuller has not added new teerms then thecontrac tis fomred with the rerm fromtej fofer and acceptance 
            }
        }
    }
    