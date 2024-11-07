import React from "react";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Button from "../../button/Button";
import Input from "../../input/Input";
import emailValidationRegex from "../emailValidationRegex";
import { useLoginStyles } from "../useLoginStyles";
import { signInFormInputMap } from "./signInFormInputMap";
import { SignInFormInputName } from "./SignInFormInputName";
import signInFormInputNameValues from "./signInFormInputNameValues";

export default function SignInForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useLoginStyles();
    const { signInWithGooglePopup, signInWithEmailAndPassword } = useFirebaseFunctions();

    const [formState, setFormState] = React.useState({ email: "", password: "" });
    const [validationState, setValidationState] = React.useState({ email: "", password: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword({ ...formState });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
        validateInput(event);
    }

    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValidationState({ ...validationState, [name]: "" });
        switch (name as SignInFormInputName) {
            case "email":
                if ((!emailValidationRegex.test(value.trim()))) setValidationState({ ...validationState, email: "Invalid email format [you@example.com]." });
                return;
            case "password":
                if (value.trim().length <= 5) setValidationState({ ...validationState, password: "Passwords should be a minimum of 6 characters." });
                return;
            default: return;
        }
    }

    const formSubmittable = React.useMemo<boolean>(() => {
        for (const input of signInFormInputNameValues) {
            if ((formState[input].trim().length <= 0) || (validationState[input].trim().length >= 1)) return false;
        }
        return true;
    }, [validationState, formState]);

    return (
        <div className={componentWrapper}>

            <form onSubmit={handleSubmit}>
                <div className={formInputWrapper}>
                    {
                        Array.from(signInFormInputMap.values()).map((individualProps, index) => {
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
                        <Button
                            appearance="outline"
                            className={buttonStyles}
                            disabled={!formSubmittable}
                            isSubmitButton
                        >
                            Sign in
                        </Button>
                        <Button
                            appearance="primary"
                            className={buttonStyles}
                            onClick={() => signInWithGooglePopup()}
                        >
                            Google
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}