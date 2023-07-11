function isOptionContract(agreement) {
    // Check if the agreement is in writing and signed by the offeror.
    if (!isAgreementInWritingAndSignedByOfferor(agreement)) {
      // The agreement is not an option contract.
      return false;
    }
  
    // Check if the agreement recites the consideration for making the offer.
    if (!isAgreementRecitingConsiderationForMakingTheOffer(agreement)) {
      // The agreement is not an option contract.
      return false;
    }
  
    // Check if the agreement proposes a fair exchange of terms.
    if (!isAgreementProposingAFairExchangeOfTerms(agreement)) {
      // The agreement is not an option contract.
      return false;
    }
  
    // The agreement is an option contract.
    return true;
  }
  
  function isAgreementInWritingAndSignedByOfferor(agreement) {
    // Check if the agreement is in writing.
    if (!agreement.includes("in writing")) {
      // The agreement is not in writing.
      return false;
    }
  
    // Check if the agreement is signed by the offeror.
    if (!agreement.includes("signed by the offeror")) {
      // The agreement is not signed by the offeror.
      return false;
    }
  
    // The agreement is in writing and signed by the offeror.
    return true;
  }
  
  function isAgreementRecitingConsiderationForMakingTheOffer(agreement) {
    // Check if the agreement recites the consideration for making the offer.
    if (!agreement.includes("consideration for making the offer")) {
      // The agreement does not recite the consideration for making the offer.
      return false;
    }
  
    // The agreement recites the consideration for making the offer.
    return true;
  }
  
  function isAgreementProposingAFairExchangeOfTerms(agreement) {
    // Check if the agreement proposes a fair exchange of terms.
    if (!agreement.includes("proposes a fair exchange of terms")) {
      // The agreement does not propose a fair exchange of terms.
      return false;
    }
  
    // The agreement proposes a fair exchange of terms.
    return true;
  }
  