import { useState } from "react"
import Card from "../components/Card"
import { FaPython, FaCalculator, FaMicrochip, FaDatabase, FaChartLine, FaLeaf, FaInfoCircle } from "react-icons/fa"

const subjects = [
  { name: "Python Programming", icon: FaPython },
  { name: "Probability and Statistics", icon: FaCalculator },
  { name: "Computer Organization", icon: FaMicrochip },
  { name: "Database Management Systems", icon: FaDatabase },
  { name: "Economics", icon: FaChartLine },
  { name: "Environmental Science", icon: FaLeaf },
]

function SemesterFour() {
  const [selectedSubject, setSelectedSubject] = useState(null)

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">B.Tech II Year - Semester IV</h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Explore your fourth semester subjects and access comprehensive study materials
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
          <FaInfoCircle className="mr-2" />
          Semester Overview
        </h2>
        <p className="text-gray-600">
          Welcome to your fourth semester! This semester introduces you to Python programming, probability and
          statistics, computer organization, database management systems, economics, and environmental science. These
          subjects provide a well-rounded education in computer science and related fields, preparing you for advanced
          topics and real-world applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <Card key={index} {...subject} onClick={() => setSelectedSubject(subject.name)} />
        ))}
      </div>

      {selectedSubject && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{selectedSubject}</h3>
          <p className="text-gray-600 mb-4">
            Access detailed lecture notes, practice exercises, and supplementary resources for {selectedSubject}.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Access Materials
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Need Assistance?</h3>
        <p className="text-gray-600 mb-4">
          If you're having trouble accessing any materials or need additional support, don't hesitate to reach out to
          your professors or the academic support team.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

export default SemesterFour

