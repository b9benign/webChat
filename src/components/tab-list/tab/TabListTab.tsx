import { Tab } from "@fluentui/react-components";
import { TabListTabProperties } from "./TabListTabProperties";

export default function TabListTab(properties: TabListTabProperties): React.JSX.Element {
    return  <Tab {...properties} />;
}