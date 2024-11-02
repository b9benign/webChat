import { TabList as FluentTabList, makeStyles, mergeClasses } from "@fluentui/react-components";
import React from "react";
import TabListTab from "./tab/TabListTab";
import { TabListProperties } from "./TabListProperties";

export default function TabList(properties: TabListProperties): React.JSX.Element {

    const { listStyles, spreadStyles } = useStyles();

    const tabs = React.useMemo(() => {
        return Array.from(properties.tabs.values());
    }, [properties.tabs]);

    const activeTab = React.useMemo(() => properties.selectedValue, [properties.selectedValue]);

    return (
        <FluentTabList
            selectedValue={activeTab}
            vertical={properties.vertical ?? false}
            className={mergeClasses(listStyles, properties.spreadTabs ? spreadStyles : undefined)}
            size={properties.size}
            appearance={properties.appearance}
        >
            {
                tabs?.map((tab) => {
                    return (
                        <TabListTab
                            content={tab.content}
                            icon={tab.icon}
                            onClick={() => properties.onTabSelect(tab.value)}
                            value={tab.value}
                        />
                    )
                })
            }
        </FluentTabList>
    )
}

const useStyles = makeStyles({
    listStyles: {
        minWidth: "100%",
    },
    spreadStyles: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
})