import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BarCircular = () => {
  const percentage = 56

  return (
    <div style={{ position: 'relative', width: '175px', height: '175px' }}>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#ffffff',
          trailColor: '#000000A5',
          pathTransitionDuration: 0.5,
          pathTransition: 'none'
        })}
      />
      <div
        className="flex flex-col"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#f5f5f5'
        }}
      >
        <span style={{ fontSize: '36px' }}>{`${percentage}`}</span>
        <span
          className="font-normal text-[#f5f5f5]"
          style={{ fontSize: '10px' }}
        >
          Clientes
        </span>
      </div>
    </div>
  )
}

export default BarCircular
