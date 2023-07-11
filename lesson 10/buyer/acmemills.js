function calculateDamagesForBreachOfContract(buyer, seller, goods, damages){
    //chekc if the seller breached the contract 
    if(!seller.breachContract){
        return 0;
    }

    //check fi teh buyer was prevented from obtainingthe goods at the contract prive 
    if(!buyer.wasPreventedFromObtainingGoodsAtContractPrice){
        return 0;
    }

    //determine the amount fo damages 
    let amount=0;

    //the buyer can recover teh differnece betweenthe contract price and the market price 
    amount+=goods.contractPrice-goods.marketPrice;
    return amount;
}