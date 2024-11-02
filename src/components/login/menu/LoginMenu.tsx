import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import TabList from "../../tab-list/TabList";
import { TabListProperties } from "../../tab-list/TabListProperties";
import { loginMenuTabs } from "./loginMenuTabs";
import SignInForm from "../sign-in/SignInForm";
import SignUpForm from "../sign-up/SignUpForm";

export default function LoginMenu(): React.JSX.Element {

    const { loginWrapper, tabListWrapper } = useStyles();
    const [activeTab, setActiveTab] = React.useState<TabListProperties["selectedValue"]>(Array.from(loginMenuTabs.keys())[0]);

    return (
        <React.Fragment>
            <div className={loginWrapper}>
                <div className={tabListWrapper}>
                    <TabList
                        tabs={loginMenuTabs}
                        onTabSelect={(value) => setActiveTab(value)}
                        selectedValue={activeTab}
                        size="large"
                        spreadTabs
                        appearance="transparent"
                    />
                </div>
                {activeTab === "signIn" && <SignInForm />}
                {activeTab === "signUp" && <SignUpForm />}
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