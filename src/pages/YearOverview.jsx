import React from "react"
import { useParams, Link } from "react-router-dom"
import { FaBook, FaCalendarAlt } from "react-icons/fa"

const yearData = {
  1: {
    year: 1,
    semesters: [
      { name: "Semester 1", subjects: 4 },
      { name: "Semester 2", subjects: 5 },
    ],
  },
  2: {
    year: 2,
    semesters: [
      { name: "Semester 3", subjects: 5 },
      { name: "Semester 4", subjects: 6 },
    ],
  },
}

function YearOverview() {
  const { year } = useParams()
  const yearNumber = Number.parseInt(year)
  const currentYearData = yearData[yearNumber]

  if (!currentYearData) {
    return <div>Year not found</div>
  }

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">B.Tech Year {year}</h1>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {currentYearData.semesters.map((semester, index) => (
          <Link
            key={index}
            to={`/year/${year}/semester/${index + 1}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-blue-700">{semester.name}</h2>
              <FaCalendarAlt className="text-3xl text-blue-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Subjects: {semester.subjects}</span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm text-gray-500">
                <FaBook className="inline mr-1" />
                Click to view subjects
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default YearOverview

