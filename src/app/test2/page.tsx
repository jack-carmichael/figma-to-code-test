import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white text-center">
      <header className="py-4">
        <nav className="flex justify-center space-x-4">
          <a href="#" className="text-pink-600">
            HOME
          </a>
          <a href="#" className="text-pink-600">
            PRODUCTS
          </a>
          <a href="#" className="text-pink-600">
            ABOUT US
          </a>
          <a href="#" className="text-pink-600">
            CONTACT US
          </a>
        </nav>
      </header>

      <section className="bg-pink-100 py-10">
        <h1 className="text-4xl font-bold">Baking Course</h1>
        <p>September 12 - October 20</p>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-semibold text-pink-600">BEST SELLER</h2>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Add product cards here */}
        </div>
      </section>

      <section className="py-10 bg-pink-50">
        <h2 className="text-3xl font-semibold text-pink-600">
          CUSTOMIZE YOUR CAKE
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Surprising the birthday person with such type of customized cakes can
          make them and their celebration go up to a next level by adding to
          their happiness or surprise.
        </p>
      </section>

      <footer className="bg-pink-100 py-4">
        <p>Follow us</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Add social media icons here */}
        </div>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-pink-600">
            HOME
          </a>
          <a href="#" className="text-pink-600">
            PRODUCTS
          </a>
          <a href="#" className="text-pink-600">
            ABOUT US
          </a>
          <a href="#" className="text-pink-600">
            CONTACT US
          </a>
        </nav>
        <p className="mt-4">All rights reserved © Blanche.au</p>
      </footer>
    </div>
  );
};

export default HomePage;
