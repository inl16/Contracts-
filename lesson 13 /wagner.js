function canCourtEnjoinBreachOfPersonalServiceContract(employee, employer, newEmployer){
    //chekc if the contract is a personal servies contract
    if(!contractIsPersonalServicesContract){
        return false;
    }

    //check if teh employee is breaching the contract 
    if(!employeeIsBreachingContract){
        return false;
    }
    //chekc if the new emloyer is a competitor of the employer 
    if(!newEmployerIsCompetitorOfEmployer){
        return false;
    }
    //if al of the cek pass then the courtcan enjoin the brach of the personal services contract 

    return true;''
}