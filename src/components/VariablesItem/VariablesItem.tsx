import type { ItemInfoAuto } from "../../types/itemInfoAuto";
import css from "./VariablesItem.module.css";

interface Props {
  variable: ItemInfoAuto;
}

export default function VariablesItem({ variable }: Props) {
  return (
    <li className={css.item}>
      <p>sdfsdf</p>
    </li>
  );
}
