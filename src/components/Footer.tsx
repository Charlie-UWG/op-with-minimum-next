import type { FC } from 'react'
// footer
import Link from 'next/link'
import React from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">About Us</h3>
            <p className="text-gray-300">
              Your company description here.
            </p>
          </div>
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <p className="text-gray-300">
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            ©
            {' '}
            2025 Degital Scanning Center All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
