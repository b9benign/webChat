import { Button } from "@fluentui/react-components";
import React from "react";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Input from "../../input/Input";
import { useLoginStyles } from "../useLoginStyles";

export default function SignInForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useLoginStyles();
    const { signInWithGooglePopup } = useFirebaseFunctions();
    const { dispatchInfo } = useToastContext();

    const [formState, setFormState] = React.useState<{ email: string, password: string }>({ email: "", password: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //signInWithEmailAndPassword()
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
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formState.email}
                    />
                    <Input
                        appearance="underline"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formState.password}
                    />
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