import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.link}>
        Main
      </Link>
      <Link to="/variables" className={css.link}>
        Variables
      </Link>
    </header>
  );
}
