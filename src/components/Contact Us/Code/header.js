import React from "react";
import logo from "../../../images/Logo.png";
import "../Style/header.css";

function Header() {
  return (
    <header class="text-gray-600 body-font bg-black">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} class="LogoStyle " alt="Logo" />
          <span class="ml-3 text-red-500">Brokerax</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <a class="mr-5 text-indigo-500 hover:text-white">First Link</a>
          <a class="mr-5 text-indigo-500 hover:text-white">Second Link</a>
          <a class="mr-5 text-indigo-500 hover:text-white">Third Link</a>
          <a class="mr-5 text-indigo-500 hover:text-white">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0 bg-indigo-500">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
