function Card({ title, description, tag }) {
  return (
    <article className="card">
      {tag && <span className="card-tag">{tag}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default Card;
