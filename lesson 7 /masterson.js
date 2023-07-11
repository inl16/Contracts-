function isParoleEvidenecAdmissibleForIncompleteWrittenContract(writtenContract, paroleEvidence){
    //check if tthe written contrat is intended by theparites ot becomplete 
    if(writtenContract.isIntendedToBeComplete){
        //aporle evidnce is not admissble 
        return false;
    }

    //check if teh oral agreement is somethign that would naturally be madeas a sperateagreemnt by the apriesgiven their acutla situtoain and circumstanceswhen drafting the written contract 
    if (parolEvidence.isSomethingThatWouldNaturallyBeMadeAsASeparateAgreementByTheParties){
        //parole evidence is admissible 
        return true;
    }

    //parole evidence is not admissible 
    return false;
}


function main() {
    // Get the written contract.
    var writtenContract = getWrittenContract();
  
    // Get the parol evidence.
    var parolEvidence = getParolEvidence();
  
    // Check if the parol evidence is admissible.
    var isAdmissible = isParolEvidenceAdmissibleForIncompleteWrittenContract(writtenContract, parolEvidence);
  
    // If the parol evidence is admissible, print "Parol evidence is admissible."
    // Otherwise, print "Parol evidence is not admissible."
    if (isAdmissible) {
      console.log("Parol evidence is admissible.");
    } else {
      console.log("Parol evidence is not admissible.");
    }
  }
  
  main();