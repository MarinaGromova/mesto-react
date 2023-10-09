import PopupWithForm from "./PopupWithForm";

export default function UserAvatarPopup({
  isOpen,
  onClose
}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить">
      <input
        name="link"
        id="input-link"
        className="popup__input popup__input_type_url popup__container-title_margin"
        placeholder="Ссылка на картинку"
        type="url"
        required=""
      />
      <span className="popup__input-error input-link-error popup__container-margin" />
    </PopupWithForm>
  );
}