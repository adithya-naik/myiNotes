import { useState } from "react"
import Card from "../components/Card"
import { FaCode, FaCalculator, FaFlask, FaBook, FaInfoCircle } from "react-icons/fa"

const subjects = [
  {
    name: "Problem Solving using C (CP)",
    icon: FaCode,
    link: "https://drive.google.com/drive/folders/1yh3EGFeUXpFhQxhbfDqfOnHXhf4OiCbE?usp=drive_link",
  },
  {
    name: "Matrix Algebra & Calculus (MAC)",
    icon: FaCalculator,
    link: "https://drive.google.com/drive/folders/1y-PjhBE35ZxeITOA524uC1ZsYgGYvUAG?usp=drive_link",
  },
  {
    name: "Engineering Chemistry (EC)",
    icon: FaFlask,
    link: "https://drive.google.com/drive/folders/1xkdE09g_qk-seBnyi1svC4dh8JW4QNkZ?usp=drive_link",
  },
  {
    name: "Essential English Language Skills (EELS)",
    icon: FaBook,
    link: "https://drive.google.com/drive/folders/1zWri6S8Std_HNiiuc-2imYrAf8V0VPW3?usp=drive_link",
  },
]

function SemesterOne() {
  const [selectedSubject, setSelectedSubject] = useState(null)

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">B.Tech I Year - Semester I</h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Explore your first semester subjects and access study materials
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
          <FaInfoCircle className="mr-2" />
          Semester Overview
        </h2>
        <p className="text-gray-600">
          Welcome to your first semester! This crucial period lays the foundation for your engineering journey. You'll
          dive into essential subjects that will shape your understanding of core concepts in computer science,
          mathematics, chemistry, and communication skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {subjects.map((subject, index) => (
          <Card key={index} {...subject} onClick={() => setSelectedSubject(subject)} />
        ))}
      </div>

      {selectedSubject && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{selectedSubject.name}</h3>
          <p className="text-gray-600 mb-4">
            Access detailed lecture notes, practice exercises, and supplementary resources for {selectedSubject.name}.
          </p>
          <a
            href={selectedSubject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Access Materials
          </a>
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

export default SemesterOne

