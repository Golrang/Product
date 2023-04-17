import { allSteps } from "~/constant";
import { ModalLoading } from "~/components/modal-loading";
import { TableError } from "~/components/table-error";
import { Prioritize } from "../prioritize";
import { EvaluationStudies } from "../evaluation-studies";
import Archive from "../archive/Archive";
import { useTask } from "../../hooks/useTask";
import { Col, Row } from "antd";
import { ViewProductSuggestion } from "../view-product-suggestion";
import { useState } from "react";
import { HistoryOfActions } from "../history-of-actions";
// import { ConfirmationDocuments } from "../confirmation-documents";
// import { CheckBox } from "sharepoint-golrang-design-system/src/components/checkbox";

const TaskContainer = ({ id }: { id: number }) => {
  const { suggestion, suggestionLoading, suggestionError } = useTask(id); //refactor
  const [checked] = useState(false);

  if (suggestionLoading) return <ModalLoading />;
  if (suggestionError) return <TableError />;
  return (
    <>
      {suggestion && (
        <>
          {/* <Row gutter={24} className="mb-5">
            <Col>
              <CheckBox
                name="showProductCheckbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
            </Col>
          </Row> */}
          <Row gutter={24} className="mb-5">
            <Col
              md={24}
              className={`${
                checked ? "opacity-100" : "opacity-0"
              } transition-opacity ease-in-out duration-500 `}
            >
              {checked && <ViewProductSuggestion />}
            </Col>
          </Row>

          {suggestion[0].CurrentStepId === allSteps.developmentExpert ? (
            <Prioritize suggestion={suggestion[0]} />
          ) : suggestion[0].CurrentStepId === allSteps.evaluationStudies ? (
            <EvaluationStudies suggestion={suggestion[0]} />
          ) : suggestion[0].CurrentStepId === allSteps.developmentExpertHead ? (
            <Archive />
          ) : (
            ""
          )}

          <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
            تاریخچه اقدامات
          </span>
          {suggestion && (
            <Row gutter={24} className="mb-5">
              <Col md={24}>
                <HistoryOfActions suggestionId={suggestion[0].Id} />
              </Col>
            </Row>
          )}

          {/* <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
            مستندات تایید
          </span>
          <ConfirmationDocuments suggestionId={suggestion[0].Id} /> */}
        </>
      )}
    </>
  );
};

export default TaskContainer;
