function interpretAmbigiousTerm(term){
    //chekc if the term is ambigous 
    if(!term.isAmbigous()){
        //the term is unambigous and mustconstreid in accordance iwth ordinary and unusaul sense 
        return term.getOrdinaryMeaning();

    }

    //the term is ambigous and cannot be interpreted
    return null;
}