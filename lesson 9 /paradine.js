function isForceMajuereDefenseValid(contract, event){
    //chekc fi the event is a force majuere event 
    if(event.isForceMajeuere()){
        //chkec if teh contract includes a force majerueclause 
        if(contract.hasForceMajuereCluase()){
            //the aprty is excused from performing 
            return true;
        }else{
            //the party is not excused from performing 
            return false;
        }
    }else{
        // the party is not excused foprm perfroming 
        return false;
    }
}


//exmapke usage 
const contract ={
    hasForceMajuereCluase:true,
}

const event ={
    isForceMajuere:true, 

};


//chkce if the force majuere defense is valid 
const isValidDefense=isForceMajuereDefenseValid(contract, event);
//print the result 
console,log(isValidDefense);//true 