import React from "react"
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">© {new Date().getFullYear()} myiNotes. All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <p className="mr-2">Made with</p>
            <FaHeart className="text-red-500 mx-1" />
            <p className="ml-2">by SNIST Students</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/myinotes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/company/myinotes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

