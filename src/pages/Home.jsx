import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaUsers,
  FaClipboardList,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaCalculator,
  FaAtom,
  FaBolt,
  FaDraftingCompass,
  FaJava,
  FaMicrochip,
  FaBrain,
  FaPython,
  FaChartBar,
  FaDatabase,
  FaChartLine,
  FaLeaf,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaDesktop,
  FaCogs,
  FaNetworkWired,
  FaGlobe,
  FaFileCode,
  FaCloud,
  FaLock,
  FaChartPie,
  FaRobot,
  FaLink,
  FaBug,
  FaProjectDiagram,
  FaComments,
} from "react-icons/fa"

function YearCard({ yearData, onSelectYear }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${!yearData.available && "opacity-50"}`}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <FaGraduationCap className="text-5xl mb-4 mx-auto text-blue-500" />
          <h2 className="text-2xl font-semibold text-center mb-2">B.Tech Year {yearData.year}</h2>
          <p className="text-center text-gray-600 mb-4">
            {yearData.available ? `${yearData.semesters.length} Semesters` : "Coming Soon"}
          </p>
        </div>
        <button
          onClick={() => yearData.available && onSelectYear(yearData)}
          className={`mt-4 w-full px-4 py-2 rounded-full transition-colors duration-300 ${
            yearData.available
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!yearData.available}
        >
          {yearData.available ? "View Details" : "Not Available"}
        </button>
      </div>
    </div>
  )
}

function YearDetails({ yearData, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-800">B.Tech Year {yearData.year}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {yearData.semesters.map((semester, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{semester.name}</h3>
              <ul className="space-y-2">
                {semester.subjects.map((subject, subIndex) => (
                  <li key={subIndex} className="flex items-center bg-white p-2 rounded shadow-sm">
                    {React.createElement(subject.icon, { className: "mr-2 text-blue-500 flex-shrink-0" })}
                    <span className="text-sm">{subject.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            to={`/year/${yearData.year}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 mr-2"
          >
            View Notes
          </Link>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: FaBook,
    title: "Comprehensive Notes",
    description: "Access detailed notes for all subjects, carefully curated and regularly updated.",
  },
  {
    icon: FaLaptopCode,
    title: "Coding Resources",
    description: "Find helpful coding examples, tutorials, and practice problems for programming courses.",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Connect with other students, share knowledge, and get help when you need it.",
  },
  {
    icon: FaClipboardList,
    title: "Exam Preparation",
    description: "Access previous year question papers, mock tests, and study guides for better exam preparation.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert Contributions",
    description: "Benefit from notes and explanations provided by experienced faculty and top-performing students.",
  },
  {
    icon: FaGraduationCap,
    title: "Curriculum Aligned",
    description: "All content is carefully aligned with the latest SNIST B.Tech curriculum for each semester.",
  },
]

const faqs = [
  {
    question: "What subjects are covered?",
    answer:
      "All subjects from the B.Tech curriculum at SNIST are covered, including core engineering subjects, programming courses, and electives.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "The content is regularly updated to reflect the latest curriculum changes. We also add new resources and improve existing ones based on student feedback.",
  },
  {
    question: "Is there a cost to use myiNotes?",
    answer:
      "myiNotes is currently free to use for all SNIST students. We believe in making quality education resources accessible to everyone.",
  },
  {
    question: "Can I contribute my own notes or resources?",
    answer:
      "Yes! We encourage students to contribute their notes, summaries, or other helpful resources. Please contact our team to learn about the submission process.",
  },
  {
    question: "Are there video tutorials available?",
    answer:
      "Currently, we focus on written content, but we're exploring the possibility of adding video tutorials in the future. Stay tuned for updates!",
  },
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

const years = [
  {
    year: 1,
    available: true,
    semesters: [
      {
        name: "Semester 1",
        subjects: [
          { name: "Problem Solving using C (CP)", icon: FaCode },
          { name: "Matrix Algebra & Calculus (MAC)", icon: FaCalculator },
          { name: "Engineering Chemistry (EC)", icon: FaAtom },
          { name: "Essential English Language Skills (EELS)", icon: FaBook },
        ],
      },
      {
        name: "Semester 2",
        subjects: [
          { name: "Data Structures (DS)", icon: FaDatabase },
          { name: "Advanced Calculus (AC)", icon: FaCalculator },
          { name: "Engineering Physics (EP)", icon: FaAtom },
          { name: "Basic Electrical & Electronics Engineering (BEEE)", icon: FaBolt },
          { name: "Engineering Graphics (EG)", icon: FaDraftingCompass },
        ],
      },
    ],
  },
  {
    year: 2,
    available: true,
    semesters: [
      {
        name: "Semester 3",
        subjects: [
          { name: "Object Oriented Programming through Java (OOPJ)", icon: FaJava },
          { name: "Digital Electronics (DE)", icon: FaMicrochip },
          { name: "Discrete Mathematics (DM)", icon: FaCalculator },
          { name: "Quantitative Aptitude & Logical Reasoning (QALR)", icon: FaBrain },
          { name: "Universal Human Values (UHV)", icon: FaUsers },
        ],
      },
      {
        name: "Semester 4",
        subjects: [
          { name: "Python Programming (PP)", icon: FaPython },
          { name: "Probability and Statistics (P&S)", icon: FaChartBar },
          { name: "Computer Organization (CO)", icon: FaMicrochip },
          { name: "Database Management Systems (DBMS)", icon: FaDatabase },
          { name: "Business Economics and Financial Analysis (BEFA)", icon: FaChartLine },
          { name: "Environmental Science (ES)", icon: FaLeaf },
        ],
      },
    ],
  },
  {
    year: 3,
    available: false,
    semesters: [],
  },
  {
    year: 4,
    available: false,
    semesters: [],
  },
]

function Home() {
  const [selectedYear, setSelectedYear] = useState(null)

  return (
    <div className="space-y-16 py-8">
      <header className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-4 text-blue-800 animate-fade-in">Welcome to myiNotes</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-150">
          Your comprehensive resource for B.Tech study materials, tailored for SNIST students.
        </p>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Explore by Year</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {years.map((yearData) => (
            <YearCard key={yearData.year} yearData={yearData} onSelectYear={setSelectedYear} />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 rounded-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Why Choose myiNotes?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:bg-blue-50 transform hover:-translate-y-1"
              >
                {React.createElement(feature.icon, { className: "text-4xl text-blue-500 mb-4 mx-auto" })}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Featured Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <FaStar className="text-yellow-400 mb-4 text-2xl" />
              <h3 className="text-xl font-semibold mb-2">Featured Resource {index + 1}</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to help you excel in your studies and prepare for exams effectively.
              </p>
              <Link to="#" className="text-blue-500 hover:underline">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl mb-8">
            Join thousands of SNIST students who are already benefiting from our comprehensive study materials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/year/1"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              <FaRocket className="mr-2" />
              Start Exploring
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              <FaLightbulb className="mr-2" />
              Get Support
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {selectedYear && <YearDetails yearData={selectedYear} onClose={() => setSelectedYear(null)} />}
    </div>
  )
}

export default Home

