import { useEffect, useState } from "react";
import Tarjeta from "../moleculas/Tarjeta";

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
            style={{ color: number === page ? '#e90683' : '#000' }} // Resalta la página actual
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

function ListaProductos() { 
  const [cards, setCards] = useState([]);

  // Para que la aplicación no se de more en cargar:
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
    <div>
      <Navepage page={page} setPage={setPage} />
      <div className="lista-productos">
          {cards.map((tarjeta) => ( 
            <div className="tarjeta" key={tarjeta.id}>
              <h3>{tarjeta.name}</h3>
              <img src={tarjeta.image} alt={tarjeta.name} className="tarjeta-imagen" />
              <p>{tarjeta.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListaProductos; // Exportando ListaProductos