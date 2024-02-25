pragma solidity 0.4.17
import "./Landlord";
import "./Tenant";
import "./Assessor";
import "./AgreementsDataStore";

contract BusinessLogic {
	
 
		AgreementsDataStore agreementsDataStore;
	
	//Functions
	function defineTenancyConditions () public pure onlyLandlord{
 agreementsDataStore.settenancyAgrement(...);
		}
	function depositBond ( address paymentRecipt) public pure onlyTenant{
		}
	function requestForAssesment () public pure onlyLandlord{
 agreementsDataStore.gettenancyAgrement(...);
		}
	function releaseBond () public pure onlyLandlord{
		}
	function refundBondToTenant ( address transferDetails) public pure onlyAssessor{
		}
	function fileClaimForBond () public pure onlyLandlord{
		}
	function fileDispute ( address disputeNo) public pure onlyTenant{
		}
	function requestToEvaluateClaim () public pure onlyAssessor{
		}
	function transferBondToLandlord ( address transferDetails) public pure onlyAssessor{
		}
	function payRent () public pure onlyTenant{
		}
	function TransferOwnership () public pure onlyLandlord{
		}
}
