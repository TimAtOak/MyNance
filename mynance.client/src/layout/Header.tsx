import { makeStyles, shorthands, tokens } from "@fluentui/react-components"

const useClasses = makeStyles({
    headerContainer: {
        color:tokens.colorNeutralForeground1,
        backgroundColor: tokens.colorBrandForeground1,
        ...shorthands.padding(tokens.spacingHorizontalL)
    }

});

export const Header = () => {

    const { headerContainer } = useClasses();

    return (
        <header className={headerContainer}>
            <div>Header</div>
        </header>
    )
}