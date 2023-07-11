function isContractValid(offer, acceteptance){
    //check if there is consideratoin
    if(!hasConsideration(offer, acceptance)){
        //there is no consideratoinso teh contract is notvalid 
        return false;

    }else{
        //there is consideratoin so there is a contrac
        return true;
    }
}

function hasConsideration(offer, acceptance){
    //chec ifteh offeree gave theofferor something of vale in exhcange for the promise 
    if(offeree.gaveSomethingOfValue===true){
        //; /the offeree gave the offerer sopemthing of valie so there is consdieratoin
        return true;
    }else{
        // teh offeree did nto give teh fofere something of vlaue so there is no sicderatoin 
        return false;
    }
}