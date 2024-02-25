
import ProxyChainCode from './jsArtifacts/contracts/ProxyChainCode';
  

EmbarkJS.onReady((error) => {
  if (error) {
    console.error('Error while connecting to web3', error);
    return;
  }
  
  
  //SmartContracts stub calls
  
  		
  	function defineTenancyConditions(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.defineTenancyConditions().send();
		
		}
  		
  	function requestForAssesment(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.requestForAssesment().send();
		
		}
  		
  	function releaseBond(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.releaseBond().send();
		
		}
  		
  	function fileClaimForBond(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.fileClaimForBond().send();
		
		}
  		
  	function TransferOwnership(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.TransferOwnership().send();
		
		}
}
