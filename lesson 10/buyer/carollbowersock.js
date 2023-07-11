function contracCanRecoverForPartialPerformance(building, floor, destruction){
    //check if the building was destryoeed throughno fault of eitherparty 
    if(destruction.isAccidental){
        //check fi what was constructed had beocomeso far identified wth the building at the time of destruction
        //but that it benefited the building owner as teh contract had contemplated 
        if(floor.isPermanent()&&floor.wouldHaveBenefitedBuildingOwner()){
            /// the constractor may recover for his partial performance 
            return true;''
        }else{
            // the contractor maynot recover for his partial performance 
            return false;
        }
    }else{
        //the contractor maynot recover for his partial performance 
    }
}