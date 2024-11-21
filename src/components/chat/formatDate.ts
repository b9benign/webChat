import { FirestoreMessage } from "../../services/firebase/utility/FirestoreMessage";

export default function formatDate(date: FirestoreMessage["createdAt"] | null): string | null {
    if (!date) return null;
    const formattedDate = date.toDate();
    return formattedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}