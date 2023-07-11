function calculateRelianceDamages(
    contract, 
    costsIncurred, 
    benefitsReceived
){
    //calculate the amount of cost incurred in reliance on teh contract
    var costsIncurredInReliance = costsIncurred-benefitsReceived;


    //return the amount of reliance damages 
    return costsIncurredInReliance;
}