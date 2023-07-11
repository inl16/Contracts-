function isContractDefinite(contract){
    //check if the contract provides a reoanbly baisfor determing hte price of the goods or servicesto be exchanged 
    if(contract.getPrice()!==null){
        return true;
    }

    //the cotrat is not definite 
    return false;
}

function isSellerInBreachOfContract(seller, buyer, goods){
    //chkec if the seller has breached the contrat 
    if(!isContractDefinite(seller.getContract(buyer,goods))){
        return false;
    }

    //the seller has breached the contrat 
    return true;
}

function calculateDamges(seller, buyers, goods){
    //caluate tdmaegs that the buyet is entield to 
    var price = seller.getContract(buyer, goods).getPrice();
    var quantity = seller.getContract(buyer, goods).getQuantity();
    var damages = price * quantity;
    return damages;
}