// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing IPFS library for interaction
import "ipfs://QmSj8M94tvDfUyUcVG76uRApMhMebTtojBdbU14w5pJ4kg";

contract IssuedDocuments {
    struct Document {
        string name;
        string ipfsHash;
        address owner;
    }

    mapping(string => Document) public documents;
    mapping(address => string[]) public userDocuments;

    event DocumentUploaded(string documentName, string ipfsHash, address owner);
    event DocumentUpdated(string documentName, string newDocumentName, string ipfsHash);
    event DocumentDeleted(string documentName);

    modifier documentExists(string memory _documentName) {
        require(bytes(documents[_documentName].name).length > 0, "Document does not exist");
        _;
    }

    modifier onlyDocumentOwner(string memory _documentName) {
        require(documents[_documentName].owner == msg.sender, "You are not the owner of this document");
        _;
    }

    function uploadDocument(string memory _documentName, string memory _ipfsHash) public {
        require(bytes(_documentName).length > 0, "Document name cannot be empty");
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(bytes(documents[_documentName].name).length == 0, "Document already exists");

        documents[_documentName] = Document(_documentName, _ipfsHash, msg.sender);
        userDocuments[msg.sender].push(_documentName);

        emit DocumentUploaded(_documentName, _ipfsHash, msg.sender);
    }

    function updateDocument(string memory _documentName, string memory _newDocumentName) public documentExists(_documentName) onlyDocumentOwner(_documentName) {
        require(bytes(_newDocumentName).length > 0, "New document name cannot be empty");

        documents[_newDocumentName] = documents[_documentName];
        delete documents[_documentName];
        emit DocumentUpdated(_documentName, _newDocumentName, documents[_newDocumentName].ipfsHash);
    }

    function deleteDocument(string memory _documentName) public documentExists(_documentName) onlyDocumentOwner(_documentName) {
        delete documents[_documentName];
        emit DocumentDeleted(_documentName);
    }

    function getDocumentIPFSHash(string memory _documentName) public view documentExists(_documentName) returns (string memory) {
        return documents[_documentName].ipfsHash;
    }

    // Function to fetch document details from IPFS
    function getDocumentDetailsFromIPFS(string memory _ipfsHash) public view returns (string memory) {
        return IPFS.get(_ipfsHash); // Assume IPFS.get is a function that fetches data from IPFS based on a given hash
    }

    function getUserDocuments(address _user) public view returns (string[] memory) {
        return userDocuments[_user];
    }
}