import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className={css.app}>
      <header></header>
      <Toaster />
    </div>
  );
}
