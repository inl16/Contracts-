function isCISGApplicable(buyerlocation, sellerLocation){
    ///chcek if teh buyer and seller are lcoated in differnet countries
    if(buyerlocation!==sellerLocation){
        //chkec if both countries are signatory coutnries 
        const buyerCountryIsSignatory = isSignatoryCountry(buyerlocation);
        const sellerCountryIsSignatory = isSignatoryCountry(sellerLocation);

        if(buyerCountryIsSignatory&&sellerCountryIsSignatory){
            //the csig is applicable 
            return true;
        }
    }

    //the CISG is not applicable 
    return false;
}

function isSignatoryCountry(countryCode){
    //chekc if the country code is in the list of signatory cuontries 
    const signatoryCountries = [
        "US", 
        "CA", 
        "FR"
    ];


    return signatoryCountries.inlcudes(countryCode);
}

function getApplicableLaw(buyerLocation, sellerLocation){
    //chekc if the CSIG is applicable 
    if(isCISGApplicable(buyerLocation, sellerLocation)){
        //the csig is applicable 
        return "CSIG";

    }else{
        //the csig is not applicable 
        //check if th ebuyer location is in the US 
        if(buyerLocation==="US"){
            //the us law is applicable 

        }else{
            // teh seller location is in the us 
            return "US";
        }
    }
}


const CISG = {
    // The parties to the contract.
    buyer: "",
    seller: "",
  
    // The constructor.
    constructor(buyer, seller) {
      this.buyer = buyer;
      this.seller = seller;
    }
  
    // Check if the contract is enforceable under the CISG.
    isContractEnforceable() {
      // Check if the contract is between parties located in different countries.
      if (this.buyer.country !== this.seller.country) {
        return true;
      }
  
      // Check if the contract is for the sale of goods.
      if (this.contractType !== "sale of goods") {
        return false;
      }
  
      // Check if the contract is for a consumer transaction.
      if (this.isConsumerTransaction()) {
        return false;
      }
  
      // Check if the contract is for certain types of property or in certain transactional situations.
      if (this.isExcludedTransaction()) {
        return false;
      }
  
      // Check if the parties have excluded application of the CISG.
      if (this.hasExcludedCISG()) {
        return false;
      }
  
      // The contract is enforceable under the CISG.
      return true;
    }
  
    // Check if the contract is a consumer transaction.
    isConsumerTransaction() {
      // Check if the buyer is a natural person.
      if (typeof this.buyer.id !== "string") {
        return false;
      }
  
      // Check if the goods are used primarily for personal or household use.
      if (this.goods.isForPersonalUse) {
        return true;
      }
  
      // The contract is not a consumer transaction.
      return false;
    }
  
    // Check if the contract is for certain types of property or in certain transactional situations.
    isExcludedTransaction() {
      // Check if the goods are electricity.
      if (this.goods.type === "electricity") {
        return true;
      }
  
      // Check if the goods are aircraft.
      if (this.goods.type === "aircraft") {
        return true;
      }
  
      // Check if the contract is for an auction.
      if (this.isAuction()) {
        return true;
      }
  
      // The contract is not an excluded transaction.
      return false;
    }
  
    // Check if the contract is for an auction.
    isAuction() {
      // Check if the contract was made at an auction.
      if (this.madeAtAuction) {
        return true;
      }
  
      // The contract is not an auction.
      return false;
    }
  
    // Check if the parties have excluded application of the CISG.
    hasExcludedCISG() {
      // Check if the contract has a choice of law clause that excludes the CISG.
      if (this.choiceOfLawClause && this.choiceOfLawClause.excludesCISG) {
        return true;
      }
  
      // The parties have not excluded application of the CISG.
      return false;
    }
  };