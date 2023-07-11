//restatment 20 meaning 
//first hcek whether teh parites have materailly differnet meanings 
function isMisUnderstanding(party1, party2){
    if (party1.meaning!==party2.meaning){
        //if the parites have materially differnt meanings, then chec wherther they know or have reaosn to know the toohers meaning 
        if(party1.knowsMeaning(party2)||party2.knowsMeaning(party1)){
         
            //if they do then there is no meeting of the mindsand there is no contract
            return true;
        }else{
            //if they dont then the contract is formed accordingto teh cmeain of the aprty who idd not knowr have raon to knwothe other meaningn
            return party1.meaning;

        }
        
    }else{
        // if the parties do not have materaially differnet emanign the there is a meeting of the minds and ther is a contrat 
        return true;
    }
}