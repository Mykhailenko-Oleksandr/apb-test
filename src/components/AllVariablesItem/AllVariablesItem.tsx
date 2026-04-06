import { Link } from "react-router-dom";
import type { VariablesInfo } from "../../types/variablesInfo";
import css from "./AllVariablesItem.module.css";

interface Props {
  variable: VariablesInfo;
}

export default function AllVariablesItem({ variable }: Props) {
  return (
    <li className={css.item}>
      <Link to={`/variables/${variable.ID}`} className={css.link}>
        {variable.Name}
      </Link>
    </li>
  );
}
