pragma solidity 0.4.17

contract AgreementsDataStore {
 public address tenancyAgrement;
	//Functions
	function gettenancyAgrementValue() public constant returns(address){
		return tenancyAgrement;
	}
	
	function settenancyAgrementValue(address newtenancyAgrementValue) public {
		tenancyAgrement=newtenancyAgrementValue;
	}
}