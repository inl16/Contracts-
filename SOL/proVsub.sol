pragma solidity ^0.8.0;

contract StatuteOfLimitations{
    //the state of the staute fo limtiatons 
    enum State{
        PROCEDURAL, 
        SUBSTANTIVE
    }

    //the crurrent state of the stuate of limitaitons 
    State state;

    //the current state of the stuate of limitations for the forum state 
    uint forumLimitation;


    //the statute of limitaiotns for the jurisidctoin which governs the contract 
    uint contractLimitation;

    //construcor 
    constructor(uint _forumLimitation, uint _contractLimitation){
        this.forumLimitation =forumLimitation;
        this.contractLimitation=contractLimitation;

    }

    //function get the urrent stte of the statute of limitations 
    function getState() public view returns (State){
        return state;
    }

    //set the curren state of the statue of limitations 
    function setState(State _state) public{
        this.state=state;
    }

    //get the current statute of limtiations 
    function getForumLimitation() public view returns (uint){
        return forumLimitation;
    }

    //set the statute of limitations for the jurisidction whihc governs teh contract 
    function getContractLimtiation() public view returns(uint){
        return contractLimitation;
    }

    //set the staute of limitations for the jurisdiction which governs the contract 
    function setContractLimitation(uint _contractLimitation) public {
        this.contractLimitation = contractLimitation;
    }
    ///determine the applicable statute of limitations 
    function getApplicableLimitation() public view returns(uint){
        if(state==State.PROCEDURAL){
            return forumLimitation;
        }else{
            return contractLimitation;
        }
    }
    
}