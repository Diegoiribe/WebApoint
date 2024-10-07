import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypedText: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      const options = {
        strings: ['Di presente.<br>Estés donde estés.    '],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: ' ', // Usar un espacio en blanco para eliminar el cursor por defecto
        backDelay: 2000, // Pausa antes de empezar a borrar
        startDelay: 500 // Pausa antes de empezar a escribir
      }

      typed.current = new Typed(el.current, options)
    }

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* Estilos para el cursor */}
      <style>{`
        .typed-cursor {
          background-color: #0079ec; /* azul claro */
          width: 5px; /* Ancho del cursor */
          height: 65px; /* Alto acorde al tamaño del texto */
          border-radius: 9999px; /* Redondear completamente */
          margin-left: 5px; /* Ajuste para alinear */
          display: inline-block; /* Para que aparezca al final del texto */
          z-index: -100; /* Para que esté por encima del texto */
        }
      `}</style>

      <div className="text-[81px] h-full font-bold text-[#1d1d1f] leading-none ml-[14.5px] p-1 font -z-100">
        <span ref={el} />
      </div>
    </>
  )
}

export default TypedText
