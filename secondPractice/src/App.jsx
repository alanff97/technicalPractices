function App() {
  return (
    <div>
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Avengers, Star Wars, The Godfather..."
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>Results</main>
    </div>
  );
}

export default App;
