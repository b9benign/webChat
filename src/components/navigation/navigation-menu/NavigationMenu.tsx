import { makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import { Hamburger, NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem } from "@fluentui/react-nav-preview";
import React from "react";

export default function NavigationMenu(): React.JSX.Element {

    const { navWrapper } = useStyles();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <Hamburger onClick={() => setIsOpen(!isOpen)} appearance="subtle" size="large"/>
            <div className={navWrapper}>
                <NavDrawer
                    open={isOpen}
                    type="overlay"
                    multiple={false}
                >
                    <NavDrawerHeader>
                        <NavHeader onClick={() => setIsOpen(!isOpen)} />
                    </NavDrawerHeader>

                    <NavDrawerBody>
                        <NavItem value="1">Test</NavItem>
                        <NavItem value="2">Test</NavItem>
                        <NavItem value="3">Test</NavItem>

                    </NavDrawerBody>

                </NavDrawer>
            </div>
        </React.Fragment>


    )
}



//The following functions bear no functional advantages,
//their only purpose is to provide structural clarity

const NavHeader = ({ onClick }: { onClick(): void }): React.JSX.Element => {
    return (
        <Tooltip content="Navigation" relationship="label">
                <Hamburger onClick={onClick} />
        </Tooltip>
    );
}

const useStyles = makeStyles({
    navWrapper: {
        overflow: "hidden",
        display: "flex",
        height: "600px",
    },
    content: {
        flex: "1",
        padding: "16px",
        display: "grid",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    field: {
        display: "flex",
        marginTop: "4px",
        marginLeft: "8px",
        flexDirection: "column",
        gridRowGap: tokens.spacingVerticalS,
    },
});