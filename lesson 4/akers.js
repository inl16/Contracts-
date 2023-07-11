function isOfferAccepted(offer, accpetance){
    //first chieck whte rhte accpets insin the form conduct 
    if (accpetance.isConduct){
        //if the acceptnace is inthe form of conduct then theoffer is accpeted 
        return true;
    }else{
        // fi teh acceptenace is not in the form of concduct then the offeris not accepted 
        return false;
    }

}

function isContractFormed(offer, accpetance){
    //first chekc whether the offer has been acceteped 
    if(isOfferAccepted(offer,acceptance)){
        //if the offer has been accpted thenthe contract is formed 
        return true;
    }else{
        //if the offer has not been accetpd then no contract is formed 
        return false 
    }
}
function isOfferTimely(offer){
    //first check whether the fofer has expired 
    if(offer.hasExpired){
        //if the offer has epxired then it is not longer valid 
        return false;
    }else{
        //if the offer has not expired then it is still valid 
        return true;
    }

}

function isAcceptanceAfterRejection(offer, acceptance){
    //first chekc whther the offer has beenrejceted 
    if(offer.isRejected){
        //if the offer has been jreected thne it cannot be accepted 
        return false;
    }else{
        //if the offer has not been rejcted then it can be accpted 
        return true;
    }
}