import { useState } from 'react'
import { questions } from '../data/db'
import type { Question } from '../types'

const Questions = () => {
  // Cambiamos el estado de un solo booleano a un objeto que almacena el estado de cada pregunta
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null)

  const handleOpen = (id: Question['id']) => {
    // Cambia el estado solo de la pregunta seleccionada, alternando su estado
    setOpenQuestionId(openQuestionId === id ? null : id)
  }

  return (
    <div className="mx-auto ">
      {questions.map((question) => (
        <div
          className="w-screen space-y-2 border-b border-[#d2d2d7] py-4 last:border-b-0 max-w-5xl"
          key={question.id}
          onClick={() => handleOpen(question.id)}
        >
          <div className="flex justify-between items-center cursor-pointer hover:text-[#1c61c0]">
            <p className="text-[22px] font-semibold">{question.question}</p>
            {openQuestionId === question.id ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="size-6 text-[#86868b] hover:text-[#1c61c0]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="size-6 text-[#86868b]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </div>

          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              openQuestionId === question.id ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <p className="text-[#1d1d1f] py-5 max-w-4xl">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Questions
