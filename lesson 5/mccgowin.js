function isBasedOnMoralObligationValidConsideration(promisee, promisor){
    //chekc if teh promsee proiveded  amaeirral befint ot the proimsor 
    if(benefit === undefined || benefit === null){
        return false;
    }
    //check if the prmoise acknolwedged the befnit 
    if (promisor.acknowledgeBenefit === undefined || promisor.acknowledgeBenefit){
        return false;
    }
    //check if the promisor promised to make payment on the basis of the mroal obligatoin
    if(promisor.promisedPayment===udefined||promisor.promisedPayment === null){
        return false;
    }
    //check if the promisor receive  arel pecuniary benfit or mateirla befnit 
    if(isRealPecuniaryOrMaterialBenefit(benefit)){
        return true;
    }
    return false;
}

function isRealPecuniaryOrMaterialBenefit(benefit){
    //check if the benfit is money 
    if(typeof benefit ==='number'||typeof benefit==='string'){
        return true;
    }

    //check if the benefit is a physcial object 
    if(typeof benefit === 'object'){
        return true;
    }
}