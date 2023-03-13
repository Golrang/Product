import { HistoryOfActions } from "./containers/history-of-actions";
import { ConfirmationDocuments } from "./containers/confirmation-documents"

export const Task = () => {
    return (
        <>
            <HistoryOfActions />
            <ConfirmationDocuments />
        </>
    )
}