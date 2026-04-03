import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchInput/SearchForm";
import type { ResponseDecoderVin } from "../../services/api";

export default function HomePage() {
  const [resultSearch, setResultSearch] = useState<ResponseDecoderVin | null>(
    null,
  );

  return (
    <>
      <Header />
      <SearchForm setResult={(result) => setResultSearch(result)} />
    </>
  );
}
