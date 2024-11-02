import { Toast as FluentToast, Link, ToastBody, ToastTitle, ToastTrigger } from "@fluentui/react-components";
import { ToastProperties } from "./ToastProperties";

export default function Toast(properties: ToastProperties): React.JSX.Element {

    return (
        <FluentToast>
            <ToastTitle
                action={
                    <ToastTrigger>
                        <Link>Dismiss</Link>
                    </ToastTrigger>
                }>
                {properties.title}
            </ToastTitle>
            <ToastBody>{properties.primaryContent}</ToastBody>
        </FluentToast>
    )
}