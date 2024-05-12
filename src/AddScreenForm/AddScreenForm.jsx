import styles from "./AddScreenForm.module.css";
const AddScreenForm = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          <input type="radio" name="answer" />
          Да
        </label>
        <label>
          <input type="radio" name="answer" />
          Нет
        </label>
        <label>
          <input type="radio" name="answer" />
          Не знаю
        </label>
      </fieldset>
      <fieldset>
        <label>
          {" "}
          <input type="checkbox" name="tv-show" />
          Новости
        </label>
        <label>
          <input type="checkbox" name="tv-show" />
          Фантастика
        </label>
        <label>
          <input type="checkbox" name="tv-show" /> Мультики
        </label>
      </fieldset>
      <fieldset>
        <select name="cartoon">
          <option value="">История игрушек</option>
          <option value="">Мулан</option>
          <option value="">Король Лев</option>
        </select>
      </fieldset>
      <button>Ответить</button>
    </form>
  );
};

export default AddScreenForm;
