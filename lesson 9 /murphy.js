function isFrustratedOfContract(event, counterperformance){
    //chekc if the event was reoasnbly forseeable 
    if(event.isReasonablyForseeable){
        return false;
    }

    //chekc if the value of the counterperformanceis totally or nearlly totally destroed 
    if(counterperformance.isTotallyOrNearlyDestroyed()){
        return true;
    }

    //otheerwise the furstion of contract is not a adefense 
    return false;
}