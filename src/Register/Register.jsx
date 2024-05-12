import { useState } from "react";
import styles from "./Register.module.css";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister({ name, password, role });
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleRegister}>
      <label htmlFor="name" className={styles.visuallyHidden}>
        Почта
      </label>
      <input
        type="name"
        placeholder="Введите имя"
        id="name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="password" className="visually-hidden">
        Пароль
      </label>
      <input
        autoComplete="current-password"
        type="password"
        placeholder="********"
        id="password"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <select name="role" value={role} onChange={handleRoleChange}>
        <option value="manager">Менеджер</option>
        <option value="engineer">Инженер</option>
        <option value="director">Директор</option>
        <option value="admin">Администратор</option>
      </select>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
