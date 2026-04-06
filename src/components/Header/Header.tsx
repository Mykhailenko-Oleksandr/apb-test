import { Link, useLocation } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const location = useLocation();

  return (
    <header className={css.header}>
      <Link
        to="/"
        className={clsx(css.link, location.pathname === "/" && css.currentPage)}
      >
        Main
      </Link>
      <Link
        to="/variables"
        className={clsx(
          css.link,
          location.pathname === "/variables" && css.currentPage,
        )}
      >
        Variables
      </Link>
    </header>
  );
}
