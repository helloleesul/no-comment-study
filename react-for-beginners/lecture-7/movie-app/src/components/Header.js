function Header({ title, rating }) {
  return (
    <header>
      <h1>{title ? title : "Most - Loved - Flicks"}</h1>
      <span>{rating ? `${rating} 🍿` : "🍿"}</span>
    </header>
  );
}

export default Header;
