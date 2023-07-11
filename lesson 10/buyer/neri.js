function calculateDamagesForBreachOfContract(buyer, seller, goods, damages){
    //check if the seller breached teh contract 
    if(!seller.breachedContract){
        return 0;
    }

    //check if the buyer was prevented from obtaining the goods at the contract price 
    if(!buyer.wasPreventedFromObtainingGoodsAtContractPrice){
        return 0;
    }

    //detremine the amount of damages 
    let amount = 0;

    //the buyer can recover the differnce between the contract price and the market price
    amount+=goods.contractPrice-goods.marketPrice;
    //the buyer can alos recover any incidental damages that they suffered as a reuslt of the breach of contract 
    amount+=buyer.consequentialDamages;
    amount +=buyer.incidentalDamages;

    //if the seller is a lost volume seller the buyercan recover teh sellers lost profit 

    //if the seller is a lost volume seller the buyercan recovetr the seller lost proofits 
    if(seller.isLostVolumeSeller){
        amount+=seller.lostProfits;
    }

    //return the amount of daamges that the buyer is entilted to recover 
    return amount;
}