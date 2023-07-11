function isContractValid(offer, acceptance) {
    // Check if the offer and acceptance are compatible.
    if (isCompatible(offer, acceptance)) {
      // Check if the offer and acceptance contain different terms.
      if (hasDifferentTerms(offer, acceptance)) {
        // Check if the offeree made the different terms a condition of acceptance.
        if (madeConditionOfAcceptance(offeree, differentTerms)) {
          // The contract is not valid.
          return false;
        } else {
          // The contract is valid.
          return true;
        }
      } else {
        // The contract is valid.
        return true;
      }
    } else {
      // The contract is not valid.
      return false;
    }
  }
  
  function isCompatible(offer, acceptance) {
    // Check if the offer and acceptance are for the same goods and services.
    if (offer.goods === acceptance.goods && offer.services === acceptance.services) {
      // The offer and acceptance are compatible.
      return true;
    } else {
      // The offer and acceptance are not compatible.
      return false;
    }
  }
  
  function hasDifferentTerms(offer, acceptance) {
    // Check if the offer and acceptance have different terms for the price, quantity, or delivery date.
    if (offer.price !== acceptance.price || offer.quantity !== acceptance.quantity || offer.deliveryDate !== acceptance.deliveryDate) {
      // The offer and acceptance have different terms.
      return true;
    } else {
      // The offer and acceptance have the same terms.
      return false;
    }
  }
  
  function madeConditionOfAcceptance(offeree, differentTerms) {
    // Check if the offeree made the different terms a condition of acceptance.
    if (offeree.acceptance.terms === differentTerms) {
      // The offeree made the different terms a condition of acceptance.
      return true;
    } else {
      // The offeree did not make the different terms a condition of acceptance.
      return false;
    }
  }