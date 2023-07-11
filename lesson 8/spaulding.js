function interpreWrittenInstrument(instrument, parties, circumstances, facts){
    //check fit he intstrument is ambigous 
    if(instrument.isAmbigous()){
        //consdier the parties main goal in enteringthe contract 
        var mainGoal=parties.getMainGoal();
        if(mainGoal.isDefinite()){
            return mainGoal;
        }

        //consier the parites mateiral cirucmstances and teh facts known to them at the time they executed thier agrement ]
        var circumstnces = parties.getCircumstances();
        var facts=parties.getFacts();
        if(circumstances.isDefinitive()&& facts.isDefinitive()){
            return circumstances.getInterpretation(facts);

        }

        //the insturment is ambigous and cannot be interpreted 
        return null;

    }

    //the insturment is not ambigous 
    return instrument.getPlainMeaning();
    
}