import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <div className="text-2xl font-bold">Whitepace</div>
      <nav className="flex space-x-4">
        <a href="#products" className="hover:underline">
          Products
        </a>
        <a href="#solutions" className="hover:underline">
          Solutions
        </a>
        <a href="#resources" className="hover:underline">
          Resources
        </a>
        <a href="#pricing" className="hover:underline">
          Pricing
        </a>
      </nav>
    </header>
  );
}

export default Header;
