// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol"; // Import Ownable contract for access control

contract UserAuthentication is Ownable {
    struct User {
        string username;
        bytes32 passwordHash; // Hashed password stored on IPFS
        bool exists;
    }

    mapping(string => User) private users;

    event UserLoggedIn(address indexed userAddress, string username);

    constructor() {
        // Add default admin user during contract deployment
        addUser("admin", "adminPassword");
    }

    // Function to add a new user
    function addUser(string memory _username, string memory _password) public onlyOwner {
        bytes32 hashedPassword = hashPassword(_password); // Hash the password

        require(!users[_username].exists, "User already exists");

        users[_username] = User({
            username: _username,
            passwordHash: hashedPassword,
            exists: true
        });
    }

    // Function to hash a password
    function hashPassword(string memory password) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(password));
    }

    // Function to authenticate user credentials
    function authenticateUser(string memory _username, string memory _password)
        public
        view
        returns (bool)
    {
        require(users[_username].exists, "User does not exist");

        bytes32 hashedPassword = hashPassword(_password);
        require(users[_username].passwordHash == hashedPassword, "Invalid password");

        return true; // Authentication successful
    }

    // Function to log in a user
    function login(string memory _username, string memory _password) public returns (bool) {
        require(authenticateUser(_username, _password), "Authentication failed");

        emit UserLoggedIn(msg.sender, _username);

        return true; // Login successful
    }
}