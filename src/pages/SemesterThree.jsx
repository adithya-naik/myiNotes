import { useState } from "react"
import Card from "../components/Card"
import { FaJava, FaMicrochip, FaCalculator, FaBrain, FaUsers, FaInfoCircle } from "react-icons/fa"

const subjects = [
  { name: "Object-Oriented Programming with Java", icon: FaJava },
  { name: "Digital Logic Design", icon: FaMicrochip },
  { name: "Discrete Mathematics", icon: FaCalculator },
  { name: "Data Structures", icon: FaBrain },
  { name: "Principles of Economics", icon: FaUsers },
]

function SemesterThree() {
  const [selectedSubject, setSelectedSubject] = useState(null)

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">B.Tech II Year - Semester III</h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Dive into your third semester subjects and access comprehensive study materials
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
          <FaInfoCircle className="mr-2" />
          Semester Overview
        </h2>
        <p className="text-gray-600">
          Welcome to your third semester! This semester focuses on object-oriented programming, digital logic, discrete
          mathematics, data structures, and economics. These subjects form the core of your computer science education
          and provide a strong foundation for advanced topics in the coming semesters.
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
            Access comprehensive lecture notes, practice problems, and additional resources for {selectedSubject}.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            View Materials
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Need Assistance?</h3>
        <p className="text-gray-600 mb-4">
          If you require any help with accessing materials or have questions about the subjects, feel free to reach out
          to your professors or the academic support team.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Get Support
        </a>
      </div>
    </div>
  )
}

export default SemesterThree

