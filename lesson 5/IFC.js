function accordAndSatisfcation(debtor, creditor, amount){
    //chcek to see if teh debotr has the aturhotiy to amke the paymnet 
    if(!debtor.canMakePayment(amount)){
        return false;
    }
    //chcek if teh creditor accpets th paymnet 
    if(!creditor.accpetsPayment(amount)){
        return false;
    }

    //creat a new accord and satifaction agremenet 
    //sign agremenet 
    debtor.sign(agremeet);
    creditor.sign(agremeet)

    //return teh agrement 
    return agremeet;
}

class AccordAndSatisfcationAgreement{
    constructor(debtor, creditor, amount){
        this.debtor=debtor;
        this.creditor=creditor;
        this.amount=amount;
    }

    isSigned(){
        return this.debtor.hasSigned() && this.creditor.hasSigned();

    }

    getDebtor(){
        return this.debtor;
    }

    getCreditor(){
        return this.creditor
    }
    getAmount(){
        return this.amount;
    }
}