import { useState, useEffect } from "react";
import styles from "./AddAdvertisementForm.module.css";

const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const AddAdvertisementForm = ({ screens, addAdvertisement }) => {
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  const [duration, setDuration] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(
    formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))
  );
  const [isActive, setIsActive] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [screenId, setScreenId] = useState();

  useEffect(() => {
    const newEndDate = new Date(startDate);
    newEndDate.setDate(newEndDate.getDate() + 1);
    setEndDate(formatDate(newEndDate));
  }, [startDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addAdvertisement({
      name,
      customer,
      duration,
      discount,
      startDate,
      endDate,
      isActive,
      isFree,
      screenId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название рекламы"
      />
      <input
        type="text"
        required
        name="customer"
        value={customer}
        placeholder="Клиент"
        onChange={(e) => setCustomer(e.target.value)}
      />
      <input
        type="number"
        name="duration"
        required
        value={duration}
        placeholder="Длительность"
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <input
        type="number"
        name="discount"
        required
        value={discount}
        placeholder="Скидка"
        onChange={(e) => setDiscount(Number(e.target.value))}
      />
      <input
        type="date"
        name="startDate"
        required
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        name="endDate"
        required
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label>
        <input
          className={styles.visuallyHidden}
          type="checkbox"
          name="isActive"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <span></span>
        Активно
      </label>

      <label>
        <input
          className={styles.visuallyHidden}
          type="checkbox"
          name="isFree"
          checked={isFree}
          onChange={(e) => setIsFree(e.target.checked)}
        />
        <span></span>
        Бесплатно
      </label>
      <fieldset>
        <select
          name="screen"
          value={screenId}
          onChange={(e) => setScreenId(e.target.value)}
          required
        >
          <option value="" disabled>
            Выберите экран
          </option>
          {screens.map((screen) => (
            <option key={screen._id} value={screen._id}>
              {screen.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddAdvertisementForm;
