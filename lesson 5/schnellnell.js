function isUnenforceableGift(promise, considertion){
    //check fi the prmoise is to make a gift 
    if(promise.type ==='gift'){
        //check fi the considerationis nominal 
        if(consideration.amount===0){
            return true;
        }
    }
    //check if the consideration is a moral obligatoin
    if (consideration.type==='moral obligation'){
        return true;
    }
    return false;
}