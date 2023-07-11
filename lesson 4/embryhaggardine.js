function isContractualAssent(words, otherActs, undisclosedIntention){
    //check ifthe word s or other acts have onyl one real meaning
    if(words.length===0 && otherActs.length===0){
        return false;

    } 
    //check if the undissclsoed intetion is known to the other party 
    if (undisclosedIntention !== undefined && otherParty.knows(undisclosedIntention)){
        return true;
    }
    //otherwise. the ccontract is not formed 
    return false;
}

function main() {
    // The plaintiff, Embry, was a manager for the defendant, Hargadine, McKittrick Dry Goods Co.
    var plaintiff = "Embry";
    var defendant = "Hargadine, McKittrick Dry Goods Co.";
  
    // Embry's contract with Hargadine expired in December 1905.
    var contractExpirationDate = new Date(1905, 12, 31);
  
    // In January 1906, Embry met with Hargadine's president, who told him that he was "all right" and to "go ahead and get your men out and don't let that worry you."
    var meetingDate = new Date(1906, 01, 01);
    var words = "You're all right. Go ahead and get your men out and don't let that worry you.";
  
    // Embry understood this statement to mean that his contract had been renewed for another year.
    var understanding = true;
  
    // However, Hargadine later terminated Embry's employment.
    var terminationDate = new Date(1906, 12, 31);
  
    // Embry sued Hargadine for breach of contract.
    var lawsuit = true;
  
    // The trial court found in favor of Hargadine, but the appellate court reversed.
    var trialCourtDecision = false;
    var appellateCourtDecision = true;
  
    // The appellate court held that there was sufficient evidence to support a finding that Embry and Hargadine had entered into a contract for Embry's continued employment for another year.
    var appellateCourtReasoning = "Hargadine's statement to Embry was clear and unambiguous, and that Embry had a reasonable expectation that his contract had been renewed.";
  
    // The Embry v. Haggardine case illustrates the principle that a contract can be formed even if the parties do not have the same mental assent.
    var caseIllustration = true;
  
    // If the logic of the case is applied to the given facts, then the contract is formed.
    var contractIsFormed = isContractualAssent(words, otherActs, undisclosedIntention);
  
    // Print the results.
    console.log("The plaintiff is", plaintiff);
    console.log("The defendant is", defendant);
    console.log("The contract expiration date is", contractExpirationDate);
    console.log("The meeting date is", meetingDate);
    console.log("The words are", words);
    console.log("The understanding is", understanding);
    console.log("The termination date is", terminationDate);
    console.log("The lawsuit is", lawsuit);
    console.log("The trial court decision is", trialCourtDecision);
    console.log("The appellate court decision is", appellateCourtDecision);
    console.log("The appellate court reasoning is", appellateCourtReasoning);
    console.log("The case illustration is", caseIllustration);
    console.log("The contract is formed", contractIsFormed);
  }
  
  main();
