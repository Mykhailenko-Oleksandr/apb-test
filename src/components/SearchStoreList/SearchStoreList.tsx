import type { ResponseDecoderVin } from "../../services/api";
import css from "./SearchStoreList.module.css";

interface Props {
  store: ResponseDecoderVin[];
}

export default function SearchStoreList({ store }: Props) {
  return (
    <ul className={css.list}>
      {store.map((search) => {
        return (
          <li className={css.item}>
            <p className={css.text}>{search.SearchCriteria}</p>
          </li>
        );
      })}
    </ul>
  );
}
