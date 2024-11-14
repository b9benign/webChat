import { makeStyles, Menu, MenuDivider, MenuItem, MenuItemRadio, MenuList, MenuPopover, MenuTrigger, tokens, Tooltip } from "@fluentui/react-components";
import { ArrowExit20Regular, Color20Regular, Lightbulb20Regular, Person20Regular, Settings32Regular } from "@fluentui/react-icons";
import React from "react";
import useAuthenticationContext from "../../../context/authentication/useAuthenticationContext";
import { ThemeModeValue, themeModeValues } from "../../../context/theme/ThemeModeValue";
import { BrandVariantValue, brandVariantValues } from "../../../context/theme/brandVariantValues";
import useThemeContext from "../../../context/theme/useThemeContext";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Button from "../../button/Button";
import Persona from "../../persona/Persona";

export default function UserMenu(): React.JSX.Element {

	const { user: userCredentials } = useAuthenticationContext();
	const { signOut } = useFirebaseFunctions();
	const { dispatchInfo } = useToastContext();
	const { gearStyles, personaStyles } = useStyles();
	const { setMode, setTheme, mode, theme } = useThemeContext();

	const getModeLabel = React.useCallback((mode: ThemeModeValue): string => {
		switch (mode) {
			case "dark": return "Dark";
			case "high-contrast": return "High contrast";
			case "light": return "Light";
		}
	}, []);

	const getVariantLabel = React.useCallback((variant: BrandVariantValue): string => {
		switch (variant) {
			case "blue": return "Blue";
			case "green": return "Green";
			case "orange": return "Orange";
			case "purple": return "Purple";
		}
	}, []);

	return (
			<Menu>
				<MenuTrigger disableButtonEnhancement>
					<Tooltip content="Settings" relationship="label">
						<div>
							{userCredentials
								? <Persona
									name={userCredentials.displayName ?? undefined}
									secondaryText="Available"
									presence={{ status: "available" }}
									textPosition="before"
									photoUrl={userCredentials.photoURL}
									className={personaStyles}
								/>
								: <Button
									className={gearStyles}
									appearance="subtle"
									icon={<Settings32Regular />}
									size="large"
								/>}
						</div>
					</Tooltip>

				</MenuTrigger>
				<MenuPopover>
					<MenuList>
						{userCredentials
							? <MenuItem
								icon={<Person20Regular />}
								onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}
							>
								Profile
							</MenuItem>
							: null}
						{userCredentials && <MenuDivider />}
						<Menu checkedValues={{ theme: [mode] }}>
							<MenuTrigger disableButtonEnhancement>
								<MenuItem icon={<Lightbulb20Regular />}>Mode</MenuItem>
							</MenuTrigger>
							<MenuPopover>
								<MenuList >
									{themeModeValues.map((_mode, index) => {
										return (
											<MenuItemRadio
												name="theme"
												value={_mode}
												key={index}
												persistOnClick
												onClick={() => setMode(_mode)}
											>
												{getModeLabel(_mode)}
											</MenuItemRadio>
										);
									})}
								</MenuList>
							</MenuPopover>
						</Menu>
						<Menu checkedValues={{ "theme": [theme] }}>
							<MenuTrigger disableButtonEnhancement>
								<MenuItem icon={<Color20Regular />}>Theme</MenuItem>
							</MenuTrigger>
							<MenuPopover>
								<MenuList>
									{brandVariantValues.map((variant, index) => {
										return (
											<MenuItemRadio
												name="theme"
												value={variant}
												key={index}
												onClick={() => setTheme(variant)}
												persistOnClick
											>
												{getVariantLabel(variant)}
											</MenuItemRadio>
										);
									})}
								</MenuList>
							</MenuPopover>
						</Menu>
						{userCredentials && <MenuDivider />}
						{userCredentials
							? <MenuItem icon={<ArrowExit20Regular />} onClick={() => signOut()}>
								Sign out
							</MenuItem>
							: null}
					</MenuList>
				</MenuPopover>
			</Menu>

	);
}

const useStyles = makeStyles({
	gearStyles: {
		marginTop: tokens.spacingVerticalXXS,
		cursor: "pointer",
		marginBottom: "2px"

	},
	personaStyles: { 
		margin: "3px 8px 0 0"
	}
});
