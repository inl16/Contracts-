function getRecovarableItems(
    agreementDate,
    breachDate,
    necessaryExpenses,
    lossOfProfits,
    expensesPriorToSigning,
    expensesForOtherContests,
    expensesNotSpecifiedInContract
){
    const recoverableItems=[
        {
            type:'expense',
            date:agreementDate, 
            amount:0
        },
        {
            type:'expense',
            date:breachDate,
            amount:0
        }
    ];

    for(const item of recoverableItems){
        if(item.type==='expense'){
            item.amount+=necessaryExpenses;
        }


    }


    //speculative damgaes are not recoverable 
    recoverableItems.forEach(itemn=>{
        if(item.type==="loss of profits"){
            item.amount=0;
        }
    });

    //costs incurred prior to the contract are not recoverable 
    recoverableItems.forEach(item=>{
        if(item.date<agreementDate){
            item.amount=0;
        }


    });

    //costs incurred to force teh contract compliance that are not specified int eh contract are not recoverable 
    recoverableItems.foreEach(item=>{
        if(item.type==="expense"&&item.date>=agreementDate&&<=breachDate&&!expensesNotSpecifiedInContract.includes(item.type)){
            item.amount=0;
        }
    });

    return recoverableItems;

}

