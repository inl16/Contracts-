let debt =5;
let certificate;
let acknowledged = false;

function acknowledgeCertificate(cert){
    certificate = cert;
    acknowledged =true;
    console.log("debt acknolwedged. debt absoclved");
    debt = 0;
}
function checkDebt(){
    if(acknowledged){
        console.log("debt abscolved")
    }else{
        console.log("debt remaining " + debt );

    }

}

acknowledgeCertificate("certificate acknowledged");
checkDebt();

//look at the restatment and by the time you get to - look at the restatemnet and see 
//when i might be able to settle a greater sum for a lesser sum 

//the preexisting duty rule - if you have a preexisting duty to pay ten pounds 
//you need consideration for the thing that is given 