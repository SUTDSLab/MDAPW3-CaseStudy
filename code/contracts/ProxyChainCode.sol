pragma solidity 0.4.17
import "./Ownership.sol";
import "./BusinessLogic";

contract ProxyChainCode is Owned{

    address public currentVersion;
    
    function ProxyChainCode(address initAddr) public {
        currentVersion = initAddr;
        owner = msg.sender;
    }

	function changeBusinessAddress(address newVersionAddr) public onlyOwner{
		currentVersion = newVersionAddr;
	}
	
    function() public {
    	require(currentVersion.delegatecall(msg.data));
    }
}
