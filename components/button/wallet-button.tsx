"use client";
import React, { useState } from "react";
import { FaLock, FaRegUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi2";
const WalletOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false); // Toggle between Sign In and Create Wallet
  const [walletId, setWalletId] = useState("0000-00-0000");
  const [password, setPassword] = useState("123");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ic, setIC] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const toggleForm = () => {
    setIsCreating(!isCreating);
  };

  const handleSignIn = () => {
    alert(`ID: ${walletId}, Password: ${password}`);
    setIsOpen(false);
  };

  const handleCreateWallet = () => {
    alert(`Username: ${username}, Email: ${email}, Password: ${newPassword}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to trigger the overlay */}
      <button
        onClick={toggleOverlay}
        className="bg-secondaryYellow text-black px-4 py-2 rounded-md hover:bg-yellow-300"
      >
        Connect wallet
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border rounded-lg shadow-lg p-6 z-50 transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {!isCreating ? (
            <>
              <h2 className="text-2xl font-bold mb-2">
                Let&rsquo;s Sign you in.
              </h2>
              <p className="text-gray-500 mb-4">Welcome back!</p>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="wallet-id"
                >
                  <div className="flex items-center">
                    <FaRegUser className="mr-3" />
                    IC
                  </div>
                </label>
                <input
                  id="wallet-id"
                  type="text"
                  value={walletId}
                  onChange={(e) => setWalletId(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Wallet ID"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  <div className="flex items-center">
                    <FaLock className="mr-3" />
                    Password
                  </div>
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Password"
                />
              </div>
              <button
                onClick={handleSignIn}
                className="bg-mainBlue text-white py-2 px-4 rounded w-full"
              >
                Sign In
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Don’t have a wallet?{" "}
                <button
                  onClick={toggleForm}
                  className="text-mainBlue"
                >
                  Create one
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">Create your Wallet.</h2>
              <p className="text-gray-500 mb-4">Join us today!</p>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  <div className="flex items-center">
                    <FaRegUser className="mr-3"/>
                    Name
                  </div>
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  <div className="flex items-center">
                    <IoMail className="mr-3"/>
                    Email
                  </div>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ic"
                >
                  <div className="flex items-center">
                    <HiIdentification className="mr-3"/>
                    IC
                  </div>
                </label>
                <input
                  id="ic"
                  type="ic"
                  value={ic}
                  onChange={(e) => setIC(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="IC"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="new-password"
                >
                  <div className="flex items-center">
                    <FaLock className="mr-3"/>
                    New Password
                  </div>
                </label>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="New Password"
                />
              </div>
              <button
                onClick={handleCreateWallet}
                className="bg-secondaryYellow text-white py-2 px-4 rounded w-full"
              >
                Create Wallet
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Already have a wallet?{" "}
                <button
                  onClick={toggleForm}
                  className="text-mainBlue"
                >
                  Sign In
                </button>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletOverlay;
