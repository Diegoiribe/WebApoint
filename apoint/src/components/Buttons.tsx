type ButtonsProps = {
  text: string
  bg: string
  color: string
  p: string
  size: string
  margin: string
}

const Buttons = ({ bg, color, text, p, size, margin }: ButtonsProps) => {
  return (
    <button
      className="rounded-full"
      style={{
        backgroundColor: bg,
        color: color,
        padding: p,
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: size,
        margin: margin
      }}
    >
      {text}
    </button>
  )
}

export default Buttons
