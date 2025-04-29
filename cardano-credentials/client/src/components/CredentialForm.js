// src/components/CredentialForm.js
import React, { useState } from 'react';
import { uploadFileToIPFS } from './UploadToIPFS';
import MintCredential from './MintCredential';

function CredentialForm() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    // 1. Upload file to IPFS
    const ipfsUrl = await uploadFileToIPFS(file);
    const hash = ipfsUrl.replace('ipfs://', '');
    setIpfsHash(hash);

    // 2. Create metadata
    const formData = new FormData(e.target);
    const metadataObj = {
      name: `Diploma - ${formData.get('studentName')}`,
      attributes: {
        student: formData.get('studentName'),
        institution: formData.get('institution'),
        program: formData.get('program'),
        issued_on: new Date().toISOString().split('T')[0],
      }
    };

    setMetadata(metadataObj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="studentName" placeholder="Student Name" required />
        <input name="institution" placeholder="Institution" required />
        <input name="program" placeholder="Program" required />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload & Prepare NFT</button>
      </form>

      {/* Trigger NFT minting if data is ready */}
      {ipfsHash && metadata && (
        <MintCredential ipfsHash={ipfsHash} metadata={metadata} />
      )}
    </div>
  );
}

export default CredentialForm;
