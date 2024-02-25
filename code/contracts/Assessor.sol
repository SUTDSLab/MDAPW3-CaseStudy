pragma 

contract Assessor {
	address public Assessor;
	event LogOnwershipTransferred(
		address indexed previousAssessor,
		address indexed newAssessor
	);
	
	modifier onlyAssessor(){
		require(msg.sender == Assessor);
		_;
	}
	
	function Assessor() public {
		Assessor=msg.sender;
	}
	
	function transferOwnership(address newAssessor) public onlyAssessor {
		require(newAssessor != address(0));
		LogOnwershipTransferred(Assessor,newAssessor);
		Assessor=newAssessor;
	}
}