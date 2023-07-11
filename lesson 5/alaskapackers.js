function isNewAgreementUnenforceableForLackOfConsideration(originalAgreement, newAgreement){
    //check fi the origal agremenet is still in effect 
    if(originalAgreement.isTerminated===true){
        return false;
    }
    //check if the new agremeent requries the promise to do no more than he or she was alredy obligated to do under the oringal agreement
    if(newAgreement.obligations.every(obligation=> originalAgreement.obligations,includes(obligation))){
        return true;
    }
    return false;

}

function isConsiderationValid(consideration){
    //check if the consideratoin is legal 
    if(typeof consideration===undefined||typeof consideration==='null'){
        return false;
    }

    //check if the considratoin is sufficeint 
    if(consideration.value <= 0){
        return false;
    }
    return true;
}