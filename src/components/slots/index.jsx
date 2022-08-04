import "./styles.scss";

const Slots = ({ number, color = 'fire' }) => {
  let html = [];

  for (let i = 1; i <= number; i++) {
    html.push(<li key={`s-${i}`} className={`slot bg-${color}`}></li>);
  }

  return (
    <ul className="list-unstyled d-flex gap-1 slots">
      { html.map(item => item) }
    </ul>
  )
}

export default Slots;