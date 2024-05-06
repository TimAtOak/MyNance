import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Route, Switch } from "wouter";
import { Dashboard } from "../../pages/Dashboard";
import { Income } from "../../pages/Income/Income";
import { Sidebar } from "./Sidebar";
const useClasses = makeStyles({
  mainContainer: {
    height: "calc(100% - 52px)",
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding(tokens.spacingHorizontalL),
    ...shorthands.transition("all", "4s", "ease-in-out", "1s"),
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "max-content max-content 1fr",
    height: "calc(100vh - 52px)",
    position: "relative",
  },
});

export const Layout = () => {
  const { mainContainer, wrapper } = useClasses();

  return (
    <div className={wrapper}>
      <Sidebar />
      <main className={mainContainer}>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/income" component={Income} />
          <Route>This is rendered when nothing above has matched</Route>
        </Switch>
      </main>
    </div>
  );
};
