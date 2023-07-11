function calculateDamagesForBreachOfContract(buyer,seller,goods, damages){
    //check if the seller bracehd the contract 
    if(!seller.breachedContract){
        return 0;''
    }

    //chekc if teh buyer was able to obtain substitute goods or servicesat a higher price than the contract price 
    if(!buyer.wasAbleToObtainSubstituteGoodOrServicesAtAHigherPriceThanTheontractPrice){
        return 0;

    }

    //determine teh amoutn of damages 
    let amount =0;

    //the buyer can recover the cost of cover 
    amount+=buyer.costOfCover;

    //if the buyer was able to amke additona profits by selling the substite goods or services 
    //those profits should not be deducted from the amount of damages 
    if(buyer.madeAdditionalProfits){
        amount+=buyer.madeAdditionalProfits;


    }

    //retrn the amount of damges that thebuyer is entitled to recvoer retu
    return amount;
}