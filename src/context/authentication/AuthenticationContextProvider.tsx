import React from "react";
import useFirebaseInitializer from "../../services/firebase/initializer/useFirebaseInitializer";
import { onAuthStateChanged } from "firebase/auth";
import { authenticationContext } from "./AuthenticationContext";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreUser } from "../../services/firebase/utility/FirestoreUser";

export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

	const { firebase } = useFirebaseInitializer();
	const { getUserDocument } = useFirebaseFunctions();
	const [user, setUserCredentials] = React.useState<FirestoreUser | null>(null);

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebase, async (_user) => {
			if (!_user) return setUserCredentials(null);
			const result = await getUserDocument({ uid: _user.uid });
			if (result) setUserCredentials(result);
		});
		return unsubscribe;
	}, [firebase]);

	const value = {
		user
	};

	return (
		<authenticationContext.Provider value={value}>
			{properties.children}
		</authenticationContext.Provider>
	)
}