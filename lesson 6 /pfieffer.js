function isPromiseEnforceable(promise) {
    // Check if the promise is gratuitous.
    if (isPromiseGratuitous(promise)) {
      // Gratuitous promises are generally not enforceable.
      return false;
    }
  
    // Check if the promisee suffered some detriment in relying on the promise.
    if (!isPromiseeDetrimentalReliance(promise)) {
      // The promisee did not suffer any detriment in relying on the promise.
      return false;
    }
  
    // Check if the promisee's reliance was a foreseeable result of the promise.
    if (!isPromiseeRelianceForeseen(promise)) {
      // The promisee's reliance was not a foreseeable result of the promise.
      return false;
    }
  
    // Check if the promisee's detrimental reliance was reasonable.
    if (!isPromiseeDetrimentalRelianceReasonable(promise)) {
      // The promisee's detrimental reliance was not reasonable.
      return false;
    }
  
    // The promise is enforceable under the doctrine of equitable estoppel.
    return true;
  }
  
  function isPromiseGratuitous(promise) {
    // Check if the promisee is required to give anything in return for the promise.
    if (promise.includes("in return for")) {
      // The promisee is required to give something in return for the promise.
      return false;
    }
  
    // The promise is gratuitous.
    return true;
  }
  
  function isPromiseeDetrimentalReliance(promise) {
    // Check if the promisee suffered any detriment in relying on the promise.
    if (promise.includes("in reliance on this promise")) {
      // The promisee suffered some detriment in relying on the promise.
      return true;
    }
  
    // The promisee did not suffer any detriment in relying on the promise.
    return false;
  }
  
  function isPromiseeRelianceForeseen(promise) {
    // Check if the promisee's reliance was a foreseeable result of the promise.
    if (promise.includes("foreseeable result of this promise")) {
      // The promisee's reliance was a foreseeable result of the promise.
      return true;
    }
  
    // The promisee's reliance was not a foreseeable result of the promise.
    return false;
}
  
  function isPromiseeDetrimentalRelianceReasonable(promise) {
    // Check if the promisee's detrimental reliance was reasonable.
    if (promise.includes("reasonable reliance on this promise")) {
      // The promisee's detrimental reliance was reasonable.
      return true;
    }
  
    // The promisee's detrimental reliance was not reasonable.
    return false;
}