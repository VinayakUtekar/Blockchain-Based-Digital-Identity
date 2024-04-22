// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing IPFS library for interaction
import "ipfs://QmSj8M94tvDfUyUcVG76uRApMhMebTtojBdbU14w5pJ4kg";

contract SignUpContract {
    struct User {
        string username;
        string dob;
        string gender;
        string email;
        string contact;
        bytes32 hashedPassword;
    }

    mapping(address => User) public users;
    mapping(string => bool) public usernames;
    mapping(string => bool) public emails;

    event UserSignedUp(address indexed userAddress, string username, string email);

    modifier isValidString(string memory _str) {
        require(bytes(_str).length > 0, "Empty string not allowed");
        _;
    }

    modifier isUniqueUsername(string memory _username) {
        require(!usernames[_username], "Username already exists");
        _;
    }

    modifier isUniqueEmail(string memory _email) {
        require(!emails[_email], "Email already exists");
        _;
    }

    modifier isValidPassword(string memory _password) {
        require(bytes(_password).length >= 8, "Password should be at least 8 characters long");
        _;
    }

    modifier isPasswordMatch(bytes32 _hashedPassword, string memory _password) {
        require(keccak256(abi.encodePacked(_password)) == _hashedPassword, "Invalid password");
        _;
    }

    function signUpUser(
        string memory _username,
        string memory _dob,
        string memory _gender,
        string memory _email,
        string memory _contact,
        string memory _password
    )
        public
        isValidString(_username)
        isValidString(_dob)
        isValidString(_gender)
        isValidString(_email)
        isValidString(_contact)
        isValidPassword(_password)
        isUniqueUsername(_username)
        isUniqueEmail(_email)
    {
        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        users[msg.sender] = User(_username, _dob, _gender, _email, _contact, hashedPassword);
        usernames[_username] = true;
        emails[_email] = true;

        emit UserSignedUp(msg.sender, _username, _email);
    }

    function login(string memory _email, string memory _password)
        public
        view
        returns (bool)
    {
        User storage user = users[msg.sender];
        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        return (user.hashedPassword == hashedPassword);
    }

    function getUserDetails()
        public
        view
        returns (string memory, string memory, string memory, string memory, string memory)
    {
        User storage user = users[msg.sender];
        return (user.username, user.dob, user.gender, user.email, user.contact);
    }

    // Function to store user credentials on IPFS
    function storeUserCredentialsOnIPFS()
        public
        returns (string memory)
    {
        User storage user = users[msg.sender];
        string memory userDetails = string(abi.encodePacked("Username: ", user.username, ", DOB: ", user.dob, ", Gender: ", user.gender, ", Email: ", user.email, ", Contact: ", user.contact));
        string memory ipfsHash = IPFS.add(userDetails);
        return ipfsHash;
    }
}