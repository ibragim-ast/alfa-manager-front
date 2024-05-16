import { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ name, password });
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <label htmlFor="name" className={styles.visuallyHidden}>
        Почта
      </label>
      <input
        type="text"
        placeholder="Введите имя"
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password" className="visually-hidden">
        Пароль
      </label>
      <input
        type="password"
        placeholder="Введите пароль"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="authorized" className="agree">
        <input type="checkbox" id="authorized" /> Запомнить меня
      </label>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;
