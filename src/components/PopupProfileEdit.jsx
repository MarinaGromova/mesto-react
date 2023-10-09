import PopupWithForm from "./PopupWithForm";

export default function PopupProfileEdit({
  isOpen,
  onClose
}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить">
      <input
        name="name"
        id="username"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        type="text"
        minLength="2"
        maxLength="40"
        required=""
      />
      <span className="popup__input-error username-error" />
      <input
        name="about"
        id="input-job"
        className="popup__input popup__input_type_job"
        placeholder="О себе"
        type="text"
        minLength="2"
        maxLength="200"
        required=""
      />
      <span className="popup__input-error input-job-error" />
    </PopupWithForm>
  );
}