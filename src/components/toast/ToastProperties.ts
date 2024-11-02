import { ToastProps as FluentToastProperties } from "@fluentui/react-components"

export type ToastProperties = {
    primaryContent: FluentToastProperties["content"],
    title: FluentToastProperties["title"],
}