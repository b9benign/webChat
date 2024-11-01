import { signInWithPopup } from "firebase/auth";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import { FirebaseService } from "./FirebaseService";
import useToastContext from "../../context/toast/useToastContext";

export default function useFirebaseService(): FirebaseService {
  const { firebase, firestore, provider } = useFirebaseInitializer();
  const { dispatchError, dispatchSuccess } = useToastContext();

  async function signInWithGooglePopup() { //typisieren
    try {
      const result = await signInWithPopup(firebase, provider);
      console.log("RESULT: ", result);
      dispatchSuccess({ body: `Signed in as ${result.user.displayName}` });
    } catch (e: any) {
      console.log(e, "155dfa48-6339-47e0-96f7-f28205a3a866");
      dispatchError({ body: "shits gone wrong yo" });
    }
  } 

  return {
    signInWithGooglePopup,
  };
}
