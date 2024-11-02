import React from "react"
import { ToastProperties } from "../../components/toast/ToastProperties";

type DispatchToastFunction = (args: { primaryContent: ToastProperties["primaryContent"], title: ToastProperties["title"] }) => void

export type ToastContext = {
    dispatchError: DispatchToastFunction,
    dispatchInfo: DispatchToastFunction,
    dispatchSuccess: DispatchToastFunction,
    dispatchWarning: DispatchToastFunction,
}

export const toastContext = React.createContext<ToastContext | null>(null);

