import { type ResponseDecoderVin } from "../../services/api";
import css from "./SearchStoreList.module.css";

interface Props {
  store: ResponseDecoderVin[];
  setResult: (result: ResponseDecoderVin) => void;
}

export default function SearchStoreList({ store, setResult }: Props) {
  return (
    <ul className={css.list}>
      {store.map((search, index) => {
        return (
          <li className={css.item} key={index}>
            <button
              type="button"
              className={css.btn}
              onClick={() => setResult(search)}
            >
              {search.SearchCriteria}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
