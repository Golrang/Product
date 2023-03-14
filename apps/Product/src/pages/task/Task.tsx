import { ConfirmationDocuments } from "./containers/confirmation-documents";
import { HistoryOfActions } from "./containers/history-of-actions";

export const Task = () => {
  return (
    <>
      <HistoryOfActions />
      <ConfirmationDocuments />
    </>
  );
};
