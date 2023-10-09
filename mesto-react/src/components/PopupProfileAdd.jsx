import PopupWithForm from "./PopupWithForm";

export default function PopupProfileAdd({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile"
      title="Новое место"
      buttonText="Создать"
    >
      <input
        name="name"
        id="input-new"
        className="popup__input popup__input_type_card"
        placeholder="Название"
        type="text"
        minLength="2"
        maxLength="30"
        required=""
      />
      <span className="popup__input-error input-new-error" />
      <input
        name="link"
        id="input-link"
        className="popup__input popup__input_type_url"
        placeholder="Ссылка на картинку"
        type="url"
        required=""
      />
      <span className="popup__input-error input-link-error" />
    </PopupWithForm>
  );
}