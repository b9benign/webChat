import { TabListProps } from "@fluentui/react-components"
import { TabListTabProperties } from "./tab/TabListTabProperties"

export type TabListProperties = {
    onTabSelect(value: TabListProperties["selectedValue"]): void,
    selectedValue: string,
    spreadTabs?: boolean,
    tabs: Map<TabListTabProperties["value"], TabListTabProperties>
} & Pick<TabListProps,
    "vertical"
    | "size"
    | "appearance"
>