function isContractValid(promisee, promisor, thirdParty, consideration) {
    // Check if the consideration is desired by the promisor mainly for his own economic advantage.
    if (consideration.isEconomicAdvantageToPromisor()) {
      // The contract is not within the Statute of Frauds.
      return true;
    }
  
    // Check if the consideration is a premium for insurance.
    if (consideration.isInsurancePremium()) {
      // The contract is within the Statute of Frauds.
      return false;
    }
  
    // The contract is invalid.
    return false;
  }