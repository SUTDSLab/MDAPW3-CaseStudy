
import ProxyChainCode from './jsArtifacts/contracts/ProxyChainCode';
  

EmbarkJS.onReady((error) => {
  if (error) {
    console.error('Error while connecting to web3', error);
    return;
  }
  
  
  //SmartContracts stub calls
  
  		
  	function refundBondToTenant( transferDetails){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.refundBondToTenant( transferDetails).send();
		
		}
  		
  	function requestToEvaluateClaim(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.requestToEvaluateClaim().send();
		
		}
  		
  	function transferBondToLandlord( transferDetails){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.transferBondToLandlord( transferDetails).send();
		
		}
}
