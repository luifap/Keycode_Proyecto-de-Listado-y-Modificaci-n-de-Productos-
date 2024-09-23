function Card({ card }) {
    return (
        <div className="text-center  p-5">
            <h3>{card.name}</h3>
            <img className="img-fluid rounded-pill" src={card.image} alt={card.name} />
            <p>{card.origin.name}</p>
        </div>
    );
}

export default Card;