import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";

const useClasses = makeStyles({
    appContainer: {
        height: "100%",
        backgroundColor: tokens.colorBrandBackground,
    }

});

function App() {
    const { appContainer } = useClasses();

    return (
        <div className={appContainer}>
            <Header />
            <Content />
        </div>
    );
}

export default App;