function isPromiseEnforceable(promise) {
    // Check if the promise is one that the promisor should have reasonably expected to induce action or forbearance of a definite and substantial character on the part of the promisee.
    if (!isPromiseIntendedToInduceReliance(promise)) {
      // The promise is not enforceable.
      return false;
    }
  
    // Check if the promise actually induced such action or forbearance.
    if (!isPromiseeReliedOnPromise(promise)) {
      // The promisee did not rely on the promise.
      return false;
    }
  
    // Check if the promisee's reliance was reasonable.
    if (!isPromiseeRelianceReasonable(promise)) {
      // The promisee's reliance was not reasonable.
      return false;
    }
  
    // Check if the promisee's reliance was foreseeable.
    if (!isPromiseeRelianceForeseen(promise)) {
      // The promisee's reliance was not foreseeable.
      return false;
    }
  
    // Check if injustice can only be avoided by enforcement of the promise.
    if (!isInjusticeAvoidableByEnforcementOfPromise(promise)) {
      // Injustice cannot be avoided by enforcement of the promise.
      return false;
    }
  
    // The promise is enforceable.
    return true;
  }
  
  function isPromiseIntendedToInduceReliance(promise) {
    // Check if the promise was made with the intention of inducing reliance by the promisee.
    if (!promise.includes("intended to induce reliance")) {
      // The promise was not made with the intention of inducing reliance by the promisee.
      return false;
    }
  
    // The promise was intended to induce reliance by the promisee.
    return true;
  }
  
  function isPromiseeReliedOnPromise(promise) {
    // Check if the promisee actually relied on the promise.
    if (!promise.includes("relied on the promise")) {
      // The promisee did not rely on the promise.
      return false;
    }
  
    // The promisee relied on the promise.
    return true;
  }
  
  function isPromiseeRelianceReasonable(promise) {
    // Check if the promisee's reliance was reasonable.
    if (!promise.includes("reasonable reliance")) {
      // The promisee's reliance was not reasonable.
      return false;
    }
  
    // The promisee's reliance was reasonable.
    return true;
  }
  
  function isPromiseeRelianceForeseen(promise) {
    // Check if the promisee's reliance was foreseeable.
    if (!promise.includes("foreseeable reliance")) {
      // The promisee's reliance was not foreseeable.
      return false;
    }
  
    // The promisee's reliance was foreseeable.
    return true;
  }
  
  function isInjusticeAvoidableByEnforcementOfPromise(promise) {
    // Check if injustice can only be avoided by enforcement of the promise.
    if (!promise.includes("injustice can only be avoided by enforcement of the promise")) {
      // Injustice cannot be avoided by enforcement of the promise.
      return false;
    }
  
    // Injustice can only be avoided by enforcement of the promise.
    return true;
  }