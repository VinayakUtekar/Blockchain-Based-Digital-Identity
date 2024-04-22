// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenRequest {
    struct Document {
        string name;
        string ipfsHash;
    }

    mapping(address => Document[]) public userDocuments;
    mapping(address => string) public userTokens;

    event TokenGenerated(address indexed userAddress, string token);

    modifier isValidDocument(string memory _name, string memory _ipfsHash) {
        require(bytes(_name).length > 0 && bytes(_ipfsHash).length > 0, "Document details cannot be empty");
        _;
    }

    modifier documentsExist(address _user, uint256[] memory _documentIndexes) {
        Document[] storage documents = userDocuments[_user];
        for (uint256 i = 0; i < _documentIndexes.length; i++) {
            require(_documentIndexes[i] < documents.length, "Invalid document index");
        }
        _;
    }

    function requestToken(uint256[] memory _documentIndexes) public documentsExist(msg.sender, _documentIndexes) {
        string memory token;
        Document[] storage documents = userDocuments[msg.sender];
        for (uint256 i = 0; i < _documentIndexes.length; i++) {
            Document memory doc = documents[_documentIndexes[i]];
            token = string(abi.encodePacked(token, doc.name, doc.ipfsHash));
        }
        userTokens[msg.sender] = token;

        emit TokenGenerated(msg.sender, token);
    }

    function getUserToken() public view returns (string memory) {
        return userTokens[msg.sender];
    }

    function addDocument(string memory _name, string memory _ipfsHash) public isValidDocument(_name, _ipfsHash) {
        Document memory newDocument = Document(_name, _ipfsHash);
        userDocuments[msg.sender].push(newDocument);
    }

    function getUserDocumentsCount() public view returns (uint256) {
        return userDocuments[msg.sender].length;
    }

    function getUserDocument(uint256 _index) public view returns (string memory, string memory) {
        Document storage doc = userDocuments[msg.sender][_index];
        return (doc.name, doc.ipfsHash);
    }
}