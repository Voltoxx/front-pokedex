import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Your Company Name</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

