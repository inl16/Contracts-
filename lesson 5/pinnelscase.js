function isPartPaymentConsideration(offer, acceptance){
    //check if the foferee is alrdy under an oblgiatoin to pay the debt 
    if(offereee.isAlreadyUnderObligationToPayDebt ===true){
        // the offeree is already under an obligatoin to pay the debtso there is no consideratoim
        return false;
    }else{
        // the offeree is not already under and obligation to pay the debt 
        return true;
    }
}

function isPromiseToPayPartOfDebtSufficientConsideration(offer, acceptance){
    //chekc if the promsoe to pay part of teh dbet is a "sufficient consdation 
    if(isSufficientlyOnerousPromise===true){
        //the promise to pay part of the dbet is  suffineitly onersous promise 
        return true;

    }else{
        // the promsie to pay aprt of the debt is not a suffintl onerous promise 
        return false;
    }
}

function isPartPaymentConsiderationValid(offer, accpetance){
    //chekc if there is ocnsideatoin 
    if(isPartPaymentConsideration(offer, acceptance)){
        //there is consideratoin so the contract may be valid 

    }else{
        //there is no considertatoin so the contract is not valid 
        return false;
    }
}