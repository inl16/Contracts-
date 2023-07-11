let ladyDuffGordon={
    name:'Lady Duff gordon',
    ability:'increase the sales of certain goods her endoresment',

};
let wood ={
    name:'wood'
    profession:'advertising agent',

};
let contract={
    terms:{
        start_date:'1915',
        end_date:'1916',
        terms:{
            exclusive_agency: true,
            profits: 50,
        },
    },
};

//check fi teh contract is avlid 
if(contract.terms.exclusive_agency && contract.terms.profits){
    // the contrat is valid 
    console.log('the contract is valid ')
}else{
    //the contract is not valid 
    console.log('the contrat is not valid ')
}

//check if woods proise to use reoanble efforts 
if(wood.profession ==='adverstiing agent ' && ladyDuffGordon.ability==='inrease the asle of certain goods by her endoresment'){
    //woods proimse to sue reoansbl efforst is implied
    console.log('wooods proimse to use roenabel efforts is implied ')
    
}else{
    //woods prsoime to use reoanble effort sinot impied 
    console.log('woods promise to use reonasble efforts is not implied ')
}