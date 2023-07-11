function isRafflesvWichelhaus(contract){
    //chkec if both parites to the contract madetheh same mistakeabout a fundemental fact 
    //if so return true 
    //otherwiseerturn false

    //get the anem of the parties ot the contract 
    const party1 =contract.party1;
    const party2 = contract.party2;

    //get the term of the contract 
    const terms = contract.terms;


    //check if both parties made the same moistkae about the contract 
    for(const term of terms){
        if(party1.mistakes(term)===party2.mistakes(term)){
            return true;
        }
    }

    return false;
}