import css from "./HomePage.module.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchInput/SearchForm";
import type { ResponseDecoderVin } from "../../services/api";
import VariablesList from "../../components/VariablesList/VariablesList";
import { useSearchStore } from "../../services/storeSearch";
import SearchStoreList from "../../components/SearchStoreList/SearchStoreList";

export default function HomePage() {
  const [resultSearch, setResultSearch] = useState<ResponseDecoderVin | null>(
    null,
  );
  const searchStore = useSearchStore((state) => state.searchStore);

  console.log(resultSearch);

  const visibleVariables = resultSearch?.Results.slice(
    5,
    resultSearch.Results.length,
  ).filter((variable) => variable.Value !== null);

  return (
    <>
      <Header />

      <section className={css.section}>
        <SearchForm setResult={(result) => setResultSearch(result)} />

        {searchStore.length > 0 && (
          <>
            <h2 className={css.title}>History</h2>
            <SearchStoreList store={searchStore} />
          </>
        )}

        {resultSearch && (
          <>
            <h3 className={css.title}>{resultSearch.SearchCriteria}</h3>

            {visibleVariables && visibleVariables.length > 0 && (
              <VariablesList variables={visibleVariables} />
            )}
          </>
        )}
      </section>
    </>
  );
}
