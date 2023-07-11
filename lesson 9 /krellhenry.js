function isFrustrated(contract, event) {
    // Check if the contract was entered into with the assumption that a certain event would occur.
    if (contract.hasAssumption(event)) {
      // Check if the event did not occur.
      if (!event.occurred()) {
        // The purpose of the contract has been frustrated.
        return true;
      }
    }
    // The purpose of the contract has not been frustrated.
    return false;
  }