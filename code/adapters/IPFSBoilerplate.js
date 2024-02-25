import EmbarkJS from './jsArtifacts/embarkjs';
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