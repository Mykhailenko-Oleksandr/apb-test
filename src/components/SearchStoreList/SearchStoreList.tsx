import type { ResponseDecoderVin } from "../../services/api";
import css from "./SearchStoreList.module.css";

interface Props {
  store: ResponseDecoderVin[];
}

export default function SearchStoreList({ store }: Props) {
  return (
    <ul className={css.list}>
      {store.map((search, index) => {
        return (
          <li className={css.item} key={index}>
            <p className={css.text}>{search.SearchCriteria}</p>
          </li>
        );
      })}
    </ul>
  );
}
