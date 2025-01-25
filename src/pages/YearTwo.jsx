import { Link, Outlet } from "react-router-dom"
import { FaBook } from "react-icons/fa"

function YearTwo() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">B.Tech II Year</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Link
          to="/year-two/semester-three"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaBook className="text-6xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">Semester III</h2>
          <p className="text-center text-gray-600">Access notes and resources for your third semester</p>
        </Link>
        <Link
          to="/year-two/semester-four"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaBook className="text-6xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-center mb-4">Semester IV</h2>
          <p className="text-center text-gray-600">Find materials for your fourth semester studies</p>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default YearTwo

