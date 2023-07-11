function isSpecificPerformanceAwarded(plaintiff, defendant,contract, costOfPerformance, benefitToPlaintiff){
    //chkec if the ost of performance is disproportionateto the benefit that the plaintiffwould reeive 
    if(costOfPerformance>benefitToPlaintiff){
        return false;
    }

    //specific performance is awarded 
    return true;
}