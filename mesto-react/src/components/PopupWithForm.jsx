export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          aria-label="Закрыть"
          className="popup__container-close"
        ></button>
        <h2 className="popup__container-title">{props.title}</h2>
        <form
          name="type-form"
          className={`popup__form popup__form_type_${props.name}`}
          noValidate=""
        >
          {props.children}
          <button
            type="submit"
            className="popup__container-submit popup__container-submit_disabled"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}