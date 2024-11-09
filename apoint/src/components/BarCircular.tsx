import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BarCircular = () => {
  const percentage = 56

  return (
    <div style={{ position: 'relative', width: '90px', height: '90px' }}>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#67c8ff',
          trailColor: '#f5f5f5',
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
          color: '#67c8ff'
        }}
      >
        <span style={{ fontSize: '20px' }}>{`${percentage}`}</span>
        <span
          className="font-normal text-[#1d1d1f]"
          style={{ fontSize: '10px' }}
        >
          Clientes
        </span>
      </div>
    </div>
  )
}

export default BarCircular
