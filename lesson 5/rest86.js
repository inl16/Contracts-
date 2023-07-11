function restatement86(promise, benefit, promisor, promisee) {
    // Check if the promise is made in recognition of a benefit previously received by the promisor from the promisee.
    if (promise.isMadeInRecognitionOfBenefit(benefit, promisor, promisee)) {
      // Check if the promisee conferred the benefit as a gift or for other reasons the promisor has not been unjustly enriched.
      if (!promise.isBenefitConferredAsAGift() && !promise.isPromisorNotUnjustlyEnriched()) {
        // The promise is binding to the extent necessary to prevent injustice.
        return promise;
      }
    }
    // The promise is not binding.
    return null;
  }