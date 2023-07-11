function isParoleEvidenecAdmissible(writtenContract, paroleEvidence){
    //chec if the wrrten contract prodies certainterm inteended to consitute the entire agreement 
    if(writtenContract.containsTermThatIntendToConstituteTheEntireAgreemnt){
        //paorle evidecne regarding the agreementis inadmissible r
        return false;
    }

    //checkf  the writing does not providethe entire agreementon its face 
    if(!writtenContract.providesTheEntireAgreementOnItsFace){
        //parel evidnece may be permittted 
        return true;
    }

    //the entire agreemnet cannot be estbalished by parole evidence 
    //the writing copmpletenet must be determiendby reveiwing the contrat 
    //itself
    return false;
}

function main() {
    // Get the written contract.
    var writtenContract = getWrittenContract();
  
    // Get the parol evidence.
    var parolEvidence = getParolEvidence();
  
    // Check if the parol evidence is admissible.
    var isAdmissible = isParolEvidenceAdmissible(writtenContract, parolEvidence);
  
    // If the parol evidence is admissible, print "Parol evidence is admissible."
    // Otherwise, print "Parol evidence is not admissible."
    if (isAdmissible) {
      console.log("Parol evidence is admissible.");
    } else {
      console.log("Parol evidence is not admissible.");
    }
  }
  