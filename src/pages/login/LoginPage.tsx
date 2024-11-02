import React from "react";
import LoginMenu from "../../components/login/menu/LoginMenu";
import Page from "../../components/page/Page";

export default function LoginPage(): React.JSX.Element {

	return (
		<Page documentTitle="Welcome">
			<LoginMenu />
		</Page>
	);
}
