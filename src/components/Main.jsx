import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";
import avatar from "../images/camping.jpg"

const mapCards = (cards) => {
  return cards.map((item) => ({
    id: item._id,
    src: item.link,
    alt: item.name,
    title: item.name,
    likes: item.likes.length,
    owner: item.owner,
  }));
};

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState("Жак");
  const [userDescription, setUserDescription] = useState("Исследователь");
  const [userAvatar, setUserAvatar] = useState("avatar");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(mapCards(cards));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container">
      <section className="profile">
        <button onClick={onEditAvatar} className="profile__image">
          <img
            src={avatar}
            alt="аватарка страницы"
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__plus-button"
          type="button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <li key={card.id} className="elements__card">
              <Card
                {...card}
                onCardClick={onCardClick}
                card={card}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}