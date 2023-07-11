function canSueforRestitution(beneficiary, conferrer){
    //chekc if the benefiicary has been unjustly enriched
    var beneficiaryHasBeenUnjustlyEnriched = beneficiary.hasReceivedBenefitWithoutPayingForIt;

    //check fi the ocferror has conffereed a benefit on teh beneficary 
    var conferrerHasConferredBenefit = conferrer.hasGivenBenefitToBeneficiary;

    //return true if all the condition s are met 
    return beneficiaryHasBeenUnjustlyEnriched&&conferrerHasConferredBenefit;
}