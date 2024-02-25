
import ProxyChainCode from './jsArtifacts/contracts/ProxyChainCode';
  

EmbarkJS.onReady((error) => {
  if (error) {
    console.error('Error while connecting to web3', error);
    return;
  }
  
  
  //SmartContracts stub calls
  
  		
  	function depositBond( paymentRecipt){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.depositBond( paymentRecipt).send();
		
		}
  		
  	function fileDispute( disputeNo){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.fileDispute( disputeNo).send();
		
		}
  		
  	function payRent(){
  	
  		//implement your logic here
  		//...
  		
  		//onChain Call
		ProxyChainCode.methods.payRent().send();
		
		}
}
