import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";

import styles from "./Layout.module.css";

const Layout = ({ screens }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutContent}>
        <Aside screens={screens} />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
