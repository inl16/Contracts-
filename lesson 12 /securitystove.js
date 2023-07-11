class RelianceDamagesRule{
    constructor(){
        //check if teh time is within a reasonable amount of time 
        //this depends on teh specific facts of the ncas, but generally speaking the tiem should be withtin a few dayps of the delivery date 
        return time <= this.expectedDeliveryDate+this.reasonableTimeFrame;
    }

    this.hasIncurredExpenses=()=>{
        //check fi teh shippper has incurred expenses 
        //the shippper has incurred expenses if they have paid for something that they wuold notnhave paid for if they had not relied ont eh carrier to deliverthe goods on time 
        return this.shipperIncurredExpenses;
    };

    this.canSueForDamages=()=>{
        //check if the shipper is entilted to damages
        //the shipper is entilted to damage sif the carrier failed to use reasonble care to deliverthe goods on tie and teh shipper incured expnes that they would not have incurredif they had not rlied on the carrier to deliverthe goods on time
        return this.isWithinReasonableTime() && this.hasIncurredExpenses;

    };
     // Properties
  expectedDeliveryDate = null;
  reasonableTimeFrame = null;
  shipperIncurredExpenses = false;

}
