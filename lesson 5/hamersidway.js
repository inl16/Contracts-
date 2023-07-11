class isUnenforceableGift{
    constructor(promise, consdiration){
        this.promise;
        this.consdiration;
    }

    isValueableAsync(){
        return new Promise(resolve=>{
            if(this.consideration.value > 0){
                resolve(true);
            }else{
                resolve(false);
            }
        });
    }

    isNotIllusoryAync(){
        return new Promise(resolve => {
            if(this.promise.obligation.isLegallyBinding){
                resolve(true);
            }else{
                resolve(false);
            }
        });
    }

    isEnforceableAsync(){
        return new Promise(resolve =>{
            if(this.promise.type ==='gift'){
                let isValueable=await this.isValueableAsync();
                let isNotIllusory = await this.isNotIllusoryAync();
                if(isValueable && isNotIllusory){
                    resolve(true);
                }else{
                    resolve(false);
                }

            }else{
                resolve(false);
            }
        });
    }

    isForbearanceConsiderationAsync(){
        return new Promise(resolve=>{
            //check if the consideration is a foreberance 
            if(this.consideration.type ==='forebearance'){
                //check if the foreberahcne is of a legal rihgt 
                if(this.consideration.right instanceof LegalRight){
                    //chcek fi teh foreberance is at the requres otf the promisor 
                    resolve(true);
                }else{
                    resolve(false);
                }
            }else{
                resolve(false);
            }
        });
    }
}