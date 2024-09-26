import { useEffect, useState } from "react";
import Card from "../components/Card";

function Navepage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Pagina: {page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </div>
  );
}

function CardList() {
  const [cards, setCards] = useState([]);

  //Para que la aplicación no se de more en cargar:
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  // Petición hacia el servidor backend (De rickandmorty)
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCards(data.results);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  if (loading) {
    return <div>Cargando página...</div>;
  }

  return (
    <div className="container">
      <Navepage page={page} setPage={setPage} />
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
      <Navepage page={page} setPage={setPage} />
    </div>
  );
}

export default CardList;
