import { InputProperties } from "../../input/InputProperties";
import { SignInFormInputName } from "./SignInFormInputName";

export const signInFormInputMap = new Map<SignInFormInputName, Required<Pick<InputProperties, "contentBefore" | "placeholder" | "type">> & { name: SignInFormInputName }>([
    ["email", { contentBefore: null, name: "email", placeholder: "Email", type: "email" }],
    ["password", { contentBefore: null, name: "password", placeholder: "Password", type: "password" }],
]);