import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";
import Router from "./router/Router";

export default function App(): React.JSX.Element {

	return (
		<ThemeContextProvider>
			<AuthenticationContextProvider>
				<Router />
			</AuthenticationContextProvider>
		</ThemeContextProvider>
	)
}

