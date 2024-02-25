import EmbarkJS from './jsArtifacts/embarkjs';
import ProxyChainCode from './jsArtifacts/contracts/ProxyChainCode';
import BusinessLogic from './jsArtifacts/contracts/BusinessLogic';
import Landlord from './jsArtifacts/contracts/Landlord';
import Assessor from './jsArtifacts/contracts/Assessor';
import Tenant from './jsArtifacts/contracts/Tenant';
import AgreementsDataStore from './jsArtifacts/contracts/AgreementsDataStore';
import LandAsset from './jsArtifacts/contracts/LandAsset';
import LeasingAsset from './jsArtifacts/contracts/LeasingAsset';
  

EmbarkJS.onReady((error) => {
  if (error) {
    console.error('Error while connecting to web3', error);
    return;
  }
  //SmartContracts stub calls
	ProxyChainCode.methods.defineTenancyConditions().send();
	ProxyChainCode.methods.depositBond().send();
	ProxyChainCode.methods.requestForAssesment().send();
	ProxyChainCode.methods.releaseBond().send();
	ProxyChainCode.methods.refundBondToTenant().send();
	ProxyChainCode.methods.fileClaimForBond().send();
	ProxyChainCode.methods.fileDispute().send();
	ProxyChainCode.methods.requestToEvaluateClaim().send();
	ProxyChainCode.methods.transferBondToLandlord().send();
	ProxyChainCode.methods.payRent().send();
	ProxyChainCode.methods.TransferOwnership().send();
	BusinessLogic.methods.defineTenancyConditions().send();
	BusinessLogic.methods.depositBond( paymentRecipt,).send();
	BusinessLogic.methods.requestForAssesment().send();
	BusinessLogic.methods.releaseBond().send();
	BusinessLogic.methods.refundBondToTenant( transferDetails,).send();
	BusinessLogic.methods.fileClaimForBond().send();
	BusinessLogic.methods.fileDispute( disputeNo,).send();
	BusinessLogic.methods.requestToEvaluateClaim().send();
	BusinessLogic.methods.transferBondToLandlord( transferDetails,).send();
	BusinessLogic.methods.payRent().send();
	BusinessLogic.methods.TransferOwnership().send();
	Landlord.methods.Landlord().send();
	Landlord.methods.transferOwnership( newOwner,).send();
	Assessor.methods.Assessor().send();
	Assessor.methods.transferOwnership( newOwner,).send();
	Tenant.methods.Tenant().send();
	Tenant.methods.transferOwnership( newOwner,).send();
	AgreementsDataStore.methods.settenancyAgrement().send();
	AgreementsDataStore.methods.gettenancyAgrement().send();

 //Storage stub calls
 
	const landPicsInput = document.querySelector('input[type="file",id=landPics]');
	EmbarkJS.Storage.uploadFile(landPicsInput).then(hash => {
  		//Complete this section	 
	});
	
	EmbarkJS.Storage.getUrl(hash).then(url => {
  	//restor data using it's hash
	});	

/* othre examples for working with storage api
 //change storage configuration at runtime
 
 EmbarkJS.Storage.setProvider('ipfs', {
  server: 'localhost',
  port: '5001'
});

// OR

EmbarkJS.Storage.setProvider('swarm', {
  server: 'swarm-gateways.net',
  port: '80'
});

//
 EmbarkJS.Storage
  .saveText("hello world").then(hash => {
    ...
  });
  
  EmbarkJS.Storage.get(hash).then(content =>  {
  		...
	});
*/