import type { ItemInfoAuto } from "../../types/itemInfoAuto";
import VariablesItem from "../VariablesItem/VariablesItem";
import css from "./VariablesList.module.css";

interface Props {
  variables: ItemInfoAuto[];
}

export default function VariablesList({ variables }: Props) {
  return (
    <ul className={css.list}>
      {variables.map((variable) => {
        return <VariablesItem variable={variable} key={variable.VariableId} />;
      })}
    </ul>
  );
}
