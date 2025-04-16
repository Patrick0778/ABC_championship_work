import React from "react";
import "./App.css"; // Import your global styles
import CredentialForm from "./components/CredentialForm"; // Import your form component

function App() {
  return (
    <div className="app-container">
      {/* Navigation bar section */}
      <header className="navbar">
        <h2 className="logo">Cardano credentials</h2>
        <nav className="nav-links">
          <a href="/">Dashboard</a>
          <a href="/">Credentials</a>
          <a href="/">Upload</a>
          <button className="connect-wallet">Connect Wallet</button>
        </nav>
      </header>

      {/* Dashboard main section */}
      <main className="dashboard">
        <h1>Dashboard</h1>
        <p className="subtext">
          Manage your digital credentials on Cardano blockchain
        </p>

        {/* Status summary cards */}
        <div className="status-cards">
          {/* Issued credentials card */}
          <div className="card issued">
            <h3>✅ Issued Credentials</h3>
            <p>2 Active credentials on blockchain</p>
            <a href="/">View all</a>
          </div>

          {/* Pending credentials card */}
          <div className="card pending">
            <h3>⏳ Pending Credentials</h3>
            <p>1 Waiting to be issued</p>
            <a href="/">View all</a>
          </div>

          {/* Revoked credentials card */}
          <div className="card revoked">
            <h3>🚫 Revoked Credentials</h3>
            <p>0 No longer valid</p>
            <a href="/">View all</a>
          </div>
        </div>

        {/* Wallet connection status */}
        <div className="wallet-status">
          <h3>Wallet Status</h3>
          <p>No wallet connected</p>
          <button className="connect-wallet">Connect Wallet</button>
        </div>

        {/* Credential form section */}
        <div className="form-section">
          <h2>New Credential</h2>
          {/* Render the credential form component */}
          <CredentialForm />
        </div>
      </main>
    </div>
  );
}

export default App;
