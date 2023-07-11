function isContractualAssent(words, otherActs, undisclosedIntention) {
    // Check if the words or other acts have only one reasonable meaning.
    if (words.length === 0 && otherActs.length === 0) {
      return false;
    }
  
    // Check if the undisclosed intention is known to the other party.
    if (undisclosedIntention !== undefined && otherParty.knows(undisclosedIntention)) {
      return true;
    }
  
    // Otherwise, the contract is not formed.
    return false;
  }