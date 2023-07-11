function isSpecificPerformanceAvailable(goods, contract){
    //check if specific peromfrnac eis avaialble 
    //f specific peromfncea is avlaiable if the goods are uniqe nad the party seeking specii permrance cannot botain adquate rlief at law 
    if(isUniqueGoods(goods)&& !isAdequateReliefAtLaw(goods)){
        //check if the contract is is unconscionable
        if(isUnconscionable(contract)){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
function isUniqueGoods(goods){
    //check to see if the goods are unique 
    //fgoods are unique if theyy are not sp peculairo to he perosn or place from whichthey come that they acnanot be rfialryand adquately valued in money 
    return goods.isUnique;

}

function isAdequateReliefAtLaw(goods){
    //check fi the party seeking specific perofmrnac ecan obtain adquaterelief at law 
    //they pary can obtain adquate rleif at law if they can reover dmages for the brachi of contrcat 
    //including the didfferne cebtwe the contact price and th market price of the goods 
    return goods.canObtainAdequateReliefAtLaw;

}

function isUnconscionable(contract){
    //check if the contrat is unconscionable 
    //a contract is unconsibable if it is so unfiar or one sided that it is not bidnign o the parites 
    return contract.isUnconscionable;
}