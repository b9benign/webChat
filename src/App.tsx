import React from "react";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import ApplicationContentWrapper from "./components/application-content-wrapper/ApplicationContentWrapper";
import Page from "./components/page/Page";

export default function App(): React.JSX.Element {

	return (
		<ThemeContextProvider>
			<AuthenticationContextProvider>
				<ApplicationContentWrapper>
					<Page documentTitle="Example">
						page
					</Page>
				</ApplicationContentWrapper>
			</AuthenticationContextProvider>
		</ThemeContextProvider>
	)
}

