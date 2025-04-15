import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function CakeShopHome() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-pink-200">
        <div className="text-3xl font-bold text-pink-500">Blanche</div>
        <nav className="space-x-6 text-pink-500 font-medium">
          <a href="#">HOME</a>
          <a href="#">PRODUCTS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <img
          src="/baking-course-banner.jpg"
          alt="Baking Course"
          className="w-full"
        />
      </section>

      {/* Best Seller Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl text-pink-500 font-semibold mb-6">
          BEST SELLER
        </h2>
        <div className="flex justify-center items-center gap-6 overflow-x-auto">
          {["cake1.jpg", "cake2.jpg", "cake3.jpg"].map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt="Best Seller Cake"
              className="h-48 rounded shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Customize Section */}
      <section className="px-4 py-12 grid md:grid-cols-2 gap-6 items-center">
        <img
          src="/custom-cake.jpg"
          alt="Customize Cake"
          className="w-full rounded shadow-lg"
        />
        <blockquote className="text-right italic text-lg">
          <p className="text-black">
            Surprising the birthday person with such type of customized cakes
            can make them and their celebration go up to a next level by adding
            to their happiness or surprise.
          </p>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-pink-200 text-white text-center py-12 relative overflow-hidden">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white">Follow us</h4>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl">
              <FaTiktok />
            </a>
          </div>
        </div>
        <nav className="flex justify-center gap-6 text-white font-medium mb-4">
          <a href="#">HOME</a>
          <a href="#">PRODUCTS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </nav>
        <p className="text-sm">All rights reserved © Blanche.au</p>

        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/wave.svg')] bg-cover bg-no-repeat opacity-20"></div>
      </footer>
    </div>
  );
}
