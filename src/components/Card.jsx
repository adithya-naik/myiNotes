import React, { useState, useEffect } from "react"

const Card = ({ name, icon: Icon, link, year, semester }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [emoji, setEmoji] = useState("🎉")
  const [progress, setProgress] = useState(0)

  const handleClick = () => {
    setShowDialog(true)
    setProgress(0)
  }

  useEffect(() => {
    if (showDialog) {
      const emojis = ["🎉", "📚", "🤓", "✨", "🚀"]
      let emojiIndex = 0
      const emojiInterval = setInterval(() => {
        setEmoji(emojis[emojiIndex])
        emojiIndex = (emojiIndex + 1) % emojis.length
      }, 500)

      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(progressInterval)
            clearInterval(emojiInterval)
            window.open(link, "_blank")
            setShowDialog(false)
            return 0
          }
          return prevProgress + 1
        })
      }, 30)

      return () => {
        clearInterval(emojiInterval)
        clearInterval(progressInterval)
      }
    }
  }, [showDialog, link])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg hover:bg-blue-50 transform hover:scale-105 relative">
      <Icon className="text-5xl text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">
        Year {year}, Semester {semester}
      </p>
      <button
        onClick={handleClick}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        View Notes
      </button>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-center max-w-sm">
            <p className="text-2xl mb-4">Thank you for accessing the notes!</p>
            <p className="text-lg mb-4">You are being directed to the notes...</p>
            <p className="text-4xl animate-bounce mb-4">{emoji}</p>
            <div className="w-full bg-gray-200 h-2 mb-4">
              <div
                className="bg-blue-600 h-2 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{progress}% loaded</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

