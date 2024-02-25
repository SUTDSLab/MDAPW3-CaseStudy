pragma 

contract Tenant {
	address public Tenant;
	event LogOnwershipTransferred(
		address indexed previousTenant,
		address indexed newTenant
	);
	
	modifier onlyTenant(){
		require(msg.sender == Tenant);
		_;
	}
	
	function Tenant() public {
		Tenant=msg.sender;
	}
	
	function transferOwnership(address newTenant) public onlyTenant {
		require(newTenant != address(0));
		LogOnwershipTransferred(Tenant,newTenant);
		Tenant=newTenant;
	}
}