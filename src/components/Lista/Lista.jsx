function Lista({ items = [] }) {
  return (
    <ul className="lista">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;
