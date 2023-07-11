function isImprovementsToLandValidConsideration(promise, improvements){
    //check fi the promise is for the ocnveyance of the land 
    if(!promise.includes("land")){
        return false;
    }

    //check fi the improvement were made in rlaince on the promise 
    if(!improvements.includes("incldues by the oral promiseof the grantor ")){
        return false;
    }

    //if the promise is for the conveyance of landand the improvements were made in relaicne on the rpomise then the imprvements consitutevalid consideratoin of the promise 
    return true;
}

const promise = "I promise to give you my land if you build a home, barn, and stable on it.";
const improvements = "The home, barn, and stable were built in reliance on this promise.";

if (isImprovementsToLandValidConsideration(promise, improvements)) {
  // The improvements constitute valid consideration of the promise.
} else {
  // The improvements do not constitute valid consideration of the promise.
}