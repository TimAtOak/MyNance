import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Layout } from "./layout/Layout/Layout";
import { Header } from "./layout/Header";

const useClasses = makeStyles({
  appContainer: {
    height: "100%",
  },
});

function App() {
  const { appContainer } = useClasses();

  return (
    <div className={appContainer}>
      <Header />
      <Layout />
    </div>
  );
}

export default App;
