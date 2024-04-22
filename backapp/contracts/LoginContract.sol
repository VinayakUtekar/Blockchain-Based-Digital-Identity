// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing IPFS library for interaction
import "ipfs://QmSj8M94tvDfUyUcVG76uRApMhMebTtojBdbU14w5pJ4kg";

contract LoginContract {
    struct User {
        string username;
        bytes32 hashedPassword;
    }

    mapping(address => User) public users;
    mapping(string => address) public usernameToAddress;

    event UserLoggedIn(address indexed userAddress, string username);

    modifier isValidString(string memory _str) {
        require(bytes(_str).length > 0, "Empty string not allowed");
        _;
    }

    modifier isRegisteredUser(address _userAddress) {
        require(bytes(users[_userAddress].username).length > 0, "User not registered");
        _;
    }

    modifier isValidPassword(address _userAddress, string memory _password) {
        bytes32 hashedPassword = users[_userAddress].hashedPassword;
        require(keccak256(abi.encodePacked(_password)) == hashedPassword, "Invalid password");
        _;
    }

    function registerUser(string memory _username, string memory _password) public isValidString(_username) isValidString(_password) {
        require(usernameToAddress[_username] == address(0), "Username already exists");

        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        users[msg.sender] = User(_username, hashedPassword);
        usernameToAddress[_username] = msg.sender;
    }

    function loginUser(string memory _username, string memory _password) public isValidString(_username) isValidString(_password) {
        address userAddress = usernameToAddress[_username];
        require(userAddress != address(0), "User not registered");

        emit UserLoggedIn(userAddress, _username);
    }

    // Function to fetch user details from IPFS
    function getUserDetailsFromIPFS(address _userAddress) public view isRegisteredUser(_userAddress) returns (string memory) {
        User storage user = users[_userAddress];
        string memory userDetails = string(abi.encodePacked("Username: ", user.username));
        return IPFS.get(userDetails); // Assume IPFS.get is a function that fetches data from IPFS based on a given hash
    }
}