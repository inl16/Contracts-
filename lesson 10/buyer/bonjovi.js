function calculateBreachingBuyerRestitution(totalPrice, deposit, liquidatedDamagesAmount){
    //check if there is a lqiuidated damges provision 
    if(liquidatedDamagesAmount!==undefined&&liquidatedDamagesAmount!===null){
        //the maount recoverable is the amount deposittedminues the liquidated damges 
        return deposit -liquidatedDamagesAmount;
    }else{
        //the amount recovable is the amount depositminus 20%
        return deposit -(deposit*0.2);
    }
}

//example usage 
const totalPrice=10000;
const deposit=500;
const liquidatedDamagesAmount=200;

const restutionAmount=calculateBreachingBuyerRestitution(totalPrice, deposit, liquidatedDamagesAmount);
console.log(restutionAmount);//300

