import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const years = [1, 2, 3, 4]

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FaGraduationCap className="h-8 w-8 text-white mr-2" />
              <span className="text-white font-bold text-xl">myiNotes</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
              {years.map((year) => (
                <NavLink
                  key={year}
                  to={`/year/${year}`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Year {year}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Home
            </NavLink>
            {years.map((year) => (
              <NavLink
                key={year}
                to={`/year/${year}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Year {year}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
