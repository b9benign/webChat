import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import TabList from "../../tab-list/TabList";
import { TabListProperties } from "../../tab-list/TabListProperties";
import { loginMenuTabs } from "./loginMenuTabs";
import SignInForm from "../sign-in/SignInForm";
import SignUpForm from "../sign-up/SignUpForm";

export default function LoginMenu(): React.JSX.Element {

    const { loginWrapper, tabListWrapper, menuSpacer, formWrapper } = useStyles();
    const [activeTab, setActiveTab] = React.useState<TabListProperties["selectedValue"]>(Array.from(loginMenuTabs.keys())[0]);

    return (
        <div className={menuSpacer}>
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
                <div className={formWrapper}>
                    {activeTab === "signIn" && <SignInForm />}
                    {activeTab === "signUp" && <SignUpForm />}
                </div>
            </div>
        </div>

    )
}

const useStyles = makeStyles({
    loginWrapper: {
        background: tokens.colorNeutralBackground2Pressed,
        minHeight: "100%",
        minWidth: "100%",
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow16,
        padding: tokens.spacingHorizontalM
    },
    tabListWrapper: {
        marginBottom: tokens.spacingVerticalS
    },
    menuSpacer: {
        width: "100%",
        maxWidth: "500px",
        height: "400px",
        margin: `${tokens.spacingVerticalXXXL} auto 0 auto`
    },
    formWrapper: {
        height: "400px",
        marginTop: tokens.spacingVerticalXXL,
        background: tokens.colorNeutralBackgroundAlpha2,
        borderRadius: tokens.borderRadiusLarge,
        padding: "10px"
    }
})