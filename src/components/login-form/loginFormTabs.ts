import { TabListProperties } from "../tab-list/TabListProperties";

export const loginFormTabs = new Map([
    ["signIn", { value: "signIn", content: "Sign in"}],
    ["signUp", { value: "signUp", content: "Sign up"}],
]) satisfies TabListProperties["tabs"];