import styles from "../public/styles/App/App.module.css";
import { AppRouter } from "./Router/Layout/LayoutAppRouter";

function App() {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
}

export default App;
