import { useState } from "react"
import { FiMessageSquare, FiX } from "react-icons/fi"

const demoQuestions = [
  "How do I sell my license?",
  "What licenses do you accept?",
  "How long does payment take?"
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])

  const handleQuestionClick = (q) => {
    setMessages(prev => [
      ...prev,
      { text: q, type: 'user' },
      { text: "Thanks for asking! Our team will reply shortly.", type: 'bot' }
    ])
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <FiMessageSquare size={24}/>
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 w-80 rounded-lg shadow-xl border dark:border-gray-700">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="font-semibold">Chat Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300"
            >
              <FiX size={20}/>
            </button>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto">
            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <div 
                key={i}
                className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block p-2 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-100 dark:bg-blue-900' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Sample Questions */}
          <div className="p-4 border-t dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
            <div className="space-y-2">
              {demoQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(q)}
                  className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
