// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol"; // Import Ownable contract for access control

contract UserManagement is Ownable {
    struct User {
        string username;
        uint256 dateOfBirth;
        string gender;
        string email;
        string contact;
        bytes32 passwordHash; // Hashed password
    }

    mapping(address => User) public users;
    address[] public userAddresses; // Array to store user addresses for iteration

    event UserSignedUp(address indexed userAddress, string username, string email);

    // Function to hash a password
    function hashPassword(string memory password) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(password));
    }

    // Function to signup a new user
    function signUpUser(
        string memory _username,
        uint256 _dateOfBirth,
        string memory _gender,
        string memory _email,
        string memory _contact,
        string memory _password,
        string memory _confirmPassword
    ) public {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(_dateOfBirth > 0, "Invalid date of birth");
        require(bytes(_email).length > 0, "Email cannot be empty");
        require(bytes(_contact).length > 0, "Contact cannot be empty");
        require(bytes(_password).length > 0, "Password cannot be empty");
        require(
            keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(_confirmPassword)),
            "Passwords do not match"
        );

        bytes32 hashedPassword = hashPassword(_password); // Hash the password

        require(users[msg.sender].dateOfBirth == 0, "User already signed up");

        users[msg.sender] = User({
            username: _username,
            dateOfBirth: _dateOfBirth,
            gender: _gender,
            email: _email,
            contact: _contact,
            passwordHash: hashedPassword
        });

        userAddresses.push(msg.sender);

        emit UserSignedUp(msg.sender, _username, _email);
    }

    // Function to get user details by address
    function getUserDetails(address userAddress)
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            string memory,
            string memory
        )
    {
        User storage user = users[userAddress];
        require(user.dateOfBirth > 0, "User does not exist");
        return (user.username, user.dateOfBirth, user.gender, user.email, user.contact);
    }

    // Function to get all user addresses
    function getAllUserAddresses() public view onlyOwner returns (address[] memory) {
        return userAddresses;
    }

    // Function to store user credentials on IPFS
    function storeUserCredentialsOnIPFS(address userAddress, string memory credentialsHash) public onlyOwner {
        // Include IPFS integration logic here
        // For demonstration purposes, just emit the credentials hash
        emit CredentialsStoredOnIPFS(userAddress, credentialsHash);
    }

    event CredentialsStoredOnIPFS(address indexed userAddress, string credentialsHash);
}