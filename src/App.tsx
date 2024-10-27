import React from "react";
import ThemeContextProvider from "./context/theme-context/ThemeContextProvider";
import { tokens } from "@fluentui/react-components";

export default function App(): React.JSX.Element {

	return (
		<React.Fragment>
			<ThemeContextProvider>
				<h1
					style={{ color: tokens.colorBrandForeground1 }}
				>
					Guten Morgen liebe Sorgen
				</h1>
			</ThemeContextProvider>
		</React.Fragment>
	)
}

