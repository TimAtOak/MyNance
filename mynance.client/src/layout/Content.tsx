import { makeStyles, shorthands, tokens } from "@fluentui/react-components"

const useClasses = makeStyles({
    mainContainer: {
        height: "calc(100% - 52px)",
        backgroundColor: tokens.colorNeutralBackground1,
        ...shorthands.padding(tokens.spacingHorizontalL)
    }

});

export const Content = () => {
    const { mainContainer } = useClasses();

    return (
        <main className={mainContainer}>
            Main Content
        </main>
    )
}