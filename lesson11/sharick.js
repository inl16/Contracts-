function calculateDamagesForBreachOfContract(student, school, damages){
    //check if teh student was dismiseed from schoolarbitrarily or cparicious 
    if(!student.wasDismissedArbitrarilyOrCapriciously){
        return 0;
    }

    //check fi teh school caused the daamge 
    if(!school.causedDamage){
        return 0;
    }

    //check fi there is some standard where they can figure damages 
    if(!damages.standard){
        return 0;
    }

    //determine the amount of damages 

    let amount =0;

    //if the student coudl get into antoher school they get the money for lost profits or for
    
      // If the student could get into another school, they get the money it would take to complete the degree elsewhere and delay in profits.
    if (student.couldGetIntoAnotherSchool) {
    amount += student.costOfEducationAtAnotherSchool + student.delayInProfits;
  }

  // If the student can't go to another school, then they get reasonable earning capacity.
  if (!student.couldGetIntoAnotherSchool) {
    amount += student.reasonableEarningCapacity;
  }

  return amount;
}
