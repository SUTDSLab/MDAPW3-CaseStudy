pragma 

contract Landlord {
	address public Landlord;
	event LogOnwershipTransferred(
		address indexed previousLandlord,
		address indexed newLandlord
	);
	
	modifier onlyLandlord(){
		require(msg.sender == Landlord);
		_;
	}
	
	function Landlord() public {
		Landlord=msg.sender;
	}
	
	function transferOwnership(address newLandlord) public onlyLandlord {
		require(newLandlord != address(0));
		LogOnwershipTransferred(Landlord,newLandlord);
		Landlord=newLandlord;
	}
}