import React from "react";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Input from "../../input/Input";
import { useLoginStyles } from "../useLoginStyles";
import Button from "../../button/Button";
import { signInFormInputMap } from "./signInFormInputMap";
import emailValidationRegex from "../emailValidationRegex";
import { SignInFormInputName } from "./SignInFormInputName";

export default function SignInForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useLoginStyles();
    const { signInWithGooglePopup } = useFirebaseFunctions();
    const { dispatchInfo } = useToastContext();

    const [formState, setFormState] = React.useState<{ email: string, password: string }>({ email: "", password: "" });
    const [validationState, setValidationState] = React.useState({ email: "", password: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //signInWithEmailAndPassword()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValidationState({ ...validationState, [name]: "" });
        switch (name as SignInFormInputName) {
            case "email":
                if ((!emailValidationRegex.test(value.trim()))) setValidationState({ ...validationState, email: "Invalid email format [you@example.com]." });
                return;
            case "password":
                if (value.trim().length <= 7) setValidationState({ ...validationState, password: "Passwords should be a minimum of 8 characters." });
                return;
            default: return;
        }
    }

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
                            onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}
                            className={buttonStyles}
                        >
                            Sign in
                        </Button>
                        <Button
                            className={buttonStyles}
                            onClick={() => signInWithGooglePopup()}
                            appearance="primary"
                        >
                            Google
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}