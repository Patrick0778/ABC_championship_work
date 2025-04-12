const axios = require('axios');
require('dotenv').config();

const API_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const fs = require('fs');
const FormData = require('form-data');

async function uploadCredential(path) {
  const data = new FormData();
  data.append('file', fs.createReadStream(path));

  const res = await axios.post(API_URL, data, {
    maxContentLength: "Infinity",
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      'pinata_api_key': process.env.PINATA_API_KEY,
      'pinata_secret_api_key': process.env.PINATA_SECRET_API_KEY
    }
  });

  console.log("IPFS Hash: ", res.data.IpfsHash);
  return res.data.IpfsHash;
}

uploadCredential('./metadata/sample-credential.json');
