import styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={styles.form}>
      <label for="name" class={styles.visuallyHidden}>
        Почта
      </label>
      <input type="name" placeholder="Введите имя" id="name" required />
      <label for="password" class="visually-hidden">
        Пароль
      </label>
      <input type="password" placeholder="********" id="password" required />
      <label for="authorized" class="agree">
        <input type="checkbox" id="authorized" /> Запомнить меня
      </label>
      <button>Войти</button>
    </form>
  );
};

export default Login;
