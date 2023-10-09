export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <>
      <button
        type="button"
        aria-label="Закрыть"
        className="elements__basket"
      ></button>
      <img
        onClick={handleClick}
        src={card.src}
        alt={card.title}
        className="elements__img"
      />
      <div className="elements__flex">
        <h2 className="elements__title">{card.title}</h2>
        <div className="elements__likes">
          <button className="elements__group" type="button"></button>
          <p className="elements__likes-number">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}
