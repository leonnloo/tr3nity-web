import Link from "next/link";
import React from "react";
import WalletButton from "../button/wallet-button";
import CartButton from "../button/cart-button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight text-black">
                TR3DAO
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 flex-grow mx-8">
            <a
              href="/researcher"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Researchers
            </a>
            <a
              href="/funders"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Funders
            </a>
            <a
              href="/governor"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Governors
            </a>
            <a
              href="/your-fundings"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Your Fundings
            </a>
            <a
              href="/quadratic-funding-summary"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Quadratic funding summary
            </a>
          </div>
          <div className="flex-shrink-0 flex-center space-x-3">
            <CartButton />
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
