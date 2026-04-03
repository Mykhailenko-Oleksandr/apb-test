import css from "./HomePage.module.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchInput/SearchForm";
import type { ResponseDecoderVin } from "../../services/api";
import VariablesList from "../../components/VariablesList/VariablesList";

export default function HomePage() {
  const [resultSearch, setResultSearch] = useState<ResponseDecoderVin | null>(
    null,
  );
  console.log(resultSearch);

  const visibleVariables = resultSearch?.Results.slice(
    6,
    resultSearch.Results.length,
  ).filter((variable) => variable.Value !== null);

  return (
    <>
      <Header />

      <section className={css.section}>
        <SearchForm setResult={(result) => setResultSearch(result)} />

        {resultSearch && (
          <>
            <h2 className={css.titleVin}>{resultSearch.SearchCriteria}</h2>

            {visibleVariables && visibleVariables.length > 0 && (
              <VariablesList variables={visibleVariables} />
            )}
          </>
        )}
      </section>
    </>
  );
}
