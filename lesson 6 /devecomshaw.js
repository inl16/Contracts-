class Consideration{
    constructor(promise, expenditure){
        this.promise=promise;
        this.expenditure=expenditure;


    }

    isSufficient(){
        //chekc if the proimse is for the remiburesmen of the expendtiures 
        if(!this.promise.includes("reimbursement")){
            return false;
        }

        //check fi teh expendtures was made in reliance on the promise 
        if(!this.expenditure.includes("inducedby the promise of repayment ")){
            return false;
        }

        //if the promise is for th eremibursementof expenditrues andthe expenditures was made in relainceon the promisethe then expenditures consitutes suffiecntcosieratoin of the promise
        return true;
    }


}

const consideration = new Consideration("i promise to remiburse you for your expenditures")

if(consideration.isSufficient()){
    //the expenditure constitues sufficeint considerationof the promise 

}else{
    //the expendures does nt consittute sufficent considertaoin 

}