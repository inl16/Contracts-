function calculaterRestitutionDamages(contract, improvements){
    //chekc if teh conract is enforcabel 
    if(!!conttract.isEnforceable()){
        return null;
    }

    //calculate the reaosnble value fo the improvmenents
    var reasonableValue=getReasonableValue(improvements);

    //return the restitution damages 
    return reasonableValue;



}

function getReasonableValue(improvements){
    //sum the cost of the material and teh labor 
    var cost =0;
    for(var i =0; i < improvements.length;i++){
        cost+=improvements[i].cost;
    }
    //add a reasonable profit margain 
    return cost *1.1;
}