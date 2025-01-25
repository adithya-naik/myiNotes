import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import YearOverview from "./pages/YearOverview"
import SemesterView from "./pages/SemesterView"
import ContactForm from "./components/ContactForm"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/year/:year" element={<YearOverview />} />
            <Route path="/year/:year/semester/:semester" element={<SemesterView />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

