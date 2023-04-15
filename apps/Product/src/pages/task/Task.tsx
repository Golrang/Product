import { allSteps } from "~/constant";
import { useTask } from "./hooks/useTask";
import { Prioritize } from "./containers/prioritize";
import { EvaluationStudies } from "./containers/evaluation-studies";
import Archive from "./containers/archive/Archive";
import { ModalLoading } from "~/components/modal-loading";
import { TableError } from "~/components/table-error";

export const Task = (id: number) => {
  const { suggestion, suggestionLoading, suggestionError } = useTask(id); //refactor

  if (suggestionLoading) return <ModalLoading />;
  if (suggestionError) return <TableError />;
  if (suggestion) {
    if (suggestion[0].CurrentStepId === allSteps.developmentExpert)
      return <Prioritize suggestion={suggestion[0]} />;

    if (suggestion[0].CurrentStepId === allSteps.evaluationStudies)
      return <EvaluationStudies />;

    if (suggestion[0].CurrentStepId === allSteps.developmentExpertHead)
      return <Archive />;
  } else return null;
};
