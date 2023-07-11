function contractRemedies(employer, employee, contract){
    //check if the contract has been breached 
    if(employee,hasBreachedContract()){
        //if the employer can reject the part performance they are entiled to do so 
        if(employer.canRejectParyPerforamcen(contract)){
            employer.rejectPartPerformance(contract);
        }else{
            //if the employer cnanot reject the part performance they are laible to pay the emplyoee fo rhte reonable worth of tehe contract or what they ahve recieved 
            employer.payEmployee(employee.getPartPerformance(contract));

        }
    }
}