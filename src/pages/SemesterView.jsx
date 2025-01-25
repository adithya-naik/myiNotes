import { useParams, Link } from "react-router-dom"
import {
  FaCode,
  FaCalculator,
  FaAtom,
  FaBolt,
  FaBook,
  FaDatabase,
  FaJava,
  FaMicrochip,
  FaBrain,
  FaUsers,
  FaPython,
  FaChartLine,
  FaLeaf,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa"

const subjectsData = {
  1: {
    1: [
      {
        name: "Problem Solving using C (CP)",
        icon: FaCode,
        link: "https://drive.google.com/drive/folders/1yh3EGFeUXpFhQxhbfDqfOnHXhf4OiCbE?usp=drive_link",
        progress: 75,
        units: 5,
        completedUnits: 4,
      },
      {
        name: "Matrix Algebra & Calculus (MAC)",
        icon: FaCalculator,
        link: "https://drive.google.com/drive/folders/1y-PjhBE35ZxeITOA524uC1ZsYgGYvUAG?usp=drive_link",
        progress: 60,
        units: 6,
        completedUnits: 3,
      },
      {
        name: "Engineering Chemistry (EC)",
        icon: FaAtom,
        link: "https://drive.google.com/drive/folders/1xkdE09g_qk-seBnyi1svC4dh8JW4QNkZ?usp=drive_link",
        progress: 80,
        units: 5,
        completedUnits: 4,
      },
      {
        name: "Essential English Language Skills (EELS)",
        icon: FaBook,
        link: "https://drive.google.com/drive/folders/1zWri6S8Std_HNiiuc-2imYrAf8V0VPW3?usp=drive_link",
        progress: 90,
        units: 4,
        completedUnits: 4,
      },
    ],
    2: [
      {
        name: "Data Structures (DS)",
        icon: FaDatabase,
        link: "https://drive.google.com/drive/folders/1wTZAdQAX3MfgHFuaTuAtntEqxdIu2JNe?usp=drive_link",
        progress: 70,
        units: 6,
        completedUnits: 4,
      },
      {
        name: "Advanced Calculus (AC)",
        icon: FaCalculator,
        link: "https://drive.google.com/drive/folders/16SCp4F4nkPnWRBIVL22No-GJERZ8uJj4?usp=drive_link",
        progress: 65,
        units: 5,
        completedUnits: 3,
      },
      {
        name: "Engineering Physics (EP)",
        icon: FaAtom,
        link: "https://drive.google.com/drive/folders/1uiWEPADlyTEljzaf158xJGFdG78U9FUn?usp=drive_link",
        progress: 85,
        units: 5,
        completedUnits: 4,
      },
      {
        name: "Basic Electrical & Electronics Engineering (BEEE)",
        icon: FaBolt,
        link: "https://drive.google.com/drive/folders/1vkvzMtFPM4mNKYzERbCHp02b12rygWa2?usp=drive_link",
        progress: 75,
        units: 6,
        completedUnits: 5,
      },
      {
        name: "Engineering Graphics (EG)",
        icon: FaBook,
        link: "https://drive.google.com/drive/folders/1VOqUsfVYpbvg3bDjP4FaiW-DvkKyVWHH?usp=drive_link",
        progress: 60,
        units: 4,
        completedUnits: 2,
      },
    ],
  },
  2: {
    1: [
      {
        name: "Object Oriented Programming through Java (OOPJ)",
        icon: FaJava,
        link: "https://drive.google.com/drive/folders/10hVxKOI1M7E4Tw9BxY-WF4L4AN5KHI5B?usp=drive_link",
        progress: 80,
        units: 6,
        completedUnits: 5,
      },
      {
        name: "Digital Electronics (DE)",
        icon: FaMicrochip,
        link: "https://drive.google.com/drive/folders/10fp935rQS5AivwKKfkSIS_3QrTSSGw-j?usp=drive_link",
        progress: 70,
        units: 5,
        completedUnits: 3,
      },
      {
        name: "Discrete Mathematics (DM)",
        icon: FaCalculator,
        link: "https://drive.google.com/drive/folders/10fySbtjphbU_1Thsrtd4uRqSc4LEygmZ?usp=drive_link",
        progress: 75,
        units: 4,
        completedUnits: 3,
      },
      {
        name: "Quantitative Aptitude & Logical Reasoning (QALR)",
        icon: FaBrain,
        link: "https://drive.google.com/drive/folders/10iM7D1XViAnDmuAGzwvMo9AmyT0A8XeQ?usp=drive_link",
        progress: 85,
        units: 5,
        completedUnits: 4,
      },
      {
        name: "Universal Human Values (UHV)",
        icon: FaUsers,
        link: "https://drive.google.com/drive/folders/10hc_S5N94hL0xsv4m439gxSwWFit5kwW?usp=drive_link",
        progress: 90,
        units: 4,
        completedUnits: 4,
      },
    ],
    2: [
      {
        name: "Python Programming (PP)",
        icon: FaPython,
        link: "https://drive.google.com/drive/folders/1kl0gsnYdwJqXmzqf1iTwToSdTGKtoc7k?usp=drive_link",
        progress: 75,
        units: 6,
        completedUnits: 4,
      },
      {
        name: "Probability and Statistics (P&S)",
        icon: FaCalculator,
        link: "https://drive.google.com/drive/folders/1-LX8VMlsleTOAJH-kBeCE21fpseP9dnM?usp=drive_link",
        progress: 70,
        units: 5,
        completedUnits: 3,
      },
      {
        name: "Computer Organization (CO)",
        icon: FaMicrochip,
        link: "https://drive.google.com/drive/folders/1p2G8PTvtmcUXSm1ux9o-J4ZwvBymScXV?usp=drive_link",
        progress: 65,
        units: 6,
        completedUnits: 4,
      },
      {
        name: "Database Management Systems (DBMS)",
        icon: FaDatabase,
        link: "https://drive.google.com/drive/folders/1CAk6Aw_EDxtboJPxNdoFki08xrUCj9h6?usp=drive_link",
        progress: 80,
        units: 5,
        completedUnits: 4,
      },
      {
        name: "Business Economics and Financial Analysis (BEFA)",
        icon: FaChartLine,
        link: "https://drive.google.com/drive/folders/1kB5Yh6LXWTncqiXY05sc2X_LcSwfQmhy?usp=drive_link",
        progress: 60,
        units: 4,
        completedUnits: 2,
      },
      {
        name: "Environmental Science (ES)",
        icon: FaLeaf,
        link: "https://drive.google.com/drive/folders/1TYu4Ny6sje2uJ1cvz1N5aTawF3zgs23H?usp=drive_link",
        progress: 85,
        units: 4,
        completedUnits: 3,
      },
    ],
  },
}

function SubjectCard({ subject }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{subject.name}</h3>
        {React.createElement(subject.icon, { className: "text-2xl text-blue-500" })}
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{subject.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${subject.progress}%` }}></div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        {subject.completedUnits} of {subject.units} units completed
      </p>
      <a
        href={subject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View Notes
      </a>
    </div>
  )
}

function SemesterView() {
  const { year, semester } = useParams()
  const subjects = subjectsData[year]?.[semester] || []

  const totalUnits = subjects.reduce((acc, subject) => acc + subject.units, 0)
  const completedUnits = subjects.reduce((acc, subject) => acc + subject.completedUnits, 0)
  const overallProgress = Math.round((completedUnits / totalUnits) * 100)

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
        B.Tech Year {year} - Semester {semester}
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Semester Progress</h2>
        <p className="text-gray-600 mb-4">Overall completion status for this semester</p>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Overall Completion</span>
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{completedUnits} units completed</span>
            <span>{totalUnits} total units</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} subject={subject} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">Need Assistance?</h3>
        <p className="text-gray-600 mb-4">
          If you're having trouble accessing any materials or need additional support, don't hesitate to reach out to
          your professors or the student support team.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  )
}

export default SemesterView

