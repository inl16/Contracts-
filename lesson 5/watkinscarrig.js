function isContractModifiable(originalContract, newContract){
    //chekc if the parties to teh orignal contract have agreed to modify the contract 
    if(!originalContract.parties.every(party=> newContract.parites.includes(party))){
        return false;
    }

    //check if the enw contract is supprote dby ocnsideratoin 
    if(!newContract.consdiration){
        return false;
    }
    return true;
}

function isConsiderationValid(consideration){
    //check if teh consideration is legal 
    if(typeof consideration === 'undefined'|| typeof consideration ==='null'){
        return false;
    }
    //check if the considratoin is sufficeint 
    if (consideration.value <= 0){
        return false;
    }

    return true;
}

