import {ConfirmationDocuments} from "./containers/confirmation-documents";
import {HistoryOfActions} from "./containers/history-of-actions";
import {Prioritize} from "./containers/prioritize";

export const Task = () => {
  return (
    <>
      <Prioritize />
      <HistoryOfActions />
      <ConfirmationDocuments />
    </>
  );
};
