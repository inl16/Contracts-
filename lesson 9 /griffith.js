function isMistake(contract){
    //chck if both parties to the contract were mistaken about the same fact 
    if(contract.hasMutualMistake()){
        //check if teh fact that was mistaken about is material to the contract 
        if(contract.factIsMaterial()){
            //the contract is void 
            return true;
        }
    }
    //the contract is not void 
    return false;
}