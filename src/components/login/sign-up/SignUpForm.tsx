import React from "react";
import Input from "../../input/Input";
import emailValidationRegex from "../emailValidationRegex";
import { useLoginStyles } from "../useLoginStyles";
import { signUpFormInputMap } from "./SignUpFormInputMap";
import { SignUpFormInputName } from "./SignUpFormInputName";
import { signUpFormInputNameValues } from "./signUpFormInputNameValues";
import Button from "../../button/Button";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";

export default function SignUpForm(): React.JSX.Element {

    const { signUpWithEmailAndPassword } = useFirebaseFunctions();
    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useLoginStyles();
    const [formState, setFormState] = React.useState({ email: "", password: "", confirmPassword: "", username: "" });
    const [validationState, setValidationState] = React.useState({ email: "", password: "", confirmPassword: "", username: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, username } = formState;
        signUpWithEmailAndPassword({ displayName: username, email, password });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormState((prev) => { return { ...prev, [name]: value } });
        validateInput(event);
    }

    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValidationState({ ...validationState, [name]: "" });
        switch (name as SignUpFormInputName) {
            case "confirmPassword":
                if (value !== formState.password) setValidationState({ ...validationState, confirmPassword: "Passwords do not match." });
                return;
            case "email":
                if ((!emailValidationRegex.test(value.trim()))) setValidationState({ ...validationState, email: "Invalid email format [you@example.com]." });
                return;
            case "password":
                if (value.trim().length <= 5) setValidationState({ ...validationState, password: "Passwords should be a minimum of 6 characters." });
                return;
            case "username":
                if (value.trim().length <= 3) setValidationState({ ...validationState, username: "Usernames should be a minimum of 4 characters." });
                return;
            default: return;
        }
    }

    const formSubmittable = React.useMemo<boolean>(() => {
        for (const input of signUpFormInputNameValues) {
            if ((formState[input].trim().length <= 0) || (validationState[input].trim().length >= 1)) return false;
        }
        return true;
    }, [validationState, formState]);

    return (
        <div className={componentWrapper}>
            <form onSubmit={handleSubmit}>
                <div className={formInputWrapper}>
                    {
                        Array.from(signUpFormInputMap.values()).map((individualProps, index) => {
                            return (
                                <Input
                                    {...individualProps}
                                    appearance="underline"
                                    key={index}
                                    onChange={handleChange}
                                    onBlur={validateInput}
                                    required
                                    validationMessage={validationState[individualProps.name]}
                                    value={formState[individualProps.name]}
                                />
                            )
                        })
                    }
                    <div className={buttonWrapper}>
                        <Button appearance="primary" className={buttonStyles} disabled={!formSubmittable} isSubmitButton>
                            Sign up
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}