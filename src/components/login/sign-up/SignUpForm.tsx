import { Button } from "@fluentui/react-components";
import Input from "../../input/Input";
import { useLoginStyles } from "../useLoginStyles";
import useToastContext from "../../../context/toast/useToastContext";
import React from "react";

export default function SignUpForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useLoginStyles();
    const { dispatchInfo } = useToastContext();

    const [formState, setFormState] = React.useState<{ email: string, password: string, username: string, confirmPassword: string }>({ email: "", password: "", confirmPassword: "", username: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //signUpWithEmailAndPassword
        //validate confirmPassword
        //refactor <Button />; stop relying on Fluent-native Button + disabled flag
        //give Inputs "required" flag and validation message
        //improve formState types
        //cleanup forms
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    return (
        <div className={componentWrapper}>

            <form onSubmit={handleSubmit}>
                <div className={formInputWrapper}>
                    <Input
                        appearance="underline"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={formState.username}
                    />
                    <Input
                        appearance="underline"
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formState.password}
                    />
                    <Input
                        appearance="underline"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formState.password}
                    />
                    <Input
                        appearance="underline"
                        placeholder="Confirm password"
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={formState.password}
                    />
                    <div className={buttonWrapper}>
                        <Button
                            appearance="primary"
                            onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}
                            className={buttonStyles}
                        >
                            Sign up
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}