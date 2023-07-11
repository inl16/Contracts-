function isOralModificationValidUnderUCC(contract, oralModification){
    //chkef f the contrat rhibits orla modificatoin 
    if(contract.prohibitsOralModification){
        //check if the oral made in relianceon the contract 
        if(!oralModification.wasMadeinReliaanceOnTheContract){
            //the orla modificaiotn is not valid 
            return false;
        }
    }

    //the oral modificaoitn is vlaid 
    return true;
}

function main() {
    // Get the contract.
    var contract = getContract();
  
    // Get the oral modification.
    var oralModification = getOralModification();
  
    // Check if the oral modification is valid.
    var isValid = isOralModificationValidUnderUCC(contract, oralModification);
  
    // If the oral modification is valid, print "The oral modification is valid."
    // Otherwise, print "The oral modification is not valid."
    if (isValid) {
      console.log("The oral modification is valid.");
    } else {
      console.log("The oral modification is not valid.");
    }
  }
  
  main();