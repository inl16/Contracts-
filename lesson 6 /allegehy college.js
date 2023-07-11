function isPromiseEnforceable(promise){
    //check if te prmse is supproted by consdieration
    if(!isPromiseSupportedByConsideration(promise)){
        //the promise is not enforcable 
        return false;
    }


    //the primse is enfrobacle 
    return true;
}

function isPromiseSupportedByConsideration(promise){
    //echk if the prmise is a abrgained for exhcanfe 
    if(!promise.includes("bargained for exchnage ")){
        //the primse is not a bargined for exchange 
        return false;
    }

    //chk fi there is some detriment or befnefitot one party resulting form indumnetby the other party 
    if(!promise.includes("detrinent or benefit to one party ")){
        //theere is not detemrient or benefit t oen party resutling from indeucment by the other party 
        return false;
    }

    //the prisme is supproted by consideratio 
    return true;
}

function isPromiseEnforceable(promise){
    ///check fi teh proise is a chariblte subscriptionpr a marraige settlments 
    if(promise.includes("charitbale subscriptoin")||("marraige settlement")){
        //the primse is enfoablec wwihtout proof that the primse is indued action orforebcance 
        return true;
    }
    //the primse si not enfoablec 
    return false;
}
