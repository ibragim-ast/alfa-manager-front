import { useState } from "react";
import styles from "./AddScreenForm.module.css";
const AddScreenForm = ({ addScreen }) => {
  const [screenName, setScreenName] = useState("");
  const [screenLocation, setScreenLocation] = useState("");
  const [screenPrice, setScreenPrice] = useState("");
  const [screenDuration, setScreenDuration] = useState("");

  const handleAddScreen = (e) => {
    e.preventDefault();

    addScreen({
      name: screenName,
      location: screenLocation,
      price: screenPrice,
      blockDuration: screenDuration,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleAddScreen}>
      <label>
        <input
          type="text"
          value={screenName}
          onChange={(e) => setScreenName(e.target.value)}
        />
        Название экрана
      </label>
      <label>
        <input
          type="text"
          value={screenLocation}
          onChange={(e) => setScreenLocation(e.target.value)}
        />
        Адрес
      </label>
      <label>
        <input
          type="number"
          value={screenPrice}
          onChange={(e) => setScreenPrice(e.target.value)}
        />
        Цена за секунду
      </label>
      <label>
        <input
          type="number"
          value={screenDuration}
          onChange={(e) => setScreenDuration(e.target.value)}
        />
        Длительность блока в минутах
      </label>

      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddScreenForm;
