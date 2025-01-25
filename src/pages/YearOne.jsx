import { Link, Outlet } from "react-router-dom"
import { FaBook } from "react-icons/fa"

function YearOne() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">B.Tech I Year</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Link
          to="/year-one/semester-one"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaBook className="text-6xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">Semester I</h2>
          <p className="text-center text-gray-600">Access notes and resources for your first semester</p>
        </Link>
        <Link
          to="/year-one/semester-two"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaBook className="text-6xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">Semester II</h2>
          <p className="text-center text-gray-600">Find materials for your second semester studies</p>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default YearOne

