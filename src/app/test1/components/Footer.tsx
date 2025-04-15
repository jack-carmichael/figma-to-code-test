import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-8 bg-blue-900 text-white">
      <p className="mb-4">©2021 Whitepace LLC. All rights reserved.</p>
      <nav className="flex space-x-4">
        <a href="#terms" className="hover:underline">
          Terms & Privacy
        </a>
        <a href="#security" className="hover:underline">
          Security
        </a>
        <a href="#status" className="hover:underline">
          Status
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
