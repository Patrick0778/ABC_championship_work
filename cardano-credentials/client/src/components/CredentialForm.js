// src/components/CredentialForm.js

import React, { useState } from "react";
import uploadToIPFS from "./UploadToIPFS";

const CredentialForm = () => {
  const [form, setForm] = useState({
    name: "",
    program: "",
    institution: "",
    grade: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload to IPFS
    const ipfsHash = await uploadToIPFS(form.file);
    if (!ipfsHash) {
      alert("Upload to IPFS failed");
      return;
    }

    console.log("Credential IPFS Hash:", ipfsHash);
    alert(`Successfully uploaded to IPFS: ${ipfsHash}`);
    // You can then call Mesh.js to mint NFT with metadata
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Student Name" onChange={handleChange} required />
      <input type="text" name="program" placeholder="Program" onChange={handleChange} required />
      <input type="text" name="institution" placeholder="Institution" onChange={handleChange} required />
      <input type="text" name="grade" placeholder="Grade" onChange={handleChange} required />
      <input type="file" name="file" accept=".pdf,.jpg,.png" onChange={handleChange} required />
      <button type="submit">Upload & Mint</button>
    </form>
  );
};

export default CredentialForm;
