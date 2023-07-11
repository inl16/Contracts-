function isPromiseEnforceable(promise) {
    // Check if the promise was induced by the promisee's detriment.
    if (!isPromiseInducedByPromiseeDetriment(promise)) {
      // The promise is not enforceable.
      return false;
    }
  
    // Check if the promise was given before and without reference to a promise.
    if (!isPromiseGivenBeforeAndWithoutReferenceToAPromise(promise)) {
      // The promise is not enforceable.
      return false;
    }
  
    // The promise is enforceable.
    return true;
  }
  
  function isPromiseInducedByPromiseeDetriment(promise) {
    // Check if the promisee suffered any detriment in relying on the promise.
    if (!isPromiseeDetrimentalReliance(promise)) {
      // The promisee did not suffer any detriment in relying on the promise.
      return false;
    }
  
    // Check if the promisee's reliance was a foreseeable result of the promise.
    if (!isPromiseeRelianceForeseen(promise)) {
      // The promisee's reliance was not a foreseeable result of the promise.
      return false;
    }
  
    // The promise was induced by the promisee's detriment.
    return true;
  }
  
  function isPromiseGivenBeforeAndWithoutReferenceToAPromise(promise) {
    // Check if the promise was given before the promisee suffered any detriment.
    if (isPromiseGivenBeforePromiseeDetriment(promise)) {
      // The promise was given before the promisee suffered any detriment.
      return false;
    }
  
    // Check if the promise was given without reference to the promisee's detriment.
    if (isPromiseGivenWithoutReferenceToPromiseeDetriment(promise)) {
      // The promise was given without reference to the promisee's detriment.
      return false;
    }
  
    // The promise was given before and without reference to a promise.
    return true;
  }
  
  function isPromiseGivenBeforePromiseeDetriment(promise) {
    // Check if the promise was given before the promisee suffered any detriment.
    if (promise.includes("given before the promisee suffered any detriment")) {
      // The promise was given before the promisee suffered any detriment.
      return true;
    }
  
    // The promise was not given before the promisee suffered any detriment.
    return false;
  }
  
  function isPromiseGivenWithoutReferenceToPromiseeDetriment(promise) {
    // Check if the promise was given without reference to the promisee's detriment.
    if (promise.includes("given without reference to the promisee's detriment")) {
      // The promise was given without reference to the promisee's detriment.
      return true;
    }
  
    // The promise was not given without reference to the promisee's detriment.
    return false;
  }