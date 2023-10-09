import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupProfileAdd from "./PopupProfileAdd";
import UserAvatarPopup from "./UserAvatarPopup";
import PopupProfileEdit from "./PopupProfileEdit";
import ImagePopup from "./ImagePopup";
import "../index.css";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setPopupProfileEditOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setPopupProfileEditOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.title, link: card.src });
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setPopupProfileEditOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupProfileEdit
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          onClose={closeAllPopups}
          title={"Вы уверены?"}
          buttonText={"Да"}
          name={"delete"}
        />
        <PopupProfileAdd
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <UserAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;