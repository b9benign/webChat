import React from "react";
import Page from "../../components/page/Page";
import { makeStyles, tokens } from "@fluentui/react-components";
import LoginForm from "../../components/login-form/LoginForm";

export default function LoginPage(): React.JSX.Element {

	const { formSpacer } = useStyles();

	return (
		<Page documentTitle="Welcome">
			<div className={formSpacer}>
				<LoginForm />
			</div>
		</Page>
	);
}

const useStyles = makeStyles({
	formSpacer: {
		width: "100%",
		maxWidth: "500px",
		height: "600px",
		margin: `${tokens.spacingVerticalXXXL} auto 0 auto`
	}
})
