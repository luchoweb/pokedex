const Bar = ({ percent, color }) => {
  return (
    <div className="progress mb-3">
      <div className={`progress-bar bg-${color}`} role="progressbar" style={{
        width: `${percent}%`
      }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}

export default Bar;