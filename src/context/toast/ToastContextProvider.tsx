import { Toaster, useId, useToastController } from "@fluentui/react-components";
import React from "react";
import { ToastContext, toastContext } from "./ToastContext";
import Toast from "../../components/toast/Toast";

export default function ToastContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const toasterId = useId("toaster");

    const { dispatchToast } = useToastController(toasterId);

    const dispatchError: ToastContext["dispatchError"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Error"} primaryContent={primaryContent} />, { intent: "error" });
    const dispatchInfo: ToastContext["dispatchInfo"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Info"} primaryContent={primaryContent} />, { intent: "info" });
    const dispatchSuccess: ToastContext["dispatchSuccess"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Success"} primaryContent={primaryContent} />, { intent: "success" });
    const dispatchWarning: ToastContext["dispatchWarning"] = ({ primaryContent, title }) => dispatchToast(<Toast title={title ?? "Warning"} primaryContent={primaryContent} />, { intent: "warning" });

    const value = {
        dispatchError,
        dispatchInfo,
        dispatchWarning,
        dispatchSuccess,
    };

    return (
        <toastContext.Provider value={value}>
            <Toaster
                toasterId={toasterId}
                position="bottom-end"
                pauseOnHover
                pauseOnWindowBlur
                timeout={2000}
                limit={3}
            />
            {properties.children}
        </toastContext.Provider>
    )
}