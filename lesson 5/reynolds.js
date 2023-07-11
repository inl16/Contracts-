class Debtor{
    constructor(name, amountOwed){
        this.name = name;
        this.amountOwed = amountOwed;
    }

    makePayment(amount){
        if(this.amountOwed<amount){
            throw new Error("cannot make a payment that is greater than the anount owed")
        }

        this.amountOwed-= amount;
        return this;
    }


}

class Creditor{
    constructor(name, amountOwed){
        this.name;
        this.amountOwed=amountOwed;
    }

    acceptPayment(amount){
        if(this.amountOwed<amount){
            throw new Error("cannot accept a paymnet that is greater than the amount owed")
        }

        this.amountOwed-=amount;
        return this;
    }


}

class AccordAndSatisfcation{
    constructor(debtor, creditor, amount){
        this.debtor=debtor;
        this.creditor=creditor;
        this.amount=amount;
    }
    isSignged(){
        return this.debtor.hasSigned() && this.creditor.hasSigned();

    }

    getDebtor(){
        return this.debtor;
    }

    getCreditor(){
        return this.creditor;
    }

    getAmount(){
        return this.amount;
    }


}

function makeAccordAndSatisfaction(debtor, creditor, amount){
    if(!debtor.canMakePayment(amount)){
        throw new Error ("debtor does not have teh authority to make the payment")
    }

    if(!creditor.acceptsPayment(amount)){
        throw new Error("creditor does not accept the payment ")
    }

    var agreement = new AccordAndSatisfcation(debtor, creditor, amount);

    debtor.sign(agreement);
    creditor.sign(agreement);

    return agreement;

}

function main(){
    debtor=Debtor("smith", 100);
    creditor =Creditor('doe',100);

    agreement= makeAccordAndSatisfaction(debtor, creditor, 50);

    if(agreement.isSignged()){
        print('the accord and satisfacd valid');

    }else{
        print("the accord and satifsfactoin is not vlaid");
    }

    if(!agreement.isSignged()){
        debtor.makePayment(50);
        print('the detbor has now made a payment of 50');
        print('the debtor still owes teh creditor 50');

    }

}

if(name==='__main__'){
    main();
}
