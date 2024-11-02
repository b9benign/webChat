import { makeStyles, tokens } from "@fluentui/react-components";

export default function LoginForm(): React.JSX.Element {

    const { loginWrapper } = useStyles();

    return (
        <div className={loginWrapper}>
            
        </div>
    )
}

const useStyles = makeStyles({
    loginWrapper: {
        background: tokens.colorNeutralBackground1,
        minHeight: "100%",
        minWidth: "100%",
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow16,
        padding: tokens.spacingHorizontalM
    }
})