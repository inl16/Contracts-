function millsVWyman(promise, promisor, promisee) {
    // Check if the promise is made without legal consideration.
    if (promise.isMadeWithoutLegalConsideration(promisor, promisee)) {
      // Check if the promise is based on a moral obligation.
      if (promise.isBasedOnMoralObligation()) {
        // The promise is not binding.
        return null;
      }
    }
    // The promise is binding.
    return promise;
  }