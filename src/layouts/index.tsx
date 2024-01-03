import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul className={styles.nav}>
        <li>
          <Link to="/one">react基础</Link>
        </li>
        <li>
          <Link to="/todolist">案例1</Link>
        </li>
        <li>
          <Link to="/two">react进阶</Link>
        </li>
        <li>
          <Link to="/todolist2">案例2</Link>
        </li>
        <li>
          <Link to="/four">Antd案例3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
