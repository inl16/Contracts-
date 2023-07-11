//this is subsection 1 

//additional terms in accpentece or confirmatoin 
function isAcceptance(offer, acceptance){
    //check fi the accpetnce is defintie 
    //an acceptnace is definte if it accepts all of the terms of the offer 
    if(!acceptance.isDefinite){
        return false;
    }

    //check if teh acceptance is seaonasble 
    //an acceptnace is seaonable if it is made iwthin areaonable timeafter the offer was ade 
    if(!acceptance.isSeasonable){
        return false;
    }

    //check if the acceptance states terms addtiona to or differnt from those offered or agreed upon
    // if the acceptenace does then it is onyl an accpetncae if it does not expressly make acceptnace ocnditionon assnet to theadotina or differnt terms
    if(acceptance.hasAdditionalTerms){
        if(acceptance.isConditionalOnAssentToAdditionalTerms){
            return false;

        }else{
            return true;

        }
    }else{
        return true;

    }
}

//this is subsection 2 

function isAdditionalTerm(offer, accpetance){
    //check fi the acceptnace states terms additional to or differnt for those offered or agreed upon 
    //if the accpetnces does then it is addiotnal term 
    if(acceptance.hasAdditionalTerms){
        return true;
    }else{
        return false;
    }
}

function isBetweenMerchants(offer, acceptance){
    //check if both parites are merchants 
    //if they are then the additnnal terms become part of the contract unelss they materilaly laterit 
    if(offer.ismerchant && acceptance.isMerchant){
        return true;

    }else{
        return false;
    }


}

function isMaterilAlteration(offer, acceptance){
    //check if the addtional terms materially alter the contract 
    //if they do thn the adtional terms materiall do not becmopart of the contract
    if(acceptance.materiallyAltersOffer){
        return true;
    }else{
        return false;
    }
}

function isNotificationOfObjectionGiven(offer, acceptance){
    //chekc if the offer has notified the fofer of thier objectoin t the additional terms 
    //they have then the addointal terms do not becomepart of the contract
    if(offer.hadNotifiedOfObjection){
        return true;
    }else{
        return false;
    }

}

function isAcceptance(offer, acceptance){
    //check if teh acetpnace is a valid acceptnace 
    //an accpetne is valid if it is defintin, reasoable and does not state terms adtoinal to ro dfifent from those offred or agreed upon
    if (isAcceptance(offer, acceptance) && !isAdditionalTerm(offer, acceptance)&& isBetweenMerchants(offer, acceptance)&& !isMaterilAlteration(offer, acceptance)&& !isNotificationOfObjectionGiven(offer, acceptance)){
        return true;
    }else{
        return false;
    }
}

//this is for subsection 3 
function  isContractEstablishedByConduct(offer, accetpance){
    //chekc if the conduct of the parties recongized the existince of a contract 
    //if it does then the conduct is sufficenit to establisha contrat 
    if(offer.conductRecognizesExistenceOfContract && acceptanc.conductRecognizesExistenceOfContract){
        return true;
    }else{
        return false;
    }
}

function areWritingsInconsistent(offer, acceptance){
    //check if the wring of the pariest are incosniet
    //if tehy are then the writing do not estblaish a contract
    if(offer,isInconsistentWithAcceptance){
        return true;
    }else{
        return false;
    }
}

function areTermsAgreedUpon(offer,acceptance){
    //check if the parties have agreed upon teh term so the contract 
    //if tehy ahve then the remrs of the contract are those on which they have agreed 
    if(offer.areTermsAgreedUponWithAcceptance){
        return true;
    }else{
        return false;
    }
}