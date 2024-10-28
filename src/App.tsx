import React from "react";
import AuthenticationContextProvider from "./context/authentication/AuthenticationContextProvider";
import ThemeContextProvider from "./context/theme/ThemeContextProvider";
import ToastContextProvider from "./context/toast/ToastContextProvider";
import Router from "./router/Router";

export default function App(): React.JSX.Element {

	return (
		<ThemeContextProvider>
			<ToastContextProvider>
				<AuthenticationContextProvider>
					<Router />
				</AuthenticationContextProvider>
			</ToastContextProvider>
		</ThemeContextProvider>
	)
}

