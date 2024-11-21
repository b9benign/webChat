import { makeStyles, MenuDivider, tokens, Tooltip } from "@fluentui/react-components";
import { Add20Regular, Code20Regular, Home20Regular, Info20Regular, Table20Regular } from "@fluentui/react-icons";
import { Hamburger, NavCategory, NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem, NavSectionHeader } from "@fluentui/react-nav-preview";
import React from "react";
import { useNavigate } from "react-router-dom";
import useToastContext from "../../../context/toast/useToastContext";
import generateChatsOverviewRoutePath from "../../../router/chat/generate-functions/generateChatsOverviewRoutePath";

export default function NavigationMenu(): React.JSX.Element {

    const { navWrapper, bodyStyles } = useStyles();
    const { dispatchInfo } = useToastContext();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Hamburger onClick={() => setIsOpen(!isOpen)} appearance="subtle" size="large" />
            <div className={navWrapper}>
                <NavDrawer
                    open={isOpen}
                    type="overlay"
                    multiple={false}
                >
                    <NavDrawerHeader>
                        <NavHeader onClick={() => setIsOpen(!isOpen)} />
                    </NavDrawerHeader>

                    <NavDrawerBody className={bodyStyles}>
                        <div>
                            <NavItem value="home" onClick={() => navigate("/")} icon={<Home20Regular />}>Home</NavItem>
                            <NavSectionHeader>Chats</NavSectionHeader>
                            <NavCategory value="chats">
                                <NavItem value="overview" onClick={() => navigate(generateChatsOverviewRoutePath())} icon={<Table20Regular />}>Overview</NavItem>
                                <NavItem value="groups" onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })} icon={<Add20Regular />}>Create</NavItem>
                            </NavCategory>
                        </div>
                        <div>
                            <MenuDivider />
                            <NavCategory value="external">
                                <NavItem value="about" icon={<Info20Regular />} onClick={() => navigate("/about")}>About</NavItem>
                                <NavItem value="external" icon={<Code20Regular />} href="https://github.com/b9benign/webChat" target="_blank">Repository</NavItem>
                            </NavCategory>
                        </div>



                    </NavDrawerBody>

                </NavDrawer>
            </div>
        </React.Fragment>


    )
}


//The following functions bear no functional advantages,
//their only purpose is to provide structural clarity

const NavHeader = ({ onClick }: { onClick(): void }): React.JSX.Element => {
    const { hamburgerStyles } = useStyles();
    return (
        <Tooltip content="Navigation" relationship="label">
            <Hamburger onClick={onClick} className={hamburgerStyles} />
        </Tooltip>
    );
}

const useStyles = makeStyles({
    navWrapper: {
        overflow: "hidden",
        display: "flex",
        height: "600px",
    },
    bodyStyles: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: tokens.spacingVerticalS,
        paddingLeft: tokens.spacingVerticalM
    },
    hamburgerStyles: {
        margin: "5px 0 0 -6px"
    }
});