import React from "react";
import Page from "../../components/page/Page";
import { makeStyles, tokens } from "@fluentui/react-components";
import LoginMenu from "../../components/login/menu/LoginMenu";

export default function LoginPage(): React.JSX.Element {

	const { menuSpacer } = useStyles();

	return (
		<Page documentTitle="Welcome">
			<div className={menuSpacer}>
				<LoginMenu />
			</div>
		</Page>
	);
}

const useStyles = makeStyles({
	menuSpacer: {
		width: "100%",
		maxWidth: "500px",
		height: "400px",
		margin: `${tokens.spacingVerticalXXXL} auto 0 auto`
	}
})
