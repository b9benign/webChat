import { Button, makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Input from "../../input/Input";

export default function SignInForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useStyles();
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

const useStyles = makeStyles({
    componentWrapper: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px"
    },
    formInputWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingVerticalXXL
    },
    buttonStyles: {
        width: "48%"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})