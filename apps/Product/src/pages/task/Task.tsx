import { ConfirmationDocuments } from "./containers/confirmation-documents";
import { EditAndShowButton } from "./containers/edit-show-button";
import { HistoryOfActions } from "./containers/history-of-actions";

export const Task = () => {
  return (
    <>
      <HistoryOfActions />
      <ConfirmationDocuments />
      <EditAndShowButton />
    </>
  );
};
