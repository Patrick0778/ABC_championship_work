// src/components/MintCredential.js
import { useWallet, useLovelace, BlockfrostProvider, mintAsset } from '@meshsdk/react';
import { Transaction, ForgeScript } from '@meshsdk/core';

const MintCredential = ({ ipfsHash, metadata }) => {
  const { wallet, connected } = useWallet();

  const handleMint = async () => {
    const assetName = "CredentialNFT" + Date.now();

    const forgeScript = ForgeScript.withOneSignature(await wallet.getUsedAddress());

    const tx = new Transaction({ initiator: wallet })
      .mintAsset(forgeScript, {
        assetName,
        quantity: '1',
        metadata: {
          name: metadata.name,
          image: `ipfs://${ipfsHash}`,
          mediaType: 'application/pdf',
          ...metadata.attributes
        }
      })
      .sendLovelace(await wallet.getUsedAddress(), '2000000'); // to self (optional)

    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);

    console.log("✅ Minted! Tx Hash: ", txHash);
  };

  return (
    <div>
      <button onClick={handleMint} disabled={!connected}>
        Mint Credential NFT
      </button>
    </div>
  );
};

export default MintCredential;
// src/components/CredentialForm.js