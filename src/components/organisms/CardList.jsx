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
  const [searchTerm, setSearchTerm] = useState("");


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

  // Filtro de busqueda
  const filteredCards = cards.filter(card => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      card.name.toLowerCase().includes(lowerCaseTerm) ||
      card.origin.name.toLowerCase().includes(lowerCaseTerm) ||
      card.species.toLowerCase().includes(lowerCaseTerm) ||
      card.status.toLowerCase().includes(lowerCaseTerm)
    );
  });

  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

    

  if (loading) {
    return <div>Cargando página...</div>;
  }

  return (
    <div >
      <Navepage page={page} setPage={setPage} />

      <input
        type="text"
        placeholder="Búsqueda"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

        <Formulario onSubmit={handleAddCard} />

      <div className="lista-productos">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} /> 
        ))}
      </div>
    </div>
  );
}

export default CardList;
