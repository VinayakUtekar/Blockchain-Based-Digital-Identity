// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentStorage{
    struct Document {
        string name;
        string documentType;
        string ipfsHash;
    }

    struct Folder {
        string name;
        Document[] documents;
    }

    mapping(string => Folder) public folders;

    event DocumentUploaded(string folderName, string documentName, string documentType, string ipfsHash);
    event FolderCreated(string folderName);

    modifier folderExists(string memory _folderName) {
        require(bytes(folders[_folderName].name).length > 0, "Folder does not exist");
        _;
    }

    modifier documentNotExists(string memory _folderName, string memory _documentName) {
        Document[] storage documents = folders[_folderName].documents;
        for (uint256 i = 0; i < documents.length; i++) {
            require(keccak256(abi.encodePacked(documents[i].name)) != keccak256(abi.encodePacked(_documentName)), "Document already exists");
        }
        _;
    }

    function createFolder(string memory _folderName) public {
        require(bytes(_folderName).length > 0, "Folder name cannot be empty");
        require(bytes(folders[_folderName].name).length == 0, "Folder already exists");

        folders[_folderName].name = _folderName;

        emit FolderCreated(_folderName);
    }

    function uploadDocument(string memory _folderName, string memory _documentName, string memory _documentType, string memory _ipfsHash)
        public
        folderExists(_folderName)
        documentNotExists(_folderName, _documentName)
    {
        require(bytes(_documentName).length > 0, "Document name cannot be empty");
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");

        Document memory newDocument = Document(_documentName, _documentType, _ipfsHash);
        folders[_folderName].documents.push(newDocument);

        emit DocumentUploaded(_folderName, _documentName, _documentType, _ipfsHash);
    }

    function getFolderDocuments(string memory _folderName) public view folderExists(_folderName) returns (Document[] memory) {
        return folders[_folderName].documents;
    }
}