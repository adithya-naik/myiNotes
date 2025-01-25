import { useParams, Link } from "react-router-dom"
import { FaBook, FaExclamationTriangle, FaChartBar, FaCalendarAlt, FaClock } from "react-icons/fa"

const subjectData = {
  1: [
    { name: "Semester 1", subjects: 4, completed: 3 },
    { name: "Semester 2", subjects: 5, completed: 4 },
  ],
  2: [
    { name: "Semester 3", subjects: 5, completed: 5 },
    { name: "Semester 4", subjects: 6, completed: 4 },
  ],
  3: [
    { name: "Semester 5", subjects: 6, completed: 0 },
    { name: "Semester 6", subjects: 6, completed: 0 },
  ],
  4: [
    { name: "Semester 7", subjects: 5, completed: 0 },
    { name: "Semester 8", subjects: 4, completed: 0 },
  ],
}

function YearOverview() {
  const { year } = useParams()
  const yearNumber = Number.parseInt(year)

  if (yearNumber > 2) {
    return (
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">B.Tech Year {year}</h1>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 max-w-2xl mx-auto"
          role="alert"
        >
          <div className="flex items-center">
            <FaExclamationTriangle className="mr-2" />
            <p className="font-bold">Coming Soon!</p>
          </div>
          <p className="mt-2">
            The materials for Year {year} are not yet available. We're working on adding them soon.
          </p>
        </div>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to homepage
        </Link>
      </div>
    )
  }

  const yearData = subjectData[yearNumber]
  const totalSubjects = yearData.reduce((acc, sem) => acc + sem.subjects, 0)
  const completedSubjects = yearData.reduce((acc, sem) => acc + sem.completed, 0)
  const completionPercentage = Math.round((completedSubjects / totalSubjects) * 100)

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">B.Tech Year {year}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Year Overview</h2>
          <p className="text-gray-600 mb-4">Subject completion status for Year {year}</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Completion</span>
              <span className="text-sm font-medium">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{completedSubjects} completed</span>
              <span>{totalSubjects} total</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Semester Breakdown</h2>
          <p className="text-gray-600 mb-4">Subject distribution across semesters</p>
          <div className="space-y-4">
            {yearData.map((semester, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{semester.name}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(semester.completed / semester.subjects) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {semester.completed}/{semester.subjects}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {yearData.map((semester, index) => (
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
              <span className="text-gray-600">Completed: {semester.completed}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(semester.completed / semester.subjects) * 100}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm text-gray-500">
                <FaClock className="inline mr-1" />
                Estimated study time: {semester.subjects * 10} hours
              </span>
              <FaChartBar className="text-2xl text-blue-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default YearOverview

