type ButtonsProps = {
  text: string
  bg: string
  color: string
  p: string
  size: string
  margin: string
  hover?: string
}

const Buttons = ({
  bg,
  color,
  text,
  p,
  size,
  margin,
  hover = bg
}: ButtonsProps) => {
  return (
    <button
      className="rounded-xl"
      style={{
        backgroundColor: bg,
        color: color,
        padding: p,
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: size,
        margin: margin
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
    >
      {text}
    </button>
  )
}

export default Buttons
