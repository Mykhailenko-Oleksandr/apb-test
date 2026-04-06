import type { VariablesInfo } from "../../types/variablesInfo";
import AllVariablesItem from "../AllVariablesItem/AllVariablesItem";
import css from "./AllVariablesList.module.css";

interface Props {
  variables: VariablesInfo[];
}

export default function AllVariablesList({ variables }: Props) {
  const sortVariables = variables
    .slice()
    .sort((a, b) => a.Name.localeCompare(b.Name));

  return (
    <ul className={css.list}>
      {sortVariables.map((variable) => {
        return <AllVariablesItem variable={variable} key={variable.ID} />;
      })}
    </ul>
  );
}
