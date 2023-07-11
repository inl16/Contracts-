function calculateBreachingBuyerRestitution(totalPrice, deposit, actualDamages ){
    //chkec if there are actaual damges 
    if(actualDamages!==undefined&&actualDamages!===null){
        //the amout recoverbale is the amout depsited miinus the actual damegs 
        return depsit-actualDamages;
    }else{
        //the buyer is not entield to any restittuoin 
        return 0;
    }
}


//example usage 
const totalPrice=10000;
const deposit =500;
const actualDamages=200;

const restitutionAmount =calculateBreachingBuyerRestitution(totalPrice, deposit, actualDamages);

console.log(restitutionAmount);//300