import {
  makeStyles,
  Menu,
  MenuItem,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowExit20Regular,
  Person20Regular,
  Settings32Regular,
} from "@fluentui/react-icons";
import React from "react";
import useAuthenticationContext from "../../../context/authentication/useAuthenticationContext";
import { ThemeValue, themeValue } from "../../../context/theme/ThemeValue";
import { brandVariantValues } from "../../../context/theme/brandVariantValues";
import useThemeContext from "../../../context/theme/useThemeContext";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Persona from "../../persona/Persona";

export default function UserMenu(): React.JSX.Element {
  const { userCredentials } = useAuthenticationContext();
  const { signOut } = useFirebaseFunctions();
  const { dispatchInfo } = useToastContext();
  const { gearStyles } = useStyles();
  const { setMode, setTheme, mode } = useThemeContext();

  const getCheckedState = React.useCallback<(_mode: ThemeValue) => boolean>(
    (_mode: ThemeValue) => {
      return mode === _mode;
    },
    [mode]
  );

  console.log("", mode);

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <div>
          {userCredentials ? (
            <Persona
              name={userCredentials.displayName ?? undefined}
              secondaryText="Available"
              presence={{ status: "available" }}
              textPosition="before"
              photoUrl={userCredentials.photoURL}
            />
          ) : (
            <Settings32Regular
              color={tokens.colorNeutralForeground2}
              className={gearStyles}
            />
          )}
        </div>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {userCredentials ? (
            <MenuItem
              icon={<Person20Regular />}
              onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}
            >
              Profile
            </MenuItem>
          ) : null}
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuItem>Mode</MenuItem>
            </MenuTrigger>
            <MenuPopover>
              <MenuList checkedValues={{ theme: [mode] }}>
                {themeValue.map((_mode, index) => {
                  return (
                    <MenuItemRadio
                      name="theme"
                      value={_mode}
                      key={index}
                      persistOnClick
                      onClick={() => setMode(_mode)}
                    >
                      {_mode}
                    </MenuItemRadio>
                  );
                })}
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuItem>Theme</MenuItem>
            </MenuTrigger>
            <MenuPopover>
              {/* <MenuList checkedValues={{ "theme": [theme] }}> */}
                {brandVariantValues.map((variant, index) => {
                  return (
                    <MenuItemRadio
                      name="theme"
                      value={variant}
                      key={index}
                      onClick={() => setTheme(variant)}
                      persistOnClick
                    >
                      {variant}
                    </MenuItemRadio>
                  );
                })}
              {/* </MenuList> */}
            </MenuPopover>
          </Menu>

          {userCredentials ? (
            <MenuItem icon={<ArrowExit20Regular />} onClick={() => signOut()}>
              Sign out
            </MenuItem>
          ) : null}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

const useStyles = makeStyles({
  gearStyles: {
    marginTop: tokens.spacingVerticalXXS,
    cursor: "pointer",
  },
});
