function isContractSubstantiallyPerformed(contractor, buyer, contract, breach){
    //chekc if the contractor substnailly performed on teh contract 
    if(!contractor.isContractSubstantiallyPerformedOnContract){
        return false;
    }

    //check if teh breach substantially impaired the value of teh contract to the buyer 
    if(breach.substantiallyImpairedValueOfContractToBuyer){
        return false;
    }

    //teh contract is substantially performed 
    return true;
}