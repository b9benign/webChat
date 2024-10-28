import { Toaster, useId, useToastController } from "@fluentui/react-components";
import React from "react";
import { ToastContext, toastContext } from "./ToastContext";
import Toast from "../../components/toast/Toast";

export default function ToastContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const toasterId = useId("toaster");

    const { dispatchToast } = useToastController(toasterId);

    const dispatchError: ToastContext["dispatchError"] = ({ body }) => dispatchToast(<Toast title="Error" body={body} />, { intent: "error" });
    const dispatchInfo: ToastContext["dispatchInfo"] = ({ body }) => dispatchToast(<Toast title="Info" body={body} />, { intent: "info" });
    const dispatchSuccess: ToastContext["dispatchSuccess"] = ({ body }) => dispatchToast(<Toast title="Success" body={body} />, { intent: "success" });
    const dispatchWarning: ToastContext["dispatchWarning"] = ({ body }) => dispatchToast(<Toast title="Warning" body={body} />, { intent: "warning" });

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