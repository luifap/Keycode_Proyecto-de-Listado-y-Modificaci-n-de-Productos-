import { useEffect, useState } from "react";
import Card from "../cards/Card";
import Formulario from "../pages/Formulario";
import PaginaLista from "../pages/PaginaLista";

function Navepage({ page, setPage }) {
  const totalPages = 10; 

  const getPageNumbers = () => {
    const pageNumbers = [];
    const start = Math.max(1, page - 2); 
    const end = Math.min(totalPages, page + 2); 

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <p className="pagination-text">Página: {page}</p>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-secondary">
          Anterior
        </button>
        {getPageNumbers().map((number) => (
          <span
            key={number}
            className="page-number"
            onClick={() => setPage(number)}
            style={{ color: number === page ? '#007bff' : '#000' }} 
          >
            {number}
          </span>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="btn btn-secondary">
          Siguiente
        </button>
      </div>
    </div>
  );
}

function CardList() {
  const [cards, setCards] = useState([]);

  //Para que la aplicación no se de more en cargar:
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);


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

  const handleAddCard = (newCard) => {
    setCards((prevCards) => [
      ...prevCards,
      { id: Date.now(), ...newCard },
    ]);
  };

  if (loading) {
    return <div>Cargando página...</div>;
  }

  return (
    <div >
      <Navepage page={page} setPage={setPage} />
      <div className="lista-productos">
          {cards.map((card) => (
            <div className="tarjeta" key={card.id}>
              <h3>{card.name}</h3>
              <img src={card.image} alt={card.name} className="tarjeta-imagen" />
              <p>{card.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardList;
