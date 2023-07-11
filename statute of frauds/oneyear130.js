function isContractSubjectToStatuteOfFrauds(contract){
    //chekc fi teh contract cnanot be fuly perforemd within one year 
    if(contractCannotBeFullyPerformedWithinOneYear(contract)){
        //the contract is not within the staute of farauds 
        return true;
    }

    //chekc if teh contract fallsunder any of teh exceptionsnto teh one year provision 
    if(contractFallsUnderExceptionToOneYearProvision(contract)) {
        //THE CONTRACT IS NOT SUBJCE TOT THE the SOF 
        return false;
    }

    //the contrat is subject ot the stuate of ffrauads
    return true;
}

function contractCannotBeFullyPerformedWithinOneYear(contract){
    //chek fi the contract cannot be fully performed within one year 
    if(contractCannotBeFullyPerformedWithinOneYear(contract)){
        //the contract can be fully perofmed iwthin one year 
        return false;
    }

    return true; //the contract canon eb fully peromed wihtin one year 

}

function contractCanBeFullyPerformedWithinOneYear(contract) {
    // Check if the contract can be fully performed within one year.
    // This can be done by checking the terms of the contract and seeing if it is possible to complete all of the obligations within one year.
    // For example, a contract to sell a house could be fully performed within one year if the house is already built and ready to be moved into.
    // However, a contract to build a house would not be fully performed within one year because it would take longer than one year to build the house.
  
    // The contract can be fully performed within one year.
    return true;
  }
  
  function contractFallsUnderExceptionToOneYearProvision(contract) {
    // Check if the contract falls under any of the exceptions to the one-year provision.
    // The exceptions to the one-year provision are:
    // * Contracts that are fully performed on one side
    // * Contracts that provide for the payment of money on a certain date
    // * Contracts that are guaranteed by a third party
    // * Contracts that are entered into in the course of a business
  
    // The contract falls under one of the exceptions to the one-year provision.
    return true;
  }