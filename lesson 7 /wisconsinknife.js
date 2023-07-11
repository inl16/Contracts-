function isOralModification(contract, isOralModification){
    //chkec if the conract prohibits oral modificatoin
    if(contract.prohibitsOralModification){
        //chcek if the oral modifcation was mdae inrelaicne on the contract 
        if(!isOralModification.wasMadeInRelianceOnTheContract){
            //the orll modiciotn is not vlaid 
            return false;
        }
    }

    //the oral modificattion 
    return true;
}


function main() {
    // Get the contract.
    var contract = getContract();
  
    // Get the oral modification.
    var oralModification = getOralModification();
  
    // Check if the oral modification is valid.
    var isValid = isOralModificationValid(contract, oralModification);
  
    // If the oral modification is valid, print "The oral modification is valid."
    // Otherwise, print "The oral modification is not valid."
    if (isValid) {
      console.log("The oral modification is valid.");
    } else {
      console.log("The oral modification is not valid.");
    }
  }
  
  main();