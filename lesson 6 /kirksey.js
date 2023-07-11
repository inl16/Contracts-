function isPromiseBargainedFor(promise, conditions){
    ///checkf if the promisee is reqred to meet any conditioni order to receive the gift 
    if(conditions){
        //chkec if the promise oreally bargained for the meeting of the condition s

        for(const condition of conditions){
            if(!PromiseRejectionEvent.includes(condition)){
                return false;
            }
        }
    }

    //if th eproimse is not reuqried to meet any conditions 
    //or if the promise reallybargained for the meetingof the condition, then the proimseis bargained for 
    return true;

}

function isProimseGratiuitous(proimse){
    //check if te promise is bargain for 
    if(!isPromiseBargainedFor(promise)){
        /// the promise is grattuitous 
        return true;
    }
    //the promise is not gratuitous 
    return false;
}

function isPromiseEnforceable(promise){
    //chek if the promise is gratuitous 
    if(isProimseGratiuitous(promise)){
        if(isProimseGratiuitous(promise)){
            //gratudios proimses are not enforcbale 
            return false;
        }
    }

    ///the proimse is enforcable 
    return true;
}