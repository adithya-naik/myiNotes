import { useState } from "react"
import Card from "../components/Card"
import { FaDatabase, FaCalculator, FaAtom, FaBolt, FaDraftingCompass, FaInfoCircle } from "react-icons/fa"

const subjects = [
  { name: "Database Management Systems", icon: FaDatabase },
  { name: "Probability and Statistics", icon: FaCalculator },
  { name: "Chemistry", icon: FaAtom },
  { name: "Basic Electrical Engineering", icon: FaBolt },
  { name: "Engineering Graphics", icon: FaDraftingCompass },
]

function SemesterTwo() {
  const [selectedSubject, setSelectedSubject] = useState(null)

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">B.Tech I Year - Semester II</h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Explore your second semester subjects and access study materials
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
          <FaInfoCircle className="mr-2" />
          Semester Overview
        </h2>
        <p className="text-gray-600">
          Welcome to your second semester! This semester introduces you to database concepts, probability and
          statistics, chemistry, electrical engineering basics, and engineering graphics. Each subject builds upon your
          first-semester knowledge and prepares you for more advanced topics.
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
            Here you can find lecture notes, practice problems, and additional resources for {selectedSubject}.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Access Materials
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Need Help?</h3>
        <p className="text-gray-600 mb-4">
          If you're having trouble accessing any materials or need additional support, don't hesitate to reach out to
          your professors or the student support team.
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

export default SemesterTwo

