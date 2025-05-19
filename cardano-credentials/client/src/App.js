import React from "react";
import "./index.css"; // Use the styled index.css file
import CredentialForm from "./components/CredentialForm";
import { WalletProvider } from "@meshsdk/react";
// import { BlockfrostProvider } from "@meshsdk/core";

// const blockfrost = new BlockfrostProvider(
//   'https://cardano-preprod.blockfrost.io/api/v0', 
//   process.env.REACT_APP_BLOCKFROST_API_KEY
// );

function App() {
  return (
    <WalletProvider>
      <div className="app-container">
        {/* Sidebar navigation */}
        <aside className="sidebar">
          <div>
            <h2 className="highlight">Cardano</h2>
            <ul>
              <li className="active">Dashboard</li>
              <li>Credentials</li>
              <li>Upload</li>
            </ul>
          </div>
          <div className="signout">Sign Out</div>
        </aside>

        {/* Dashboard main section */}
        <main className="main-content">
          <header className="navbar">
            <h2 className="highlight">Cardano Credentials</h2>
            <nav className="nav-links">
              <a href="/">Dashboard</a>
              <a href="/">Credentials</a>
              <a href="/">Upload</a>
              <button className="connect-wallet">Connect Wallet</button>
            </nav>
          </header>

          <section className="dashboard">
            <h1 className="highlight">Dashboard</h1>
            <p className="subtext">
              Manage your digital credentials on the Cardano blockchain
            </p>

            <div className="status-cards">
              <div className="card issued product-card">
                <h3>Issued Credentials</h3>
                <p>2 Active credentials on blockchain</p>
                <a href="/">View all</a>
              </div>

              <div className="card pending product-card">
                <h3>Pending Credentials</h3>
                <p>1 Waiting to be issued</p>
                <a href="/">View all</a>
              </div>

              <div className="card revoked product-card">
                <h3>Revoked Credentials</h3>
                <p>0 No longer valid</p>
                <a href="/">View all</a>
              </div>
            </div>

            <div className="wallet-status">
              <h3>Wallet Status</h3>
              <p>No wallet connected</p>
              <button className="connect-wallet">Connect Wallet</button>
            </div>

            <div className="form-section">
              <h2>New Credential</h2>
              <CredentialForm />
            </div>
          </section>
        </main>
      </div>
    </WalletProvider>
  );
}

export default App;
