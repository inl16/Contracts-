class Walgreen{
    constructor(lease, exclusivityClause){
        this.lease;
        this.exclusivityClause=exclusivityClause;
    }

    sueForInjunction(){
        if(this.lease.hasExclusivityCluase()&&this.lease.isBeingBreached()){
            // the tennat can sue for an injunction
        }
    }
}

class SaraCreek{
    constructor(shoppingCenter){
        this.shoppingCenter=shoppingCenter;

    }

    leaseSpaceToCompetitor(){
        if(this.shoppingCenter.hasAvailableSpace()&&this.shoppingCenter.isNotUnderLeaseToWalgreen()){
            //the landloar can elase space to a competiror 
            return true;
        }else{
            //the landlord cannot relase the space to a competittor 
            return false;
        }
    }
}


class Court{
    constructor(){
        this.judge = new this.judge();

    
    }

    grantInjunction(plaintiff, defendant){
        if(plaintiff.sueForInjunction()&& defendant.leaseSpaceToCompetitor()){
            // the court will grant the injunction 
            return true;
        }else{
            // the court will not grant the injunction
            return false;
        }
    }
}


class Judge{
    constructor(){
        this.isBiasedAgainstWalgreen=false;
    }

    decideCase(plaintiff, defendant){
        if(this.isBiasedAgainstWalgreen){
            //the judge will reule againe walgreen
            return false;
        }else{
            // teh judge will rule in favor of walgreen
            return true;
        }
    }
}


//creat teh parties 
var walgreen = new Walgreen(new Lease(), new exclusivityClause);
var SaraCreek = new SaraCreek(new shoppingCenter());

//create the court 
var court = new Court();

// simulate the events of the case 
var isWalgreenSuingForInjunction= walgreen.sueForInjunction();
var isSaraCreekLeasingSpaceToCompetitor = SaraCreek.leaseSpaceToCompetitor();

// simulare the judges decision 
var isInjunctionGranted = court.grantInjunction(walgreen, SaraCreek);
//print the reuslt 
if(isInjunctionGranted){
    console.log("the court has granted the injunctoin");

}else{
    console.log("the court has denied the injunction")
}