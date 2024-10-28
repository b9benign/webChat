import React from "react";
import { toastContext, ToastContext } from "./ToastContext";

export default function useToastContext(): ToastContext {
    const context = React.useContext(toastContext);
    if (!context) throw new Error("87684dde-6f66-4f92-9b87-9e23822c9d56");
    return context;
}