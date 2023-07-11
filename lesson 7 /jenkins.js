function isContractProvisionClearAndUnambigous(contractProvision){
    //chkec i the contract provison is claar
    if(!contractProvision.isClear){
        return false;
    }

    //check if the contract provision is complete 
    if(!contractProvision.isComplete){
        return false;
    }

    //check if the contract provision is unambigous 
    if(!contractProvision.isUnambigous){
        return false;
    }

    //the conract is clear compelte and unambigous 
    return true;
}

function main() {
    // Get the contract provision.
    var contractProvision = getContractProvision();
  
    // Check if the contract provision is clear, complete, and unambiguous.
    var isClearAndUnambiguous = isContractProvisionClearAndUnambiguous(contractProvision);
  
    // If the contract provision is clear, complete, and unambiguous, print "The contract provision is clear, complete, and unambiguous."
    // Otherwise, print "The contract provision is not clear, complete, and unambiguous."
    if (isClearAndUnambiguous) {
      console.log("The contract provision is clear, complete, and unambiguous.");
    } else {
      console.log("The contract provision is not clear, complete, and unambiguous.");
    }
  }
  
  main();
