import { makeStyles, Title1, tokens } from "@fluentui/react-components";
import React from "react";
import TabList from "../tab-list/TabList";
import { TabListProperties } from "../tab-list/TabListProperties";
import { loginFormTabs } from "./loginFormTabs";

export default function LoginForm(): React.JSX.Element {

    const { loginWrapper, tabListWrapper } = useStyles();
    const [activeTab, setActiveTab] = React.useState<TabListProperties["selectedValue"]>(Array.from(loginFormTabs.keys())[0]);

    return (
        <React.Fragment>
            <div className={loginWrapper}>
                <div className={tabListWrapper}>
                    <TabList
                        tabs={loginFormTabs}
                        onTabSelect={(value) => setActiveTab(value)}
                        selectedValue={activeTab}
                        size="large"
                        spreadTabs
                        appearance="transparent"
                    />
                </div>
                {activeTab === "signIn" && <p>sign in</p>}
                {activeTab === "signUp" && <p>sign up</p>}
            </div>
        </React.Fragment>

    )
}

const useStyles = makeStyles({
    loginWrapper: {
        background: tokens.colorNeutralBackground1,
        minHeight: "100%",
        minWidth: "100%",
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow16,
        padding: tokens.spacingHorizontalM
    },
    tabListWrapper: {
        marginBottom: tokens.spacingVerticalS
    }
})