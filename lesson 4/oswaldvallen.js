function contractExists(party1, party2, agreement){
    //chekc if teh term of the agreement are ambiguous 
    if(isAmbiguous(agreement)){
        //chekc if teh parties each have a differnet understanidng of teh agreement 
        if(party1.understanding !== party2.understanding){
            //check if one f the parties knew of the other's understanding
            if(party1.knewOfOtherUnderstanding||party2.knewOfOtherUnderstanding){
                //there is no contract 
                return true;
            }

        }
    }else{
        //the term sof the agrement are not ambigous 
        return true;
    }
    //there is no contract 
    return false;

}
function isAmbiguous(agreement){
    //check if teh agrement is unclear or opento multiple interpretations
    if(agreemnent.indexOf('*')!==-1||agreement.indexOf('?')!==-1){
        return true;
    }
    //the agreement is not ambigous 
    return false;
}