// src/components/UploadToIPFS.js

import axios from "axios";

const uploadToIPFS = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: "CredentialFile",
  });

  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });

  formData.append("pinataOptions", options);

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
      },
    });

    return res.data.IpfsHash;
  } catch (error) {
    console.error("IPFS upload failed:", error);
    return null;
  }
};

export default uploadToIPFS;
