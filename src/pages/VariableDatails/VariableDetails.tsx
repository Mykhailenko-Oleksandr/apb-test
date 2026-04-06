import css from "./VariableDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { getInfoVariables } from "../../services/api";
import { useParams } from "react-router-dom";

export default function VariableDetails() {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["allVariables"],
    queryFn: () => getInfoVariables(),
  });

  const currentVariable = data
    ? data.find((variable) => String(variable.ID) === id)
    : null;

  if (isLoading) <Loader />;

  return (
    <section className={css.section}>
      {currentVariable && (
        <>
          <h2 className={css.title}>{currentVariable.Name}</h2>
          <p className={css.infoText}>
            GroupName: <span>{currentVariable.GroupName}</span>
          </p>
          <p className={css.infoText}>
            Description:{" "}
            <span>{currentVariable.Description.replace(/<\/?p>/g, "")}</span>
          </p>
        </>
      )}

      {!currentVariable && (
        <p className={css.textMassage}>Variable not found</p>
      )}
      {isError && <p className={css.textMassage}>Something went wrong</p>}
    </section>
  );
}
