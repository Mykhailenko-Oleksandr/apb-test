import { useQuery } from "@tanstack/react-query";
import css from "./Variables.module.css";
import { getInfoVariables } from "../../services/api";
import AllVariablesList from "../../components/AllVariablesList/AllVariablesList";
import Loader from "../../components/Loader/Loader";

export default function Variables() {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["allVariables"],
    queryFn: () => getInfoVariables(),
  });

  return (
    <section className={css.section}>
      <h2 className={css.title}>All Variables</h2>

      {isSuccess && data && data.length > 0 && (
        <AllVariablesList variables={data} />
      )}
      {isError && <p className={css.textMassage}>Something went wrong</p>}
      {isLoading && <Loader />}
    </section>
  );
}
