import React from 'react'
import Link from "next/link"
import { Facebook, Linkedin, Github } from 'lucide-react';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#E7E4F8]">
        <div className="container px-5 py-16 md:py-24 mx-auto mt-[40px]">
          <div className="flex flex-wrap md:text-left text-center order-first">
            
            {/* Hekto Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Hekto
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    placeholder='Enter Email Address'
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-900 rounded">
                  Sign-Up
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Contact Info
                <br className="lg:block hidden" />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 md:mt-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Categories
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Laptops & Computers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Cameras & Photography</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Smart Phones & Tablets</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Video Games & Consoles</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Waterproof Headphones</a>
                </li>
              </nav>
            </div>

            {/* Customer Care Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 md:mt-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Customer Care
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">My Account</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Discount</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Orders History</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
                </li>
              </nav>
            </div>

            {/* Pages Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 md:mt-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Category</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
                </li>
              </nav>
            </div>

          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-[#E7E4F8]">
          <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Hekto —
              <a
                href="https://twitter.com/knyttnev"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Right Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href={"https://www.facebook.com/rahat.saeed.142"} target="_blank" className='text-gray-900'>
                <Facebook className='text-3xl' />
              </Link>
              <Link href={""} target="_blank" className='text-gray-900 ml-4'>
                <Github className='text-3xl' />
              </Link>
              <Link href={"https://www.linkedin.com/in/rahat-bano-5b78b41b3/"} target="_blank" className='text-gray-900 ml-4'>
                <Linkedin className='text-3xl' />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
