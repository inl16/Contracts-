function calculateDamagesForBreachOfContract(county, bridgeCompany, damages){
    //chekck if the county repudiated the contract
    if(!county.repudiatedContract){
        return 0;
    }
    //check fi te birdge company conitunted to performathe contract after the repudation 
    if(bridgeCompany.continuedToPerformContract){
        return 0;
    }

    //determine the amoutn of damages 
    let amount=0;

    //the brideg comapny can only reocver the expensesthat it uncurredbefre teh repudation 
    amount+=bridgeCompany.expensesIncurredBeforeRepudiation;
    //the bridge comapny canot recover any profitsthat it owuld have mad eif the contract had been performe d
    amount-= bridgeCompany.profitsLostDueToRepudiation;

    return amount;
}