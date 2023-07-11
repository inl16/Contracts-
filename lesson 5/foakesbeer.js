function isPartPaymentConsideration(offer, acceptance){
    //check if teh offeree is already udner an obligatoin to pay the debt 
    if(offeree.isAlreadyUnderObligationToPayDebt===true){
        // the offeree is alrdy under an oblgiaiton to pay the debt so there is no considrtion 
        return false;
    }else{
        //the offeree is not alredy under an obligatoin to pay the debt so there may be consdiratoin
        return true;
    }


}

function isPromiseToPayPartOfDebtSufficientConsideration(offer, acceptance){
    //check if teh promsie to pay part of the debt is sufficently onerous proimse
    if (isSufficientlyOnerousPromise===true){
        //the rpomse to pay part of the debt is a sufficent onerous promise 
        return true;
    }else{
        //the prosmie to pay part of the debt is not a sufficilet yonerous proimse 
        return false;
    }
}

function isPartPaymentConsiderationValid(offer, acceptance){
    //check if there is consideration 
    if(isPartPaymentConsideration(offer, acceptance)){
        //there is consdiratoin so teh contractmay be valid 
        return true;
    }else{
        //there is non considroitn so teh contract is not valid 
        return false;
    }
}