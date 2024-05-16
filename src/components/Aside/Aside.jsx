import { useState, useEffect } from "react";
import styles from "./Aside.module.css";

const Aside = ({ screens }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (screens.length > 0) {
      setIsLoading(false);
      console.log("screens", screens);
    }
  }, [screens]);
  return (
    <aside className={styles.aside}>
      <ul className={styles.asideNav}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          screens.map((screen) => (
            <li className={styles.asideNavItem} key={screen._id}>
              <button className="aside-nav-item">{screen.name}</button>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Aside;
