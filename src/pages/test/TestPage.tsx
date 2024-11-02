import { Button } from "@fluentui/react-components";
import Page from "../../components/page/Page";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";

export default function TestPage(): React.JSX.Element {

    const { signOut } = useFirebaseFunctions();

    return (
        <Page
            documentTitle="Test"
        >
            <h1>TestPage</h1>
            <Button onClick={() => signOut()}>Logout</Button>
        </Page>
    )
}