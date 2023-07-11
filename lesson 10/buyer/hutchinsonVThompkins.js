function isLiquidatedDamagesClauseValid(contract, liquidatedDamagesAmount){
    //chkec i the liquidated damges amount is readily ascertainable at the time of contracting 
    if(liquidatedDamagesAmount===undefined||liquidatedDamagesAmount===null){
        return false;
    }

    //chekc if the aftual damages are hard to compute 
    if(contract.actualDamages===undefined||contract.actualDamages===null){
        return true;
    }
    //if the liquidated damageas amount is readily ascertainable and the actual damages are hard to computethe the liquidated damgesclause is vlaid 
    return true;
}