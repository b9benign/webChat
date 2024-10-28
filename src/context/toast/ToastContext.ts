import React from "react"
import { ToastProperties } from "../../components/toast/ToastProperties";

type DispatchToastFunction = (args: { body: ToastProperties["body"] }) => void

export type ToastContext = {
    dispatchError: DispatchToastFunction,
    dispatchInfo: DispatchToastFunction,
    dispatchSuccess: DispatchToastFunction,
    dispatchWarning: DispatchToastFunction,
}

export const toastContext = React.createContext<ToastContext | null>(null);

