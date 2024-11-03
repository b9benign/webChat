import { InputProperties } from "../../input/InputProperties";
import { SignUpFormInputName } from "./SignUpFormInputName";

export const signUpFormInputMap = new Map<SignUpFormInputName, Required<Pick<InputProperties, "contentBefore" | "placeholder" | "type">> & { name: SignUpFormInputName }>([
    ["email", { contentBefore: null, name: "email", placeholder: "Email", type: "email" }],
    ["username", { contentBefore: null, name: "username", placeholder: "Username", type: "text" }],
    ["password", { contentBefore: null, name: "password", placeholder: "Password", type: "password" }],
    ["confirmPassword", { contentBefore: null, name: "confirmPassword", placeholder: "Confirm password", type: "password" }],
]);