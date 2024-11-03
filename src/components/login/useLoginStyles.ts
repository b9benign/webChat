import { makeStyles, tokens } from "@fluentui/react-components";

export const useLoginStyles = makeStyles({
    componentWrapper: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px"
    },
    formInputWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingVerticalXXL
    },
    buttonStyles: {
        width: "48%"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
});