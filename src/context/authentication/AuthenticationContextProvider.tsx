import React from "react";
import useFirebaseInitializer from "../../services/firebase/initializer/useFirebaseInitializer";
import { onAuthStateChanged, User } from "firebase/auth";
import { authenticationContext } from "./AuthenticationContext";

export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

	const { firebase } = useFirebaseInitializer();
	const [userCredentials, setUserCredentials] = React.useState<User | null>(null);

	React.useEffect(() => {
		const unsubscribe = () => {
			return onAuthStateChanged(firebase, (userCredentials) => {
				if (userCredentials) setUserCredentials(userCredentials);
			});
		}
		unsubscribe();
	}, [userCredentials, firebase]);

	const value = {
		userCredentials
	};

	return (
		<authenticationContext.Provider value={value}>
			{properties.children}
		</authenticationContext.Provider>
	)
}